import React, { useState, useCallback } from 'react';
import { 
  Upload, 
  FileText, 
  AlertCircle, 
  CheckCircle, 
  Clock, 
  Download,
  Eye,
  Trash2,
  Search,
  Filter,
  Calendar,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  FileCheck,
  Zap,
  BarChart3,
  Home,
  Menu,
  X,
  Settings,
  Bell
} from 'lucide-react';

const DocumentAnalysisPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: "Reserve Study 2024.pdf",
      type: "Reserve Study",
      size: "2.4 MB",
      uploadDate: "2024-12-10",
      status: "analyzed",
      aiAnalysis: {
        summary: "Critical funding gap identified. Immediate action required for major building components.",
        keyFindings: [
          "Roof replacement needed in 18 months - $85,000",
          "HVAC systems at 70% lifecycle - $42,000 by 2026",
          "Parking garage waterproofing required - $28,000",
          "Current reserve fund $45,000 below recommended level"
        ],
        riskLevel: "high",
        confidence: 94,
        componentAnalysis: [
          { component: "Roof", condition: "Poor", timeframe: "18 months", cost: 85000, priority: "Critical" },
          { component: "HVAC", condition: "Fair", timeframe: "24 months", cost: 42000, priority: "High" },
          { component: "Parking Structure", condition: "Fair", timeframe: "12 months", cost: 28000, priority: "Medium" },
          { component: "Elevators", condition: "Good", timeframe: "60 months", cost: 35000, priority: "Low" }
        ]
      }
    },
    {
      id: 2,
      name: "Annual Budget 2024.xlsx",
      type: "Budget",
      size: "445 KB", 
      uploadDate: "2024-12-08",
      status: "analyzed",
      aiAnalysis: {
        summary: "Budget variances detected in utilities and maintenance categories.",
        keyFindings: [
          "Utilities 18% over budget - $12,000 variance",
          "Maintenance costs trending 15% higher than planned",
          "Reserve contributions on track at $28,000/year",
          "Insurance premiums increased 8% mid-year"
        ],
        riskLevel: "medium",
        confidence: 87
      }
    },
    {
      id: 3,
      name: "Board Meeting Minutes Nov 2024.docx",
      type: "Meeting Minutes",
      size: "125 KB",
      uploadDate: "2024-12-05", 
      status: "processing"
    }
  ]);

  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Mock file upload handler
  const handleFiles = useCallback((files) => {
    const newFiles = Array.from(files).map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      type: detectFileType(file.name),
      size: formatFileSize(file.size),
      uploadDate: new Date().toISOString().split('T')[0],
      status: "processing"
    }));
    
    setUploadedFiles(prev => [...newFiles, ...prev]);
    
    // Simulate AI processing
    newFiles.forEach(file => {
      setTimeout(() => {
        setUploadedFiles(prev => prev.map(f => 
          f.id === file.id 
            ? { ...f, status: "analyzed", aiAnalysis: generateMockAnalysis(file.type) }
            : f
        ));
      }, 3000 + Math.random() * 2000);
    });
  }, []);

  const detectFileType = (filename) => {
    const name = filename.toLowerCase();
    if (name.includes('reserve') || name.includes('study')) return 'Reserve Study';
    if (name.includes('budget') || name.includes('financial')) return 'Budget';
    if (name.includes('minute') || name.includes('meeting')) return 'Meeting Minutes';
    if (name.includes('audit')) return 'Audit Report';
    return 'Other Document';
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const generateMockAnalysis = (type) => {
    const analyses = {
      'Reserve Study': {
        summary: "Reserve study analysis completed. Multiple areas require attention.",
        keyFindings: [
          "Major roof repairs needed within 2 years",
          "HVAC replacement schedule identified", 
          "Funding gaps detected in multiple categories"
        ],
        riskLevel: "medium",
        confidence: 89
      },
      'Budget': {
        summary: "Budget analysis shows variance in operational expenses.",
        keyFindings: [
          "Utilities trending above budget",
          "Maintenance costs within acceptable range",
          "Reserve contributions need adjustment"
        ],
        riskLevel: "low", 
        confidence: 92
      }
    };
    return analyses[type] || analyses['Budget'];
  };

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, [handleFiles]);

  const handleChange = useCallback((e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  }, [handleFiles]);

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'analyzed': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'processing': return <Clock className="w-5 h-5 text-yellow-600" />;
      case 'error': return <AlertCircle className="w-5 h-5 text-red-600" />;
      default: return <FileText className="w-5 h-5 text-gray-400" />;
    }
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
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <BarChart3 className="w-5 h-5" />
          Dashboard
        </a>
        <a 
          href="#" 
          className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium"
        >
          <Upload className="w-5 h-5" />
          Documents
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <DollarSign className="w-5 h-5" />
          Financial
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          <AlertTriangle className="w-5 h-5" />
          Compliance
        </a>
      </nav>
    </div>
  );

  const AnalysisResults = ({ file }) => {
    if (!file.aiAnalysis) return null;

    return (
      <div className="mt-4 space-y-4">
        {/* Summary */}
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="font-medium text-blue-900">AI Analysis Summary</span>
            <span className="text-sm text-blue-600">({file.aiAnalysis.confidence}% confidence)</span>
          </div>
          <p className="text-blue-800">{file.aiAnalysis.summary}</p>
        </div>

        {/* Risk Level */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getRiskLevelColor(file.aiAnalysis.riskLevel)}`}>
          Risk Level: {file.aiAnalysis.riskLevel.toUpperCase()}
        </div>

        {/* Key Findings */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Key Findings:</h4>
          <div className="space-y-2">
            {file.aiAnalysis.keyFindings.map((finding, index) => (
              <div key={index} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700">{finding}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Component Analysis (for Reserve Studies) */}
        {file.aiAnalysis.componentAnalysis && (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">Component Analysis:</h4>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Component</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Condition</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Timeframe</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Est. Cost</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-900">Priority</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {file.aiAnalysis.componentAnalysis.map((component, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-sm text-gray-900">{component.component}</td>
                      <td className="px-4 py-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          component.condition === 'Poor' ? 'bg-red-100 text-red-800' :
                          component.condition === 'Fair' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {component.condition}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-600">{component.timeframe}</td>
                      <td className="px-4 py-2 text-sm font-medium text-gray-900">
                        ${component.cost.toLocaleString()}
                      </td>
                      <td className="px-4 py-2">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          component.priority === 'Critical' ? 'bg-red-100 text-red-800' :
                          component.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                          component.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {component.priority}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <Download className="w-4 h-4" />
            Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <TrendingUp className="w-4 h-4" />
            Update Dashboard
          </button>
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
                <h1 className="text-2xl font-bold text-gray-900">Document Analysis</h1>
                <p className="text-gray-600">Upload and analyze reserve studies, budgets, and reports</p>
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
          {/* Upload Section */}
          <div className="mb-8">
            <div 
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Upload Documents for AI Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                Drag and drop files here, or click to browse. Supports PDF, Excel, and Word documents.
              </p>
              <input
                type="file"
                multiple
                onChange={handleChange}
                className="hidden"
                id="file-upload"
                accept=".pdf,.xlsx,.xls,.docx,.doc"
              />
              <label 
                htmlFor="file-upload"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                Choose Files
              </label>
              <p className="text-sm text-gray-500 mt-2">
                Supported: Reserve Studies, Budgets, Meeting Minutes, Audit Reports
              </p>
            </div>
          </div>

          {/* File List */}
          <div className="bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Document Library</h2>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search documents..."
                      className="pl-9 pr-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-sm hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                    Filter
                  </button>
                </div>
              </div>
            </div>

            <div className="divide-y">
              {uploadedFiles.map((file) => (
                <div key={file.id} className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(file.status)}
                      <div>
                        <h3 className="font-medium text-gray-900">{file.name}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                          <span>{file.type}</span>
                          <span>{file.size}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {file.uploadDate}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {file.status === 'processing' && (
                        <div className="flex items-center gap-2 text-sm text-yellow-600">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600"></div>
                          Processing...
                        </div>
                      )}
                      {file.status === 'analyzed' && (
                        <button 
                          onClick={() => setSelectedFile(selectedFile === file.id ? null : file.id)}
                          className="flex items-center gap-2 px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100"
                        >
                          <Eye className="w-4 h-4" />
                          View Analysis
                        </button>
                      )}
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Show analysis results if selected */}
                  {selectedFile === file.id && file.status === 'analyzed' && (
                    <AnalysisResults file={file} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DocumentAnalysisPage;