import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ScatterChart, Scatter, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Info, Building, DollarSign, Users, Calendar, Target, Award, Filter, Download, Share2 } from 'lucide-react';

const FinancialBenchmarking = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMetric, setSelectedMetric] = useState('operatingCosts');
  const [comparisonType, setComparisonType] = useState('similar');
  const [timeFrame, setTimeFrame] = useState('annual');

  // Mock data for current building
  const currentBuilding = {
    name: "Maple Ridge Condos",
    units: 120,
    yearBuilt: 1995,
    totalSquareFeet: 180000,
    location: "Toronto, ON",
    buildingType: "High-rise",
    amenities: ["Pool", "Gym", "Concierge", "Parking"]
  };

  // Benchmark comparison data
  const benchmarkData = {
    operatingCosts: {
      current: 4.85,
      market: 4.12,
      percentile: 75,
      trend: 'higher',
      difference: 0.73,
      unit: '$/sq ft'
    },
    reserveContributions: {
      current: 385,
      market: 420,
      percentile: 35,
      trend: 'lower',
      difference: -35,
      unit: '$/unit'
    },
    maintenanceCosts: {
      current: 2.15,
      market: 1.98,
      percentile: 65,
      trend: 'higher',
      difference: 0.17,
      unit: '$/sq ft'
    },
    utilityEfficiency: {
      current: 1.85,
      market: 1.65,
      percentile: 70,
      trend: 'higher',
      difference: 0.20,
      unit: '$/sq ft'
    },
    reserveHealth: {
      current: 72,
      market: 85,
      percentile: 25,
      trend: 'lower',
      difference: -13,
      unit: '%'
    }
  };

  // Detailed comparison data for charts
  const costBreakdownData = [
    { category: 'Security', current: 0.85, market: 0.92, benchmark: 'good' },
    { category: 'Maintenance', current: 2.15, market: 1.98, benchmark: 'high' },
    { category: 'Utilities', current: 1.85, market: 1.65, benchmark: 'high' },
    { category: 'Management', current: 0.45, market: 0.38, benchmark: 'high' },
    { category: 'Insurance', current: 0.35, market: 0.42, benchmark: 'good' },
    { category: 'Other', current: 0.25, market: 0.28, benchmark: 'good' }
  ];

  const trendData = [
    { year: '2020', current: 4.2, market: 3.8, similar: 4.0 },
    { year: '2021', current: 4.4, market: 3.9, similar: 4.1 },
    { year: '2022', current: 4.6, market: 4.0, similar: 4.2 },
    { year: '2023', current: 4.7, market: 4.1, similar: 4.3 },
    { year: '2024', current: 4.85, market: 4.12, similar: 4.35 }
  ];

  const peerBuildingsData = [
    { name: 'Your Building', costs: 4.85, reserves: 72, units: 120, highlight: true },
    { name: 'Oakville Towers', costs: 3.95, reserves: 88, units: 115 },
    { name: 'Downtown Commons', costs: 4.25, reserves: 82, units: 135 },
    { name: 'Riverside Heights', costs: 4.45, reserves: 76, units: 108 },
    { name: 'Parkside Manor', costs: 3.85, reserves: 91, units: 125 },
    { name: 'Heritage Place', costs: 4.65, reserves: 68, units: 142 }
  ];

  const getPerformanceColor = (percentile) => {
    if (percentile >= 75) return 'text-red-600';
    if (percentile >= 50) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getPerformanceBadge = (percentile) => {
    if (percentile >= 75) return { text: 'Needs Attention', color: 'bg-red-100 text-red-800' };
    if (percentile >= 50) return { text: 'Average', color: 'bg-yellow-100 text-yellow-800' };
    return { text: 'Good Performance', color: 'bg-green-100 text-green-800' };
  };

  const MetricCard = ({ title, data, icon: Icon }) => {
    const badge = getPerformanceBadge(data.percentile);
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Icon className="h-8 w-8 text-blue-600" />
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${badge.color}`}>
            {badge.text}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Your Building</p>
            <p className="text-2xl font-bold text-gray-900">
              {data.current}{data.unit}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Market Average</p>
            <p className="text-2xl font-bold text-gray-600">
              {data.market}{data.unit}
            </p>
          </div>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {data.trend === 'higher' ? (
              <TrendingUp className="h-4 w-4 text-red-500" />
            ) : (
              <TrendingDown className="h-4 w-4 text-green-500" />
            )}
            <span className={`text-sm font-medium ${data.trend === 'higher' ? 'text-red-600' : 'text-green-600'}`}>
              {Math.abs(data.difference)}{data.unit} {data.trend} than market
            </span>
          </div>
          <span className="text-sm text-gray-500">
            {data.percentile}th percentile
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Financial Benchmarking</h1>
              <p className="mt-2 text-lg text-gray-600">
                Compare your building's performance against similar properties in your market
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        {/* Building Info Card */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center space-x-4">
            <Building className="h-12 w-12 text-blue-600" />
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900">{currentBuilding.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 text-sm text-gray-600">
                <div>
                  <span className="font-medium">Units:</span> {currentBuilding.units}
                </div>
                <div>
                  <span className="font-medium">Built:</span> {currentBuilding.yearBuilt}
                </div>
                <div>
                  <span className="font-medium">Type:</span> {currentBuilding.buildingType}
                </div>
                <div>
                  <span className="font-medium">Location:</span> {currentBuilding.location}
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                <Calendar className="h-4 w-4" />
                <span>Last Updated: June 2024</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Users className="h-4 w-4 text-gray-400" />
                <span className="text-gray-600">Compared to 47 similar buildings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: Target },
              { id: 'costs', label: 'Cost Analysis', icon: DollarSign },
              { id: 'trends', label: 'Trends', icon: TrendingUp },
              { id: 'peers', label: 'Peer Comparison', icon: Building }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm ${
                  activeTab === id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <MetricCard
                title="Operating Costs"
                data={benchmarkData.operatingCosts}
                icon={DollarSign}
              />
              <MetricCard
                title="Reserve Contributions"
                data={benchmarkData.reserveContributions}
                icon={Target}
              />
              <MetricCard
                title="Reserve Health"
                data={benchmarkData.reserveHealth}
                icon={CheckCircle}
              />
            </div>

            {/* Key Insights */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights & Recommendations</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-red-900">Operating Costs Above Market</h4>
                    <p className="text-sm text-red-700 mt-1">
                      Your operating costs are $0.73/sq ft higher than similar buildings. Focus on utility efficiency and maintenance optimization.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-yellow-50 rounded-lg">
                  <Info className="h-5 w-5 text-yellow-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-yellow-900">Reserve Contributions Below Recommended</h4>
                    <p className="text-sm text-yellow-700 mt-1">
                      Consider increasing monthly contributions by $35/unit to match market standards and improve reserve health.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-green-900">Strong Security Performance</h4>
                    <p className="text-sm text-green-700 mt-1">
                      Your security costs are efficiently managed, performing better than 85% of comparable buildings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Cost Analysis Tab */}
        {activeTab === 'costs' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Cost Breakdown Comparison</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={costBreakdownData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis label={{ value: '$/sq ft', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`$${value}/sq ft`, '']} />
                  <Legend />
                  <Bar dataKey="current" fill="#3b82f6" name="Your Building" />
                  <Bar dataKey="market" fill="#94a3b8" name="Market Average" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Performance</h3>
                <div className="space-y-4">
                  {costBreakdownData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{item.category}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">${item.current}/sq ft</span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.benchmark === 'good' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {item.benchmark === 'good' ? 'Good' : 'High'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Potential Savings</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900">Utility Optimization</h4>
                    <p className="text-sm text-blue-700 mt-1">Potential annual savings: $36,000</p>
                    <p className="text-xs text-blue-600 mt-2">LED conversion, HVAC optimization</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900">Maintenance Efficiency</h4>
                    <p className="text-sm text-blue-700 mt-1">Potential annual savings: $28,600</p>
                    <p className="text-xs text-blue-600 mt-2">Preventive maintenance program</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900">Management Costs</h4>
                    <p className="text-sm text-blue-700 mt-1">Potential annual savings: $12,600</p>
                    <p className="text-xs text-blue-600 mt-2">Service contract renegotiation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Trends Tab */}
        {activeTab === 'trends' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">5-Year Cost Trends</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis label={{ value: '$/sq ft', angle: -90, position: 'insideLeft' }} />
                  <Tooltip formatter={(value) => [`$${value}/sq ft`, '']} />
                  <Legend />
                  <Line type="monotone" dataKey="current" stroke="#3b82f6" strokeWidth={3} name="Your Building" />
                  <Line type="monotone" dataKey="market" stroke="#94a3b8" strokeWidth={2} name="Market Average" />
                  <Line type="monotone" dataKey="similar" stroke="#10b981" strokeWidth={2} name="Similar Buildings" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Trend Analysis</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Cost Growth Above Market</p>
                      <p className="text-xs text-gray-600">Your costs increased 15.5% vs market 8.4%</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-yellow-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Accelerating Growth</p>
                      <p className="text-xs text-gray-600">Cost increases accelerated in 2023-2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-5 w-5 text-red-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Widening Gap</p>
                      <p className="text-xs text-gray-600">Gap vs market increased from $0.40 to $0.73</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Projections</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-medium text-yellow-900">2025 Forecast</h4>
                    <p className="text-sm text-yellow-700 mt-1">$5.05/sq ft (+4.1%)</p>
                    <p className="text-xs text-yellow-600 mt-2">Based on current trends</p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg">
                    <h4 className="font-medium text-red-900">Risk Alert</h4>
                    <p className="text-sm text-red-700 mt-1">Gap may exceed $1.00/sq ft by 2026</p>
                    <p className="text-xs text-red-600 mt-2">Immediate action recommended</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900">Opportunity</h4>
                    <p className="text-sm text-green-700 mt-1">$150K+ annual savings potential</p>
                    <p className="text-xs text-green-600 mt-2">With optimization initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Peer Comparison Tab */}
        {activeTab === 'peers' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Peer Building Comparison</h3>
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart data={peerBuildingsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="costs" label={{ value: 'Operating Costs ($/sq ft)', position: 'insideBottom', offset: -10 }} />
                  <YAxis dataKey="reserves" label={{ value: 'Reserve Health (%)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'costs' ? `$${value}/sq ft` : `${value}%`,
                      name === 'costs' ? 'Operating Costs' : 'Reserve Health'
                    ]}
                    labelFormatter={(label, payload) => payload[0]?.payload?.name || ''}
                  />
                  <Scatter 
                    dataKey="reserves" 
                    fill={(entry) => entry.highlight ? '#ef4444' : '#3b82f6'}
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Detailed Peer Analysis</h3>
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Building
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Units
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Operating Costs
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Reserve Health
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Performance
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {peerBuildingsData.map((building, index) => (
                      <tr key={index} className={building.highlight ? 'bg-blue-50' : ''}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className={`text-sm font-medium ${building.highlight ? 'text-blue-900' : 'text-gray-900'}`}>
                              {building.name}
                            </span>
                            {building.highlight && (
                              <span className="ml-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                                You
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {building.units}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          ${building.costs}/sq ft
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {building.reserves}%
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            building.costs <= 4.0 && building.reserves >= 85 
                              ? 'bg-green-100 text-green-800' 
                              : building.costs >= 4.5 || building.reserves <= 75
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {building.costs <= 4.0 && building.reserves >= 85 ? 'Excellent' : 
                             building.costs >= 4.5 || building.reserves <= 75 ? 'Needs Work' : 'Average'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FinancialBenchmarking;