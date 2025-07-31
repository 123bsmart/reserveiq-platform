import { Upload } from 'lucide-react';
import React from 'react';

const Documents: React.FC = () => {
  return (
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
  );
};

export default Documents;
