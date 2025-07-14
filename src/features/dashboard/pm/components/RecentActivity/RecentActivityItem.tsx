type Props = {
  dotColor: string;
  title: string;
  time: string;
  tag: string;
  tagColor: string;
};

const RecentActivityItem: React.FC<Props> = ({ dotColor, title, time, tag, tagColor }) => {
  return (
    <div className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
      <div className={`w-2 h-2 rounded-full ${dotColor}`} />
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
      <span className={`text-xs text-white px-2 py-1 rounded ${tagColor}`}>{tag}</span>
    </div>
  );
};

export default RecentActivityItem;
