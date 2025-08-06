export interface IAnalyze {
  id?: number;
  documentInfo: {
    type: string;
    confidence: number;
    pageCount: number;
    processingTime: number;
  };
  buildingProfile?: {
    name: string;
    units: number;
    yearBuilt: number | null;
    totalArea: number | null;
    buildingType: string | null;
    location: string;
  };
  financialSummary: {
    currentReserveBalance: number;
    targetReserveBalance?: number;
    fundingRatio: number;
    annualContribution: number;
    recommendedContribution?: number;
    contributionShortfall: number;
    projectedShortfall: {
      oneYear: number;
      threeYear: number;
      fiveYear: number;
    };
    confidence?: number;
    reviewFlag?: boolean;
  };
  components?: Array<{
    name: string;
    category: string;
    currentAge: number;
    usefulLife: number;
    remainingLife: number;
    replacementCost: number;
    condition: string;
    riskScore: number;
    failureProbability: number;
    predictedFailureDate: string;
    urgency: 'critical' | 'high' | 'medium' | 'low';
    recommendedAction: string;
    annualDeteriorationRate: number;
  }>;
  financialProjections?: Array<{
    year: number;
    openingBalance: number;
    contributions: number;
    expenditures: number;
    closingBalance: number;
    inflationAdjustment: number;
    isShortfall: boolean;
    shortfallAmount: number;
    cumulativeShortfall: number;
    confidence: number;
    reviewFlag: boolean;
  }>;
  fundingScenarios?: Array<{
    name: string;
    type: string;
    monthlyIncrease: number;
    projections: unknown[];
    totalShortfall: number;
    riskLevel: string;
    recommendation: string;
  }>;
  complianceChecks?: Array<{
    jurisdiction: string;
    requirement: string;
    status: 'compliant' | 'non-compliant';
    description: string;
    deadline?: string;
    recommendation?: string;
  }>;
  keyInsights?: Array<{
    type: string;
    priority: 'critical' | 'high' | 'medium' | 'low';
    title: string;
    description: string;
    impact: string;
    actionRequired: string;
    timeline: string;
    costImplication?: number;
    preventionSavings?: number;
  }>;
  insights?: Array<{
    title: string;
    description: string;
    priority: 'critical' | 'high' | 'medium' | 'low';
  }>;
  riskAssessment: {
    overallRiskScore: number;
    financialHealth: string;
    immediateRisks?: string[];
    nearTermRisks?: string[];
    longTermRisks?: string[];
  };
  recommendations: {
    immediate: string[];
    shortTerm?: string[];
    longTerm?: string[];
    costOptimization?: string[];
  };
  nextStudyDue: string;
  complianceDeadlines: Array<{
    deadline: string;
    requirement: string;
    action: string;
  }>;
  topProjects: Array<{
    name: string;
    category: string;
    currentAge: number;
    usefulLife: number;
    remainingLife: number;
    replacementCost: number;
    condition: string;
    riskScore: number;
    failureProbability: number;
    predictedFailureDate: string;
    urgency: 'critical' | 'high' | 'medium' | 'low';
    recommendedAction: string;
    annualDeteriorationRate: number;
  }>;
  summaryInsight: string;
}

export interface IAnalyzeDocumentRes {
  analyze: IAnalyze;
  file_url: string;
  id?: number;
}
