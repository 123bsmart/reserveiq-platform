import React, { useState } from 'react';
import { Activity, AlertTriangle, CheckCircle, Clock, DollarSign, Download, Eye, FileText, Shield, XCircle } from 'lucide-react';

const Documents: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [documents] = useState([
    {
      id: 'doc-001',
      filename: 'ReserveStudy2024.pdf',
      category: 'Reserve Study',
      upload_date: '2025-08-05',
      file_size: '2.4 MB',
      status: 'Analyzed',
      ai_summary:
        'Reserve fund projected shortfall of $110,000 over 5 years. Major expenses: roof replacement (2027), elevator modernization (2029).',
      risk_tags: ['Reserve Risk', 'Major Expenses'],
      uploaded_by: 'Board Secretary',
    },
    {
      id: 'doc-002',
      filename: 'FinancialReportQ2.pdf',
      category: 'Financial Report',
      upload_date: '2025-07-28',
      file_size: '1.8 MB',
      status: 'Analyzed',
      ai_summary:
        'Q2 operating expenses 8% above budget. Reserve contributions on track. Cash flow positive but trending downward.',
      risk_tags: ['Budget Variance', 'Cash Flow'],
      uploaded_by: 'Property Manager',
    },
    {
      id: 'doc-003',
      filename: 'InsurancePolicyReview.pdf',
      category: 'Legal Document',
      upload_date: '2025-07-15',
      file_size: '3.1 MB',
      status: 'Analyzed',
      ai_summary:
        'Insurance policy renewal terms present risk due to underinsured replacement cost. Recommend coverage review with broker.',
      risk_tags: ['Insurance Risk', 'Coverage Gap'],
      uploaded_by: 'Board Treasurer',
    },
    {
      id: 'doc-004',
      filename: 'MaintenanceLog2024.xlsx',
      category: 'Maintenance Record',
      upload_date: '2025-07-10',
      file_size: '890 KB',
      status: 'Processing',
      ai_summary: '',
      risk_tags: [],
      uploaded_by: 'Property Manager',
    },
  ]);

  const categories = ['all', 'Reserve Study', 'Financial Report', 'Legal Document', 'Maintenance Record'];

  const filteredDocuments =
    selectedFilter === 'all' ? documents : documents.filter((doc) => doc.category === selectedFilter);

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Reserve Study':
        return <Shield className="w-5 h-5 text-blue-600" />;
      case 'Financial Report':
        return <DollarSign className="w-5 h-5 text-green-600" />;
      case 'Legal Document':
        return <FileText className="w-5 h-5 text-purple-600" />;
      case 'Maintenance Record':
        return <Activity className="w-5 h-5 text-orange-600" />;
      default:
        return <FileText className="w-5 h-5 text-gray-600" />;
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Document Review Center</h2>
        <p className="text-gray-600">Review uploaded documents and AI analysis for Board decision-making</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedFilter(category)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              selectedFilter === category
                ? 'bg-blue-100 text-blue-700 border border-blue-200'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category === 'all' ? 'All Types' : category}
          </button>
        ))}
      </div>

      {/* Document List */}
      <div className="space-y-6">
        {filteredDocuments.map((doc) => (
          <div key={doc.id} className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                {getCategoryIcon(doc.category)}
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{doc.filename}</h3>
                    {getStatusBadge(doc.status)}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{doc.category}</span>
                    <span>{doc.file_size}</span>
                    <span>Uploaded {doc.upload_date}</span>
                    <span>by {doc.uploaded_by}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors">
                  <Eye className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>

            {doc.ai_summary && (
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-blue-900 mb-2">AI Analysis Summary</h4>
                <p className="text-blue-800 text-sm leading-relaxed">{doc.ai_summary}</p>
              </div>
            )}

            {doc.risk_tags.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Risk Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {doc.risk_tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800"
                    >
                      <AlertTriangle className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredDocuments.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">No documents found for the selected filter.</p>
        </div>
      )}
    </div>
  );
};

export default Documents;
