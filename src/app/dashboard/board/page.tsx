'use client';
import { DashboardHeader, DashboardLayout } from '@/features/dashboard/components';
import { BoardToolsSidebar } from '@/features/dashboard/board/components';
import SideDrawer from '@/shared/components/SideDrawer';
import { useState } from 'react';
import { RoleEnum } from '@/shared/enum/auth.enum';
import BoardOverviewV2 from '@/features/dashboard/board/components/BoardOverviewV2';
import ReserveStudies from '@/features/dashboard/board/components/ReserveStudies';
import Documents from '@/features/dashboard/board/components/Documents';
import EmailTemplates from '@/features/dashboard/components/EmailTemplates';
import FinancialHealth from '@/features/dashboard/board/components/FinancialHealth';
import Compliance from '@/features/dashboard/board/components/Compliance';

const BoardDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);

  return (
    <DashboardLayout>
      <DashboardHeader type={RoleEnum.BOARD_MEMBER} />
      {/* Mobile Sidebar */}
      <SideDrawer isOpen={leftMenuOpen} onClose={() => setLeftMenuOpen(false)} position="left">
        <BoardToolsSidebar className="border-none shadow-none" activeTab={activeTab} setActiveTab={setActiveTab} />
      </SideDrawer>
      <div className="min-h-screen bg-gray-50">
        <div className="flex">
          <BoardToolsSidebar
            className="border-none shadow-none hidden lg:block"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto scrollbar-thin">
            {activeTab === 'overview' && <BoardOverviewV2 onNavigate={setActiveTab} />}
            {activeTab === 'reserve-studies' && <ReserveStudies />}
            {activeTab === 'financial' && <FinancialHealth />}
            {activeTab === 'documents' && <Documents />}
            {activeTab === 'email-templates' && <EmailTemplates userType={'board'} />}
            {activeTab === 'compliance' && <Compliance />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BoardDashboard;
