import React, { useState } from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  CheckCircle,
  XCircle,
  BarChart3,
  PieChart,
  Calendar,
  Target,
  CreditCard,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Bell,
  Settings,
  Home,
  Menu,
  X,
  Upload,
  Download,
  RefreshCw,
  Eye,
  Calculator
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell, Area, AreaChart } from 'recharts';

const FinancialDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState('12months');
  const [selectedView, setSelectedView] = useState('overview');

  // Mock financial data
  const financialData = {
    currentPeriod: "December 2024",
    reserveBalance: 125000,
    targetReserve: 170000,
    monthlyIncome: 66300, // 156 units × $425/month
    monthlyExpenses: 52800,
    cashFlow: 13500,
    yearToDateIncome: 795600,
    yearToDateExpenses: 633600,
    budgetVariance: -12500
  };

  const monthlyTrends = [
    { month: 'Jan', income: 64200, expenses: 48300, reserve: 98000, budget: 50000 },
    { month: 'Feb', income: 65100, expenses: 51200, reserve: 102900, budget: 50000 },
    { month: 'Mar', income: 65800, expenses: 49800, reserve: 119100, budget: 50000 },
    { month: 'Apr', income: 66000, expenses: 53400, reserve: 131700, budget: 50000 },
    { month: 'May', income: 66200, expenses: 52100, reserve: 145800, budget: 50000 },
    { month: 'Jun', income: 66300, expenses: 51800, reserve: 160300, budget: 50000 },
    { month: 'Jul', income: 66300, expenses: 54200, reserve: 172400, budget: 50000 },
    { month: 'Aug', income: 66300, expenses: 52900, reserve: 185800, budget: 50000 },
    { month: 'Sep', income: 66300, expenses: 53600, reserve: 198500, budget: 50000 },
    { month: 'Oct', income: 66300, expenses: 52200, reserve: 212600, budget: 50000 },
    { month: 'Nov', income: 66300, expenses: 55100, reserve: 223800, budget: 50000 },
    { month: 'Dec', income: 66300, expenses: 52800, reserve: 125000, budget: 50000 }
  ];

  const budgetCategories = [
    { category: 'Utilities', budgeted: 12000, actual: 14160, variance: 2160, status: 'over' },
    { category: 'Maintenance', budgeted: 8500, actual: 9520, variance: 1020, status: 'over' },
    { category: 'Insurance', budgeted: 6800, actual: 6650, variance: -150, status: 'under' },
    { category: 'Management', budgeted: 4200, actual: 4200, variance: 0, status: 'on-track' },
    { category: 'Landscaping', budgeted: 3200, actual: 2980, variance: -220, status: 'under' },
    { category: 'Security', budgeted: 2400, actual: 2390, variance: -10, status: 'under' },
    { category: 'Cleaning', budgeted: 1800, actual: 1920, variance: 120, status: 'over' },
    { category: 'Reserve Fund', budgeted: 13900, actual: 13900, variance: 0, status: 'on-track' }
  ];

  const upcomingExpenses = [
    { item: 'Roof Replacement', amount: 85000, timeline: '18 months', category: 'Capital', reserved: 45000, shortfall: 40000 },
    { item: 'HVAC System', amount: 42000, timeline: '24 months', category: 'Capital', reserved: 35000, shortfall: 7000 },
    { item: 'Parking Garage', amount: 28000, timeline: '12 months', category: 'Capital', reserved: 20000, shortfall: 8000 },
    { item: 'Elevator Modernization', amount: 35000, timeline: '60 months', category: 'Capital', reserved: 25000, shortfall: 10000 }
  ];

  const cashFlowProjection = [
    { month: 'Dec 24', balance: 125000, income: 66300, expenses: 52800 },
    { month: 'Jan 25', balance: 138500, income: 66300, expenses: 52800 },
    { month: 'Feb 25', balance: 152000, income: 66300, expenses: 52800 },
    { month: 'Mar 25', balance: 165500, income: 66300, expenses: 52800 },
    { month: 'Apr 25', balance: 179000, income: 66300, expenses: 52800 },
    { month: 'May 25', balance: 192500, income: 66300, expenses: 52800 },
    { month: 'Jun 25', balance: 206000, income: 66300, expenses: 52800 }
  ];

  const expenseBreakdown = [
    { name: 'Utilities', value: 14160, color: '#ef4444' },
    { name: 'Maintenance', value: 9520, color: '#f97316' },
    { name: 'Insurance', value: 6650, color: '#eab308' },
    { name: 'Management', value: 4200, color: '#22c55e' },
    { name: 'Other', value: 18270, color: '#6366f1' }
  ];

  const getVarianceColor = (status) => {
    switch (status) {
      case 'over': return 'text-red-600 bg-red-50';
      case 'under': return 'text-green-600 bg-green-50';
      default: return 'text-blue-600 bg-blue-50';
    }
  };

  const getVarianceIcon = (status) => {
    switch (status) {
      case 'over': return <ArrowUpRight className="w-4 h-4" />;
      case 'under': return <ArrowDownRight className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const MetricCard = ({ title, value, subtitle, trend, icon: Icon, color = 'blue' }) => {
    const colorClasses = {
      blue: 'border-blue-200 bg-blue-50',
      green: 'border-green-200 bg-green-50',
      red: 'border-red-200 bg-red-50',
      yellow: 'border-yellow-200 bg-yellow-50'
    };

    const iconColors = {
      blue: 'text-blue-600',
      green: 'text-green-600', 
      red: 'text-red-600',
      yellow: 'text-yellow-600'
    };

    return (
      <div className={`p-6 rounded-lg border ${colorClasses[color]}`}>
        <div className="flex items-center justify-between mb-2">
          <Icon className={`w-6 h-6 ${iconColors[color]}`} />
          {trend && (
            <div className={`flex items-center gap-1 text-sm ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
              {trend.positive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {trend.value}
            </div>
          )}
        </div>
        <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
        <div className="text-gray-700 font-medium">{title}</div>
        {subtitle && <div className="text-sm text-gray-600 mt-1">{subtitle}</div>}
      </div>
    );
  };

  const Sidebar = () => (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform lg:translate-x-0 lg:static ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Home className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">CondoIQ</span>
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
        <a 
          href="#" 
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium"
        >
          <DollarSign className="w-5 h-5" />
          Financial
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <AlertTriangle className="w-5 h-5" />
          Compliance
        </a>
      </nav>
    </div>
  );

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
                <h1 className="text-2xl font-bold text-gray-900">Financial Dashboard</h1>
                <p className="text-gray-600">Budget tracking, cash flow, and financial health monitoring</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="3months">Last 3 Months</option>
                <option value="6months">Last 6 Months</option>
                <option value="12months">Last 12 Months</option>
                <option value="ytd">Year to Date</option>
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <RefreshCw className="w-4 h-4" />
                Refresh Data
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Key Financial Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              icon={Wallet}
              title="Reserve Balance"
              value={`$${Math.round(financialData.reserveBalance/1000)}K`}
              subtitle="Current reserve fund"
              trend={{ positive: false, value: '26% below target' }}
              color="red"
            />
            <MetricCard 
              icon={TrendingUp}
              title="Monthly Cash Flow"
              value={`$${Math.round(financialData.cashFlow/1000)}K`}
              subtitle="Income minus expenses"
              trend={{ positive: true, value: '+8.2%' }}
              color="green"
            />
            <MetricCard 
              icon={CreditCard}
              title="Monthly Income"
              value={`$${Math.round(financialData.monthlyIncome/1000)}K`}
              subtitle="Maintenance fees collected"
              trend={{ positive: true, value: '+2.1%' }}
              color="blue"
            />
            <MetricCard 
              icon={AlertTriangle}
              title="Budget Variance"
              value={`$${Math.round(Math.abs(financialData.budgetVariance)/1000)}K`}
              subtitle="Over budget this month"
              trend={{ positive: false, value: '-18.5%' }}
              color="yellow"
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Cash Flow Trend */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Cash Flow Trend</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-blue-500 rounded"></div>
                    Income
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-red-500 rounded"></div>
                    Expenses
                  </div>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                  <Area type="monotone" dataKey="income" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="expenses" stackId="2" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Expense Breakdown */}
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Expense Breakdown</h3>
              <ResponsiveContainer width="100%" height={250}>
                <RechartsPieChart>
                  <Pie
                    data={expenseBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {expenseBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                </RechartsPieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-3 mt-4">
                {expenseBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Budget Variance Analysis */}
          <div className="bg-white rounded-lg border shadow-sm mb-8">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Budget vs Actual Analysis</h3>
                <span className="text-sm text-gray-600">Current Month: {financialData.currentPeriod}</span>
              </div>
            </div>
            <div className="p-6">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Category</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-900">Budgeted</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-900">Actual</th>
                      <th className="text-right py-3 px-4 font-medium text-gray-900">Variance</th>
                      <th className="text-center py-3 px-4 font-medium text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {budgetCategories.map((category, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium text-gray-900">{category.category}</td>
                        <td className="py-3 px-4 text-right text-gray-600">${category.budgeted.toLocaleString()}</td>
                        <td className="py-3 px-4 text-right text-gray-900">${category.actual.toLocaleString()}</td>
                        <td className={`py-3 px-4 text-right font-medium ${category.variance > 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {category.variance > 0 ? '+' : ''}${category.variance.toLocaleString()}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getVarianceColor(category.status)}`}>
                            {getVarianceIcon(category.status)}
                            {category.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Upcoming Major Expenses */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Upcoming Major Expenses</h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Calculator className="w-4 h-4" />
                  Run Assessment Calculator
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingExpenses.map((expense, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">{expense.item}</h4>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span>Timeline: {expense.timeline}</span>
                        <span>Category: {expense.category}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-gray-900">${expense.amount.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Reserved: ${expense.reserved.toLocaleString()}</div>
                      <div className="text-sm font-medium text-red-600">Shortfall: ${expense.shortfall.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FinancialDashboard;