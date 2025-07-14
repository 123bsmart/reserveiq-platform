import OverviewCard from './OverviewCard';

const overviewData = [
  {
    title: 'Buildings Managed',
    value: '24',
    iconColor: 'text-background-dark',
    bgColor: 'bg-background-dark bg-opacity-10',
    svgPath: (
      <>
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </>
    ),
  },
  {
    title: 'Active Alerts',
    value: '7',
    iconColor: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    svgPath: (
      <>
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
        />
      </>
    ),
  },
  {
    title: 'Monthly Revenue',
    value: '$24,500',
    iconColor: 'text-green',
    bgColor: 'bg-green bg-opacity-10',
    svgPath: (
      <>
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path
          fillRule="evenodd"
          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
        />
      </>
    ),
  },
  {
    title: 'Partner Commissions',
    value: '$2,850',
    iconColor: 'text-purple-600',
    bgColor: 'bg-purple-100',
    svgPath: (
      <>
        <path
          fillRule="evenodd"
          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        />
      </>
    ),
  },
];

const PortfolioOverview: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-between gap-y-3">
      {overviewData.map((card, index) => (
        <OverviewCard key={index} {...card} />
      ))}
    </div>
  );
};

export default PortfolioOverview;
