import React from 'react';

type InfoCardProps = {
  icon: React.ReactNode;
  iconBgClass: string;
  iconColorClass: string;
  title: string;
  value: string | number;
  valueTextClass: string;
  subtitle?: string;
  subtitleClass?: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  iconBgClass,
  iconColorClass,
  title,
  value,
  valueTextClass,
  subtitle,
  subtitleClass = 'text-gray-500 text-xs',
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border flex justify-center items-center">
      <div className={`p-2 rounded-lg ${iconBgClass}`}>
        {React.cloneElement(icon as React.ReactElement, { className: `w-6 h-6 ${iconColorClass}` })}
      </div>
      <div className="ml-4">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className={`text-lg 2xl:text-xl font-bold ${valueTextClass}`}>{value}</p>
        {subtitle && <p className={subtitleClass}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default InfoCard;
