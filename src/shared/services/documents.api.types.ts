export interface IAnalyze {
  id?: number;
  documentInfo: {
    type: string;
    confidence: number;
    pageCount: number;
    processingTime: number;
  };
  buildingProfile?: unknown;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  financialSummary?: any;
  components?: unknown[];
  financialProjections?: unknown[];
  fundingScenarios?: unknown[];
  complianceChecks?: unknown[];
  keyInsights?: unknown[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  riskAssessment?: any;
  recommendations?: unknown;
  nextStudyDue?: string;
  complianceDeadlines?: unknown[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  topProjects: any[];
  summaryInsight: string;
}

export interface IAnalyzeDocumentRes {
  analyze: IAnalyze;
  file_url: string;
  id?: number;
}
