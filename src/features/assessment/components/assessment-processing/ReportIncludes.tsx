import { IncludedFeatures } from '@/features/assessment/components/included-features/IncludedFeatures';

export const reportIncludesItems = [
  'Reserve health score (0-100%) with risk level',
  'Upcoming expense timeline and cost projections',
  'Monthly increase vs. special assessment scenarios',
  'Board presentation slides with key recommendations',
  'Comparison to similar buildings in your region',
];

export const ReportIncludes: React.FC = () => {
  return <IncludedFeatures features={reportIncludesItems} title="📧 Your Assessment Report Will Include:" alignment='center' />;
};
