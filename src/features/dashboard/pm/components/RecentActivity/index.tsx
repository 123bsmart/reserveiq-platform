import RecentActivityItem from './RecentActivityItem';

const recentActivityData = [
  {
    dotColor: 'bg-green',
    title: 'Email template generated for Maple Heights',
    time: '2 minutes ago',
    tag: 'Email',
    tagColor: 'bg-green',
  },
  {
    dotColor: 'bg-blue-500',
    title: 'Reserve study analyzed for Sunset Towers',
    time: '15 minutes ago',
    tag: 'Document',
    tagColor: 'bg-blue-500',
  },
  {
    dotColor: 'bg-purple-500',
    title: 'Commission earned: $125 from Ocean View',
    time: '1 hour ago',
    tag: 'Revenue',
    tagColor: 'bg-purple-500',
  },
];

const RecentActivity: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {recentActivityData.map((item, index) => (
          <RecentActivityItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
