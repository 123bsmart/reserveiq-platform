type OverviewCardProps = {
  title: string;
  value: string;
  iconColor: string;
  bgColor: string;
  svgPath: React.ReactNode;
};

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, iconColor, bgColor, svgPath }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center">
        <div className={`p-2 rounded-lg ${bgColor}`}>
          <svg className={`w-6 h-6 ${iconColor}`} fill="currentColor" viewBox="0 0 20 20">
            {svgPath}
          </svg>
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
