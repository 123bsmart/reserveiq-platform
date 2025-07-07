import React from 'react';

const LogoSection: React.FC = () => (
  <div className="text-center mb-8">
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center text-white text-xl font-bold">
        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-6 h-6">
          <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm5-18v4h3V3h-3z" />
        </svg>
      </div>
      <div className="sm:text-[32px] text-2xl font-extrabold text-blue-900">ReserveIQ</div>
    </div>
    <h1 className="sm:text-2xl text-[1.3rem] font-bold text-blue-900 mb-2">Welcome to ReserveIQ Platform</h1>
    <p className="text-slate-500 text-base">Sign in to your account or create a new one</p>
  </div>
);

export default LogoSection;
