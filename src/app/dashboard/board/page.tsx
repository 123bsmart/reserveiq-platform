'use client';
import { DashboardHeader, DashboardLayout, SidebarTools } from '@/features/dashboard/components';
import {
  BoardToolsSidebar,
  BuildingHealth,
  CrisisPrevention,
  PriorityAlerts,
} from '@/features/dashboard/board/components';
import SideDrawer from '@/shared/components/SideDrawer';
import { useState } from 'react';

const _financial_oversight = [
  {
    label: 'Financial Dashboard',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
        <path
          fillRule="evenodd"
          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
        />
      </svg>
    ),
  },
  {
    label: 'Reserve Study Analysis',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
        />
      </svg>
    ),
  },
  {
    label: 'Budget vs Actual Reports',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        />
      </svg>
    ),
  },
  {
    label: 'Assessment Planning',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: 'Funding Gap Analysis',
    href: '#',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        />
      </svg>
    ),
  },
];

const BoardDashboard: React.FC = () => {
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [rightMenuOpen, setRightMenuOpen] = useState(false);

  return (
    <DashboardLayout>
      <DashboardHeader
        title="Board Member Dashboard - Maple Heights Condo"
        fullName="Michael Thompson (Board President)"
      />
      {/* Mobile Sidebar */}
      <SideDrawer isOpen={leftMenuOpen} onClose={() => setLeftMenuOpen(false)} position="left">
        <SidebarTools title="Financial Oversight" items={_financial_oversight} className="border-none shadow-none" />
      </SideDrawer>
      <SideDrawer isOpen={rightMenuOpen} onClose={() => setRightMenuOpen(false)} position="right">
        <BoardToolsSidebar className="border-none shadow-none" />
      </SideDrawer>

      <main className="flex min-h-screen">
        <SidebarTools title="Financial Oversight" items={_financial_oversight} className="hidden lg:block" />
        {/* Main Content Area */}
        <div className="flex-1 p-6 space-y-6">
          <BuildingHealth />
          <CrisisPrevention />
          <PriorityAlerts />
        </div>
        <BoardToolsSidebar className="hidden lg:block" />
      </main>
    </DashboardLayout>
  );
};

export default BoardDashboard;
