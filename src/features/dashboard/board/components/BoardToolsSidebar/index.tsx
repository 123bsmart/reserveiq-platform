import QuickActionButton from './QuickActionButton';
import ComplianceCalendar from './ComplianceCalendar';
import RecentBoardActivity from './RecentBoardActivity';
import { cn } from '@/shared/utils';

const quickActionsData = [
  {
    bgColor: 'bg-background-dark',
    textColor: 'text-white',
    hoverBg: 'hover:bg-blue-800',
    title: 'Upload Documents',
    subtitle: 'Reserve studies, budgets, reports',
    iconPath: (
      <>
        <path
          fillRule="evenodd"
          d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        />
      </>
    ),
  },
  {
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-700',
    hoverBg: 'hover:bg-gray-200',
    title: 'Generate Board Report',
    subtitle: '',
    iconPath: (
      <>
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
        />
      </>
    ),
  },
  {
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-700',
    hoverBg: 'hover:bg-gray-200',
    title: 'Meeting Presentations',
    subtitle: '',
    iconPath: (
      <>
        <path
          fillRule="evenodd"
          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        />
      </>
    ),
  },
  {
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-700',
    hoverBg: 'hover:bg-gray-200',
    title: 'Owner Communications',
    subtitle: '',
    iconPath: (
      <>
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </>
    ),
  },
];

const BoardToolsSidebar: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('w-80 bg-white shadow-sm border-l p-6', className)}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Board Tools</h3>

      <div className="space-y-3 mb-6">
        {quickActionsData.map(({ bgColor, textColor, hoverBg, title, subtitle, iconPath }) => (
          <QuickActionButton
            key={title}
            bgColor={bgColor}
            textColor={textColor}
            hoverBg={hoverBg}
            title={title}
            subtitle={subtitle}
            iconPath={iconPath}
          />
        ))}
      </div>

      <ComplianceCalendar />

      <RecentBoardActivity />
    </div>
  );
};

export default BoardToolsSidebar;
