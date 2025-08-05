'use client';
import React, { useState, useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { Calculator, DollarSign, TrendingUp, AlertTriangle, CheckCircle, X } from 'lucide-react';

interface EnhancedAssessmentCalculatorProps {
  onClose?: () => void;
}

interface FundingScenario {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  monthlyIncrease: number;
  specialAssessment: number;
  paybackMonths: number;
  pros: string[];
  cons: string[];
}

const EnhancedAssessmentCalculator: React.FC<EnhancedAssessmentCalculatorProps> = ({ onClose }) => {
  const [calculatorParams, setCalculatorParams] = useState({
    currentDeficit: 500000,
    totalUnits: 50,
    currentMonthlyContribution: 200,
    paybackMonths: 12,
  });

  const [selectedScenario, setSelectedScenario] = useState<string>('monthly');

  // 4 Funding Scenarios as requested by client
  const fundingScenarios: FundingScenario[] = [
    {
      id: 'monthly',
      name: 'Monthly Increase',
      description: 'Gradual monthly contribution increase',
      icon: '📈',
      color: 'from-blue-600 to-blue-700',
      monthlyIncrease: 660,
      specialAssessment: 0,
      paybackMonths: 12,
      pros: ['No immediate financial burden', 'Predictable cash flow', 'Owner-friendly approach'],
      cons: ['Takes longer to recover', 'May not address urgent needs'],
    },
    {
      id: 'special',
      name: 'Special Assessment',
      description: 'One-time assessment payment',
      icon: '💰',
      color: 'from-purple-600 to-purple-700',
      monthlyIncrease: 0,
      specialAssessment: 10000,
      paybackMonths: 1,
      pros: ['Immediate funding', 'Quick recovery', 'No ongoing burden'],
      cons: ['High immediate cost', 'Owner resistance', 'Collection challenges'],
    },
    {
      id: 'hybrid',
      name: 'Hybrid Approach',
      description: 'Combination of monthly increase and small assessment',
      icon: '⚖️',
      color: 'from-green-600 to-green-700',
      monthlyIncrease: 330,
      specialAssessment: 5000,
      paybackMonths: 6,
      pros: ['Balanced approach', 'Reduces immediate burden', 'Faster recovery than monthly only'],
      cons: ['Still requires upfront payment', 'More complex to implement'],
    },
    {
      id: 'crisis',
      name: 'Crisis Response',
      description: 'Maximum funding for emergency situations',
      icon: '🚨',
      color: 'from-red-600 to-red-700',
      monthlyIncrease: 1000,
      specialAssessment: 15000,
      paybackMonths: 3,
      pros: ['Maximum funding speed', 'Addresses critical needs', 'Comprehensive solution'],
      cons: ['High financial impact', 'Significant owner resistance', 'Risk of non-payment'],
    },
  ];

  // Calculate all scenarios
  const scenarioCalculations = useMemo(() => {
    const { currentDeficit, totalUnits, currentMonthlyContribution } = calculatorParams;

    return fundingScenarios.map((scenario) => {
      const monthlyIncreasePerUnit = scenario.monthlyIncrease / totalUnits;
      const specialAssessmentPerUnit = scenario.specialAssessment;
      const totalMonthlyIncrease = monthlyIncreasePerUnit * totalUnits;
      const totalSpecialAssessment = specialAssessmentPerUnit * totalUnits;

      // Calculate payback timeline
      const monthlyFunding = totalMonthlyIncrease * scenario.paybackMonths;
      const totalFunding = monthlyFunding + totalSpecialAssessment;
      const remainingDeficit = Math.max(0, currentDeficit - totalFunding);

      // Generate timeline data
      const timelineData = Array.from({ length: scenario.paybackMonths }, (_, i) => {
        const month = i + 1;
        const cumulativeMonthly = totalMonthlyIncrease * month;
        const specialPaid = month === 1 ? totalSpecialAssessment : 0;
        const totalPaid = cumulativeMonthly + specialPaid;
        const remaining = Math.max(0, currentDeficit - totalPaid);

        return {
          month,
          cumulativeMonthly,
          specialAssessment: specialPaid,
          totalPaid,
          remaining,
          monthlyPayment: currentMonthlyContribution + monthlyIncreasePerUnit,
        };
      });

      return {
        ...scenario,
        calculations: {
          monthlyIncreasePerUnit,
          specialAssessmentPerUnit,
          totalMonthlyIncrease,
          totalSpecialAssessment,
          totalFunding,
          remainingDeficit,
          paybackComplete: totalFunding >= currentDeficit,
          timelineData,
        },
      };
    });
  }, [calculatorParams, fundingScenarios]);

  const selectedScenarioData = scenarioCalculations.find((s) => s.id === selectedScenario);

  const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'];

  return (
    <div className="w-full">
      <p className="text-gray-600 mb-6">
        Compare four funding strategies to address your reserve fund deficit. Each approach has different implications
        for owners and timeline.
      </p>

      {/* Input Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Reserve Deficit</label>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">$100k</span>
            <input
              type="range"
              min="100000"
              max="2000000"
              step="50000"
              value={calculatorParams.currentDeficit}
              onChange={(e) =>
                setCalculatorParams((prev) => ({
                  ...prev,
                  currentDeficit: parseInt(e.target.value),
                }))
              }
              className="flex-1"
            />
            <span className="text-sm text-gray-500">$2M</span>
          </div>
          <div className="text-center mt-1">
            <span className="text-lg font-bold text-blue-600">
              ${(calculatorParams.currentDeficit / 1000).toFixed(0)}k
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Total Units</label>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">10</span>
            <input
              type="range"
              min="10"
              max="500"
              step="5"
              value={calculatorParams.totalUnits}
              onChange={(e) =>
                setCalculatorParams((prev) => ({
                  ...prev,
                  totalUnits: parseInt(e.target.value),
                }))
              }
              className="flex-1"
            />
            <span className="text-sm text-gray-500">500</span>
          </div>
          <div className="text-center mt-1">
            <span className="text-lg font-bold text-green-600">{calculatorParams.totalUnits}</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Monthly Fee</label>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">$100</span>
            <input
              type="range"
              min="100"
              max="1000"
              step="25"
              value={calculatorParams.currentMonthlyContribution}
              onChange={(e) =>
                setCalculatorParams((prev) => ({
                  ...prev,
                  currentMonthlyContribution: parseInt(e.target.value),
                }))
              }
              className="flex-1"
            />
            <span className="text-sm text-gray-500">$1000</span>
          </div>
          <div className="text-center mt-1">
            <span className="text-lg font-bold text-purple-600">${calculatorParams.currentMonthlyContribution}</span>
          </div>
        </div>
      </div>

      {/* Scenario Selection */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Select Funding Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scenarioCalculations.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario.id)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedScenario === scenario.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">{scenario.icon}</span>
                <h4 className="font-semibold text-gray-900">{scenario.name}</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>

              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Monthly Increase:</span>
                  <span className="font-medium">${scenario.calculations.monthlyIncreasePerUnit.toFixed(0)}/unit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Special Assessment:</span>
                  <span className="font-medium">
                    ${scenario.calculations.specialAssessmentPerUnit.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Payback:</span>
                  <span className="font-medium">{scenario.paybackMonths} months</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Scenario Details */}
      {selectedScenarioData && (
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  ${selectedScenarioData.calculations.monthlyIncreasePerUnit.toFixed(0)}
                </div>
                <div className="text-sm text-blue-600">Monthly Increase/Unit</div>
              </div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  ${selectedScenarioData.calculations.specialAssessmentPerUnit.toLocaleString()}
                </div>
                <div className="text-sm text-purple-600">Special Assessment/Unit</div>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  ${selectedScenarioData.calculations.totalFunding.toLocaleString()}
                </div>
                <div className="text-sm text-green-600">Total Funding</div>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">
                  {selectedScenarioData.calculations.paybackComplete ? 'Complete' : 'Incomplete'}
                </div>
                <div className="text-sm text-orange-600">Payback Status</div>
              </div>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          {/* Timeline Chart */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 overflow-x-auto scrollbar-thin">
            <h4 className="font-semibold text-gray-900 mb-4">Funding Timeline</h4>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={selectedScenarioData.calculations.timelineData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="totalPaid" stroke="#3b82f6" strokeWidth={2} name="Total Paid" />
                <Line type="monotone" dataKey="remaining" stroke="#ef4444" strokeWidth={2} name="Remaining Deficit" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recommendation */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Recommendation</h4>
            <p className="text-blue-800">
              {selectedScenarioData.calculations.paybackComplete
                ? `The ${selectedScenarioData.name} approach will fully address your reserve fund deficit within ${selectedScenarioData.paybackMonths} months.`
                : `The ${selectedScenarioData.name} approach will provide ${((selectedScenarioData.calculations.totalFunding / calculatorParams.currentDeficit) * 100).toFixed(0)}% of the required funding. Consider combining with additional strategies.`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedAssessmentCalculator;
