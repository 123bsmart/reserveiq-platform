import React, { useState } from 'react';
import { 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Upload, 
  DollarSign, 
  MessageSquare, 
  BarChart3, 
  Calculator, 
  Shield, 
  FileText,
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Settings,
  Users,
  Home,
  Calendar,
  Bell,
  Menu,
  X
} from 'lucide-react';

const CondoIQDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Mock data - in production this would come from API
  const buildingData = {
    name: "Maple Heights Condominiums",
    totalUnits: 156,
    reserveFund: 125000,
    targetReserve: 170000,
    healthScore: 68,
    upcomingExpenses: [
      { item: "Roof Replacement", cost: 85000, timeline: "18 months" },
      { item: "HVAC System", cost: 42000, timeline: "24 months" },
      { item: "Parking Garage", cost: 28000, timeline: "12 months" }
    ]
  };

  const alerts = [
    { 
      id: 1,
      type: 'critical', 
      title: 'Reserve Fund Crisis Alert',
      message: 'Current funding rate insufficient for upcoming major repairs. Immediate board action required.',
      action: 'Run Assessment Calculator',
      priority: 'high'
    },
    { 
      id: 2,
      type: 'warning', 
      title: 'Compliance Gap Detected',
      message: 'Reserve study expires in 4 months. Schedule engineering assessment by March 2025.',
      action: 'View Compliance Tracker',
      priority: 'medium'
    },
    { 
      id: 3,
      type: 'info', 
      title: 'Budget Variance Alert',
      message: 'Utilities 18% over budget this quarter. Review energy efficiency improvements.',
      action: 'View Financial Report',
      priority: 'low'
    }
  ];

  const getHealthScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getHealthScoreBackground = (score) => {
    if (score >= 80) return 'from-green-500 to-green-600';
    if (score >= 60) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  const ReserveHealthWidget = () => {
    const score = buildingData.healthScore;
    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="bg-white p-6 rounded-lg border shadow-sm">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <BarChart3 className="w-5 h-5" />
          Reserve Health Score
        </h3>
        
        <div className="flex items-center justify-center mb-4">
          <div className="relative w-32 h-32">
            <svg className="transform -rotate-90 w-32 h-32">
              <circle
                cx="64"
                cy="64"
                r={radius}
                stroke="#e5e7eb"
                strokeWidth="8"
                fill="transparent"
              />
              <circle
                cx="64"
                cy="64"
                r={radius}
                stroke={score >= 80 ? "#10b981" : score >= 60 ? "#f59e0b" : "#ef4444"}
                strokeWidth="8"
                fill="transparent"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className={`text-3xl font-bold ${getHealthScoreColor(score)}`}>
                  {score}%
                </div>
                <div className="text-sm text-gray-500">Health</div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Current Reserve:</span>
            <span className="font-medium">${buildingData.reserveFund.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Target Reserve:</span>
            <span className="font-medium">${buildingData.targetReserve.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Shortfall:</span>
            <span className="font-medium text-red-600">
              ${(buildingData.targetReserve - buildingData.reserveFund).toLocaleString()}
            </span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5" />
            <div className="text-sm">
              <div className="font-medium text-yellow-800">Action Required</div>
              <div className="text-yellow-700">Consider special assessment or fee increase to avoid crisis-level underfunding.</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const MetricCard = ({ icon: Icon, title, value, subtitle, trend, color = "blue" }) => {
    const colorClasses = {
      blue: "border-blue-200 bg-blue-50",
      green: "border-green-200 bg-green-50", 
      orange: "border-orange-200 bg-orange-50",
      red: "border-red-200 bg-red-50"
    };

    const iconColors = {
      blue: "text-blue-600",
      green: "text-green-600",
      orange: "text-orange-600", 
      red: "text-red-600"
    };

    return (
      <div className={`p-6 rounded-lg border ${colorClasses[color]}`}>
        <div className="flex items-center gap-3">
          <Icon className={`w-8 h-8 ${iconColors[color]}`} />
          <div>
            <div className="text-2xl font-bold text-gray-900">{value}</div>
            <div className="text-gray-700 font-medium">{title}</div>
            {subtitle && (
              <div className="text-sm text-gray-600 mt-1">{subtitle}</div>
            )}
            {trend && (
              <div className="flex items-center gap-1 mt-1">
                {trend.direction === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-green-600" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600" />
                )}
                <span className={`text-sm ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                  {trend.value}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const AlertItem = ({ alert }) => {
    const getAlertStyles = (type) => {
      switch (type) {
        case 'critical':
          return {
            border: 'border-red-200',
            bg: 'bg-red-50',
            icon: XCircle,
            iconColor: 'text-red-600'
          };
        case 'warning':
          return {
            border: 'border-yellow-200', 
            bg: 'bg-yellow-50',
            icon: AlertTriangle,
            iconColor: 'text-yellow-600'
          };
        default:
          return {
            border: 'border-blue-200',
            bg: 'bg-blue-50', 
            icon: CheckCircle,
            iconColor: 'text-blue-600'
          };
      }
    };

    const styles = getAlertStyles(alert.type);
    const Icon = styles.icon;

    return (
      <div className={`p-4 rounded-lg border ${styles.border} ${styles.bg}`}>
        <div className="flex items-start gap-3">
          <Icon className={`w-5 h-5 ${styles.iconColor} mt-0.5`} />
          <div className="flex-1">
            <div className="font-medium text-gray-900 mb-1">{alert.title}</div>
            <div className="text-sm text-gray-700 mb-2">{alert.message}</div>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800">
              {alert.action} →
            </button>
          </div>
        </div>
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
        <a 
          href="#" 
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium"
        >
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
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <Shield className="w-5 h-5" />
          Compliance
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <Calculator className="w-5 h-5" />
          Calculators
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <MessageSquare className="w-5 h-5" />
          Communications
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <FileText className="w-5 h-5" />
          Reports
        </a>
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium text-gray-900">{buildingData.name}</div>
          <div className="text-xs text-gray-600">{buildingData.totalUnits} Units</div>
        </div>
      </div>
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
        {/* Top Header */}
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
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600">Reserve health and financial overview</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 rounded-lg hover:bg-gray-100">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-100">
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Quick Actions */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Upload className="w-4 h-4" />
                Upload Document
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
                <Calculator className="w-4 h-4" />
                Assessment Calculator
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition-colors">
                <FileText className="w-4 h-4" />
                Generate Report
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <MetricCard 
              icon={Home}
              title="Total Units"
              value={buildingData.totalUnits}
              subtitle="Active units"
              color="blue"
            />
            <MetricCard 
              icon={DollarSign}
              title="Reserve Fund"
              value={`$${Math.round(buildingData.reserveFund/1000)}K`}
              subtitle="Current balance"
              trend={{ direction: 'down', value: '12% below target' }}
              color="orange"
            />
            <MetricCard 
              icon={AlertTriangle}
              title="Active Alerts"
              value="3"
              subtitle="Require attention"
              color="red"
            />
            <MetricCard 
              icon={Calendar}
              title="Next Major Expense"
              value="12 mo"
              subtitle="Parking garage repairs"
              color="orange"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Reserve Health Score */}
            <div>
              <ReserveHealthWidget />
            </div>

            {/* Active Alerts */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Active Alerts & Recommendations
                </h3>
                <div className="space-y-4">
                  {alerts.map(alert => (
                    <AlertItem key={alert.id} alert={alert} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Expenses */}
          <div className="mt-8">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Upcoming Major Expenses
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {buildingData.upcomingExpenses.map((expense, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="font-medium text-gray-900">{expense.item}</div>
                    <div className="text-2xl font-bold text-gray-900 mt-1">
                      ${expense.cost.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Timeline: {expense.timeline}</div>
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

export default CondoIQDashboard;