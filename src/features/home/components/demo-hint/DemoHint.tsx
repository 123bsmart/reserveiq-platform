import React from 'react';

export const DemoHint: React.FC = () => {
  return (
    <div className="rounded-[8px] p-[15px]  mx-auto max-w-[600px] text-[0.8rem] text-[#cbd5e1] border border-[#ffffff33] bg-[#ffffff1a]">
      <strong className="text-[#10b981]">👆 Try the Interactive Demo:</strong> Click "Explore Risk Dashboard" to see a
      live portfolio with real reserve fund data, AI insights, and downloadable reports. No signup required!
    </div>
  );
};

export default DemoHint;
