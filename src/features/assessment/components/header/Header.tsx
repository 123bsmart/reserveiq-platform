
import React from 'react';
import { Logo } from '@/shared/ui';

export const Header: React.FC = () => {
  return (
    <header className="text-center py-[60px] pb-5">
      <div className="flex justify-center mb-[25px]">
        <Logo size="medium" />
      </div>

      <div className="mx-auto">
        <h1 className="text-white text-[1.75rem] md:text-[2rem] font-bold text-center leading-[1.2]">
          Get Your Free Reserve Fund Assessment
        </h1>
        <p className="text-gray-lighter text-base mt-[10px]">
          Upload your reserve study and get instant AI-powered insights in under 30 seconds
        </p>
      </div>
    </header>
  );
};

export default Header;
