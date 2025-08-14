"use client";
import React, { useState } from 'react';
import { DollarSign, Home } from 'lucide-react';

const BoardAssessmentCalculator: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<'special-assessment' | 'monthly-increase'>('special-assessment');
  const [formData, setFormData] = useState({
    reserveBalance: 140000,
    targetReserve: 250000,
    unitCount: 42,
    assessmentAmount: 2500,
    monthlyIncrease: 45,
    duration: 5,
  });

  const calculateResults = () => {

    if (selectedScenario === 'special-assessment') {
      const totalRaised = formData.assessmentAmount * formData.unitCount;
      const newBalance = formData.reserveBalance + totalRaised;
      const fundingPercentage = (newBalance / formData.targetReserve) * 100;

      return {
        impactPerUnit: formData.assessmentAmount,
        totalRaised: totalRaised,
        newBalance: newBalance,
        fundingPercentage: Math.round(fundingPercentage),
        timeline: '12 months',
      };
    } else if (selectedScenario === 'monthly-increase') {
      const totalRaised = formData.monthlyIncrease * 12 * formData.duration * formData.unitCount;
      const newBalance = formData.reserveBalance + totalRaised;
      const fundingPercentage = (newBalance / formData.targetReserve) * 100;

      return {
        impactPerUnit: formData.monthlyIncrease * 12 * formData.duration,
        totalRaised: totalRaised,
        newBalance: newBalance,
        fundingPercentage: Math.round(fundingPercentage),
        timeline: `${formData.duration} years`,
      };
    }

    return {
      impactPerUnit: 0,
      totalRaised: 0,
      newBalance: formData.reserveBalance,
      fundingPercentage: 0,
      timeline: 'N/A',
    };
  };

  const results = calculateResults();

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Assessment Calculator</h2>
        <p className="text-gray-600">Model different funding scenarios to address reserve shortfall</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Financial State</h3>

          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Reserve Balance</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={formData.reserveBalance}
                  onChange={(e) => setFormData({ ...formData, reserveBalance: parseInt(e.target.value) || 0 })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Reserve</label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={formData.targetReserve}
                  onChange={(e) => setFormData({ ...formData, targetReserve: parseInt(e.target.value) || 0 })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Unit Count</label>
              <div className="relative">
                <Home className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={formData.unitCount}
                  onChange={(e) => setFormData({ ...formData, unitCount: parseInt(e.target.value) || 0 })}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-red-800 mb-2">Current Shortfall</h4>
            <div className="text-2xl font-bold text-red-600">
              ${(formData.targetReserve - formData.reserveBalance).toLocaleString()}
            </div>
            <div className="text-sm text-red-700">
              Funding level: {Math.round((formData.reserveBalance / formData.targetReserve) * 100)}%
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Funding Scenario</h3>

          <div className="space-y-4">
            <div className="flex space-x-4">
              <button
                onClick={() => setSelectedScenario('special-assessment')}
                className={`flex-1 p-3 text-sm font-medium rounded-lg border transition-colors ${
                  selectedScenario === 'special-assessment'
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Special Assessment
              </button>
              <button
                onClick={() => setSelectedScenario('monthly-increase')}
                className={`flex-1 p-3 text-sm font-medium rounded-lg border transition-colors ${
                  selectedScenario === 'monthly-increase'
                    ? 'bg-blue-50 border-blue-500 text-blue-700'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Monthly Increase
              </button>
            </div>

            {selectedScenario === 'special-assessment' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Assessment Amount per Unit</label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={formData.assessmentAmount}
                    onChange={(e) => setFormData({ ...formData, assessmentAmount: parseInt(e.target.value) || 0 })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {selectedScenario === 'monthly-increase' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Increase per Unit</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="number"
                      value={formData.monthlyIncrease}
                      onChange={(e) => setFormData({ ...formData, monthlyIncrease: parseInt(e.target.value) || 0 })}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (Years)</label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value={3}>3 years</option>
                    <option value={4}>4 years</option>
                    <option value={5}>5 years</option>
                    <option value={7}>7 years</option>
                    <option value={10}>10 years</option>
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Scenario Results</h3>

          <div className="bg-green-50 rounded-lg p-6 mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-green-700 font-medium">Impact per Unit</div>
                <div className="text-2xl font-bold text-green-800">${results.impactPerUnit.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-green-700 font-medium">Timeline</div>
                <div className="text-xl font-semibold text-green-800">{results.timeline}</div>
              </div>
              <div>
                <div className="text-sm text-green-700 font-medium">Total Raised</div>
                <div className="text-xl font-semibold text-green-800">${results.totalRaised.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-sm text-green-700 font-medium">Funding Level</div>
                <div className="text-xl font-semibold text-green-800">{results.fundingPercentage}%</div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">Projected Reserve Balance</h4>
            <div className="text-2xl font-bold text-blue-600">${results.newBalance.toLocaleString()}</div>
            <div className="text-sm text-blue-700">
              {results.fundingPercentage >= 100
                ? 'Fully funded!'
                : `${100 - results.fundingPercentage}% remaining to target`}
            </div>
          </div>

          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Generate Board Report
            </button>
            <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Compare All Scenarios
            </button>
            <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              Export to PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardAssessmentCalculator;
