import { IAnalyze } from '@/shared/services/documents.api.types';

export interface BaselineAnalysis {
  fundingStatus: {
    currentReserve: number;
    targetReserve: number;
    monthlyContribution: number;
    percentFunded: number;
  };
  upcomingExpenses: Array<{
    year: number;
    component: string;
    cost: number;
    priority: string;
  }>;
}

export const adaptReserveStudyToBaselineAnalysis = (analysis: IAnalyze): BaselineAnalysis => {
  const { financialSummary, topProjects } = analysis;

  const fundingStatus = {
    currentReserve: financialSummary.currentReserveBalance || 0,
    targetReserve: financialSummary.targetReserveBalance || financialSummary.currentReserveBalance * 2, // Fallback
    monthlyContribution: (financialSummary.annualContribution || 0) / 12,
    percentFunded: financialSummary.fundingRatio || 0,
  };

  const upcomingExpenses = (topProjects || [])
    .filter((component) => component.urgency === 'critical' || component.urgency === 'high')
    .map((component) => {
      let year = new Date().getFullYear() + 1;
      if (component.predictedFailureDate) {
        const match = component.predictedFailureDate.match(/(\d{4})/);
        if (match) {
          year = parseInt(match[1]);
        }
      }
      return {
        year,
        component: component.name,
        cost: component.replacementCost || 0,
        priority: component.urgency === 'critical' ? 'Critical' : 'High',
      };
    })
    .sort((a, b) => a.year - b.year);

  return { fundingStatus, upcomingExpenses };
};

export const getBuildingName = (analysis: IAnalyze): string => {
  return analysis.buildingProfile?.name || 'Unknown Building';
};

export const getKeyInsights = (analysis: IAnalyze): string[] => {
  // Try insights first (new structure), then keyInsights (old structure)
  const insights = analysis.insights || analysis.keyInsights || [];
  return insights.map((insight) => insight.title || '');
};

export const getRiskAssessment = (analysis: IAnalyze): string => {
  const riskScore = analysis.riskAssessment?.overallRiskScore || 0;
  if (riskScore >= 70) return 'High Risk';
  if (riskScore >= 40) return 'Medium Risk';
  return 'Low Risk';
};

export const getComplianceStatus = (analysis: IAnalyze): string => {
  const nonCompliant = analysis.complianceChecks?.filter((check) => check.status === 'non-compliant').length || 0;
  if (nonCompliant === 0) return 'Fully Compliant';
  if (nonCompliant <= 2) return 'Mostly Compliant';
  return 'Non-Compliant';
};
