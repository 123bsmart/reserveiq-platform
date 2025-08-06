import { RoleEnum } from '@/shared/enum/auth.enum';
import { Bell, Search, Settings, LogOut } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import authApi from '@/shared/services/auth.api';
import { useRouter } from 'next/navigation';

type DashboardHeaderProps = {
  type: RoleEnum;
  onLeftMenuClick?: () => void;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ type, onLeftMenuClick }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
        setIsSettingsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async (): Promise<void> => {
    try {
      await authApi.logout();
      router.push('/auth');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button onClick={onLeftMenuClick} className="lg:hidden text-gray-600 hover:text-black">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-xl font-bold text-gray-900">ReserveIQ</span>
          </div>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">{type} Dashboard</span>
        </div>

        <div className="flex items-center space-x-4">
          {type === RoleEnum.PROPERTY_MANAGER ? (
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search buildings, documents..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ) : (
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Pinewood Towers</p>
              <p className="text-xs text-gray-500">156 Units • Built 1998</p>
            </div>
          )}

          <Bell className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />

          {/* Settings Dropdown */}
          <div className="relative" ref={settingsRef}>
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Settings className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </button>

            {isSettingsOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-3 px-4 py-2 text-left text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>

          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">{type === RoleEnum.PROPERTY_MANAGER ? 'PM' : 'BM'}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
