import { DollarSign, Eye, FileText, Settings } from 'lucide-react';
import React from 'react';

const Documents: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">📄 Document Library</h1>
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <p className="text-gray-800 font-medium">Board Document Center</p>
        <p className="text-gray-600 text-sm mt-1">Access meeting minutes, financial reports, and building documents</p>
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
  );
};

export default Documents;
