const complianceEvents = [
  { label: 'AGM Notice', date: 'Jul 13', color: 'text-red-600' },
  { label: 'Budget Approval', date: 'Aug 15', color: 'text-yellow-600' },
  { label: 'Insurance Review', date: 'Complete', color: 'text-green-600' },
];

const ComplianceCalendar: React.FC = () => (
  <div className="border rounded-lg p-4 mb-6">
    <h4 className="font-medium text-gray-900 mb-3">Compliance Calendar</h4>
    <div className="space-y-2">
      {complianceEvents.map(({ label, date, color }) => (
        <div key={label} className="flex items-center justify-between text-sm">
          <span className="text-gray-600">{label}</span>
          <span className={`${color} font-medium`}>{date}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ComplianceCalendar;
