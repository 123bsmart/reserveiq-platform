import React, { useState } from 'react';
import { Upload, FileText, Brain, CheckCircle, AlertCircle, Clock, Download, Eye } from 'lucide-react';

const DocumentUploadAI = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      id: 1,
      name: "Maple Heights Reserve Study 2024.pdf",
      type: "Reserve Study",
      size: "2.4 MB",
      uploadDate: "2024-06-20",
      status: "analyzed",
      aiInsights: {
        riskLevel: "High",
        majorExpenses: ["Elevator Modernization", "Roof Replacement"],
        timeline: "18 months",
        criticalFindings: 3,
        recommendations: 5
      }
    },
    {
      id: 2,
      name: "Q1 2024 Financial Statement.pdf", 
      type: "Financial Statement",
      size: "1.2 MB",
      uploadDate: "2024-06-18",
      status: "processing",
      aiInsights: null
    }
  ]);

  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    // Simulate file upload and processing
    const newFile = {
      id: Date.now(),
      name: files[0]?.name || "New Document.pdf",
      type: "Reserve Study",
      size: "1.8 MB",
      uploadDate: new Date().toISOString().split('T')[0],
      status: "uploading",
      aiInsights: null
    };
    
    setUploadedFiles(prev => [newFile, ...prev]);
    
    // Simulate upload progress
    setTimeout(() => {
      setUploadedFiles(prev => 
        prev.map(file => 
          file.id === newFile.id 
            ? { ...file, status: "processing" }
            : file
        )
      );
    }, 2000);
    
    // Simulate AI analysis completion
    setTimeout(() => {
      setUploadedFiles(prev => 
        prev.map(file => 
          file.id === newFile.id 
            ? { 
                ...file, 
                status: "analyzed",
                aiInsights: {
                  riskLevel: "Medium",
                  majorExpenses: ["HVAC Replacement", "Parking Garage Repairs"],
                  timeline: "24 months",
                  criticalFindings: 2,
                  recommendations: 4
                }
              }
            : file
        )
      );
    }, 8000);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'analyzed': return 'text-green-600 bg-green-50';
      case 'processing': return 'text-yellow-600 bg-yellow-50';
      case 'uploading': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'analyzed': return <CheckCircle className="w-4 h-4" />;
      case 'processing': return <Clock className="w-4 h-4" />;
      case 'uploading': return <Upload className="w-4 h-4" />;
      default: return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Document Intelligence</h1>
          <p className="text-gray-600">Upload reserve studies, financial statements, and reports for instant AI analysis</p>
        </div>

        {/* Upload Area */}
        <div className="mb-8">
          <div 
            className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
              dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Documents</h3>
            <p className="text-gray-600 mb-4">
              Drag and drop your files here, or{' '}
              <button className="text-blue-600 hover:text-blue-700 font-medium">browse</button>
            </p>
            <div className="text-sm text-gray-500">
              Supports: PDF, Excel, Word • Max file size: 50MB
            </div>
          </div>
        </div>

        {/* AI Processing Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3">
              <Brain className="w-8 h-8 text-blue-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">47</div>
                <div className="text-sm text-gray-600">Documents Analyzed</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-red-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Critical Issues Found</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-yellow-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">23s</div>
                <div className="text-sm text-gray-600">Avg Analysis Time</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Documents List */}
        <div className="bg-white rounded-lg border shadow-sm">
          <div className="p-6 border-b">
            <h2 className="text-xl font-semibold text-gray-900">Uploaded Documents</h2>
          </div>
          
          <div className="p-6">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center justify-between p-4 border rounded-lg mb-4 last:mb-0">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  
                  <div>
                    <div className="font-medium text-gray-900">{file.name}</div>
                    <div className="text-sm text-gray-600">{file.type} • {file.size} • {file.uploadDate}</div>
                    
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(file.status)}`}>
                      {getStatusIcon(file.status)}
                      {file.status === 'analyzed' && 'Analysis Complete'}
                      {file.status === 'processing' && 'Processing...'}
                      {file.status === 'uploading' && 'Uploading...'}
                    </div>
                  </div>
                </div>
                
                {file.status === 'analyzed' && file.aiInsights && (
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">
                        Risk Level: <span className={`${file.aiInsights.riskLevel === 'High' ? 'text-red-600' : 'text-yellow-600'}`}>
                          {file.aiInsights.riskLevel}
                        </span>
                      </div>
                      <div className="text-xs text-gray-600">
                        {file.aiInsights.criticalFindings} critical findings • {file.aiInsights.recommendations} recommendations
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
                
                {file.status === 'processing' && (
                  <div className="flex items-center gap-2 text-yellow-600">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-yellow-600"></div>
                    <span className="text-sm">AI analyzing document...</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI Insights Panel */}
        {uploadedFiles.some(file => file.status === 'analyzed') && (
          <div className="mt-8 bg-white rounded-lg border shadow-sm">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold text-gray-900">Latest AI Insights</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Critical Findings</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      Elevator modernization required within 18 months
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-red-500" />
                      Reserve fund 32% below recommended levels
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 text-yellow-500" />
                      HVAC system approaching end of useful life
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">AI Recommendations</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Increase monthly fees by $89/unit
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Schedule elevator assessment
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Consider special assessment of $15,000
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentUploadAI;
