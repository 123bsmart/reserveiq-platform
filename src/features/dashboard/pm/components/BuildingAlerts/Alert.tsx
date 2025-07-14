type AlertProps = {
  type: 'red' | 'yellow' | 'green';
  title: string;
  status: string;
  description: string;
  actionText: string;
};

const colorMap = {
  red: {
    border: 'border-red-500',
    bg: 'bg-red-50',
    text: 'text-red-800',
    labelBg: 'bg-red-100',
    desc: 'text-red-700',
    button: 'text-red-600 hover:text-red-800',
  },
  yellow: {
    border: 'border-yellow-500',
    bg: 'bg-yellow-50',
    text: 'text-yellow-800',
    labelBg: 'bg-yellow-100',
    desc: 'text-yellow-700',
    button: 'text-yellow-600 hover:text-yellow-800',
  },
  green: {
    border: 'border-green-500',
    bg: 'bg-green-50',
    text: 'text-green-800',
    labelBg: 'bg-green-100',
    desc: 'text-green-700',
    button: 'text-green-600 hover:text-green-800',
  },
};

const Alert: React.FC<AlertProps> = ({ type, title, status, description, actionText }) => {
  const colors = colorMap[type];

  return (
    <div className={`border-l-4 ${colors.border} ${colors.bg} p-4 rounded-r-lg`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className={`font-medium ${colors.text}`}>{title}</h4>
        <span className={`${colors.labelBg} ${colors.text} text-xs px-2 py-1 rounded`}>{status}</span>
      </div>
      <p className={`text-sm ${colors.desc}`}>{description}</p>
      <button className={`mt-2 text-xs font-medium ${colors.button}`}>{actionText} →</button>
    </div>
  );
};

export default Alert;
