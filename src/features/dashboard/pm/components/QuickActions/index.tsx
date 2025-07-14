import QuickActionButton from './QuickActionButton';

const quickActionsData = [
  {
    title: 'Generate Email Template',
    description: '30-second professional emails',
    borderColor: 'border-background-dark',
    hoverBg: 'hover:bg-background-dark hover:bg-opacity-5',
    iconColor: 'text-background-dark',
    svg: (
      <>
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </>
    ),
  },
  {
    title: 'Upload Document',
    description: 'AI analysis for reserve studies',
    borderColor: 'border-gray-300',
    hoverBg: 'hover:bg-gray-50',
    iconColor: 'text-gray-400',
    svg: (
      <path
        fillRule="evenodd"
        d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
      />
    ),
  },
  {
    title: 'Assessment Calculator',
    description: 'Compare funding scenarios',
    borderColor: 'border-gray-300',
    hoverBg: 'hover:bg-gray-50',
    iconColor: 'text-gray-400',
    svg: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
  },
  {
    title: 'Create Board Report',
    description: 'Professional presentations',
    borderColor: 'border-gray-300',
    hoverBg: 'hover:bg-gray-50',
    iconColor: 'text-gray-400',
    svg: (
      <path
        fillRule="evenodd"
        d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
      />
    ),
  },
];

const QuickActions: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {quickActionsData.map((item, idx) => (
          <QuickActionButton key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
