import DonutProgressCard from './DonutProgressCard';
import InfoCard from './InfoCard';

const BuildingHealthCards: React.FC = () => {
  return (
    //
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4  gap-6">
      <DonutProgressCard
        title="Reserve Health Score"
        score={68}
        scoreLabel="68/100"
        colorClass="text-red-600"
        textColorClass="text-red-600"
      />
      <DonutProgressCard
        title="Compliance Status"
        score={85}
        scoreLabel="85%"
        colorClass="text-yellow-600"
        textColorClass="text-yellow-600"
      />
      <InfoCard
        icon={
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        }
        iconBgClass="bg-red-100"
        iconColorClass="text-red-600"
        title="Next Crisis Risk"
        value="18 months"
        valueTextClass="text-red-600"
        subtitle="Roof replacement"
      />
      <InfoCard
        icon={
          <svg fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
            <path
              fillRule="evenodd"
              d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
              clipRule="evenodd"
            />
          </svg>
        }
        iconBgClass="bg-green bg-opacity-10"
        iconColorClass="text-green"
        title="Emergency Fund"
        value="$243,500"
        valueTextClass="text-gray-900"
        subtitle="67% of target"
      />
    </div>
  );
};

export default BuildingHealthCards;
