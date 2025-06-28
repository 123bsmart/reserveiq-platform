import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, ScatterPlot } from 'recharts';
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Clock, DollarSign, Calendar, Target, Brain, Zap, Activity, BarChart3, Eye, Settings, Download, Lightbulb } from 'lucide-react';

const AdvancedReserveAnalytics = () => {
  const [selectedBuilding, setSelectedBuilding] = useState('maple-heights');
  const [timeHorizon, setTimeHorizon] = useState('5-year');
  const [analysisType, setAnalysisType] = useState('predictive');
  const [activeTab, setActiveTab] = useState('overview');

  // Demo building data with predictive analytics
  const buildingData = {
    'maple-heights': {
      name: 'Maple Heights Condominiums',
      units: 156,
      yearBuilt: 1998,
      currentReserve: 125000,
      targetReserve: 170000,
      monthlyContributions: 8580,
      riskScore: 'High',
      predictiveInsights: {
        crisisLikelihood: 0.78,
        timeToFunding: 14,
        recommendedAction: 'Immediate assessment increase',
        confidenceLevel: 0.92
      }
    }
  };

  // 5-year predictive reserve fund projection
  const reserveProjection = [
    { year: 2025, current: 125000, projected: 125000, optimal: 170000, deficit: 45000, spending: 15000, mlPrediction: 128000, confidence: 0.95 },
    { year: 2026, current: 135000, projected: 142000, optimal: 185000, deficit: 43000, spending: 45000, mlPrediction: 145000, confidence: 0.89 },
    { year: 2027, current: 145000, projected: 157000, optimal: 200000, deficit: 43000, spending: 85000, mlPrediction: 152000, confidence: 0.82 },
    { year: 2028, current: 155000, projected: 142000, optimal: 215000, deficit: 73000, spending: 120000, mlPrediction: 138000, confidence: 0.75 },
    { year: 2029, current: 165000, projected: 127000, optimal: 230000, deficit: 103000, spending: 95000, mlPrediction: 125000, confidence: 0.71 },
    { year: 2030, current: 175000, projected: 112000, optimal: 245000, deficit: 133000, spending: 110000, mlPrediction: 108000, confidence: 0.68 }
  ];

  // Component lifecycle predictions
  const componentPredictions = [
    { component: 'Roof System', currentAge: 26, lifespan: 30, replacement: 2028, cost: 85000, riskLevel: 'Critical', confidence: 0.94, condition: 'Poor' },
    { component: 'HVAC System', currentAge: 15, lifespan: 20, replacement: 2029, cost: 42000, riskLevel: 'High', confidence: 0.87, condition: 'Fair' },
    { component: 'Parking Waterproofing', currentAge: 26, lifespan: 25, replacement: 2025, cost: 28000, riskLevel: 'Critical', confidence: 0.91, condition: 'Poor' },
    { component: 'Elevators', currentAge: 26, lifespan: 35, replacement: 2033, cost: 35000, riskLevel: 'Medium', confidence: 0.76, condition: 'Good' },
    { component: 'Windows', currentAge: 26, lifespan: 40, replacement: 2038, cost: 120000, riskLevel: 'Low', confidence: 0.82, condition: 'Good' },
    { component: 'Electrical System', currentAge: 26, lifespan: 30, replacement: 2028, cost: 55000, riskLevel: 'High', confidence: 0.79, condition: 'Fair' }
  ];

  // ML-powered spending pattern analysis
  const spendingPatterns = [
    { month: 'Jan', actual: 4200, predicted: 4100, variance: 100, anomaly: false },
    { month: 'Feb', actual: 3800, predicted: 4000, variance: -200, anomaly: false },
    { month: 'Mar', actual: 6200, predicted: 4200, variance: 2000, anomaly: true },
    { month: 'Apr', actual: 4100, predicted: 4150, variance: -50, anomaly: false },
    { month: 'May', actual: 4500, predicted: 4300, variance: 200, anomaly: false },
    { month: 'Jun', actual: 8900, predicted: 4400, variance: 4500, anomaly: true },
    { month: 'Jul', actual: 4300, predicted: 4500, variance: -200, anomaly: false },
    { month: 'Aug', actual: 4600, predicted: 4600, variance: 0, anomaly: false },
    { month: 'Sep', actual: 4400, predicted: 4700, variance: -300, anomaly: false },
    { month: 'Oct', actual: 4800, predicted: 4800, variance: 0, anomaly: false },
    { month: 'Nov', actual: 5200, predicted: 4900, variance: 300, anomaly: false },
    { month: 'Dec', actual: 5000, predicted: 5000, variance: 0, anomaly: false }
  ];

  // Risk assessment categories
  const riskCategories = [
    { category: 'Funding Gap', risk: 85, trend: 'increasing', impact: 'High' },
    { category: 'Component Age', risk: 78, trend: 'stable', impact: 'High' },
    { category: 'Spending Variance', risk: 45, trend: 'decreasing', impact: 'Medium' },
    { category: 'Market Conditions', risk: 32, trend: 'stable', impact: 'Low' },
    { category: 'Regulatory Changes', risk: 28, trend: 'decreasing', impact: 'Medium' }
  ];

  const getRiskColor = (level) => {
    switch (level.toLowerCase()) {
      case 'critical': return '#dc2626';
      case 'high': return '#ea580c';
      case 'medium': return '#ca8a04';
      case 'low': return '#16a34a';
      default: return '#6b7280';
    }
  };

  const getConditionColor = (condition) => {
    switch (condition.toLowerCase()) {
      case 'poor': return '#dc2626';
      case 'fair': return '#ea580c';
      case 'good': return '#16a34a';
      case 'excellent': return '#059669';
      default: return '#6b7280';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 z-10">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">ReserveIQ</span>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Predictive Overview', icon: Activity },
              { id: 'projections', label: 'Reserve Projections', icon: TrendingUp },
              { id: 'components', label: 'Component Analytics', icon: Settings },
              { id: 'patterns', label: 'Spending Patterns', icon: BarChart3 },
              { id: 'risks', label: 'Risk Assessment', icon: AlertTriangle },
              { id: 'insights', label: 'AI Insights', icon: Lightbulb }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Brain className="w-8 h-8 text-blue-600" />
                Advanced Reserve Analytics
              </h1>
              <p className="text-gray-600 mt-2">AI-powered predictive intelligence for reserve fund management</p>
            </div>
            <div className="flex items-center gap-4">
              <select 
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="3-year">3 Year Forecast</option>
                <option value="5-year">5 Year Forecast</option>
                <option value="10-year">10 Year Forecast</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Crisis Probability</p>
                    <p className="text-2xl font-bold text-red-600">78%</p>
                    <p className="text-xs text-gray-500">Next 24 months</p>
                  </div>
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Funding Shortfall</p>
                    <p className="text-2xl font-bold text-orange-600">$73K</p>
                    <p className="text-xs text-gray-500">By 2028</p>
                  </div>
                  <TrendingDown className="w-8 h-8 text-orange-600" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">ML Confidence</p>
                    <p className="text-2xl font-bold text-blue-600">92%</p>
                    <p className="text-xs text-gray-500">Prediction accuracy</p>
                  </div>
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Action Required</p>
                    <p className="text-2xl font-bold text-green-600">14</p>
                    <p className="text-xs text-gray-500">Months to act</p>
                  </div>
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
              </div>
            </div>

            {/* AI Recommendation Alert */}
            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-red-800">Critical Action Required</h3>
                  <p className="text-red-700 mt-1">
                    AI analysis predicts reserve fund crisis within 14 months. Immediate assessment increase of <strong>$35/unit/month</strong> 
                    required to prevent $50,000+ emergency assessment.
                  </p>
                  <div className="mt-4 flex gap-3">
                    <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                      Generate Board Presentation
                    </button>
                    <button className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50">
                      View Detailed Analysis
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Predictive Reserve Health Chart */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Reserve Fund Trajectory (ML-Enhanced)</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Current Path</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">ML Prediction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">Optimal Target</span>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={reserveProjection}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => `$${value / 1000}K`} />
                  <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                  <Area dataKey="optimal" fill="#10b981" fillOpacity={0.1} />
                  <Line type="monotone" dataKey="projected" stroke="#3b82f6" strokeWidth={3} />
                  <Line type="monotone" dataKey="mlPrediction" stroke="#8b5cf6" strokeWidth={3} strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="optimal" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Component Analytics Tab */}
        {activeTab === 'components' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Component Lifecycle Predictions</h3>
              <div className="space-y-4">
                {componentPredictions.map((component, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4">
                          <h4 className="font-semibold text-gray-900">{component.component}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium`} 
                                style={{ backgroundColor: getRiskColor(component.riskLevel) + '20', color: getRiskColor(component.riskLevel) }}>
                            {component.riskLevel} Risk
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium`}
                                style={{ backgroundColor: getConditionColor(component.condition) + '20', color: getConditionColor(component.condition) }}>
                            {component.condition}
                          </span>
                        </div>
                        <div className="mt-2 grid grid-cols-5 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Age:</span> {component.currentAge} years
                          </div>
                          <div>
                            <span className="font-medium">Lifespan:</span> {component.lifespan} years
                          </div>
                          <div>
                            <span className="font-medium">Replacement:</span> {component.replacement}
                          </div>
                          <div>
                            <span className="font-medium">Cost:</span> ${component.cost.toLocaleString()}
                          </div>
                          <div>
                            <span className="font-medium">Confidence:</span> {(component.confidence * 100).toFixed(0)}%
                          </div>
                        </div>
                      </div>
                      <div className="w-32">
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="h-2 rounded-full"
                            style={{ 
                              width: `${(component.currentAge / component.lifespan) * 100}%`,
                              backgroundColor: getRiskColor(component.riskLevel)
                            }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1 text-center">
                          {((component.lifespan - component.currentAge) / component.lifespan * 100).toFixed(0)}% life remaining
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Spending Patterns Tab */}
        {activeTab === 'patterns' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">AI-Powered Spending Pattern Analysis</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={spendingPatterns}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `$${value}`} />
                  <Tooltip />
                  <Bar dataKey="actual" fill="#3b82f6" name="Actual Spending" />
                  <Bar dataKey="predicted" fill="#10b981" name="ML Predicted" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Anomaly Detection */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending Anomalies Detected</h3>
              <div className="space-y-3">
                {spendingPatterns.filter(p => p.anomaly).map((anomaly, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="font-medium text-yellow-800">
                        {anomaly.month}: ${anomaly.variance.toLocaleString()} over prediction
                      </p>
                      <p className="text-sm text-yellow-700">
                        Actual: ${anomaly.actual.toLocaleString()} vs Predicted: ${anomaly.predicted.toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Risk Assessment Tab */}
        {activeTab === 'risks' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Multi-Factor Risk Assessment</h3>
              <div className="space-y-4">
                {riskCategories.map((risk, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4">
                          <h4 className="font-semibold text-gray-900">{risk.category}</h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            risk.impact === 'High' ? 'bg-red-100 text-red-800' :
                            risk.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {risk.impact} Impact
                          </span>
                        </div>
                        <div className="mt-2 flex items-center gap-4">
                          <div className="flex-1">
                            <div className="bg-gray-200 rounded-full h-3">
                              <div 
                                className={`h-3 rounded-full ${
                                  risk.risk >= 70 ? 'bg-red-500' :
                                  risk.risk >= 40 ? 'bg-yellow-500' :
                                  'bg-green-500'
                                }`}
                                style={{ width: `${risk.risk}%` }}
                              ></div>
                            </div>
                          </div>
                          <span className="text-sm font-medium text-gray-700">{risk.risk}% Risk</span>
                          <span className={`text-sm ${
                            risk.trend === 'increasing' ? 'text-red-600' :
                            risk.trend === 'decreasing' ? 'text-green-600' :
                            'text-gray-600'
                          }`}>
                            {risk.trend === 'increasing' ? '↗' : risk.trend === 'decreasing' ? '↘' : '→'} {risk.trend}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* AI Insights Tab */}
        {activeTab === 'insights' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border">
              <div className="flex items-start gap-4">
                <Brain className="w-8 h-8 text-purple-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Generated Insights</h3>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-purple-800 mb-2">Critical Finding #1</h4>
                      <p className="text-gray-700">
                        Roof replacement timing coincides with HVAC replacement in 2028-2029, creating a potential 
                        $127,000 combined expense that will exceed available reserves by $73,000.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-purple-800 mb-2">Optimization Opportunity</h4>
                      <p className="text-gray-700">
                        Implementing a $35/unit monthly increase now prevents the need for a $6,400/unit special 
                        assessment in 2028. This saves owners $4,530 per unit (71% cost reduction).
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border">
                      <h4 className="font-semibold text-purple-800 mb-2">Market Intelligence</h4>
                      <p className="text-gray-700">
                        Compared to similar 1990s buildings in Toronto, Maple Heights is spending 18% more on 
                        maintenance and 23% less on preventive measures, suggesting reactive vs. proactive management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedReserveAnalytics;