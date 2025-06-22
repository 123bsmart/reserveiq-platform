import React, { useState } from 'react';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, DollarSign, Building, Calendar, ArrowUp, ArrowDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const ReserveHealthScoring = () => {
  const [selectedBuilding, setSelectedBuilding] = useState('maple-heights');
  const [selectedTimeframe, setSelectedTimeframe] = useState('12months');

  // Sample reserve health data
  const buildings = [
    {
      id: 'maple-heights',
      name: 'Maple Heights Condos',
      units: 84,
      healthScore: 42,
      riskLevel: 'High',
      currentBalance: 142000,
      targetBalance: 280000,
      monthlyContribution: 12500,
      requiredContribution: 18900,
      deficit: 138000,
      nextMajorExpense: { item: 'Elevator Modernization', amount: 65000, timeline: '18 months' }
    },
    {
      id: 'lakeside-manor',
      name: 'Lakeside Manor',
      units: 156,
      healthScore: 78,
      riskLevel: 'Medium',
      currentBalance: 340000,
      targetBalance: 420000,
      monthlyContribution: 22000,
      requiredContribution: 24500,
      deficit: 80000,
      nextMajorExpense: { item: 'Roof Replacement', amount: 120000, timeline: '36 months' }
    }
  ];

  const currentBuilding = buildings.find(b => b.id === selectedBuilding) || buildings[0];

  const healthTrendData = [
    { month: 'Jan', score: 38, target: 75 },
    { month: 'Feb', score: 39, target: 75 },
    { month: 'Mar', score: 41, target: 75 },
    { month: 'Apr', score: 40, target: 75 },
    { month: 'May', score: 42, target: 75 },
    { month: 'Jun', score: 42, target: 75 }
  ];

  const componentHealth = [
    { component: 'Elevator Systems', health: 35, nextService: '2025-Q2', cost: 65000, priority: 'Critical' },
    { component: 'HVAC System', health: 55, nextService: '2026-Q1', cost: 45000, priority: 'High' },
    { component: 'Roofing', health: 70, nextService: '2027-Q3', cost: 120000, priority: 'Medium' },
    { component: 'Parking Garage', health: 45, nextService: '2025-Q4', cost: 85000, priority: 'High' },
    { component: 'Windows/Balconies', health: 80, nextService: '2028-Q2', cost: 95000, priority: 'Low' },
    { component: 'Plumbing', health: 65, nextService: '2026-Q4', cost: 35000, priority: 'Medium' }
  ];

  const riskFactors = [
    { factor: 'Funding Gap', severity: 'Critical', impact: '$138,000 shortfall', action: 'Increase monthly fees by $89/unit' },
    { factor: 'Aging Infrastructure', severity: 'High', impact: '3 major systems near end-of-life', action: 'Schedule professional assessments' },
    { factor: 'Market Conditions', severity: 'Medium', impact: 'Construction costs up 15%', action: 'Review contractor agreements' },
    { factor: 'Regulatory Changes', severity: 'Low', impact: 'New accessibility requirements', action: 'Monitor compliance deadlines' }
  ];

  const getHealthColor = (score) => {
    if (score >= 80) return 'text-green-600 bg-green-50';
    if (score >= 60) return 'text-yellow-600 bg-yellow-50';
    if (score >= 40) return 'text-orange-600 bg-orange-50';
    return 'text-red-600 bg-red-50';
  };

  const getHealthColorText = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    if (score >= 40) return 'text-orange-600';
    return 'text-red-600';
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'Critical': return 'text-red-600';
      case 'High': return 'text-orange-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Reserve Health Scoring</h1>
            <p className="text-gray-600">AI-powered analysis of your building's financial health and risk factors</p>
          </div>
          
          <div className="flex items-center gap-4">
            <select 
              value={selectedBuilding}
              onChange={(e) => setSelectedBuilding(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {buildings.map(building => (
                <option key={building.id} value={building.id}>{building.name}</option>
              ))}
            </select>
            
            <select 
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="6months">Last 6 Months</option>
              <option value="12months">Last 12 Months</option>
              <option value="24months">Last 24 Months</option>
            </select>
          </div>
        </div>

        {/* Health Score Overview */}
        <div className="bg-white p-8 rounded-lg border shadow-sm mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Overall Reserve Health</h2>
            <div className="text-right">
              <div className="text-sm text-gray-600">{currentBuilding.units} units</div>
              <div className="font-medium text-gray-900">{currentBuilding.name}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className={`text-6xl font-bold mb-2 ${getHealthColorText(currentBuilding.healthScore)}`}>
                {currentBuilding.healthScore}
              </div>
              <div className="text-lg font-medium text-gray-900 mb-1">Health Score</div>
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getHealthColor(currentBuilding.healthScore)}`}>
                {currentBuilding.riskLevel} Risk
              </div>
            </div>
            
            <div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Current Balance</span>
                  <span className="font-medium">${currentBuilding.currentBalance.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Target Balance</span>
                  <span className="font-medium">${currentBuilding.targetBalance.toLocaleString()}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${currentBuilding.healthScore >= 60 ? 'bg-green-500' : currentBuilding.healthScore >= 40 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${(currentBuilding.currentBalance / currentBuilding.targetBalance) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {Math.round((currentBuilding.currentBalance / currentBuilding.targetBalance) * 100)}% funded
                </div>
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-600 mb-1">Monthly Contribution</div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                ${currentBuilding.monthlyContribution.toLocaleString()}
              </div>
              <div className="text-sm text-red-600">
                Target: ${currentBuilding.requiredContribution.toLocaleString()}
              </div>
              <div className="flex items-center gap-1 text-xs text-red-600 mt-1">
                <ArrowDown className="w-3 h-3" />
                ${(currentBuilding.requiredContribution - currentBuilding.monthlyContribution).toLocaleString()} short
              </div>
            </div>
            
            <div>
              <div className="text-sm text-gray-600 mb-1">Next Major Expense</div>
              <div className="text-lg font-bold text-gray-900 mb-1">
                ${currentBuilding.nextMajorExpense.amount.toLocaleString()}
              </div>
              <div className="text-sm text-gray-700">{currentBuilding.nextMajorExpense.item}</div>
              <div className="text-xs text-orange-600 mt-1">
                Due in {currentBuilding.nextMajorExpense.timeline}
              </div>
            </div>
          </div>
        </div>

        {/* Health Trend and Component Health */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Health Score Trend */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Score Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={healthTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line type="monotone" dataKey="score" stroke="#ef4444" strokeWidth={3} name="Health Score" />
                <Line type="monotone" dataKey="target" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" name="Target" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Component Health Breakdown */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Component Health Overview</h3>
            <div className="space-y-4">
              {componentHealth.map((component, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-medium text-gray-900">{component.component}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(component.priority)}`}>
                        {component.priority}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      Next service: {component.nextService} • Est. cost: ${component.cost.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${getHealthColorText(component.health)}`}>
                      {component.health}%
                    </div>
                    <div className="w-16 bg-gray-200 rounded-full h-1.5 mt-1">
                      <div 
                        className={`h-1.5 rounded-full ${component.health >= 70 ? 'bg-green-500' : component.health >= 50 ? 'bg-yellow-500' : 'bg-red-500'}`}
                        style={{ width: `${component.health}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="bg-white p-6 rounded-lg border shadow-sm mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Factors & Recommendations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {riskFactors.map((risk, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className={`w-5 h-5 ${getSeverityColor(risk.severity)}`} />
                    <span className="font-medium text-gray-900">{risk.factor}</span>
                  </div>
                  <span className={`text-sm font-medium ${getSeverityColor(risk.severity)}`}>
                    {risk.severity}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mb-2">{risk.impact}</div>
                <div className="text-sm text-blue-600 font-medium">
                  Recommended: {risk.action}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Items */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Immediate Action Items</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <div className="flex-1">
                <div className="font-medium text-red-900">Increase monthly contributions by $6,400</div>
                <div className="text-sm text-red-700">Required to meet minimum funding targets</div>
              </div>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm">
                Calculate Impact
              </button>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
              <Clock className="w-5 h-5 text-orange-600" />
              <div className="flex-1">
                <div className="font-medium text-orange-900">Schedule elevator assessment</div>
                <div className="text-sm text-orange-700">Critical system requires immediate evaluation</div>
              </div>
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm">
                Find Contractors
              </button>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <DollarSign className="w-5 h-5 text-yellow-600" />
              <div className="flex-1">
                <div className="font-medium text-yellow-900">Review special assessment options</div>
                <div className="text-sm text-yellow-700">Consider one-time assessment to bridge funding gap</div>
              </div>
              <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 text-sm">
                Run Scenarios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReserveHealthScoring;
