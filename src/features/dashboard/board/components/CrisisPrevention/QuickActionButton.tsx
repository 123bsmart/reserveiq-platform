import React from 'react';

type QuickActionButtonProps = {
  bgClass: string;
  borderClass: string;
  hoverClass: string;
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  titleClass: string;
  subtitleClass?: string;
};

const QuickActionButton: React.FC<QuickActionButtonProps> = ({
  bgClass,
  borderClass,
  hoverClass,
  icon,
  title,
  subtitle,
  titleClass,
  subtitleClass,
}) => {
  return (
    <button className={`p-4 ${bgClass} ${borderClass} rounded-lg ${hoverClass} transition-colors`}>
      <div className="text-center">
        {React.cloneElement(icon as React.ReactElement, { className: `w-6 h-6 mx-auto mb-2 ${titleClass}` })}
        <p className={`text-sm font-medium ${titleClass}`}>{title}</p>
        {subtitle && <p className={`text-xs mt-1 ${subtitleClass}`}>{subtitle}</p>}
      </div>
    </button>
  );
};

export default QuickActionButton;
