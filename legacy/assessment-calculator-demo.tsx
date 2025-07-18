import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Users,
  Home,
  Calendar,
  Target,
  Zap,
  Download,
  Share,
  Bell,
  Settings,
  Menu,
  X,
  BarChart3,
  Upload,
  ArrowRight,
  Info,
  PieChart,
  Eye
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart as RechartsPieChart, Cell } from 'recharts';

const AssessmentCalculatorDemo = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [calculatorInputs, setCalculatorInputs] = useState({
    totalUnits: 156,
    currentReserve: 125000,
    targetReserve: 170000,
    currentMonthlyFee: 425,
    majorExpense: 85000,
    expenseTimeline: 18, // months
    projectName: 'Roof Replacement'
  });

  const [selectedScenario, setSelectedScenario] = useState('increase');
  const [calculationResults, setCalculationResults] = useState(null);

  // Calculate results whenever inputs change
  useEffect(() => {
    calculateScenarios();
  }, [calculatorInputs, selectedScenario]);

  const calculateScenarios = () => {
    const { totalUnits, currentReserve, majorExpense, expenseTimeline, currentMonthlyFee } = calculatorInputs;
    
    const shortfall = Math.max(0, majorExpense - currentReserve);
    const monthsToAccumulate = expenseTimeline;
    
    // Scenario 1: Monthly Fee Increase
    const monthlyIncreaseNeeded = Math.ceil(shortfall / (totalUnits * monthsToAccumulate));
    const newMonthlyFee = currentMonthlyFee + monthlyIncreaseNeeded;
    const totalCostIncrease = monthlyIncreaseNeeded * monthsToAccumulate;
    
    // Scenario 2: Special Assessment
    const specialAssessmentPerUnit = Math.ceil(shortfall / totalUnits);
    const totalSpecialAssessment = specialAssessmentPerUnit * totalUnits;
    
    // Scenario 3: Hybrid Approach
    const hybridMonthlyIncrease = Math.ceil(monthlyIncreaseNeeded * 0.6);
    const hybridAssessment = Math.ceil((shortfall - (hybridMonthlyIncrease * totalUnits * monthsToAccumulate)) / totalUnits);
    
    // Scenario 4: Delayed Payment (Crisis)
    const delayedAssessment = Math.ceil((majorExpense * 1.25) / totalUnits); // 25% penalty for delay
    
    setCalculationResults({
      shortfall,
      monthlyIncrease: {
        perUnitIncrease: monthlyIncreaseNeeded,
        newMonthlyFee,
        totalCostPerUnit: totalCostIncrease,
        totalRevenue: monthlyIncreaseNeeded * totalUnits * monthsToAccumulate
      },
      specialAssessment: {
        perUnit: specialAssessmentPerUnit,
        total: totalSpecialAssessment,
        dueDate: new Date(Date.now() + expenseTimeline * 30 * 24 * 60 * 60 * 1000).toLocaleDateString()
      },
      hybrid: {
        monthlyIncrease: hybridMonthlyIncrease,
        assessmentPerUnit: hybridAssessment,
        totalCostPerUnit: (hybridMonthlyIncrease * monthsToAccumulate) + hybridAssessment
      },
      delayed: {
        perUnit: delayedAssessment,
        total: delayedAssessment * totalUnits,
        penalty: delayedAssessment - specialAssessmentPerUnit
      }
    });
  };

  const scenarios = calculationResults ? [
    {
      id: 'increase',
      title: 'Monthly Fee Increase',
      subtitle: 'Gradual, predictable payments',
      costPerUnit: calculationResults.monthlyIncrease.totalCostPerUnit,
      monthlyImpact: calculationResults.monthlyIncrease.perUnitIncrease,
      timeframe: `${calculatorInputs.expenseTimeline} months`,
      pros: ['Predictable monthly cost', 'No large upfront payment', 'Builds reserve for future'],
      cons: ['Permanent fee increase', 'Takes time to accumulate funds'],
      color: 'green',
      icon: TrendingUp,
      recommended: true
    },
    {
      id: 'assessment',
      title: 'Special Assessment',
      subtitle: 'One-time payment',
      costPerUnit: calculationResults.specialAssessment.perUnit,
      monthlyImpact: 0,
      timeframe: 'Immediate',
      pros: ['One-time payment', 'No ongoing fee increase', 'Immediate funding'],
      cons: ['Large upfront cost', 'Financial burden on owners', 'No reserve building'],
      color: 'yellow',
      icon: DollarSign
    },
    {
      id: 'hybrid',
      title: 'Hybrid Approach',
      subtitle: 'Smaller fee increase + assessment',
      costPerUnit: calculationResults.hybrid.totalCostPerUnit,
      monthlyImpact: calculationResults.hybrid.monthlyIncrease,
      timeframe: `${calculatorInputs.expenseTimeline} months + assessment`,
      pros: ['Balanced approach', 'Lower assessment amount', 'Builds some reserves'],
      cons: ['Still requires assessment', 'Complex to explain'],
      color: 'blue',
      icon: Target
    },
    {
      id: 'delayed',
      title: 'Crisis Response',
      subtitle: 'Wait until emergency',
      costPerUnit: calculationResults.delayed.perUnit,
      monthlyImpact: 0,
      timeframe: 'Emergency only',
      pros: ['No immediate action needed'],
      cons: ['25% cost penalty', 'Emergency repairs cost more', 'Potential building damage', 'Owner anger'],
      color: 'red',
      icon: AlertTriangle,
      warning: true
    }
  ] : [];

  const getScenarioColor = (color) => {
    const colors = {
      green: 'border-green-200 bg-green-50',
      yellow: 'border-yellow-200 bg-yellow-50',
      blue: 'border-blue-200 bg-blue-50',
      red: 'border-red-200 bg-red-50'
    };
    return colors[color] || colors.blue;
  };

  const getScenarioTextColor = (color) => {
    const colors = {
      green: 'text-green-800',
      yellow: 'text-yellow-800',
      blue: 'text-blue-800',
      red: 'text-red-800'
    };
    return colors[color] || colors.blue;
  };

  const comparisonData = scenarios.map(scenario => ({
    name: scenario.title,
    cost: scenario.costPerUnit,
    monthly: scenario.monthlyImpact,
    color: scenario.color
  }));

  const timelineData = calculationResults ? [
    { month: 'Month 1', reserve: calculatorInputs.currentReserve, needed: calculatorInputs.majorExpense },
    { month: 'Month 6', reserve: calculatorInputs.currentReserve + (calculationResults.monthlyIncrease.perUnitIncrease * calculatorInputs.totalUnits * 6), needed: calculatorInputs.majorExpense },
    { month: 'Month 12', reserve: calculatorInputs.currentReserve + (calculationResults.monthlyIncrease.perUnitIncrease * calculatorInputs.totalUnits * 12), needed: calculatorInputs.majorExpense },
    { month: `Month ${calculatorInputs.expenseTimeline}`, reserve: calculatorInputs.majorExpense, needed: calculatorInputs.majorExpense }
  ] : [];

  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform lg:translate-x-0 lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">ReserveIQ</span>
        </div>
        <button 
          onClick={() => setSidebarOpen(false)}
          className="lg:hidden p-1 rounded-md hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="p-4 space-y-2">
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <BarChart3 className="w-5 h-5" />
          Dashboard
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <Upload className="w-5 h-5" />
          Documents
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <DollarSign className="w-5 h-5" />
          Financial
        </a>
        <a 
          href="#" 
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium"
        >
          <Calculator className="w-5 h-5" />
          Calculator
        </a>
      </nav>
    </div>
  );

  const ScenarioCard = ({ scenario, isSelected, onSelect }) => {
    const Icon = scenario.icon;
    
    return (
      <div 
        className={`p-6 rounded-lg border cursor-pointer transition-all ${
          isSelected 
            ? `${getScenarioColor(scenario.color)} ring-2 ring-blue-500` 
            : 'border-gray-200 hover:border-gray-300'
        } ${scenario.warning ? 'border-red-300' : ''}`}
        onClick={() => onSelect(scenario.id)}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Icon className={`w-6 h-6 ${getScenarioTextColor(scenario.color)}`} />
            <div>
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                {scenario.title}
                {scenario.recommended && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    Recommended
                  </span>
                )}
                {scenario.warning && (
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                    Not Recommended
                  </span>
                )}
              </h3>
              <p className="text-sm text-gray-600">{scenario.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Cost per unit:</span>
            <span className="font-semibold text-gray-900">${scenario.costPerUnit.toLocaleString()}</span>
          </div>
          {scenario.monthlyImpact > 0 && (
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Monthly increase:</span>
              <span className="font-semibold text-gray-900">+${scenario.monthlyImpact}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Timeframe:</span>
            <span className="font-semibold text-gray-900">{scenario.timeframe}</span>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-green-700 mb-1">Pros:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {scenario.pros.map((pro, index) => (
                <li key={index} className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-red-700 mb-1">Cons:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {scenario.cons.map((con, index) => (
                <li key={index} className="flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3 text-red-500" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col">
        {/* Demo Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-blue-900 text-sm font-bold">✨</span>
              </div>
              <div>
                <span className="font-semibold">Interactive Demo</span>
                <span className="ml-2 opacity-90">You're viewing sample data from Maple Heights Condominiums</span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white bg-opacity-20 text-white rounded-lg hover:bg-opacity-30 transition-colors">
              <Users className="w-4 h-4" />
              Join Beta for YOUR Documents
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Assessment Calculator Demo</h1>
                <p className="text-gray-600">See how ReserveIQ compares funding strategies and shows owners real cost impact</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Try changing the inputs below</span>
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="w-4 h-4" />
                Export Demo Report
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Input Section */}
          <div className="bg-white p-6 rounded-lg border shadow-sm mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Calculator className="w-5 h-5" />
                Demo: Assessment Calculator Inputs
              </h3>
              <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-sm">
                <Info className="w-4 h-4" />
                <span>Try modifying these values</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Name
                </label>
                <input
                  type="text"
                  value={calculatorInputs.projectName}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, projectName: e.target.value})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Total Units
                </label>
                <input
                  type="number"
                  value={calculatorInputs.totalUnits}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, totalUnits: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Monthly Fee
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={calculatorInputs.currentMonthlyFee}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, currentMonthlyFee: parseInt(e.target.value)})}
                    className="w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Reserve Fund
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={calculatorInputs.currentReserve}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, currentReserve: parseInt(e.target.value)})}
                    className="w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Major Expense Cost
                </label>
                <div className="relative">
                  <DollarSign className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="number"
                    value={calculatorInputs.majorExpense}
                    onChange={(e) => setCalculatorInputs({...calculatorInputs, majorExpense: parseInt(e.target.value)})}
                    className="w-full pl-9 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Timeline (months)
                </label>
                <input
                  type="number"
                  value={calculatorInputs.expenseTimeline}
                  onChange={(e) => setCalculatorInputs({...calculatorInputs, expenseTimeline: parseInt(e.target.value)})}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Summary Card */}
          {calculationResults && (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">Funding Gap Analysis</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-600">Project: {calculatorInputs.projectName}</div>
                  <div className="text-2xl font-bold text-gray-900">${calculatorInputs.majorExpense.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Total cost in {calculatorInputs.expenseTimeline} months</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Current Reserve Fund</div>
                  <div className="text-2xl font-bold text-gray-900">${calculatorInputs.currentReserve.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Available now</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Funding Shortfall</div>
                  <div className="text-2xl font-bold text-red-600">${calculationResults.shortfall.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Must be raised</div>
                </div>
              </div>
            </div>
          )}

          {/* Scenario Comparison */}
          {calculationResults && (
            <>
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Funding Strategy Comparison</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {scenarios.map((scenario) => (
                    <ScenarioCard
                      key={scenario.id}
                      scenario={scenario}
                      isSelected={selectedScenario === scenario.id}
                      onSelect={setSelectedScenario}
                    />
                  ))}
                </div>
              </div>

              {/* Visual Comparison Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Cost Comparison Chart */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost per Unit Comparison</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={comparisonData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Cost per Unit']} />
                      <Bar dataKey="cost" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Timeline Chart */}
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Reserve Fund Timeline</h3>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={timelineData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                      <Line type="monotone" dataKey="reserve" stroke="#10b981" strokeWidth={2} name="Reserve Fund" />
                      <Line type="monotone" dataKey="needed" stroke="#ef4444" strokeWidth={2} name="Amount Needed" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </>
          )}

          {/* Demo CTA Section */}
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border-2 border-blue-200 p-8 text-center mb-8">
            <div className="max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Impressed by the Demo?</h3>
              <p className="text-lg text-gray-700 mb-6">
                This is just one feature of ReserveIQ. Imagine uploading YOUR reserve study, budgets, and meeting minutes, 
                then asking questions like <em>"What are our biggest financial risks?"</em> or <em>"Which vendors were discussed in the last board meeting?"</em>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Users className="w-5 h-5" />
                  Join Document Upload Beta
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  <Eye className="w-5 h-5" />
                  See More Features
                </button>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                ✓ Beta includes 1-on-1 setup • ✓ Early access pricing • ✓ Upload unlimited documents
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AssessmentCalculatorDemo;
