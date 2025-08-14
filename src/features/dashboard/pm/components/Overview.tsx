import {
  AlertTriangle,
  BarChart3,
  Calculator,
  CheckCircle,
  Clock,
  DollarSign,
  FileText,
  Upload,
  Users,
} from 'lucide-react';
import React, { useState } from 'react';
import EnhancedAssessmentCalculator from './EnhancedAssessmentCalculator';
import ReserveStudyUpload from './ReserveStudyUpload';
import DocumentUpload from './DocumentUpload';
import BoardReports from './BoardReports';
import { Modal } from '@/shared/ui/modal';
import AddBuildingForm from '@/features/onboarding/AddBuildingForm';
import { Building2 } from 'lucide-react';

const Overview: React.FC = () => {
  const [showAssessmentCalculator, setShowAssessmentCalculator] = useState(false);
  const [showReserveStudyUpload, setShowReserveStudyUpload] = useState(false);
  const [showDocumentUpload, setShowDocumentUpload] = useState(false);
  const [showBoardReports, setShowBoardReports] = useState(false);
  const [showAddBuilding, setShowAddBuilding] = useState(false);

  return (
    <>
      {/* <AssessmentCalculator /> */}
      {/* Portfolio Summary */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Portfolio Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Buildings Managed</p>
                <p className="text-2xl font-bold text-gray-900">23</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Building Alerts</p>
                <p className="text-2xl font-bold text-red-600">3</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Potential Savings</p>
                <p className="text-2xl font-bold text-green-600">$847K</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Hours Saved/Week</p>
                <p className="text-2xl font-bold text-yellow-600">18</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Primary Actions - Reordered with Reserve Studies Priority */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Add Building */}
          <button
            onClick={() => setShowAddBuilding(true)}
            className="p-6 bg-white border rounded-xl hover:bg-gray-50 transition-all text-left"
          >
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Add Building</h3>
                <p className="text-sm text-gray-600">Create a new building in your portfolio</p>
              </div>
            </div>
          </button>
          {/* Priority 1: Reserve Studies */}
          <button
            onClick={() => setShowReserveStudyUpload(true)}
            className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
          >
            <div className="text-center">
              <FileText className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">🏆 Reserve Studies</h3>
              <p className="text-blue-100 text-sm">Upload & analyze for crisis prevention</p>
            </div>
          </button>

          {/* Priority 2: Assessment Calculator */}
          <button
            onClick={() => setShowAssessmentCalculator(true)}
            className="p-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 shadow-lg"
          >
            <div className="text-center">
              <Calculator className="w-8 h-8 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Assessment Calculator</h3>
              <p className="text-purple-100 text-sm">Compare funding strategies</p>
            </div>
          </button>

          {/* Priority 3: Other Documents */}
          <button
            onClick={() => setShowDocumentUpload(true)}
            className="p-6 bg-gray-100 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-200 hover:border-gray-300 transition-all"
          >
            <div className="text-center">
              <Upload className="w-8 h-8 mx-auto mb-3 text-gray-600" />
              <h3 className="font-semibold text-lg mb-2">Other Documents</h3>
              <p className="text-gray-500 text-sm">Board minutes, reports, budgets</p>
            </div>
          </button>

          {/* Priority 4: Board Reports */}
          <button
            onClick={() => setShowBoardReports(true)}
            className="p-6 bg-gray-100 border-2 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-200 hover:border-gray-300 transition-all"
          >
            <div className="text-center">
              <BarChart3 className="w-8 h-8 mx-auto mb-3 text-gray-600" />
              <h3 className="font-semibold text-lg mb-2">Board Reports</h3>
              <p className="text-gray-500 text-sm">Generate professional presentations</p>
            </div>
          </button>
        </div>
      </div>

      {/* Priority Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
            Building Alerts
          </h3>
          <div className="space-y-3">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-red-800">Pinewood Towers - Reserve Shortfall</p>
                  <p className="text-sm text-red-600 mt-1">$127K funding gap for roof replacement by Q2 2026</p>
                  <p className="text-xs text-red-500 mt-2">Potential $50K+ special assessment</p>
                </div>
                <button className="bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700">
                  Analyze Options
                </button>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-medium text-yellow-800">Oakview Commons - Compliance Risk</p>
                  <p className="text-sm text-yellow-600 mt-1">AGM notice deadline approaching in 8 days</p>
                </div>
                <button className="bg-yellow-600 text-white px-3 py-1 rounded text-xs hover:bg-yellow-700">
                  Send Notice
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            Recent Activity
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">Reserve Study Analysis Complete</p>
                <p className="text-sm text-gray-600">Maple Ridge Condos - Crisis risk assessment updated</p>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">Assessment Calculator Used</p>
                <p className="text-sm text-gray-600">Pinewood Towers - Roof replacement scenarios compared</p>
                <p className="text-xs text-gray-400">5 hours ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">Board Report Generated</p>
                <p className="text-sm text-gray-600">Oakview Commons - Q3 financial presentation</p>
                <p className="text-xs text-gray-400">1 day ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-gray-900">Document Processed</p>
                <p className="text-sm text-gray-600">Board minutes from July meeting analyzed</p>
                <p className="text-xs text-gray-400">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reserve Study Upload Modal */}
      <Modal
        isOpen={showReserveStudyUpload}
        onClose={() => setShowReserveStudyUpload(false)}
        title="📊 Reserve Study Analysis"
        className="max-w-7xl max-h-[90vh] overflow-y-auto"
      >
        <ReserveStudyUpload
          onAnalysisComplete={() => {
            // console.log('Analysis complete:', analysisData);
            // Here you could save the analysis data or trigger other actions
          }}
        />
      </Modal>

      {/* Assessment Calculator Modal */}
      <Modal
        isOpen={showAssessmentCalculator}
        onClose={() => setShowAssessmentCalculator(false)}
        title="🧮 Assessment Calculator"
        className="max-w-7xl max-h-[90vh] overflow-y-auto"
      >
        <EnhancedAssessmentCalculator />
      </Modal>

      {/* Document Upload Modal */}
      <Modal
        isOpen={showDocumentUpload}
        onClose={() => setShowDocumentUpload(false)}
        title="📄 Document Upload"
        className="max-w-6xl max-h-[90vh] overflow-y-auto"
      >
        <DocumentUpload />
      </Modal>

      {/* Board Reports Modal */}
      <Modal
        isOpen={showBoardReports}
        onClose={() => setShowBoardReports(false)}
        title="📋 Board Reports"
        className="max-w-7xl max-h-[90vh] overflow-y-auto"
      >
        <BoardReports />
      </Modal>

      {/* Add Building Modal */}
      <Modal
        isOpen={showAddBuilding}
        onClose={() => setShowAddBuilding(false)}
        title="🏢 Add Building"
        className="max-w-3xl"
      >
        <AddBuildingForm
          onClose={() => setShowAddBuilding(false)}
          onSubmit={(payload) => {
            // client-only stub
            console.log('AddBuilding payload', payload);
          }}
        />
      </Modal>
    </>
  );
};

export default Overview;
