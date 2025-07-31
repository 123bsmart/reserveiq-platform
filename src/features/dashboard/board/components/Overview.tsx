import {
  AlertTriangle,
  BarChart3,
  Calculator,
  Calendar,
  Clock,
  DollarSign,
  FileText,
  Upload,
  Users,
} from 'lucide-react';
import React from 'react';

const Overview: React.FC = () => {
  return (
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
  );
};

export default Overview;
