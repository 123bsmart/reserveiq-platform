'use client';
import React, { useState } from 'react';
import { Eye, CheckCircle, XCircle, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface ScenarioReviewProps {
  onClose?: () => void;
}

interface Scenario {
  id: string;
  name: string;
  createdBy: string;
  createdAt: Date;
  status: 'pending' | 'approved' | 'rejected' | 'discussion';
  type: 'monthly' | 'special' | 'hybrid' | 'crisis';
  monthlyIncrease: number;
  specialAssessment: number;
  paybackMonths: number;
  totalFunding: number;
  recommendation: string;
  pros: string[];
  cons: string[];
}

const ScenarioReview: React.FC<ScenarioReviewProps> = ({ onClose }) => {
  const [selectedScenario, setSelectedScenario] = useState<string>('');
  const [showDetails, setShowDetails] = useState(false);

  // Mock data for demo
  const scenarios: Scenario[] = [
    {
      id: '1',
      name: 'Pinewood Towers - Monthly Increase Strategy',
      createdBy: 'Property Manager',
      createdAt: new Date('2024-01-15'),
      status: 'pending',
      type: 'monthly',
      monthlyIncrease: 55,
      specialAssessment: 0,
      paybackMonths: 18,
      totalFunding: 500000,
      recommendation: 'Recommended approach for minimal owner impact',
      pros: ['No immediate financial burden', 'Predictable cash flow', 'Owner-friendly'],
      cons: ['Takes longer to recover', 'May not address urgent needs'],
    },
    {
      id: '2',
      name: 'Pinewood Towers - Hybrid Approach',
      createdBy: 'Property Manager',
      createdAt: new Date('2024-01-14'),
      status: 'discussion',
      type: 'hybrid',
      monthlyIncrease: 30,
      specialAssessment: 2500,
      paybackMonths: 12,
      totalFunding: 500000,
      recommendation: 'Balanced approach for faster recovery',
      pros: ['Balanced approach', 'Reduces immediate burden', 'Faster recovery'],
      cons: ['Still requires upfront payment', 'More complex to implement'],
    },
    {
      id: '3',
      name: 'Pinewood Towers - Crisis Response',
      createdBy: 'Property Manager',
      createdAt: new Date('2024-01-13'),
      status: 'rejected',
      type: 'crisis',
      monthlyIncrease: 100,
      specialAssessment: 5000,
      paybackMonths: 6,
      totalFunding: 500000,
      recommendation: 'Maximum funding for emergency situations',
      pros: ['Maximum funding speed', 'Addresses critical needs'],
      cons: ['High financial impact', 'Significant owner resistance'],
    },
  ];

  const getStatusIcon = (status: string): React.ReactNode => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-500" />;
      case 'discussion':
        return <AlertTriangle className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'pending':
        return 'Pending Review';
      case 'approved':
        return 'Approved';
      case 'rejected':
        return 'Rejected';
      case 'discussion':
        return 'Under Discussion';
      default:
        return '';
    }
  };

  const getTypeIcon = (type: string): string => {
    switch (type) {
      case 'monthly':
        return '📈';
      case 'special':
        return '💰';
      case 'hybrid':
        return '⚖️';
      case 'crisis':
        return '🚨';
      default:
        return '📊';
    }
  };

  //   const getTypeColor = (type: string) => {
  //     switch (type) {
  //       case 'monthly':
  //         return 'bg-blue-100 text-blue-800';
  //       case 'special':
  //         return 'bg-purple-100 text-purple-800';
  //       case 'hybrid':
  //         return 'bg-green-100 text-green-800';
  //       case 'crisis':
  //         return 'bg-red-100 text-red-800';
  //       default:
  //         return 'bg-gray-100 text-gray-800';
  //     }
  //   };

  const viewScenario = (scenarioId: string): void => {
    setSelectedScenario(scenarioId);
    setShowDetails(true);
  };

  const selectedScenarioData = scenarios.find((s) => s.id === selectedScenario);

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">📊 Scenario Review</h2>
      </div>

      <p className="text-gray-600 mb-6">
        Review funding scenarios prepared by your Property Manager. Make informed decisions about reserve fund
        strategies.
      </p>

      {/* Scenarios List */}
      <div className="space-y-4 mb-8">
        {scenarios.map((scenario) => (
          <div key={scenario.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{getTypeIcon(scenario.type)}</span>
                  <h3 className="font-semibold text-gray-900">{scenario.name}</h3>
                  <div className="flex items-center space-x-1">
                    {getStatusIcon(scenario.status)}
                    <span className="text-sm text-gray-600">{getStatusText(scenario.status)}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500">Monthly Increase</p>
                    <p className="font-medium text-gray-900">${scenario.monthlyIncrease}/unit</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Special Assessment</p>
                    <p className="font-medium text-gray-900">${scenario.specialAssessment.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payback Period</p>
                    <p className="font-medium text-gray-900">{scenario.paybackMonths} months</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Total Funding</p>
                    <p className="font-medium text-gray-900">${scenario.totalFunding.toLocaleString()}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <span>Prepared by {scenario.createdBy}</span>
                  <span>•</span>
                  <span>{scenario.createdAt.toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => viewScenario(scenario.id)}
                  className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>Review</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scenario Details */}
      {showDetails && selectedScenarioData && (
        <div className="border-t pt-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{selectedScenarioData.name}</h3>
            <button
              onClick={() => {
                setShowDetails(false);
                onClose?.();
              }}
              className="text-gray-500 hover:text-gray-700"
            >
              Close Details
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Recommendation */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-3">💡 PM Recommendation</h4>
              <p className="text-blue-700">{selectedScenarioData.recommendation}</p>
            </div>

            {/* Financial Summary */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3">💰 Financial Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-green-700">Monthly Increase:</span>
                  <span className="font-medium">${selectedScenarioData.monthlyIncrease}/unit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Special Assessment:</span>
                  <span className="font-medium">${selectedScenarioData.specialAssessment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Total Funding:</span>
                  <span className="font-medium">${selectedScenarioData.totalFunding.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Payback Period:</span>
                  <span className="font-medium">{selectedScenarioData.paybackMonths} months</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Advantages
              </h4>
              <ul className="space-y-2">
                {selectedScenarioData.pros.map((pro, index) => (
                  <li key={index} className="text-sm text-green-700 flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Challenges
              </h4>
              <ul className="space-y-2">
                {selectedScenarioData.cons.map((con, index) => (
                  <li key={index} className="text-sm text-red-700 flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Board Decision */}
          <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4">Board Decision</h4>
            <div className="flex items-center space-x-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                ✅ Approve
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                ❌ Reject
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                💬 Request Discussion
              </button>
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                📅 Schedule Meeting
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="text-center">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Eye className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-medium text-gray-900">Review Scenarios</h3>
          <p className="text-sm text-gray-600">Examine PM-prepared funding strategies</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="font-medium text-gray-900">Make Decisions</h3>
          <p className="text-sm text-gray-600">Approve, reject, or request changes</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <TrendingUp className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="font-medium text-gray-900">Track Progress</h3>
          <p className="text-sm text-gray-600">Monitor scenario status and decisions</p>
        </div>
      </div>
    </div>
  );
};

export default ScenarioReview;
