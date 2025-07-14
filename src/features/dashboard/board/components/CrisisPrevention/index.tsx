import CrisisTimelineItem from './CrisisTimelineItem';
import QuickActionButton from './QuickActionButton';

const CrisisPrevention: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Crisis Prevention Center</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Crisis Timeline */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-4">Crisis Prediction Timeline</h4>
          <div className="space-y-3">
            <CrisisTimelineItem
              colorClass="bg-red-500"
              title="Q2 2026: Roof Replacement Crisis"
              subtitle="$85,000 shortfall predicted"
            />
            <CrisisTimelineItem
              colorClass="bg-yellow-500"
              title="Q4 2027: HVAC System Warning"
              subtitle="$45,000 potential shortfall"
            />
            <CrisisTimelineItem
              colorClass="bg-green-500"
              title="Q1 2029: Elevator Maintenance"
              subtitle="Fully funded"
            />
          </div>
        </div>

        {/* Reserve Fund Forecast */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-4">Reserve Fund Forecast</h4>
          <div className="h-32 bg-white rounded border p-4 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-8 h-8 text-gray-400 mx-auto mb-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 001.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-sm text-gray-500">Interactive forecast chart</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <QuickActionButton
          bgClass="bg-red-50"
          borderClass="border border-red-200"
          hoverClass="hover:bg-red-100"
          icon={
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
          }
          title="Early Warning System"
          titleClass="text-red-800"
        />

        <QuickActionButton
          bgClass="bg-blue-50"
          borderClass="border border-blue-200"
          hoverClass="hover:bg-blue-100"
          icon={
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          title="Assessment Calculator"
          subtitle="Compare funding options"
          titleClass="text-blue-800"
          subtitleClass="text-blue-600"
        />

        <QuickActionButton
          bgClass="bg-green-50"
          borderClass="border border-green-200"
          hoverClass="hover:bg-green-100"
          icon={
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clipRule="evenodd"
              />
            </svg>
          }
          title="Generate Board Report"
          subtitle="Professional presentations"
          titleClass="text-green-800"
          subtitleClass="text-green-600"
        />

        <QuickActionButton
          bgClass="bg-purple-50"
          borderClass="border border-purple-200"
          hoverClass="hover:bg-purple-100"
          icon={
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          }
          title="Upload Documents"
          subtitle="Reserve studies, budgets"
          titleClass="text-purple-800"
          subtitleClass="text-purple-600"
        />
      </div>
    </div>
  );
};

export default CrisisPrevention;
