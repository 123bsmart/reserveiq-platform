type CrisisTimelineItemProps = {
  colorClass: string;
  title: string;
  subtitle: string;
};

const CrisisTimelineItem: React.FC<CrisisTimelineItemProps> = ({ colorClass, title, subtitle }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className={`w-3 h-3 rounded-full ${colorClass}`}></div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-xs text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
};

export default CrisisTimelineItem;
