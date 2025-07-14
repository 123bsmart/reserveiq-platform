type OverviewCardProps = {
  title: string;
  value: string;
  iconColor: string;
  bgColor: string;
  svgPath: React.ReactNode;
};

const OverviewCard: React.FC<OverviewCardProps> = ({ title, value, iconColor, bgColor, svgPath }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border flex items-center justify-center w-[100%] xs:w-[calc(50%-10px)] md:w-[186px]">
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
  );
};

export default OverviewCard;
