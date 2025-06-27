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
    <div className="bg-green-bg border border-green-border rounded-lg p-5 space-y-2 text-sm text-green-text mt-8 mb-5">
      <h4 className="font-semibold text-green-title mb-2">🤖 AI Analysis Will Include:</h4>
      <ul className="list-disc list-inside space-y-1">
        {aiInsights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
