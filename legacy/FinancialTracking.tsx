import React, { useState } from 'react';
import { TrendingUp, TrendingDown, DollarSign, AlertTriangle, Calendar, Plus, Download, Filter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const FinancialTracking = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('12months');
  const [selectedBuilding, setSelectedBuilding] = useState('all');

  // Sample financial data
  const reserveFundData = [
    { month: 'Jan', balance: 125000, target: 180000, variance: -55000 },
    { month: 'Feb', balance: 128000, target: 185000, variance: -57000 },
    { month: 'Mar', balance: 132000, target: 190000, variance: -58000 },
    { month: 'Apr', balance: 127000, target: 195000, variance: -68000 },
    { month: 'May', balance: 135000, target: 200000, variance: -65000 },
    { month: 'Jun', balance: 142000, target: 205000, variance: -63000 }
  ];

  const expenseCategories = [
    { name: 'Maintenance', value: 45000, color: '#3b82f6' },
    { name: 'Utilities', value: 28000, color: '#10b981' },
    { name: 'Insurance', value: 15000, color: '#f59e0b' },
    { name: 'Management', value: 12000, color: '#ef4444' },
    { name: 'Other', value: 8000, color: '#8b5cf6' }
  ];

  const budgetVariance = [
    { category: 'Reserve Contributions', budgeted: 15000, actual: 12500, variance: -2500 },
    { category: 'Maintenance', budgeted: 8000, actual: 9200, variance: 1200 },
    { category: 'Utilities', budgeted: 4500, actual: 4200, variance: -300 },
    { category: 'Insurance', budgeted: 2500, actual: 2500, variance: 0 },
    { category: 'Management Fees', budgeted: 2000, actual: 2000, variance: 0 }
  ];

  const recentTransactions = [
    { id: 1, date: '2024-06-20', description: 'Monthly Reserve Contribution', amount: 12500, type: 'income', category: 'Reserve' },
    { id: 2, date: '2024-06-18', description: 'Elevator Maintenance', amount: -2800, type: 'expense', category: 'Maintenance' },
    { id: 3, date: '2024-06-15', description: 'Insurance Premium', amount: -2500, type: 'expense', category: 'Insurance' },
    { id: 4, date: '2024-06-12', description: 'Utility Bills', amount: -1400, type: 'expense', category: 'Utilities' },
    { id: 5, date: '2024-06-10', description: 'Management Fee', amount: -2000, type: 'expense', category: 'Management' }
  ];

  const alerts = [
    { id: 1, type: 'critical', message: 'Reserve fund 35% below target', action: 'Review funding strategy' },
    { id: 2, type: 'warning', message: 'Maintenance costs 15% over budget', action: 'Investigate recurring issues' },
    { id: 3, type: 'info', message: 'Utility costs trending down', action: 'Monitor for seasonal patterns' }
  ];

  const getAlertColor = (type) => {
    switch(type) {
      case 'critical': return 'bg-red-50 border-red-200 text-red-800';
      case 'warning': return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info': return 'bg-blue-50 border-blue-200 text-blue-800';
      default: return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Financial Tracking</h1>
            <p className="text-gray-600">Monitor reserve funds, expenses, and budget performance</p>
          </div>
          
          <div className="flex items-center gap-4">
            <select 
              value={selectedBuilding}
              onChange={(e) => setSelectedBuilding(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Buildings</option>
              <option value="maple">Maple Heights</option>
              <option value="lakeside">Lakeside Manor</option>
              <option value="sunset">Sunset Plaza</option>
            </select>
            
            <select 
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="6months">Last 6 Months</option>
              <option value="12months">Last 12 Months</option>
              <option value="24months">Last 24 Months</option>
            </select>
            
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>
        </div>

        {/* Financial Alerts */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Financial Alerts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {alerts.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-lg border ${getAlertColor(alert.type)}`}>
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-medium">{alert.message}</div>
                    <div className="text-sm mt-1 opacity-75">{alert.action}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Reserve Balance</div>
                <div className="text-2xl font-bold text-gray-900">$142,000</div>
                <div className="flex items-center gap-1 text-sm text-red-600">
                  <TrendingDown className="w-4 h-4" />
                  35% below target
                </div>
              </div>
              <DollarSign className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Monthly Income</div>
                <div className="text-2xl font-bold text-gray-900">$12,500</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  On track
                </div>
              </div>
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Monthly Expenses</div>
                <div className="text-2xl font-bold text-gray-900">$8,900</div>
                <div className="flex items-center gap-1 text-sm text-yellow-600">
                  <TrendingUp className="w-4 h-4" />
                  12% over budget
                </div>
              </div>
              <TrendingDown className="w-8 h-8 text-yellow-600" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Net Cash Flow</div>
                <div className="text-2xl font-bold text-gray-900">$3,600</div>
                <div className="flex items-center gap-1 text-sm text-green-600">
                  <TrendingUp className="w-4 h-4" />
                  Positive
                </div>
              </div>
              <Calendar className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Reserve Fund Trend */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reserve Fund vs Target</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={reserveFundData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
                <Line type="monotone" dataKey="balance" stroke="#3b82f6" strokeWidth={2} name="Actual Balance" />
                <Line type="monotone" dataKey="target" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" name="Target" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Expense Breakdown */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Expense Breakdown (YTD)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={expenseCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {expenseCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
              {expenseCategories.map((category, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <span>{category.name}: ${category.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Budget Variance and Recent Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Budget Variance */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Budget Variance (This Month)</h3>
            <div className="space-y-4">
              {budgetVariance.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{item.category}</div>
                    <div className="text-sm text-gray-600">
                      Budget: ${item.budgeted.toLocaleString()} | Actual: ${item.actual.toLocaleString()}
                    </div>
                  </div>
                  <div className={`text-right ${item.variance < 0 ? 'text-green-600' : item.variance > 0 ? 'text-red-600' : 'text-gray-600'}`}>
                    <div className="font-medium">
                      {item.variance < 0 ? '-' : item.variance > 0 ? '+' : ''}${Math.abs(item.variance).toLocaleString()}
                    </div>
                    <div className="text-xs">
                      {item.variance < 0 ? 'Under' : item.variance > 0 ? 'Over' : 'On'} budget
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
              <button className="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-1">
                <Plus className="w-4 h-4" />
                Add Transaction
              </button>
            </div>
            
            <div className="space-y-3">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{transaction.description}</div>
                    <div className="text-sm text-gray-600">{transaction.date} • {transaction.category}</div>
                  </div>
                  <div className={`text-right ${transaction.type === 'income' ? 'text-green-600' : 'text-red-600'}`}>
                    <div className="font-medium">
                      {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 py-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
              View All Transactions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialTracking;
