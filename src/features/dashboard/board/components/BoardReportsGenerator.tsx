"use client";
import React, { useState } from "react";
import { FileText, TrendingUp, DollarSign, BarChart3, CheckCircle, Download, Mail } from "lucide-react";

const BoardReportsGenerator: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState('comprehensive');
  const [isGenerating, setIsGenerating] = useState(false);

  const reportData = {
    building: 'Pinewood Towers',
    health_score: 71,
    reserve_balance: 140000,
    target_balance: 250000,
    shortfall: 110000,
    major_expenses: [
      { project: 'Roof Replacement', year: 2027, cost: 45000 },
      { project: 'Elevator Modernization', year: 2029, cost: 40000 },
    ],
  };

  const reportTypes = [
    {
      id: 'comprehensive',
      name: 'Comprehensive Board Report',
      description: 'Full analysis with reserve health, scenarios, and recommendations',
      icon: FileText,
      pages: 8,
    },
    {
      id: 'executive',
      name: 'Executive Summary',
      description: 'High-level overview for quick Board review',
      icon: TrendingUp,
      pages: 3,
    },
    {
      id: 'financial',
      name: 'Financial Analysis',
      description: 'Detailed financial health and projections',
      icon: DollarSign,
      pages: 5,
    },
    {
      id: 'presentation',
      name: 'Board Presentation',
      description: 'Slide deck for Board meetings',
      icon: BarChart3,
      pages: 15,
    },
  ];

  const generateReport = async () => {
    setIsGenerating(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsGenerating(false);
    alert('Report generated successfully! Download would begin now.');
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Board Reports Generator</h2>
        <p className="text-gray-600">Generate professional reports and presentations for Board meetings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Report Type Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Type</h3>

          <div className="space-y-3 mb-6">
            {reportTypes.map((report) => {
              const IconComponent = report.icon;
              return (
                <div
                  key={report.id}
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${
                    selectedReport === report.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedReport(report.id)}
                >
                  <div className="flex items-start space-x-3">
                    <IconComponent className="w-6 h-6 text-blue-600 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">{report.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                      <span className="text-xs text-gray-500">{report.pages} pages</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Report Data Sources</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Reserve Study Analysis (Aug 5, 2025)
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Financial Health Assessment
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Assessment Calculator Results
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                Compliance Tracker Data
              </div>
            </div>
          </div>
        </div>

        {/* Report Preview */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Report Preview</h3>

          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6" style={{ minHeight: '400px' }}>
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">{reportData.building}</h2>
              <h3 className="text-lg text-gray-700">Reserve Fund Analysis & Recommendations</h3>
              <p className="text-sm text-gray-500">Generated on {new Date().toLocaleDateString()}</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Reserve Health Score:</span>
                <span className="text-lg font-bold text-yellow-600">{reportData.health_score}/100</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Current Balance:</span>
                <span className="font-semibold">${reportData.reserve_balance.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                <span className="font-medium">Target Balance:</span>
                <span className="font-semibold">${reportData.target_balance.toLocaleString()}</span>
              </div>

              <div className="flex justify-between items-center p-3 bg-red-50 rounded">
                <span className="font-medium">Projected Shortfall:</span>
                <span className="font-bold text-red-600">${reportData.shortfall.toLocaleString()}</span>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Major Upcoming Expenses:</h4>
                <div className="space-y-2">
                  {reportData.major_expenses.map((expense, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span>
                        {expense.project} ({expense.year})
                      </span>
                      <span className="font-medium">${expense.cost.toLocaleString()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 text-center text-xs text-gray-500">
              This is a preview. Full report will include charts, detailed analysis, and recommendations.
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={generateReport}
              disabled={isGenerating}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isGenerating ? (
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Generating Report...
                </div>
              ) : (
                <>
                  <Download className="w-4 h-4 inline mr-2" />
                  Generate & Download PDF
                </>
              )}
            </button>

            <button className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
              <Mail className="w-4 h-4 inline mr-2" />
              Email to Board Members
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardReportsGenerator;
