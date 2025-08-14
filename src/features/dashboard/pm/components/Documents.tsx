import { DollarSign, Download, Eye, FileText, Filter, Shield, Trash2, Upload, CheckCircle, Clock, XCircle } from 'lucide-react';
import React, { useState } from 'react';

const Documents: React.FC = () => {
  const [documents] = useState([
    {
      id: 'doc-001',
      filename: 'ReserveStudy2024.pdf',
      type: 'Reserve Study',
      upload_date: '2025-08-05T10:30:00Z',
      status: 'Analyzed',
      file_size: '2.4 MB',
      ai_summary:
        'Reserve fund projected shortfall of $110,000 over 5 years. Major expenses: roof replacement (2027), elevator modernization (2029).',
      uploaded_by: 'john.manager@example.com',
    },
    {
      id: 'doc-002',
      filename: 'FinancialQ2.pdf',
      type: 'Financial Report',
      upload_date: '2025-07-28T14:15:00Z',
      status: 'Analyzed',
      file_size: '1.8 MB',
      ai_summary:
        'Q2 operating expenses 8% above budget. Reserve contributions on track. Cash flow positive but trending downward.',
      uploaded_by: 'sarah.admin@example.com',
    },
    {
      id: 'doc-003',
      filename: 'InsurancePolicy.pdf',
      type: 'Legal',
      upload_date: '2025-07-15T09:20:00Z',
      status: 'Processing',
      file_size: '3.1 MB',
      ai_summary: '',
      uploaded_by: 'legal@example.com',
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Analyzed':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle className="w-3 h-3 mr-1" />
            Analyzed
          </span>
        );
      case 'Processing':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock className="w-3 h-3 mr-1" />
            Processing
          </span>
        );
      case 'Failed':
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
            <XCircle className="w-3 h-3 mr-1" />
            Failed
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Stored
          </span>
        );
    }
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'Reserve Study':
        return <Shield className="w-5 h-5 text-blue-600" />;
      case 'Financial Report':
        return <DollarSign className="w-5 h-5 text-green-600" />;
      case 'Legal':
        return <FileText className="w-5 h-5 text-purple-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Document Library</h2>
          <p className="text-gray-600">Upload and manage building documents with AI analysis</p>
        </div>
        <div className="flex space-x-3">
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </button>
          <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Upload className="w-4 h-4 mr-2" />
            Upload Document
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {documents.map((doc) => (
          <div key={doc.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                {getFileIcon(doc.type)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-medium text-gray-900 truncate">{doc.filename}</h3>
                    {getStatusBadge(doc.status)}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span>{doc.type}</span>
                    <span>{doc.file_size}</span>
                    <span>{new Date(doc.upload_date).toLocaleDateString()}</span>
                    <span>by {doc.uploaded_by}</span>
                  </div>
                  {doc.ai_summary && (
                    <div className="bg-blue-50 rounded-lg p-3 mb-3">
                      <p className="text-sm text-gray-700">
                        <strong>AI Summary:</strong> {doc.ai_summary}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded">
                  <Eye className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded">
                  <Download className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
