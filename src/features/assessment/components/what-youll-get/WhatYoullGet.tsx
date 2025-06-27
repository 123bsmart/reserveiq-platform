const features = [
  { emoji: '📊', text: 'Reserve Health Score (0-100%)' },
  { emoji: '🚨', text: 'Critical Risk Alerts' },
  { emoji: '💰', text: 'Cost Scenario Analysis' },
  { emoji: '📋', text: 'Board-Ready Summary' },
  { emoji: '⏰', text: 'Timeline Recommendations' },
  { emoji: '🤖', text: 'AI-Powered Insights' },
];

export const WhatYoullGet: React.FC = () => {
  return (
    <div className="value-proposition bg-white/10 backdrop-blur-md rounded-xl p-5 md:p-6 max-w-2xl mx-auto">
      <h3 className="text-white text-lg text-center font-semibold mb-4">🎯 What You'll Get (Completely Free):</h3>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 text-white/90 text-sm">
        {features.map(({ emoji, text }) => (
          <li key={text} className="flex items-center gap-2">
            <span>{emoji}</span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
