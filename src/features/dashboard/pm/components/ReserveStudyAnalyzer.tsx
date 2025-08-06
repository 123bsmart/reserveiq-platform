'use client';
import React from 'react';
import {
  adaptReserveStudyToBaselineAnalysis,
  getBuildingName,
  getKeyInsights,
  getRiskAssessment,
} from '@/shared/utils/reserve-study-adapter';
import InteractiveScenarioPlanner from '@/shared/components/InteractiveScenarioPlanner';
import { IAnalyze } from '@/shared/services/documents.api.types';

interface ReserveStudyAnalyzerProps {
  analysisData: IAnalyze;
  onScenarioChange?: (scenario: unknown) => void;
}

const ReserveStudyAnalyzer: React.FC<ReserveStudyAnalyzerProps> = ({ analysisData, onScenarioChange }) => {
  const baselineAnalysis = React.useMemo(() => adaptReserveStudyToBaselineAnalysis(analysisData), [analysisData]);
  const buildingName = React.useMemo(() => getBuildingName(analysisData), [analysisData]);
  const keyInsights = React.useMemo(() => getKeyInsights(analysisData), [analysisData]);
  const riskAssessment = React.useMemo(() => getRiskAssessment(analysisData), [analysisData]);

  return (
    <div className="space-y-6">
      {/* Building Header */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{buildingName}</h2>
        <p className="text-gray-600 mb-4">Reserve Study Analysis Results</p>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-900 mb-1">Funding Ratio</h3>
            <p className="text-2xl font-bold text-blue-600">{analysisData.financialSummary.fundingRatio}%</p>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-green-900 mb-1">Current Reserve</h3>
            <p className="text-2xl font-bold text-green-600">
              ${analysisData.financialSummary.currentReserveBalance.toLocaleString()}
            </p>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-purple-900 mb-1">Risk Level</h3>
            <p className="text-2xl font-bold text-purple-600">{riskAssessment}</p>
          </div>
        </div>

        {/* Key Insights */}
        {keyInsights.length > 0 && (
          <div className="bg-yellow-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-yellow-900 mb-2">Key Insights</h3>
            <ul className="space-y-1">
              {keyInsights.slice(0, 3).map((insight, index) => (
                <li key={index} className="text-sm text-yellow-800 flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  {insight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Interactive Scenario Planner */}
      <InteractiveScenarioPlanner
        baselineAnalysis={baselineAnalysis}
        onScenarioChange={React.useCallback(() => {
          if (onScenarioChange) {
            onScenarioChange({});
          }
        }, [onScenarioChange])}
      />
    </div>
  );
};

export default ReserveStudyAnalyzer;
