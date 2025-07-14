import { cn } from '@/shared/utils';
import Alert from './Alert';

const alertsData = [
  {
    type: 'red',
    title: 'Maple Heights Condo',
    status: 'URGENT',
    description: 'Reserve fund shortfall: $85K needed by Q2 2026',
    actionText: 'View Details',
  },
  {
    type: 'yellow',
    title: 'Sunset Towers',
    status: 'WARNING',
    description: 'Roof maintenance due within 12 months',
    actionText: 'Schedule Assessment',
  },
  {
    type: 'green',
    title: 'Ocean View Residences',
    status: 'GOOD',
    description: 'Reserve fund healthy, all compliance up to date',
    actionText: 'View Report',
  },
  {
    type: 'yellow',
    title: 'Riverfront Plaza',
    status: 'WARNING',
    description: 'Compliance deadline approaching: AGM notice required',
    actionText: 'Send Notice',
  },
  {
    type: 'green',
    title: 'Downtown Heights',
    status: 'GOOD',
    description: 'All systems operational, budget on track',
    actionText: 'View Dashboard',
  },
];

const BuildingAlerts: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cn('w-80 bg-white shadow-sm border-l p-6', className)}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Building Alerts</h3>
      <div className="space-y-4">
        {alertsData.map((alert, idx) => (
          <Alert
            key={idx}
            type={alert.type as 'red' | 'yellow' | 'green'}
            title={alert.title}
            status={alert.status}
            description={alert.description}
            actionText={alert.actionText}
          />
        ))}
      </div>

      <button className="w-full mt-6 bg-background-dark text-white py-2 px-4 rounded-lg hover:bg-blue-800 transition-colors">
        View All Buildings
      </button>
    </div>
  );
};

export default BuildingAlerts;
