import { cn } from '@/shared/utils';
import { Calendar, DollarSign, FileText, TrendingUp, Upload, Mails } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';

type SidebarToolsProps = {
  className?: string;
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

const SidebarTools: React.FC<SidebarToolsProps> = ({ className, activeTab, setActiveTab }) => {
  return (
    <aside className={cn('w-64 bg-white border-r border-gray-200 min-h-screen', className)}>
      <nav className="p-4 space-y-2">
        <button
          onClick={() => setActiveTab('overview')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
            activeTab === 'overview' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <TrendingUp className="w-5 h-5" />
          <span>Overview</span>
        </button>

        <button
          onClick={() => setActiveTab('reserve-studies')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
            activeTab === 'reserve-studies' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <FileText className="w-5 h-5" />
          <span>Reserve Studies</span>
          <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Premium</span>
        </button>

        <button
          onClick={() => setActiveTab('documents')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
            activeTab === 'documents' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Upload className="w-5 h-5" />
          <span>Document Library</span>
        </button>

        <button
          onClick={() => setActiveTab('financial')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
            activeTab === 'financial' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <DollarSign className="w-5 h-5" />
          <span>Financial Health</span>
        </button>

        <button
          onClick={() => setActiveTab('compliance')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
            activeTab === 'compliance' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span>Compliance Tracker</span>
        </button>
        <button
          onClick={() => setActiveTab('email-templates')}
          className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
            activeTab === 'email-templates' ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Mails className="w-5 h-5" />
          <span>Email Generator</span>
        </button>
      </nav>
    </aside>
  );
};

export default SidebarTools;
