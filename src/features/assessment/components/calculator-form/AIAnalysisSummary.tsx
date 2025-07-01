import { IncludedFeatures } from "@/features/assessment/components/included-features/IncludedFeatures";

const aiInsights = [
  'Reserve fund health score and risk assessment',
  'Comparison to similar buildings in your area',
  'Funding gap analysis for upcoming expenses',
  'Monthly contribution vs. special assessment scenarios',
  'Board presentation recommendations',
  'Timeline for action items',
];

export const AIAnalysisSummary: React.FC = () => {
  return (
    <IncludedFeatures features={aiInsights} title="🤖 AI Analysis Will Include:" />
  );
}
