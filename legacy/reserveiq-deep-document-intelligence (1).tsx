import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';
import { Upload, FileText, Brain, AlertTriangle, TrendingUp, CheckCircle, Clock, Zap, Search, Filter, Download, Eye, ArrowRight, Building, DollarSign, Calendar, Wrench, Target, Info } from 'lucide-react';

const DeepDocumentIntelligence = () => {
  const [selectedDocument, setSelectedDocument] = useState('reserve-study-2024');
  const [activeTab, setActiveTab] = useState('insights');
  const [analysisComplete, setAnalysisComplete] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock document analysis data
  const documentAnalysis = {
    'reserve-study-2024': {
      name: 'Reserve Study 2024 - Maple Heights',
      type: 'Reserve Study',
      pages: 127,
      uploadDate: '2024-06-15',
      confidence: 94,
      processingTime: '2.3 seconds',
      keyInsights: {
        criticalFindings: 12,
        componentsPredicted: 45,
        riskAreas: 8,
        costProjections: 15
      },
      components: [
        {
          name: 'Roof Membrane',
          currentAge: 18,
          usefulLife: 20,
          replacementCost: 485000,
          condition: 'Fair',
          riskScore: 85,
          failureProbability: 0.73,
          recommendedAction: 'Immediate attention required',
          predictedFailure: '2025-Q2',
          urgency: 'high'
        },
        {
          name: 'HVAC System',
          currentAge: 12,
          usefulLife: 15,
          replacementCost: 320000,
          condition: 'Good',
          riskScore: 45,
          failureProbability: 0.35,
          recommendedAction: 'Monitor closely',
          predictedFailure: '2027-Q1',
          urgency: 'medium'
        },
        {
          name: 'Elevator System',
          currentAge: 8,
          usefulLife: 25,
          replacementCost: 180000,
          condition: 'Excellent',
          riskScore: 15,
          failureProbability: 0.08,
          recommendedAction: 'Routine maintenance',
          predictedFailure: '2031-Q3',
          urgency: 'low'
        },
        {
          name: 'Parking Garage Membrane',
          currentAge: 15,
          usefulLife: 18,
          replacementCost: 220000,
          condition: 'Fair',
          riskScore: 72,
          failureProbability: 0.68,
          recommendedAction: 'Plan replacement',
          predictedFailure: '2026-Q1',
          urgency: 'high'
        },
        {
          name: 'Windows & Balcony Doors',
          currentAge: 20,
          usefulLife: 25,
          replacementCost: 890000,
          condition: 'Fair',
          riskScore: 68,
          failureProbability: 0.55,
          recommendedAction: 'Budget for replacement',
          predictedFailure: '2027-Q4',
          urgency: 'medium'
        }
      ],
      timeline: [
        { year: 2025, expenditure: 485000, components: ['Roof Membrane'], risk: 'Critical' },
        { year: 2026, expenditure: 220000, components: ['Parking Garage'], risk: 'High' },
        { year: 2027, expenditure: 1210000, components: ['HVAC', 'Windows'], risk: 'Medium' },
        { year: 2028, expenditure: 85000, components: ['Misc Repairs'], risk: 'Low' },
        { year: 2029, expenditure: 125000, components: ['Landscaping'], risk: 'Low' }
      ],
      riskAnalysis: {
        immediate: 2,
        shortTerm: 3,
        longTerm: 8,
        totalExposure: 2.1
      },
      aiInsights: [
        {
          type: 'critical',
          title: 'Catastrophic Failure Risk Detected',
          description: 'Roof membrane showing signs of accelerated deterioration. Weather pattern analysis indicates 73% failure probability within 18 months.',
          impact: '$485,000 emergency cost + potential unit damage',
          recommendation: 'Schedule immediate inspection and budget for Q2 2025 replacement',
          confidence: 0.94
        },
        {
          type: 'financial',
          title: 'Reserve Fund Shortfall Identified',
          description: 'Current funding insufficient for projected 2025-2027 expenditures. Shortfall of $890,000 detected.',
          impact: 'Potential $7,200/unit special assessment',
          recommendation: 'Increase monthly contributions by $385/unit immediately',
          confidence: 0.87
        },
        {
          type: 'opportunity',
          title: 'Bulk Replacement Savings Opportunity',
          description: 'HVAC and windows scheduled within 12 months. Coordinated replacement could save 15-20%.',
          impact: 'Potential savings: $180,000-240,000',
          recommendation: 'Consider bundled procurement for 2027 projects',
          confidence: 0.91
        }
      ]
    }
  };

  const documents = [
    { id: 'reserve-study-2024', name: 'Reserve Study 2024', type: 'Reserve Study', status: 'analyzed' },
    { id: 'budget-2024', name: 'Annual Budget 2024', type: 'Financial', status: 'analyzing' },
    { id: 'inspection-report', name: 'Building Inspection Report', type: 'Inspection', status: 'pending' },
    { id: 'insurance-claim', name: 'Insurance Claim History', type: 'Insurance', status: 'analyzed' }
  ];

  const currentDoc = documentAnalysis[selectedDocument];

  const getRiskColor = (riskScore) => {
    if (riskScore >= 70) return 'text-red-600 bg-red-50 border-red-200';
    if (riskScore >= 40) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-green-600 bg-green-50 border-green-200';
  };

  const getUrgencyIcon = (urgency) => {
    switch (urgency) {
      case 'high': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'medium': return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'low': return <CheckCircle className="h-4 w-4 text-green-500" />;
      default: return <Info className="h-4 w-4 text-gray-500" />;
    }
  };

  const ComponentCard = ({ component }) => (
    <div className={`border rounded-lg p-4 ${getRiskColor(component.riskScore)}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-lg">{component.name}</h3>
        <div className="flex items-center space-x-2">
          {getUrgencyIcon(component.urgency)}
          <span className="text-sm font-medium">Risk: {component.riskScore}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span className="font-medium">Age:</span> {component.currentAge}/{component.usefulLife} years
        </div>
        <div>
          <span className="font-medium">Condition:</span> {component.condition}
        </div>
        <div>
          <span className="font-medium">Replacement Cost:</span> ${component.replacementCost.toLocaleString()}
        </div>
        <div>
          <span className="font-medium">Failure Risk:</span> {Math.round(component.failureProbability * 100)}%
        </div>
      </div>
      
      <div className="mt-3 pt-3 border-t border-opacity-30">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Predicted Failure:</span>
          <span className="text-sm">{component.predictedFailure}</span>
        </div>
        <div className="mt-2">
          <span className="text-sm font-medium">AI Recommendation:</span>
          <p className="text-sm mt-1">{component.recommendedAction}</p>
        </div>
      </div>
    </div>
  );

  const InsightCard = ({ insight }) => {
    const getInsightIcon = (type) => {
      switch (type) {
        case 'critical': return <AlertTriangle className="h-5 w-5 text-red-500" />;
        case 'financial': return <DollarSign className="h-5 w-5 text-blue-500" />;
        case 'opportunity': return <TrendingUp className="h-5 w-5 text-green-500" />;
        default: return <Info className="h-5 w-5 text-gray-500" />;
      }
    };

    const getInsightColor = (type) => {
      switch (type) {
        case 'critical': return 'border-red-200 bg-red-50';
        case 'financial': return 'border-blue-200 bg-blue-50';
        case 'opportunity': return 'border-green-200 bg-green-50';
        default: return 'border-gray-200 bg-gray-50';
      }
    };

    return (
      <div className={`border rounded-lg p-4 ${getInsightColor(insight.type)}`}>
        <div className="flex items-start space-x-3">
          {getInsightIcon(insight.type)}
          <div className="flex-1">
            <h3 className="font-semibold text-lg mb-2">{insight.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{insight.description}</p>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">Financial Impact:</span>
                <span className="text-red-600 font-semibold">{insight.impact}</span>
              </div>
              <div className="text-sm">
                <span className="font-medium">AI Recommendation:</span>
                <p className="mt-1 text-gray-700">{insight.recommendation}</p>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span>Confidence Level: {Math.round(insight.confidence * 100)}%</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  AI Generated
                </span>
              </div>
            </div>
          </div>
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
              <h1 className="text-3xl font-bold text-gray-900 flex items-center">
                <Brain className="h-8 w-8 text-purple-600 mr-3" />
                Deep Document Intelligence
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Advanced AI analysis with component failure predictions and risk intelligence
              </p>
            </div>
            <div className="flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Upload className="h-4 w-4 mr-2" />
                Upload Document
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <Download className="h-4 w-4 mr-2" />
                Export Analysis
              </button>
            </div>
          </div>
        </div>

        {/* Document Selection */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Document Library</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {documents.map((doc) => (
              <div
                key={doc.id}
                onClick={() => setSelectedDocument(doc.id)}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedDocument === doc.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{doc.name}</p>
                    <p className="text-xs text-gray-500">{doc.type}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    doc.status === 'analyzed' ? 'bg-green-100 text-green-800' :
                    doc.status === 'analyzing' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {doc.status === 'analyzed' ? 'Complete' : 
                     doc.status === 'analyzing' ? 'Processing...' : 'Pending'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analysis Overview */}
        {currentDoc && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">{currentDoc.name}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>Pages: {currentDoc.pages}</span>
                <span>Processed: {currentDoc.processingTime}</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                  {currentDoc.confidence}% Confidence
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">{currentDoc.keyInsights.criticalFindings}</div>
                <div className="text-sm text-gray-600">Critical Findings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{currentDoc.keyInsights.componentsPredicted}</div>
                <div className="text-sm text-gray-600">Components Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600">{currentDoc.keyInsights.riskAreas}</div>
                <div className="text-sm text-gray-600">Risk Areas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">{currentDoc.keyInsights.costProjections}</div>
                <div className="text-sm text-gray-600">Cost Projections</div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'insights', label: 'AI Insights', icon: Brain },
              { id: 'components', label: 'Component Analysis', icon: Building },
              { id: 'timeline', label: 'Failure Timeline', icon: Calendar },
              { id: 'risks', label: 'Risk Assessment', icon: AlertTriangle }
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center space-x-2 py-3 px-1 border-b-2 font-medium text-sm ${
                  activeTab === id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* AI Insights Tab */}
        {activeTab === 'insights' && currentDoc && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis Complete</h3>
              <p className="text-purple-100">
                Our advanced AI has analyzed {currentDoc.pages} pages and identified {currentDoc.keyInsights.criticalFindings} critical insights 
                that require immediate attention. Component failure predictions are based on historical data from over 10,000 similar buildings.
              </p>
            </div>

            <div className="space-y-6">
              {currentDoc.aiInsights.map((insight, index) => (
                <InsightCard key={index} insight={insight} />
              ))}
            </div>
          </div>
        )}

        {/* Component Analysis Tab */}
        {activeTab === 'components' && currentDoc && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">Component Risk Analysis</h3>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search components..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter by Risk
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentDoc.components
                .filter(component => 
                  component.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .sort((a, b) => b.riskScore - a.riskScore)
                .map((component, index) => (
                  <ComponentCard key={index} component={component} />
                ))}
            </div>
          </div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && currentDoc && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Predicted Failure Timeline</h3>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={currentDoc.timeline}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis 
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                    label={{ value: 'Expenditure ($)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Projected Cost']}
                    labelFormatter={(year) => `Year ${year}`}
                  />
                  <Bar 
                    dataKey="expenditure" 
                    fill={(entry) => {
                      const risk = entry.risk;
                      return risk === 'Critical' ? '#dc2626' : 
                             risk === 'High' ? '#f59e0b' : 
                             risk === 'Medium' ? '#10b981' : '#6b7280';
                    }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentDoc.timeline.map((item, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-lg">Year {item.year}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      item.risk === 'Critical' ? 'bg-red-100 text-red-800' :
                      item.risk === 'High' ? 'bg-yellow-100 text-yellow-800' :
                      item.risk === 'Medium' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.risk} Risk
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    ${item.expenditure.toLocaleString()}
                  </div>
                  <div className="text-sm text-gray-600">
                    Components: {item.components.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Risk Assessment Tab */}
        {activeTab === 'risks' && currentDoc && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-500" />
                  <h3 className="font-semibold text-lg">Immediate Risk</h3>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {currentDoc.riskAnalysis.immediate}
                </div>
                <p className="text-sm text-gray-600">Components requiring immediate attention</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="h-6 w-6 text-yellow-500" />
                  <h3 className="font-semibold text-lg">Short-term Risk</h3>
                </div>
                <div className="text-3xl font-bold text-yellow-600 mb-2">
                  {currentDoc.riskAnalysis.shortTerm}
                </div>
                <p className="text-sm text-gray-600">Components at risk within 2 years</p>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-blue-500" />
                  <h3 className="font-semibold text-lg">Total Exposure</h3>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  ${currentDoc.riskAnalysis.totalExposure}M
                </div>
                <p className="text-sm text-gray-600">Total financial exposure over 5 years</p>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Risk vs. Cost Analysis</h3>
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart data={currentDoc.components}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="riskScore" 
                    label={{ value: 'Risk Score', position: 'insideBottom', offset: -10 }}
                  />
                  <YAxis 
                    dataKey="replacementCost"
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                    label={{ value: 'Replacement Cost ($)', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'replacementCost' ? `$${value.toLocaleString()}` : value,
                      name === 'replacementCost' ? 'Replacement Cost' : 'Risk Score'
                    ]}
                    labelFormatter={(label, payload) => payload[0]?.payload?.name || ''}
                  />
                  <Scatter 
                    dataKey="replacementCost" 
                    fill="#8884d8"
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeepDocumentIntelligence;