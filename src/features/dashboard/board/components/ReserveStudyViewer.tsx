'use client';
import React, { useState, useEffect } from 'react';
import documentsApi from '@/shared/services/documents.api';
import { IAnalyzeDocumentRes } from '@/shared/services/documents.api.types';

const ReserveStudyViewer: React.FC = () => {
  const [reserveStudies, setReserveStudies] = useState<IAnalyzeDocumentRes[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStudy, setSelectedStudy] = useState<IAnalyzeDocumentRes | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadReserveStudies();
  }, []);

  const loadReserveStudies = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await documentsApi.getReserveStudyAnalysis();
      setReserveStudies(response.data || []);
    } catch (error) {
      console.error('Error loading reserve studies:', error);
      setError('Failed to load reserve studies');
      // Fallback to mock data for demo
      setReserveStudies([
        {
          id: 1,
          analyze: {
            id: 1,
            documentInfo: { type: 'reserve_study', confidence: 95, pageCount: 50, processingTime: 161048 },
            buildingProfile: {
              name: 'Maple Gardens Condos',
              units: 21,
              yearBuilt: 1995,
              totalArea: null,
              buildingType: null,
              location: 'Toronto, ON',
            },
            financialSummary: {
              currentReserveBalance: 89432,
              targetReserveBalance: 198938,
              fundingRatio: 45,
              annualContribution: 22200,
              recommendedContribution: 30120,
              contributionShortfall: 7920,
              projectedShortfall: { oneYear: 47419, threeYear: 101734, fiveYear: 141203 },
              confidence: 0.95,
              reviewFlag: false,
            },
            components: [],
            financialProjections: [],
            fundingScenarios: [],
            complianceChecks: [],
            keyInsights: [],
            riskAssessment: {
              overallRiskScore: 42,
              financialHealth: 'good',
              immediateRisks: [],
              nearTermRisks: [],
              longTermRisks: [],
            },
            recommendations: { immediate: [], shortTerm: [], longTerm: [], costOptimization: [] },
            nextStudyDue: 'March 2028',
            complianceDeadlines: [],
            topProjects: [],
            summaryInsight: 'Reserve fund requires immediate attention',
          },
          file_url: '/sample-reserve-study.pdf',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (study: IAnalyzeDocumentRes): string => {
    // Mock status logic - in real app this would come from backend
    const statuses = ['New Analysis Available', 'Board Reviewed', 'Action Required'];
    const status = statuses[study.id ? study.id % 3 : 0];

    switch (status) {
      case 'New Analysis Available':
        return 'bg-blue-100 text-blue-800';
      case 'Board Reviewed':
        return 'bg-green-100 text-green-800';
      case 'Action Required':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (study: IAnalyzeDocumentRes): string => {
    const statuses = ['New Analysis Available', 'Board Reviewed', 'Action Required'];
    return statuses[study.id ? study.id % 3 : 0];
  };

  const getRiskLevel = (study: IAnalyzeDocumentRes): { text: string; color: string } => {
    const riskScore = study.analyze.riskAssessment?.overallRiskScore || 0;
    if (riskScore >= 70) return { text: 'High Risk', color: 'text-red-600' };
    if (riskScore >= 40) return { text: 'Medium Risk', color: 'text-yellow-600' };
    return { text: 'Low Risk', color: 'text-green-600' };
  };

  if (loading) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Loading reserve studies...</span>
        </div>
      </div>
    );
  }

  if (selectedStudy) {
    const riskLevel = getRiskLevel(selectedStudy);
    return (
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Reserve Study Analysis</h2>
          <button onClick={() => setSelectedStudy(null)} className="text-sm text-gray-500 hover:text-gray-700">
            ← Back to List
          </button>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{selectedStudy.analyze.buildingProfile?.name}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-blue-900 mb-1">Funding Ratio</h4>
                <p className="text-2xl font-bold text-blue-600">
                  {selectedStudy.analyze.financialSummary.fundingRatio}%
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-green-900 mb-1">Current Reserve</h4>
                <p className="text-2xl font-bold text-green-600">
                  ${selectedStudy.analyze.financialSummary.currentReserveBalance.toLocaleString()}
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="text-sm font-medium text-purple-900 mb-1">Risk Level</h4>
                <p className={`text-2xl font-bold ${riskLevel.color}`}>{riskLevel.text}</p>
              </div>
            </div>
          </div>

          {/* Critical Findings */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Critical Findings</h4>
            <div className="space-y-3">
              {selectedStudy.analyze.keyInsights?.slice(0, 3).map((insight, index) => (
                <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h5 className="font-medium text-red-900 mb-1">{insight.title}</h5>
                  <p className="text-sm text-red-800">{insight.description}</p>
                  {insight.costImplication && (
                    <p className="text-sm text-red-700 mt-1">Cost: ${insight.costImplication.toLocaleString()}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Board Recommendations</h4>
            <div className="space-y-2">
              {selectedStudy.analyze.recommendations?.immediate?.slice(0, 3).map((rec, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-blue-600 mt-1">•</span>
                  <p className="text-sm text-gray-700">{rec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Reserve Studies</h3>
        <p className="text-sm text-gray-600">Review uploaded reserve studies and their analysis results.</p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="space-y-4">
        {reserveStudies.map((study) => {
          const riskLevel = getRiskLevel(study);
          return (
            <div
              key={study.id}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedStudy(study)}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{study.analyze.buildingProfile?.name}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(study)}`}>
                  {getStatusText(study)}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Funding Ratio:</span>
                  <span className="ml-2 font-medium">{study.analyze.financialSummary.fundingRatio}%</span>
                </div>
                <div>
                  <span className="text-gray-500">Risk Level:</span>
                  <span className={`ml-2 font-medium ${riskLevel.color}`}>{riskLevel.text}</span>
                </div>
                <div>
                  <span className="text-gray-500">Units:</span>
                  <span className="ml-2 font-medium">{study.analyze.buildingProfile?.units}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {reserveStudies.length === 0 && !loading && (
        <div className="text-center py-8">
          <div className="text-gray-400 mb-2">
            <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <p className="text-gray-500">No reserve studies uploaded yet</p>
          <p className="text-sm text-gray-400">Property managers can upload reserve studies for analysis</p>
        </div>
      )}
    </div>
  );
};

export default ReserveStudyViewer;
