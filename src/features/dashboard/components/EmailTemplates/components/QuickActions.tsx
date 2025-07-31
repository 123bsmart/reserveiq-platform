import { Clock, CheckCircle, Brain } from 'lucide-react';

const QuickActions: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        🚀 Complete Communication Ecosystem
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center space-x-2 mb-2">
            <Clock className="h-4 w-4 text-green-600" />
            <span className="font-medium text-gray-900">Save 5-10 Hours/Week</span>
          </div>
          <p className="text-sm text-gray-600">
            Stop writing emails from scratch. Generate professional communications in 30 seconds.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center space-x-2 mb-2">
            <CheckCircle className="h-4 w-4 text-blue-600" />
            <span className="font-medium text-gray-900">PM + Board Templates</span>
          </div>
          <p className="text-sm text-gray-600">
            Complete ecosystem for all building communications – PM efficiency + board professionalism.
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center space-x-2 mb-2">
            <Brain className="h-4 w-4 text-purple-600" />
            <span className="font-medium text-gray-900">Smart Integration</span>
          </div>
          <p className="text-sm text-gray-600">
            Pulls live data from your building’s financial and compliance systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
