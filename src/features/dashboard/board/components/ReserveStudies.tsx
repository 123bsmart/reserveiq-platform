import { AlertTriangle, BarChart3, Calculator, Download, FileText, Mail } from 'lucide-react';
import React, { useState } from 'react';
import { Modal } from '@/shared/ui/modal';
import BoardReportsGenerator from './BoardReportsGenerator';
import BoardAssessmentCalculator from './BoardAssessmentCalculator';

const ReserveStudies: React.FC = () => {
  const [showReports, setShowReports] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  return (
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
              Your building faces a $127,000 funding gap for essential roof replacement by Q2 2026. Without immediate
              action, owners may face a special assessment of $50,000+ per unit.
            </p>
            <div className="mt-4 flex space-x-3">
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">View Funding Options</button>
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
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">18 Month Timeline</span>
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
        <button
          className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => setShowCalculator(true)}
        >
          <Calculator className="w-6 h-6 mx-auto mb-2" />
          <span className="font-medium">Compare Funding Options</span>
          <p className="text-sm text-blue-100 mt-1">Monthly increase vs special assessment</p>
        </button>

        <button
          className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          onClick={() => setShowReports(true)}
        >
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
      {/* Modal: Assessment Calculator */}
      <Modal
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
        title="🧮 Assessment Calculator"
        className="max-w-6xl max-h-[90vh] overflow-y-auto"
      >
        <BoardAssessmentCalculator />
      </Modal>

      {/* Modal: Board Reports Generator */}
      <Modal
        isOpen={showReports}
        onClose={() => setShowReports(false)}
        title="📊 Board Reports Generator"
        className="max-w-6xl max-h-[90vh] overflow-y-auto"
      >
        <BoardReportsGenerator />
      </Modal>
    </div>
  );
};

export default ReserveStudies;
