import React from 'react';

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-500 to-emerald-500 py-5 px-[30px]">
      <div className="relative w-full max-w-[500px] rounded-[20px] bg-white md:p-12 py-8 px-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-900 to-emerald-500" />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
