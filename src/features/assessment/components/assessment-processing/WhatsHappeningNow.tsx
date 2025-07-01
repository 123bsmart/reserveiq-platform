import React from 'react';

const steps = [
  'AI analyzing your building data and uploaded documents',
  'Comparing against similar buildings in your area',
  'Generating risk assessment and funding recommendations',
  'Creating board-ready presentation materials',
];

export const WhatsHappeningNow: React.FC = () => {
  return (
    <div className="bg-slate-50 rounded-xl p-8 mb-8 text-left">
      <h3 className="text-lg font-semibold mb-4 text-gray-900">🔄 What&apos;s happening now:</h3>
      <ul className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-600">
            <span className="bg-blue text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
