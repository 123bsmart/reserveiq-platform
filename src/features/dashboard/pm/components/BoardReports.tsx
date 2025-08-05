'use client';
import React, { useState } from 'react';
import { FileText, Download, Eye, X, CheckCircle } from 'lucide-react';

interface BoardReportsProps {
  onClose?: () => void;
}

interface ReportTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  estimatedTime: string;
}

const BoardReports: React.FC<BoardReportsProps> = ({ onClose }) => {
  const [selectedReport, setSelectedReport] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedReports, setGeneratedReports] = useState<any[]>([]);

  const reportTemplates: ReportTemplate[] = [
    {
      id: 'reserve-summary',
      name: 'Reserve Fund Summary Report',
      description: 'Current reserve fund status, funding ratio, and key metrics',
      icon: '💰',
      estimatedTime: '30 seconds',
    },
    {
      id: 'compliance-status',
      name: 'Compliance Status Report',
      description: 'Regulatory compliance status and upcoming deadlines',
      icon: '✅',
      estimatedTime: '45 seconds',
    },
    {
      id: 'assessment-scenario',
      name: 'Assessment Scenario Report',
      description: 'Funding scenarios and special assessment analysis',
      icon: '📊',
      estimatedTime: '60 seconds',
    },
    {
      id: 'component-analysis',
      name: 'Component Analysis Report',
      description: 'Critical components requiring immediate attention',
      icon: '🔧',
      estimatedTime: '40 seconds',
    },
    {
      id: 'financial-health',
      name: 'Financial Health Dashboard',
      description: 'Comprehensive financial overview with projections',
      icon: '📈',
      estimatedTime: '50 seconds',
    },
    {
      id: 'risk-assessment',
      name: 'Risk Assessment Report',
      description: 'Detailed risk analysis and mitigation strategies',
      icon: '⚠️',
      estimatedTime: '55 seconds',
    },
  ];

  const generateReport = async (reportId: string) => {
    setIsGenerating(true);

    // Simulate report generation
    setTimeout(() => {
      const template = reportTemplates.find((t) => t.id === reportId);
      const newReport = {
        id: Date.now().toString(),
        name: template?.name || 'Report',
        generatedAt: new Date(),
        size: '2.4 MB',
        status: 'completed',
      };

      setGeneratedReports((prev) => [newReport, ...prev]);
      setIsGenerating(false);
      setSelectedReport('');
    }, 3000);
  };

  const downloadReport = (reportId: string) => {
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `board-report-${reportId}.pdf`;
    link.click();
  };

  return (
    <div className="w-full">
      <p className="text-gray-600 mb-6">
        Generate professional board-ready reports for presentations and decision-making.
      </p>

      {/* Report Templates */}
      <div className="mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Select Report Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reportTemplates.map((template) => (
            <div
              key={template.id}
              className={`p-6 rounded-lg border-2 cursor-pointer transition-all ${
                selectedReport === template.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedReport(template.id)}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{template.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">{template.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{template.description}</p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span>⏱️ {template.estimatedTime}</span>
                    <span>📄 PDF Format</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      {selectedReport && (
        <div className="mb-8">
          <button
            onClick={() => generateReport(selectedReport)}
            disabled={isGenerating}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isGenerating ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Generating Report...</span>
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <FileText className="w-5 h-5" />
                <span>Generate {reportTemplates.find((t) => t.id === selectedReport)?.name}</span>
              </div>
            )}
          </button>
        </div>
      )}

      {/* Generated Reports */}
      {generatedReports.length > 0 && (
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Generated Reports</h3>
          <div className="space-y-3">
            {generatedReports.map((report) => (
              <div key={report.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium text-gray-900">{report.name}</p>
                    <p className="text-sm text-gray-600">
                      Generated {report.generatedAt.toLocaleDateString()} • {report.size}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => downloadReport(report.id)}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="text-center">
          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <FileText className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="font-medium text-gray-900">Professional Format</h3>
          <p className="text-sm text-gray-600">Board-ready PDF reports with proper formatting</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="font-medium text-gray-900">Instant Generation</h3>
          <p className="text-sm text-gray-600">Generate reports in seconds, not hours</p>
        </div>
        <div className="text-center">
          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Download className="w-5 h-5 text-purple-600" />
          </div>
          <h3 className="font-medium text-gray-900">Easy Sharing</h3>
          <p className="text-sm text-gray-600">Download and share with board members</p>
        </div>
      </div>
    </div>
  );
};

export default BoardReports;
