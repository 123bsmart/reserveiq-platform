'use client';
import { DashboardHeader, DashboardLayout, SidebarTools } from '@/features/dashboard/components';
import SideDrawer from '@/shared/components/SideDrawer';
import { RoleEnum } from '@/shared/enum/auth.enum';
import {
  AlertTriangle,
  BarChart3,
  Calculator,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Upload,
  Users,
} from 'lucide-react';
import { useState } from 'react';

const PMDashboard: React.FC = () => {
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DashboardLayout>
      <DashboardHeader type={RoleEnum.PROPERTY_MANAGER} onLeftMenuClick={() => setLeftMenuOpen(true)} />
      {/* Mobile Sidebar */}
      <SideDrawer isOpen={leftMenuOpen} onClose={() => setLeftMenuOpen(false)} position="left">
        <SidebarTools className="border-none shadow-none" activeTab={activeTab} setActiveTab={setActiveTab} />
      </SideDrawer>

      <div className="flex">
        <SidebarTools
          className="border-none shadow-none hidden lg:block"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === 'overview' && (
            <>
              {/* Portfolio Summary */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Overview</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Users className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Buildings Managed</p>
                        <p className="text-2xl font-bold text-gray-900">23</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Crisis Alerts</p>
                        <p className="text-2xl font-bold text-red-600">3</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <DollarSign className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Potential Savings</p>
                        <p className="text-2xl font-bold text-green-600">$847K</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Clock className="w-8 h-8 text-yellow-600" />
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-500">Hours Saved/Week</p>
                        <p className="text-2xl font-bold text-yellow-600">18</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Actions - Reordered with Reserve Studies Priority */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Priority 1: Reserve Studies */}
                  <button className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg">
                    <div className="text-center">
                      <FileText className="w-8 h-8 mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">🏆 Reserve Studies</h3>
                      <p className="text-blue-100 text-sm">Upload & analyze for crisis prevention</p>
                    </div>
                  </button>

                  {/* Priority 2: Assessment Calculator */}
                  <button className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-lg">
                    <div className="text-center">
                      <Calculator className="w-8 h-8 mx-auto mb-3" />
                      <h3 className="font-semibold text-lg mb-2">Assessment Calculator</h3>
                      <p className="text-purple-100 text-sm">Compare funding strategies</p>
                    </div>
                  </button>

                  {/* Priority 3: Other Documents */}
                  <button className="p-6 bg-gray-100 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-200 hover:border-gray-300 transition-all">
                    <div className="text-center">
                      <Upload className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                      <h3 className="font-semibold text-lg mb-2">Other Documents</h3>
                      <p className="text-gray-500 text-sm">Board minutes, reports, budgets</p>
                    </div>
                  </button>

                  {/* Priority 4: Board Reports */}
                  <button className="p-6 bg-gray-100 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-200 hover:border-gray-300 transition-all">
                    <div className="text-center">
                      <BarChart3 className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                      <h3 className="font-semibold text-lg mb-2">Board Reports</h3>
                      <p className="text-gray-500 text-sm">Generate professional presentations</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Priority Alerts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                    Crisis Alerts
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-red-800">Pinewood Towers - Reserve Shortfall</p>
                          <p className="text-sm text-red-600 mt-1">$127K funding gap for roof replacement by Q2 2026</p>
                          <p className="text-xs text-red-500 mt-2">Potential $50K+ special assessment</p>
                        </div>
                        <button className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700">
                          Analyze Options
                        </button>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-yellow-800">Oakview Commons - Compliance Risk</p>
                          <p className="text-sm text-yellow-600 mt-1">AGM notice deadline approaching in 8 days</p>
                        </div>
                        <button className="bg-yellow-600 text-white px-3 py-1 rounded text-xs hover:bg-yellow-700">
                          Send Notice
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    Recent Activity
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">Reserve Study Analysis Complete</p>
                        <p className="text-sm text-gray-600">Maple Ridge Condos - Crisis risk assessment updated</p>
                        <p className="text-xs text-gray-400">2 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">Assessment Calculator Used</p>
                        <p className="text-sm text-gray-600">Pinewood Towers - Roof replacement scenarios compared</p>
                        <p className="text-xs text-gray-400">5 hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">Board Report Generated</p>
                        <p className="text-sm text-gray-600">Oakview Commons - Q3 financial presentation</p>
                        <p className="text-xs text-gray-400">1 day ago</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-gray-900">Document Processed</p>
                        <p className="text-sm text-gray-600">Board minutes from July meeting analyzed</p>
                        <p className="text-xs text-gray-400">2 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'reserve-studies' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">🏆 Reserve Fund Studies</h1>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-medium">Crisis Prevention Command Center</p>
                <p className="text-blue-600 text-sm mt-1">
                  Upload your reserve studies for comprehensive AI analysis and crisis prediction
                </p>
              </div>

              {/* Upload Area */}
              <div className="bg-white rounded-lg shadow-sm border p-8 mb-6 text-center">
                <Upload className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Reserve Study</h3>
                <p className="text-gray-600 mb-4">Drag and drop your reserve fund study or click to browse</p>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Choose File
                </button>
              </div>

              {/* Studies Library */}
              <div className="bg-white rounded-lg shadow-sm border">
                <div className="px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Your Reserve Studies</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <FileText className="w-8 h-8 text-blue-600" />
                          <div>
                            <h4 className="font-medium text-gray-900">Pinewood Towers - 2024 Reserve Study</h4>
                            <p className="text-sm text-gray-600">Uploaded 3 days ago • AI Analysis Complete</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">High Risk</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                $127K Shortfall
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                            View Analysis
                          </button>
                          <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-200">
                            Download
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <FileText className="w-8 h-8 text-green-600" />
                          <div>
                            <h4 className="font-medium text-gray-900">Oakview Commons - 2024 Reserve Study</h4>
                            <p className="text-sm text-gray-600">Uploaded 1 week ago • AI Analysis Complete</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Good Health</span>
                              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Fully Funded</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                            View Analysis
                          </button>
                          <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-200">
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'documents' && (
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-6">📄 Document Library</h1>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <p className="text-gray-800 font-medium">General Document Management</p>
                <p className="text-gray-600 text-sm mt-1">
                  Upload and organize board minutes, financial reports, maintenance logs, and correspondence
                </p>
              </div>

              {/* Upload Area */}
              <div className="bg-white rounded-lg shadow-sm border p-6 mb-6 text-center">
                <Upload className="w-10 h-10 text-gray-600 mx-auto mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Document</h3>
                <p className="text-gray-600 mb-4">Board minutes, financial reports, maintenance logs</p>
                <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                  Choose File
                </button>
              </div>

              {/* Document Categories */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">📊 Financial Reports</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 rounded">
                      <p className="font-medium text-sm">Q3 Budget Variance</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded">
                      <p className="font-medium text-sm">Insurance Renewal</p>
                      <p className="text-xs text-gray-500">1 week ago</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">📝 Board Minutes</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 rounded">
                      <p className="font-medium text-sm">July 2024 Meeting</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded">
                      <p className="font-medium text-sm">AGM 2024</p>
                      <p className="text-xs text-gray-500">2 weeks ago</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm border p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">🔧 Maintenance Logs</h3>
                  <div className="space-y-3">
                    <div className="p-3 border border-gray-200 rounded">
                      <p className="font-medium text-sm">Elevator Inspection</p>
                      <p className="text-xs text-gray-500">5 days ago</p>
                    </div>
                    <div className="p-3 border border-gray-200 rounded">
                      <p className="font-medium text-sm">HVAC Service Report</p>
                      <p className="text-xs text-gray-500">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PMDashboard;
