import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Calendar, 
  FileText, 
  Download,
  Bell,
  Settings,
  Home,
  Menu,
  X,
  BarChart3,
  Upload,
  DollarSign,
  Calculator,
  Search,
  Filter,
  Plus,
  ExternalLink,
  MapPin,
  Flag,
  Eye,
  RefreshCw,
  Users,
  Building
} from 'lucide-react';

const ComplianceTracker = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState('ontario');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedView, setSelectedView] = useState('grid');

  // Mock building data
  const buildingInfo = {
    name: "Maple Heights Condominiums",
    location: "Toronto, Ontario",
    units: 156,
    yearBuilt: 1998,
    floors: 12,
    corporationNumber: "TSCC 2156"
  };

  // Compliance requirements by jurisdiction
  const complianceRequirements = {
    ontario: [
      {
        id: 1,
        title: "Reserve Fund Study Renewal",
        description: "Engineering assessment of building components and reserve fund adequacy",
        deadline: "2025-03-15",
        frequency: "Every 3 years",
        status: "upcoming",
        daysUntil: 92,
        authority: "Condominium Act, 1998",
        section: "Section 94",
        penalty: "Board liability, potential lawsuits",
        lastCompleted: "2022-03-15",
        estimatedCost: 8500,
        documents: ["Reserve Study Report", "Engineering Assessment", "Board Resolution"],
        actionRequired: "Schedule engineering firm, notify owners"
      },
      {
        id: 2,
        title: "Form 15 - Future Funding Notice",
        description: "Notify owners of reserve fund shortfall and funding plans",
        deadline: "2025-01-30",
        frequency: "When shortfall identified",
        status: "overdue",
        daysUntil: -14,
        authority: "CAO Regulations",
        section: "Regulation 182/17",
        penalty: "$25,000 fine, director penalties",
        lastCompleted: "Never filed",
        estimatedCost: 0,
        documents: ["Form 15", "Reserve Study Summary", "Funding Plan"],
        actionRequired: "Complete Form 15 immediately, file with CAO"
      },
      {
        id: 3,
        title: "Annual Budget Disclosure",
        description: "Provide detailed budget information to unit owners",
        deadline: "2025-11-30",
        frequency: "Annually",
        status: "upcoming",
        daysUntil: 323,
        authority: "Condominium Act, 1998",
        section: "Section 103",
        penalty: "Non-compliance notices",
        lastCompleted: "2024-11-30",
        estimatedCost: 500,
        documents: ["Annual Budget", "Reserve Fund Status", "Variance Report"],
        actionRequired: "Prepare budget materials, schedule owner meeting"
      },
      {
        id: 4,
        title: "Insurance Certificate Update",
        description: "Provide current insurance certificates to owners and mortgagees",
        deadline: "2025-06-01",
        frequency: "Annually or when renewed",
        status: "completed",
        daysUntil: 140,
        authority: "Condominium Act, 1998",
        section: "Section 99",
        penalty: "Mortgage complications",
        lastCompleted: "2024-12-01",
        estimatedCost: 0,
        documents: ["Insurance Certificates", "Coverage Summary"],
        actionRequired: "None - completed"
      },
      {
        id: 5,
        title: "CAO Training Certification",
        description: "Board director mandatory training completion",
        deadline: "2025-05-15",
        frequency: "Within 6 months of election",
        status: "in-progress",
        daysUntil: 123,
        authority: "CAO Regulations",
        section: "Regulation 182/17",
        penalty: "Director disqualification",
        lastCompleted: "2024-05-15",
        estimatedCost: 200,
        documents: ["Training Certificates", "Completion Records"],
        actionRequired: "Complete outstanding director certifications"
      }
    ],
    bc: [
      {
        id: 6,
        title: "Annual General Meeting",
        description: "Hold annual general meeting of owners",
        deadline: "2025-04-30",
        frequency: "Annually",
        status: "upcoming",
        daysUntil: 109,
        authority: "Strata Property Act",
        section: "Section 40",
        penalty: "Owner complaints, legal action",
        lastCompleted: "2024-04-30",
        estimatedCost: 800,
        documents: ["Meeting Notice", "Financial Statements", "Minutes"],
        actionRequired: "Book venue, prepare financial statements"
      },
      {
        id: 7,
        title: "Depreciation Report",
        description: "Engineering assessment of building components and replacement timeline",
        deadline: "2026-12-31",
        frequency: "Every 5 years",
        status: "upcoming",
        daysUntil: 567,
        authority: "Strata Property Act",
        section: "Section 94",
        penalty: "Legal non-compliance",
        lastCompleted: "2021-12-31",
        estimatedCost: 12000,
        documents: ["Depreciation Report", "Engineering Assessment"],
        actionRequired: "Begin planning for 2026 renewal"
      }
    ],
    florida: [
      {
        id: 8,
        title: "Milestone Inspection",
        description: "Structural integrity inspection for buildings 30+ years or 3+ stories",
        deadline: "2025-06-21",
        frequency: "Every 10 years after 30 years",
        status: "critical",
        daysUntil: 160,
        authority: "Florida Building Code",
        section: "Section 553.899",
        penalty: "Building closure, fines up to $1,000/day",
        lastCompleted: "Never completed",
        estimatedCost: 15000,
        documents: ["Inspection Report", "Engineer Certification", "Repair Plan"],
        actionRequired: "Hire licensed engineer immediately"
      },
      {
        id: 9,
        title: "Structural Integrity Reserve Study",
        description: "Reserve study focusing on structural components",
        deadline: "2024-12-31",
        frequency: "Every 5 years",
        status: "overdue",
        daysUntil: -14,
        authority: "Florida Statute 718.112",
        section: "718.112(2)(f)",
        penalty: "Legal liability, potential lawsuits",
        lastCompleted: "Never completed",
        estimatedCost: 10000,
        documents: ["SIRS Report", "Component Analysis", "Funding Plan"],
        actionRequired: "Complete SIRS immediately"
      }
    ],
    texas: [
      {
        id: 10,
        title: "HOA Registration Renewal",
        description: "Renew HOA registration with county clerk",
        deadline: "2025-12-31",
        frequency: "Annually",
        status: "upcoming",
        daysUntil: 353,
        authority: "Texas Property Code",
        section: "Chapter 202",
        penalty: "Loss of legal standing",
        lastCompleted: "2024-12-31",
        estimatedCost: 150,
        documents: ["Registration Form", "Articles of Incorporation"],
        actionRequired: "Prepare renewal documentation"
      }
    ]
  };

  const jurisdictions = [
    { id: 'ontario', name: 'Ontario', flag: '🇨🇦', count: 5 },
    { id: 'bc', name: 'British Columbia', flag: '🇨🇦', count: 2 },
    { id: 'florida', name: 'Florida', flag: '🇺🇸', count: 2 },
    { id: 'texas', name: 'Texas', flag: '🇺🇸', count: 1 }
  ];

  const categories = [
    { id: 'all', name: 'All Requirements', count: 10 },
    { id: 'financial', name: 'Financial Reporting', count: 3 },
    { id: 'structural', name: 'Building Safety', count: 4 },
    { id: 'governance', name: 'Governance', count: 2 },
    { id: 'insurance', name: 'Insurance', count: 1 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue': return 'bg-red-100 text-red-800 border-red-200';
      case 'critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'upcoming': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'overdue': return <AlertTriangle className="w-4 h-4" />;
      case 'critical': return <AlertTriangle className="w-4 h-4" />;
      case 'upcoming': return <Clock className="w-4 h-4" />;
      case 'in-progress': return <RefreshCw className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  const getUrgencyLevel = (daysUntil) => {
    if (daysUntil < 0) return 'overdue';
    if (daysUntil <= 30) return 'critical';
    if (daysUntil <= 90) return 'upcoming';
    return 'planned';
  };

  const formatDeadline = (deadline) => {
    const date = new Date(deadline);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const currentRequirements = complianceRequirements[selectedJurisdiction] || [];

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
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <DollarSign className="w-5 h-5" />
          Financial
        </a>
        <a 
          href="#" 
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium"
        >
          <Shield className="w-5 h-5" />
          Compliance
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <Calculator className="w-5 h-5" />
          Calculator
        </a>
      </nav>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="text-sm font-medium text-gray-900">{buildingInfo.name}</div>
          <div className="text-xs text-gray-600">{buildingInfo.location}</div>
          <div className="text-xs text-gray-600">{buildingInfo.units} Units • Built {buildingInfo.yearBuilt}</div>
        </div>
      </div>
    </div>
  );

  const ComplianceCard = ({ requirement }) => (
    <div className="bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-semibold text-gray-900">{requirement.title}</h3>
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(requirement.status)}`}>
                {getStatusIcon(requirement.status)}
                {requirement.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{requirement.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">Deadline</div>
            <div className="text-sm font-medium text-gray-900">{formatDeadline(requirement.deadline)}</div>
            <div className={`text-xs ${requirement.daysUntil < 0 ? 'text-red-600' : requirement.daysUntil <= 30 ? 'text-orange-600' : 'text-gray-600'}`}>
              {requirement.daysUntil < 0 ? `${Math.abs(requirement.daysUntil)} days overdue` : `${requirement.daysUntil} days remaining`}
            </div>
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">Authority</div>
            <div className="text-sm font-medium text-gray-900">{requirement.authority}</div>
            <div className="text-xs text-gray-600">{requirement.section}</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">Action Required</div>
          <div className="text-sm text-gray-900">{requirement.actionRequired}</div>
        </div>

        {requirement.penalty && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="text-xs font-medium text-red-800 mb-1">⚠️ Non-Compliance Penalty</div>
            <div className="text-xs text-red-700">{requirement.penalty}</div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span>Cost: ${requirement.estimatedCost?.toLocaleString() || 'TBD'}</span>
            <span>Frequency: {requirement.frequency}</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <Eye className="w-4 h-4" />
            </button>
            <button className="p-1 text-gray-400 hover:text-gray-600">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const ComplianceStats = () => {
    const overdue = currentRequirements.filter(r => r.status === 'overdue').length;
    const critical = currentRequirements.filter(r => r.daysUntil <= 30 && r.daysUntil >= 0).length;
    const upcoming = currentRequirements.filter(r => r.daysUntil > 30 && r.daysUntil <= 90).length;
    const completed = currentRequirements.filter(r => r.status === 'completed').length;

    return (
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <div>
              <div className="text-2xl font-bold text-red-900">{overdue}</div>
              <div className="text-red-700 font-medium">Overdue</div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-orange-50 border border-orange-200 rounded-lg">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-orange-600" />
            <div>
              <div className="text-2xl font-bold text-orange-900">{critical}</div>
              <div className="text-orange-700 font-medium">Critical (≤30 days)</div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
          <div className="flex items-center gap-3">
            <Calendar className="w-8 h-8 text-yellow-600" />
            <div>
              <div className="text-2xl font-bold text-yellow-900">{upcoming}</div>
              <div className="text-yellow-700 font-medium">Upcoming (≤90 days)</div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-8 h-8 text-green-600" />
            <div>
              <div className="text-2xl font-bold text-green-900">{completed}</div>
              <div className="text-green-700 font-medium">Completed</div>
            </div>
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
                <h1 className="text-2xl font-bold text-gray-900">Compliance Tracker</h1>
                <p className="text-gray-600">Multi-jurisdiction regulatory compliance monitoring</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
                <Plus className="w-4 h-4" />
                Add Requirement
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Jurisdiction Selector */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Select Jurisdiction</h3>
            <div className="flex flex-wrap gap-3">
              {jurisdictions.map((jurisdiction) => (
                <button
                  key={jurisdiction.id}
                  onClick={() => setSelectedJurisdiction(jurisdiction.id)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg border transition-colors ${
                    selectedJurisdiction === jurisdiction.id
                      ? 'bg-blue-50 border-blue-200 text-blue-700'
                      : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-2xl">{jurisdiction.flag}</span>
                  <div className="text-left">
                    <div className="font-medium">{jurisdiction.name}</div>
                    <div className="text-sm text-gray-600">{jurisdiction.count} requirements</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Compliance Statistics */}
          <ComplianceStats />

          {/* Quick Actions */}
          <div className="mb-6">
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-gray-900">Quick Actions for {jurisdictions.find(j => j.id === selectedJurisdiction)?.name}</h3>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-2 px-3 py-2 text-sm bg-red-600 text-white rounded-lg hover:bg-red-700">
                    <AlertTriangle className="w-4 h-4" />
                    Address Overdue Items
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 text-sm bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                    <Clock className="w-4 h-4" />
                    Review Critical Deadlines
                  </button>
                  <button className="flex items-center gap-2 px-3 py-2 text-sm border rounded-lg hover:bg-gray-50">
                    <Calendar className="w-4 h-4" />
                    Set Reminders
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Requirements Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {jurisdictions.find(j => j.id === selectedJurisdiction)?.name} Requirements
              </h3>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search requirements..."
                    className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {currentRequirements
                .sort((a, b) => {
                  // Sort by status priority: overdue > critical > upcoming > completed
                  const statusPriority = { overdue: 0, critical: 1, upcoming: 2, 'in-progress': 3, completed: 4 };
                  return statusPriority[a.status] - statusPriority[b.status];
                })
                .map((requirement) => (
                  <ComplianceCard key={requirement.id} requirement={requirement} />
                ))}
            </div>
          </div>

          {/* Helpful Resources */}
          <div className="mt-8 bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Helpful Resources</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Condominium Authority of Ontario</div>
                    <div className="text-sm text-gray-600">Official CAO resources and forms</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Legal Requirements Guide</div>
                    <div className="text-sm text-gray-600">Comprehensive compliance checklist</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                  <div>
                    <div className="font-medium text-gray-900">Professional Services</div>
                    <div className="text-sm text-gray-600">Find qualified engineers and lawyers</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ComplianceTracker;