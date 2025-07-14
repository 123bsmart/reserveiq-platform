type DashboardHeaderProps = {
  title: string;
  fullName: string;
  onLeftMenuClick?: () => void;
  onRightMenuClick?: () => void;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, fullName, onLeftMenuClick, onRightMenuClick }) => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button onClick={onLeftMenuClick} className="lg:hidden text-gray-600 hover:text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="text-2xl font-bold text-background-dark">ReserveIQ</div>
            <div className="text-sm text-gray-500">{title}</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600 hidden sm:block">Welcome back, {fullName}</div>
            <div className="w-8 h-8 bg-background-dark rounded-full flex items-center justify-center text-white font-semibold shrink-0 aspect-square">
              SJ
            </div>
            <button onClick={onRightMenuClick} className="lg:hidden text-gray-600 hover:text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
