import React from 'react';

const redAlerts = [
  {
    title: 'Reserve Fund Shortfall',
    description: '$85K needed for roof replacement by Q2 2026',
    buttonText: 'Act Now',
  },
  {
    title: 'Compliance Violation',
    description: 'AGM notice deadline in 5 days',
    buttonText: 'Send Notice',
  },
];

const yellowAlerts = [
  {
    title: 'Budget Review Due',
    description: 'Annual budget planning for 2026',
    buttonText: 'Schedule',
  },
  {
    title: 'Maintenance Window',
    description: 'HVAC inspection recommended',
    buttonText: 'Book Service',
  },
];

const greenAlerts = [
  {
    title: 'Elevator Maintenance',
    description: 'Fully funded and scheduled',
    buttonText: 'View Plan',
  },
  {
    title: 'Insurance Review',
    description: 'Policy renewed, coverage adequate',
    buttonText: 'View Policy',
  },
];

const PriorityAlerts: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Priority Alerts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Red Alerts */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-red-700 uppercase tracking-wide">Urgent Action Required</h4>
          {redAlerts.map(({ title, description, buttonText }, idx) => (
            <div key={idx} className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-sm font-medium text-red-800">{title}</p>
              <p className="text-xs text-red-600 mt-1">{description}</p>
              <button className="mt-2 text-xs bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">
                {buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Yellow Alerts */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-yellow-700 uppercase tracking-wide">Plan Ahead</h4>
          {yellowAlerts.map(({ title, description, buttonText }, idx) => (
            <div key={idx} className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-sm font-medium text-yellow-800">{title}</p>
              <p className="text-xs text-yellow-600 mt-1">{description}</p>
              <button className="mt-2 text-xs bg-yellow-600 text-white px-2 py-1 rounded hover:bg-yellow-700">
                {buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Green Alerts */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-green-700 uppercase tracking-wide">All Good</h4>
          {greenAlerts.map(({ title, description, buttonText }, idx) => (
            <div key={idx} className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-sm font-medium text-green-800">{title}</p>
              <p className="text-xs text-green-600 mt-1">{description}</p>
              <button className="mt-2 text-xs bg-green-600 text-white px-2 py-1 rounded hover:bg-green-700">
                {buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriorityAlerts;
