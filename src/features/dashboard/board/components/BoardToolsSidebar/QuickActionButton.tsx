type Props = {
  bgColor: string;
  textColor: string;
  hoverBg: string;
  title: string;
  subtitle?: string;
  iconPath: React.ReactNode;
};

const QuickActionButton: React.FC<Props> = ({ bgColor, textColor, hoverBg, title, subtitle, iconPath }) => (
  <button
    className={`w-full p-3 rounded-lg transition-colors text-left ${bgColor} ${textColor} ${hoverBg} flex items-center space-x-3`}
  >
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
      {iconPath}
    </svg>
    <div>
      <div className="font-medium">{title}</div>
      {subtitle && <div className="text-xs text-blue-200">{subtitle}</div>}
    </div>
  </button>
);

export default QuickActionButton;
