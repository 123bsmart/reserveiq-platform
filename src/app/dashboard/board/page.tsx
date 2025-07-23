'use client';
import { DashboardHeader, DashboardLayout } from '@/features/dashboard/components';
import { BoardToolsSidebar } from '@/features/dashboard/board/components';
import SideDrawer from '@/shared/components/SideDrawer';
import { useState } from 'react';
import { RoleEnum } from '@/shared/enum/auth.enum';
import {
  AlertTriangle,
  BarChart3,
  Calculator,
  Calendar,
  Clock,
  DollarSign,
  Download,
  Eye,
  FileText,
  Mail,
  Settings,
  Upload,
  Users,
} from 'lucide-react';

const BoardDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);

  return (
    <DashboardLayout>
      <DashboardHeader type={RoleEnum.BOARD_MEMBER} />
      {/* Mobile Sidebar */}
      <SideDrawer isOpen={leftMenuOpen} onClose={() => setLeftMenuOpen(false)} position="left">
        <BoardToolsSidebar className="border-none shadow-none" activeTab={activeTab} setActiveTab={setActiveTab} />
      </SideDrawer>
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          <BoardToolsSidebar
            className="border-none shadow-none hidden lg:block"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Main Content */}
          <div className="flex-1 p-6">
            {activeTab === 'overview' && (
              <>
                {/* Building Summary */}
                <div className="mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">Pinewood Towers Overview</h1>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Users className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-500">Total Units</p>
                          <p className="text-2xl font-bold text-gray-900">156</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <AlertTriangle className="w-8 h-8 text-red-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-500">Reserve Health</p>
                          <p className="text-2xl font-bold text-red-600">Critical</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <DollarSign className="w-8 h-8 text-orange-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-500">Reserve Balance</p>
                          <p className="text-2xl font-bold text-orange-600">$184K</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm border p-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <Clock className="w-8 h-8 text-red-600" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-500">Next Crisis</p>
                          <p className="text-2xl font-bold text-red-600">18 Mo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Actions - Board Member Focused */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Board Tools</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Priority 1: Reserve Studies Analysis */}
                    <button className="p-6 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105 shadow-lg">
                      <div className="text-center">
                        <FileText className="w-8 h-8 mx-auto mb-3" />
                        <h3 className="font-semibold text-lg mb-2">🚨 Reserve Crisis</h3>
                        <p className="text-red-100 text-sm">View analysis & funding options</p>
                      </div>
                    </button>

                    {/* Priority 2: Assessment Calculator */}
                    <button className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg">
                      <div className="text-center">
                        <Calculator className="w-8 h-8 mx-auto mb-3" />
                        <h3 className="font-semibold text-lg mb-2">Compare Options</h3>
                        <p className="text-blue-100 text-sm">Monthly increase vs assessment</p>
                      </div>
                    </button>

                    {/* Priority 3: Board Reports */}
                    <button className="p-6 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all transform hover:scale-105 shadow-lg">
                      <div className="text-center">
                        <BarChart3 className="w-8 h-8 mx-auto mb-3" />
                        <h3 className="font-semibold text-lg mb-2">Board Reports</h3>
                        <p className="text-green-100 text-sm">Generate presentations</p>
                      </div>
                    </button>

                    {/* Priority 4: Documents */}
                    <button className="p-6 bg-gray-100 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-200 hover:border-gray-300 transition-all">
                      <div className="text-center">
                        <Upload className="w-8 h-8 mx-auto mb-3 text-gray-600" />
                        <h3 className="font-semibold text-lg mb-2">Documents</h3>
                        <p className="text-gray-500 text-sm">Minutes, budgets, reports</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Crisis Alerts & Upcoming Deadlines */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                      Critical Issues
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-red-800">Reserve Fund Crisis</p>
                            <p className="text-sm text-red-600 mt-1">$127K shortfall for roof replacement</p>
                            <p className="text-xs text-red-500 mt-2">Risk: $50K+ special assessment by Q2 2026</p>
                          </div>
                          <button className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700">
                            View Options
                          </button>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <p className="font-medium text-yellow-800">AGM Notice Deadline</p>
                            <p className="text-sm text-yellow-600 mt-1">Must send notice in 8 days</p>
                            <p className="text-xs text-yellow-500 mt-1">Ontario Condo Act requirement</p>
                          </div>
                          <button className="bg-yellow-600 text-white px-3 py-1 rounded text-xs hover:bg-yellow-700">
                            Send Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Calendar className="w-5 h-5 text-blue-500 mr-2" />
                      Upcoming Board Actions
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-gray-900">Emergency Budget Review</p>
                          <p className="text-sm text-gray-600">Review roof replacement funding options</p>
                          <p className="text-xs text-red-600 font-medium">Due: Within 2 weeks</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-gray-900">AGM Preparation</p>
                          <p className="text-sm text-gray-600">Prepare 2025 budget presentation</p>
                          <p className="text-xs text-yellow-600 font-medium">Due: Aug 15, 2025</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                        <div>
                          <p className="font-medium text-gray-900">Insurance Review</p>
                          <p className="text-sm text-gray-600">Annual policy assessment</p>
                          <p className="text-xs text-blue-600 font-medium">Due: Sep 30, 2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'reserve-studies' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">🚨 Reserve Fund Crisis Analysis</h1>
                  <div className="flex space-x-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download Report</span>
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
                      <Mail className="w-4 h-4" />
                      <span>Email Board</span>
                    </button>
                  </div>
                </div>

                {/* Crisis Alert Banner */}
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-500 mt-1 mr-3" />
                    <div>
                      <h3 className="text-lg font-semibold text-red-800">Critical Reserve Fund Shortfall Detected</h3>
                      <p className="text-red-700 mt-2">
                        Your building faces a $127,000 funding gap for essential roof replacement by Q2 2026. Without
                        immediate action, owners may face a special assessment of $50,000+ per unit.
                      </p>
                      <div className="mt-4 flex space-x-3">
                        <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                          View Funding Options
                        </button>
                        <button className="bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200">
                          Schedule Emergency Meeting
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reserve Study Analysis */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Reserve Study</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <FileText className="w-8 h-8 text-blue-600" />
                        <div>
                          <h4 className="font-medium text-gray-900">Pinewood Towers - 2024 Reserve Study</h4>
                          <p className="text-sm text-gray-600">Completed: March 2024 • 156 Units</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Critical Risk</span>
                            <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                              18 Month Timeline
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="border-t pt-4">
                        <h5 className="font-medium text-gray-900 mb-2">Key Findings:</h5>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Roof membrane requires immediate replacement ($311,000)</li>
                          <li>• Current reserve balance insufficient ($184,000)</li>
                          <li>• Funding shortfall: $127,000</li>
                          <li>• Delay beyond Q2 2026 risks structural damage</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Impact</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Current Reserve Balance</span>
                          <span className="text-lg font-bold text-orange-600">$184,000</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600">Roof Replacement Cost</span>
                          <span className="text-lg font-bold text-red-600">$311,000</span>
                        </div>
                        <div className="border-t pt-2 mt-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-bold text-gray-900">Funding Gap</span>
                            <span className="text-xl font-bold text-red-700">$127,000</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-50 rounded-lg p-4">
                        <h5 className="font-medium text-red-800 mb-2">Without Action:</h5>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• Special assessment: $814 per unit</li>
                          <li>• Emergency premium: +25% ($77,750)</li>
                          <li>• Total owner cost: $1,017 per unit</li>
                          <li>• Risk of structural damage and higher costs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Calculator className="w-6 h-6 mx-auto mb-2" />
                    <span className="font-medium">Compare Funding Options</span>
                    <p className="text-sm text-blue-100 mt-1">Monthly increase vs special assessment</p>
                  </button>

                  <button className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <BarChart3 className="w-6 h-6 mx-auto mb-2" />
                    <span className="font-medium">Generate Board Report</span>
                    <p className="text-sm text-green-100 mt-1">Professional presentation for owners</p>
                  </button>

                  <button className="p-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    <Mail className="w-6 h-6 mx-auto mb-2" />
                    <span className="font-medium">Owner Communication</span>
                    <p className="text-sm text-purple-100 mt-1">Draft notice about funding options</p>
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-6">📄 Document Library</h1>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                  <p className="text-gray-800 font-medium">Board Document Center</p>
                  <p className="text-gray-600 text-sm mt-1">
                    Access meeting minutes, financial reports, and building documents
                  </p>
                </div>

                {/* Document Categories */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                      Financial Reports
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">Q3 2024 Budget Variance</p>
                            <p className="text-xs text-gray-500">Uploaded 2 days ago</p>
                          </div>
                          <Eye className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                      <div className="p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">Insurance Policy 2024</p>
                            <p className="text-xs text-gray-500">Uploaded 1 week ago</p>
                          </div>
                          <Eye className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                      <div className="p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">Annual Audit Report</p>
                            <p className="text-xs text-gray-500">Uploaded 3 weeks ago</p>
                          </div>
                          <Eye className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <FileText className="w-5 h-5 text-blue-600 mr-2" />
                      Board Minutes
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">July 2024 Board Meeting</p>
                            <p className="text-xs text-gray-500">Approved 3 days ago</p>
                          </div>
                          <Eye className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                      <div className="p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">June 2024 Board Meeting</p>
                            <p className="text-xs text-gray-500">Approved 1 month ago</p>
                          </div>
                          <Eye className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                      <div className="p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">AGM 2024 Minutes</p>
                            <p className="text-xs text-gray-500">Approved 2 months ago</p>
                          </div>
                          <Eye className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Settings className="w-5 h-5 text-gray-600 mr-2" />
                      Building Documents
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">Elevator Inspection Report</p>
                            <p className="text-xs text-gray-500">Uploaded 5 days ago</p>
                          </div>
                          <Eye className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                      <div className="p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">HVAC Maintenance Contract</p>
                            <p className="text-xs text-gray-500">Uploaded 2 weeks ago</p>
                          </div>
                          <Eye className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                      <div className="p-3 border border-gray-200 rounded hover:bg-gray-50 cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-sm">Building Safety Inspection</p>
                            <p className="text-xs text-gray-500">Uploaded 1 month ago</p>
                          </div>
                          <Eye className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BoardDashboard;
