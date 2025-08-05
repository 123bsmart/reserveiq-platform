'use client';
import React, { useState, useEffect, useMemo } from 'react';
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
} from 'recharts';

// Interactive Scenario Planning Component
const InteractiveScenarioPlanner = ({ baselineAnalysis, onScenarioChange }: any) => {
  // Add comprehensive null checks and debugging info
  console.log('baselineAnalysis', baselineAnalysis);
  if (!baselineAnalysis) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center py-8">
          <div className="text-4xl mb-4">⚠️</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No Analysis Data</h3>
          <p className="text-gray-600 mb-4">Scenario planner requires baseline analysis data to function.</p>
          <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded">
            Expected: baselineAnalysis with fundingStatus and upcomingExpenses
          </div>
        </div>
      </div>
    );
  }

  if (!baselineAnalysis.fundingStatus) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center py-8">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Incomplete Analysis Data</h3>
          <p className="text-gray-600 mb-4">Missing funding status information required for scenario planning.</p>
          <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded">
            Available data: {Object.keys(baselineAnalysis).join(', ')}
          </div>
        </div>
      </div>
    );
  }

  const [activeScenario, setActiveScenario] = useState('baseline');
  const [scenarioParams, setScenarioParams] = useState({
    monthlyIncrease: 0,
    inflationRate: 3.0,
    interestRate: 2.0,
    timeframe: 10,
    deferCritical: false,
    emergencyFund: 0,
  });

  const [showComparison, setShowComparison] = useState(false);
  const [savedScenarios, setSavedScenarios] = useState([]);

  // Predefined scenario templates
  const scenarioTemplates = {
    conservative: {
      name: '🛡️ Conservative',
      description: 'Minimal risk, gradual funding increases',
      params: { monthlyIncrease: 50, inflationRate: 3.5, interestRate: 1.5, emergencyFund: 25000 },
    },
    balanced: {
      name: '⚖️ Balanced',
      description: 'Moderate increases, balanced approach',
      params: { monthlyIncrease: 100, inflationRate: 3.0, interestRate: 2.0, emergencyFund: 50000 },
    },
    aggressive: {
      name: '🚀 Aggressive',
      description: 'Higher contributions, faster recovery',
      params: { monthlyIncrease: 200, inflationRate: 2.5, interestRate: 2.5, emergencyFund: 75000 },
    },
    emergency: {
      name: '🚨 Emergency',
      description: 'Crisis mode, maximum funding',
      params: { monthlyIncrease: 300, inflationRate: 4.0, interestRate: 1.0, emergencyFund: 100000 },
    },
  };

  // Calculate the financial impact - moved before useMemo
  const calculateProjections = (baseline, params) => {
    // Add safe access with defaults
    const currentBalance = baseline?.fundingStatus?.currentReserve || 0;
    const targetReserve = baseline?.fundingStatus?.targetReserve || 0;
    const monthlyContribution = baseline?.fundingStatus?.monthlyContribution || 0;
    const upcomingExpenses = baseline?.upcomingExpenses || [];

    const years = Array.from({ length: params.timeframe }, (_, i) => {
      const year = new Date().getFullYear() + i;
      const annualIncrease = params.monthlyIncrease * 12;
      const baseContribution = monthlyContribution * 12;

      // Calculate projected balance with new parameters
      const totalContribution = baseContribution + annualIncrease * i;
      const inflationFactor = Math.pow(1 + params.inflationRate / 100, i);
      const interestEarned = currentBalance * (params.interestRate / 100) * i;

      // Estimate annual expenses
      const annualExpenses = upcomingExpenses
        .filter((expense) => expense.year === year)
        .reduce((sum, expense) => sum + (expense.cost || 0), 0);

      const projectedBalance = Math.max(
        0,
        currentBalance +
          totalContribution * i +
          interestEarned -
          annualExpenses * inflationFactor +
          (i === 0 ? params.emergencyFund : 0)
      );

      return {
        year,
        balance: projectedBalance,
        contribution: totalContribution,
        expenses: annualExpenses * inflationFactor,
        target: targetReserve * inflationFactor,
        baseline: currentBalance + monthlyContribution * 12 * i,
      };
    });

    return years;
  };

  // Calculate projections based on current parameters
  const projectedData = useMemo(() => {
    return calculateProjections(baselineAnalysis, scenarioParams);
  }, [baselineAnalysis, scenarioParams]);

  // Calculate scenario impact summary - moved before usage
  const getScenarioImpact = () => {
    if (!projectedData || projectedData.length === 0) {
      return {
        finalBalance: 0,
        totalContributions: 0,
        totalExpenses: 0,
        averageBalance: 0,
        shortfallYears: 0,
        specialAssessmentRisk: 'Unknown',
      };
    }

    const finalBalance = projectedData[projectedData.length - 1]?.balance || 0;
    const totalContributions = projectedData.reduce((sum, year) => sum + (year.contribution || 0), 0);
    const totalExpenses = projectedData.reduce((sum, year) => sum + (year.expenses || 0), 0);
    const averageBalance = projectedData.reduce((sum, year) => sum + (year.balance || 0), 0) / projectedData.length;
    const targetReserve = baselineAnalysis?.fundingStatus?.targetReserve || 0;

    return {
      finalBalance,
      totalContributions,
      totalExpenses,
      averageBalance,
      shortfallYears: projectedData.filter((year) => (year.balance || 0) < (year.target || 0) * 0.8).length,
      specialAssessmentRisk: finalBalance < targetReserve ? 'High' : 'Low',
    };
  };

  const scenarioImpact = getScenarioImpact();

  // Apply scenario template
  const applyTemplate = (templateKey) => {
    const template = scenarioTemplates[templateKey];
    setScenarioParams((prev) => ({ ...prev, ...template.params }));
    setActiveScenario(templateKey);
  };

  // Save current scenario
  const saveScenario = () => {
    const scenarioName = prompt('Enter a name for this scenario:');
    if (scenarioName) {
      const newScenario = {
        id: Date.now(),
        name: scenarioName,
        params: { ...scenarioParams },
        projectedData: [...projectedData],
        createdAt: new Date().toISOString(),
      };
      setSavedScenarios((prev) => [...prev, newScenario]);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">📊 Scenario Planning Tool</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200"
            >
              {showComparison ? 'Hide' : 'Show'} Comparison
            </button>
            <button
              onClick={saveScenario}
              className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200"
            >
              💾 Save Scenario
            </button>
          </div>
        </div>

        <p className="text-gray-600">
          Adjust parameters below to model different funding strategies and see their impact on your reserve fund.
        </p>
      </div>

      {/* Scenario Templates */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Quick Scenarios</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {Object.entries(scenarioTemplates).map(([key, template]) => (
            <button
              key={key}
              onClick={() => applyTemplate(key)}
              className={`p-3 rounded-lg border text-left transition-all ${
                activeScenario === key
                  ? 'border-blue-500 bg-blue-50 text-blue-900'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="font-medium text-sm">{template.name}</div>
              <div className="text-xs text-gray-600 mt-1">{template.description}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Parameter Controls */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Adjust Parameters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Monthly Increase */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Increase per Unit</label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">$0</span>
              <input
                type="range"
                min="0"
                max="500"
                step="25"
                value={scenarioParams.monthlyIncrease}
                onChange={(e) =>
                  setScenarioParams((prev) => ({
                    ...prev,
                    monthlyIncrease: parseInt(e.target.value),
                  }))
                }
                className="flex-1"
              />
              <span className="text-sm text-gray-500">$500</span>
            </div>
            <div className="text-center mt-1">
              <span className="text-lg font-bold text-blue-600">${scenarioParams.monthlyIncrease}/month</span>
            </div>
          </div>

          {/* Inflation Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Inflation Rate</label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">1%</span>
              <input
                type="range"
                min="1"
                max="6"
                step="0.5"
                value={scenarioParams.inflationRate}
                onChange={(e) =>
                  setScenarioParams((prev) => ({
                    ...prev,
                    inflationRate: parseFloat(e.target.value),
                  }))
                }
                className="flex-1"
              />
              <span className="text-sm text-gray-500">6%</span>
            </div>
            <div className="text-center mt-1">
              <span className="text-lg font-bold text-green-600">{scenarioParams.inflationRate}%</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Interest Rate</label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">0.5%</span>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.25"
                value={scenarioParams.interestRate}
                onChange={(e) =>
                  setScenarioParams((prev) => ({
                    ...prev,
                    interestRate: parseFloat(e.target.value),
                  }))
                }
                className="flex-1"
              />
              <span className="text-sm text-gray-500">5%</span>
            </div>
            <div className="text-center mt-1">
              <span className="text-lg font-bold text-purple-600">{scenarioParams.interestRate}%</span>
            </div>
          </div>

          {/* Emergency Fund */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Fund Injection</label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">$0</span>
              <input
                type="range"
                min="0"
                max="200000"
                step="10000"
                value={scenarioParams.emergencyFund}
                onChange={(e) =>
                  setScenarioParams((prev) => ({
                    ...prev,
                    emergencyFund: parseInt(e.target.value),
                  }))
                }
                className="flex-1"
              />
              <span className="text-sm text-gray-500">$200k</span>
            </div>
            <div className="text-center mt-1">
              <span className="text-lg font-bold text-red-600">
                ${(scenarioParams.emergencyFund / 1000).toFixed(0)}k
              </span>
            </div>
          </div>

          {/* Timeframe */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Projection Timeframe</label>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">5yr</span>
              <input
                type="range"
                min="5"
                max="20"
                step="1"
                value={scenarioParams.timeframe}
                onChange={(e) =>
                  setScenarioParams((prev) => ({
                    ...prev,
                    timeframe: parseInt(e.target.value),
                  }))
                }
                className="flex-1"
              />
              <span className="text-sm text-gray-500">20yr</span>
            </div>
            <div className="text-center mt-1">
              <span className="text-lg font-bold text-indigo-600">{scenarioParams.timeframe} years</span>
            </div>
          </div>

          {/* Toggle Options */}
          <div className="flex flex-col space-y-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={scenarioParams.deferCritical}
                onChange={(e) =>
                  setScenarioParams((prev) => ({
                    ...prev,
                    deferCritical: e.target.checked,
                  }))
                }
                className="rounded"
              />
              <span className="text-sm text-gray-700">Defer critical items 1 year</span>
            </label>
          </div>
        </div>
      </div>

      {/* Impact Summary */}
      <div className="mb-6 bg-gray-50 rounded-lg p-4">
        <h3 className="font-semibold text-gray-900 mb-3">Scenario Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
          <div>
            <div className="text-sm text-gray-600">Final Balance</div>
            <div className="text-lg font-bold text-blue-600">${(scenarioImpact.finalBalance / 1000).toFixed(0)}k</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Total Contributions</div>
            <div className="text-lg font-bold text-green-600">
              ${(scenarioImpact.totalContributions / 1000).toFixed(0)}k
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Risk Level</div>
            <div
              className={`text-lg font-bold ${
                scenarioImpact.specialAssessmentRisk === 'High' ? 'text-red-600' : 'text-green-600'
              }`}
            >
              {scenarioImpact.specialAssessmentRisk}
            </div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Underfunded Years</div>
            <div className="text-lg font-bold text-orange-600">{scenarioImpact.shortfallYears}</div>
          </div>
          <div>
            <div className="text-sm text-gray-600">Avg Balance</div>
            <div className="text-lg font-bold text-purple-600">
              ${(scenarioImpact.averageBalance / 1000).toFixed(0)}k
            </div>
          </div>
        </div>
      </div>

      {/* Projection Chart */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Financial Projections</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={projectedData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="year" tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={(value) => `$${value / 1000}k`} tick={{ fontSize: 12 }} />
            <Tooltip
              formatter={(value) => [`$${value.toLocaleString()}`, '']}
              labelFormatter={(year) => `Year ${year}`}
            />
            <Legend />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="#3b82f6"
              strokeWidth={3}
              name="Projected Balance"
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="target"
              stroke="#ef4444"
              strokeWidth={2}
              strokeDasharray="8 4"
              name="Target Balance"
              dot={false}
            />

            {showComparison && (
              <Line
                type="monotone"
                dataKey="baseline"
                stroke="#6b7280"
                strokeWidth={2}
                strokeDasharray="4 4"
                name="Current Plan"
                dot={false}
              />
            )}

            <Bar dataKey="expenses" fill="#f97316" fillOpacity={0.6} name="Annual Expenses" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Saved Scenarios */}
      {savedScenarios.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Saved Scenarios</h3>
          <div className="space-y-2">
            {savedScenarios.map((scenario) => (
              <div key={scenario.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <div className="font-medium">{scenario.name}</div>
                  <div className="text-sm text-gray-600">
                    Created {new Date(scenario.createdAt).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setScenarioParams(scenario.params)}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded text-sm hover:bg-blue-200"
                  >
                    Load
                  </button>
                  <button
                    onClick={() => setSavedScenarios((prev) => prev.filter((s) => s.id !== scenario.id))}
                    className="px-3 py-1 bg-red-100 text-red-700 rounded text-sm hover:bg-red-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations based on scenario */}
      <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-blue-900 mb-2">💡 Scenario Recommendations</h3>
        <div className="text-sm text-blue-800">
          {scenarioImpact.specialAssessmentRisk === 'High' ? (
            <div>
              ⚠️ This scenario may still require special assessments. Consider increasing monthly contributions or
              adding emergency funding.
            </div>
          ) : (
            <div>✅ This scenario provides adequate funding and reduces special assessment risk.</div>
          )}

          {scenarioImpact.shortfallYears > 3 && (
            <div className="mt-2">
              📊 Consider front-loading contributions in early years to reduce underfunding periods.
            </div>
          )}

          {scenarioParams.monthlyIncrease > 200 && (
            <div className="mt-2">
              💰 High monthly increases may face owner resistance. Consider phased implementation.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InteractiveScenarioPlanner;

// Example usage with mock data for testing
export const InteractiveScenarioPlannerDemo = () => {
  const mockBaselineAnalysis = {
    fundingStatus: {
      currentReserve: 450000,
      targetReserve: 800000,
      monthlyContribution: 2400,
      percentFunded: 56,
    },
    upcomingExpenses: [
      { year: 2025, component: 'Roof Replacement', cost: 150000, priority: 'Critical' },
      { year: 2026, component: 'HVAC System', cost: 45000, priority: 'High' },
      { year: 2027, component: 'Elevator Modernization', cost: 75000, priority: 'Medium' },
    ],
  };

  return <InteractiveScenarioPlanner baselineAnalysis={mockBaselineAnalysis} onScenarioChange={null} />;
};
