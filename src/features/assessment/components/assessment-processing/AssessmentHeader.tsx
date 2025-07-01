import React from 'react';

type Props = {
  buildingName?: string;
};

export const AssessmentHeader: React.FC = ({ buildingName }: Props) => {
  const title = buildingName
    ? `Assessment Processing for ${buildingName}!`
    : 'Assessment Processing!';

  return (
    <div className="text-center mb-8">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green flex items-center justify-center text-4xl animate-scale-in">
        🤖
      </div>
      <h1 className="text-[1.75rem] font-semibold text-gray-text mb-4">{title}</h1>
      <p className="text-[1.1rem]/[1.6] text-gray-muted leading-relaxed">
        Thank you for submitting your building information. Our AI is now analyzing your reserve fund health and will deliver your personalized assessment report within 24 hours.
      </p>
    </div>
  );
};
