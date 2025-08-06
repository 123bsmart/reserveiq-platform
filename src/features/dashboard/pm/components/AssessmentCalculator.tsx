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

interface AssessmentCalculatorProps {
  onClose?: () => void;
}

const AssessmentCalculator: React.FC<AssessmentCalculatorProps> = ({ onClose }) => {
  const [calculatorParams, setCalculatorParams] = useState({
    currentDeficit: 500000,
    totalUnits: 50,
    currentMonthlyContribution: 200,
    specialAssessmentAmount: 10000,
    monthlyIncreaseAmount: 100,
    paybackMonths: 12,
  });

  const [selectedApproach, setSelectedApproach] = useState<'special' | 'monthly'>('monthly');

  // Calculate scenarios
  const calculations = useMemo(() => {
    const {
      currentDeficit,
      totalUnits,
      currentMonthlyContribution,
      //   specialAssessmentAmount,
      //   monthlyIncreaseAmount,
      paybackMonths,
    } = calculatorParams;

    // Special Assessment Approach
    const specialAssessmentPerUnit = currentDeficit / totalUnits;
    const specialAssessmentTotal = specialAssessmentPerUnit * totalUnits;

    // Monthly Increase Approach
    const monthlyIncreasePerUnit = currentDeficit / (totalUnits * paybackMonths);
    const monthlyIncreaseTotal = monthlyIncreasePerUnit * totalUnits * paybackMonths;

    // Monthly payment comparison
    // const currentMonthlyTotal = currentMonthlyContribution * totalUnits;
    // const newMonthlyTotal = (currentMonthlyContribution + monthlyIncreasePerUnit) * totalUnits;

    // Generate monthly data for chart
    const monthlyData = Array.from({ length: paybackMonths }, (_, i) => {
      const month = i + 1;
      const cumulativeMonthly = monthlyIncreasePerUnit * totalUnits * month;
      const specialAssessmentPaid = month === 1 ? specialAssessmentTotal : 0;

      return {
        month,
        monthlyApproach: cumulativeMonthly,
        specialApproach: specialAssessmentPaid,
        monthlyPayment: currentMonthlyContribution + monthlyIncreasePerUnit,
        specialPayment: currentMonthlyContribution,
      };
    });

    return {
      specialAssessment: {
        perUnit: specialAssessmentPerUnit,
        total: specialAssessmentTotal,
        monthlyPayment: currentMonthlyContribution,
      },
      monthlyIncrease: {
        perUnit: monthlyIncreasePerUnit,
        total: monthlyIncreaseTotal,
        monthlyPayment: currentMonthlyContribution + monthlyIncreasePerUnit,
        paybackMonths,
      },
      monthlyData,
      comparison: {
        monthlySavings: specialAssessmentTotal - monthlyIncreaseTotal,
        monthlyAdvantage: monthlyIncreaseTotal < specialAssessmentTotal ? 'monthly' : 'special',
      },
    };
  }, [calculatorParams]);

  const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b'];

  const pieData = [
    { name: 'Current Monthly', value: calculations.specialAssessment.monthlyPayment * calculatorParams.totalUnits },
    { name: 'Additional Monthly', value: calculations.monthlyIncrease.perUnit * calculatorParams.totalUnits },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">🧮 Assessment Calculator</h2>
        {onClose && (
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-xl">
            ×
          </button>
        )}
      </div>

      <p className="text-gray-600 mb-6">
        Compare one-time special assessments vs. monthly contribution increases to fund your reserve deficit.
      </p>

      {/* Input Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
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
              max="200"
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
            <span className="text-sm text-gray-500">200</span>
          </div>
          <div className="text-center mt-1">
            <span className="text-lg font-bold text-green-600">{calculatorParams.totalUnits} units</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Current Monthly per Unit</label>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">$100</span>
            <input
              type="range"
              min="100"
              max="500"
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
            <span className="text-sm text-gray-500">$500</span>
          </div>
          <div className="text-center mt-1">
            <span className="text-lg font-bold text-purple-600">
              ${calculatorParams.currentMonthlyContribution}/month
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Payback Period (Months)</label>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">6</span>
            <input
              type="range"
              min="6"
              max="36"
              step="3"
              value={calculatorParams.paybackMonths}
              onChange={(e) =>
                setCalculatorParams((prev) => ({
                  ...prev,
                  paybackMonths: parseInt(e.target.value),
                }))
              }
              className="flex-1"
            />
            <span className="text-sm text-gray-500">36</span>
          </div>
          <div className="text-center mt-1">
            <span className="text-lg font-bold text-indigo-600">{calculatorParams.paybackMonths} months</span>
          </div>
        </div>
      </div>

      {/* Comparison Results */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Special Assessment */}
        <div
          className={`p-6 rounded-lg border-2 transition-all ${
            selectedApproach === 'special' ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">💸 Special Assessment</h3>
            <button
              onClick={() => setSelectedApproach('special')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedApproach === 'special' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Select This Option
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Per Unit:</span>
              <span className="font-bold text-red-600">${calculations.specialAssessment.perUnit.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Assessment:</span>
              <span className="font-bold text-red-600">${calculations.specialAssessment.total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly Payment:</span>
              <span className="font-bold text-gray-900">${calculations.specialAssessment.monthlyPayment}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Timeline:</span>
              <span className="font-bold text-gray-900">1 month</span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-red-100 rounded-lg">
            <div className="text-sm text-red-800">
              <strong>Pros:</strong> Immediate funding, no ongoing increases
            </div>
            <div className="text-sm text-red-800 mt-1">
              <strong>Cons:</strong> Large upfront cost, potential owner resistance
            </div>
          </div>
        </div>

        {/* Monthly Increase */}
        <div
          className={`p-6 rounded-lg border-2 transition-all ${
            selectedApproach === 'monthly' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-gray-900">📈 Monthly Increase</h3>
            <button
              onClick={() => setSelectedApproach('monthly')}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                selectedApproach === 'monthly'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Select This Option
            </button>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Increase per Unit:</span>
              <span className="font-bold text-blue-600">${calculations.monthlyIncrease.perUnit.toFixed(2)}/month</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">New Monthly per Unit:</span>
              <span className="font-bold text-blue-600">${calculations.monthlyIncrease.monthlyPayment.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Additional:</span>
              <span className="font-bold text-blue-600">${calculations.monthlyIncrease.total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Timeline:</span>
              <span className="font-bold text-gray-900">{calculations.monthlyIncrease.paybackMonths} months</span>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-100 rounded-lg">
            <div className="text-sm text-blue-800">
              <strong>Pros:</strong> Spreads cost over time, easier to budget
            </div>
            <div className="text-sm text-blue-800 mt-1">
              <strong>Cons:</strong> Takes longer to fund, ongoing commitment
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation */}
      <div className="mb-8 p-4 bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">💡 Recommendation</h3>
        <div className="text-sm text-gray-800">
          {calculations.comparison.monthlyAdvantage === 'monthly' ? (
            <div>
              <strong>Monthly increase approach is more cost-effective!</strong> You'll save $
              {Math.abs(calculations.comparison.monthlySavings).toLocaleString()} over the special assessment approach.
            </div>
          ) : (
            <div>
              <strong>Special assessment approach is more cost-effective!</strong> You'll save $
              {Math.abs(calculations.comparison.monthlySavings).toLocaleString()} over the monthly increase approach.
            </div>
          )}
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Comparison Chart */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Monthly Payment Comparison</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={[
                {
                  name: 'Current',
                  current: calculations.specialAssessment.monthlyPayment,
                  new: calculations.monthlyIncrease.monthlyPayment,
                },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `$${value}`} />
              <Tooltip formatter={(value) => [`$${value}`, '']} />
              <Legend />
              <Bar dataKey="current" fill="#6b7280" name="Current Monthly" />
              <Bar dataKey="new" fill="#3b82f6" name="New Monthly" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Payment Distribution */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Payment Distribution (Monthly Approach)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Cumulative Funding Chart */}
      <div className="mt-8">
        <h3 className="font-semibold text-gray-900 mb-3">Cumulative Funding Over Time</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={calculations.monthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tickFormatter={(value) => `$${value / 1000}k`} tick={{ fontSize: 12 }} />
            <Tooltip
              formatter={(value) => [`$${value.toLocaleString()}`, '']}
              labelFormatter={(month) => `Month ${month}`}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="monthlyApproach"
              stroke="#3b82f6"
              strokeWidth={3}
              name="Monthly Increase"
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="specialApproach"
              stroke="#ef4444"
              strokeWidth={3}
              name="Special Assessment"
              dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-end space-x-4">
        <button
          onClick={() => {
            // Reset to defaults
            setCalculatorParams({
              currentDeficit: 500000,
              totalUnits: 50,
              currentMonthlyContribution: 200,
              specialAssessmentAmount: 10000,
              monthlyIncreaseAmount: 100,
              paybackMonths: 12,
            });
          }}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
        >
          Reset
        </button>
        <button
          onClick={() => {
            // Export results
            const data = {
              selectedApproach,
              calculations,
              parameters: calculatorParams,
              timestamp: new Date().toISOString(),
            };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'assessment-calculator-results.json';
            a.click();
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Export Results
        </button>
      </div>
    </div>
  );
};

export default AssessmentCalculator;
