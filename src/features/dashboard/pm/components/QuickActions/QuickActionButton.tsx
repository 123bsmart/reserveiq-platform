type QuickActionButtonProps = {
  title: string;
  description: string;
  borderColor: string;
  hoverBg: string;
  iconColor: string;
  svg: React.ReactNode;
};

const QuickActionButton: React.FC<QuickActionButtonProps> = ({
  title,
  description,
  borderColor,
  hoverBg,
  iconColor,
  svg,
}) => {
  return (
    <button className={`p-4 border-2 border-dashed rounded-lg transition-colors ${borderColor} ${hoverBg}`}>
      <div className="text-center">
        <svg className={`w-8 h-8 mx-auto mb-2 ${iconColor}`} fill="currentColor" viewBox="0 0 20 20">
          {svg}
        </svg>
        <p className="font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>
    </button>
  );
};

export default QuickActionButton;
