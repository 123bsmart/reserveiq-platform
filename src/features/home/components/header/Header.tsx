'use client';

import React from 'react';
import Dashboard from '../dashboard/Dashboard';
import DemoHint from '../demo-hint/DemoHint';
import { Button, Logo } from '@/shared/ui';

export const Header: React.FC = () => {
  return (
    <header className="text-center py-[60px] px-[20px] pb-[40px]">
      <div className="flex justify-center mb-[25px]">
        <Logo size="medium" />
      </div>

      <div className="mx-auto">
        <h1 className="text-white text-[2rem] md:text-[2.5rem] font-[700]  text-center leading-[1.2]">
          Predict Problems Before They Cost You Buildings.
        </h1>
        <p className="text-[#cbd5e1] font-[0.9rem] mt-[10px]">
          AI-powered portfolio intelligence that gives you the oversight boards expect —and the edge over your
          competitors.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-[16px] mb-[42px] mt-[30px] ">
          <Button onClick={() => (window.location.href = 'demo-request.html')} className="w-[290px]  font-[600] ">
            Book a 15-min Demo
          </Button>
          <Button
            variant="outline"
            onClick={() => (window.location.href = 'demo.html')}
            className="w-[290px] font-[600]"
          >
            Explore Risk Dashboard
          </Button>
        </div>
      </div>

      <div className="space-y-[20px]">
        <DemoHint />
        <Dashboard />
      </div>
    </header>
  );
};

export default Header;
