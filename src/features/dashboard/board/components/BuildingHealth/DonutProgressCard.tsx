type DonutProgressCardProps = {
  title: string;
  score: number; // 0-100
  scoreLabel: string;
  colorClass: string;
  textColorClass: string;
};

const DonutProgressCard: React.FC<DonutProgressCardProps> = ({
  title,
  score,
  scoreLabel,
  colorClass,
  textColorClass,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border flex justify-center items-center">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className={`text-xl 2xl:text-2xl font-bold ${textColorClass}`}>{scoreLabel}</p>
      </div>
      <div className="w-14 h-14 2xl:w-16 2xl:h-16 relative">
        <svg className="w-14 h-14 2xl:w-16 2xl:h-16  transform -rotate-90" viewBox="0 0 36 36">
          <path
            className="stroke-current text-gray-300"
            strokeWidth="2"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className={`stroke-current ${colorClass}`}
            strokeWidth="2"
            strokeDasharray={`${score}, 100`}
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-xs font-semibold ${textColorClass}`}>{score}%</span>
        </div>
      </div>
    </div>
  );
};

export default DonutProgressCard;
