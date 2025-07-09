const recentActivities = [
  {
    title: 'Board Report Generated',
    description: 'Q2 Financial Summary',
    time: '2 hours ago',
  },
  {
    title: 'Assessment Calculated',
    description: 'Roof replacement scenarios',
    time: '1 day ago',
  },
  {
    title: 'Owner Notice Sent',
    description: 'AGM announcement',
    time: '3 days ago',
  },
];

const RecentBoardActivity: React.FC = () => (
  <div className="border rounded-lg p-4">
    <h4 className="font-medium text-gray-900 mb-3">Recent Activity</h4>
    <div className="space-y-3">
      {recentActivities.map(({ title, description, time }) => (
        <div key={title} className="text-sm">
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-gray-500 text-xs">{description}</p>
          <p className="text-gray-400 text-xs">{time}</p>
        </div>
      ))}
    </div>
  </div>
);

export default RecentBoardActivity;
