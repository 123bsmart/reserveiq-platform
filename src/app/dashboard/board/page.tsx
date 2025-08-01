'use client';
import { DashboardHeader, DashboardLayout } from '@/features/dashboard/components';
import { BoardToolsSidebar } from '@/features/dashboard/board/components';
import SideDrawer from '@/shared/components/SideDrawer';
import { useState } from 'react';
import { RoleEnum } from '@/shared/enum/auth.enum';
import Overview from '@/features/dashboard/board/components/Overview';
import ReserveStudies from '@/features/dashboard/board/components/ReserveStudies';
import Documents from '@/features/dashboard/board/components/Documents';
import EmailTemplates from '@/features/dashboard/components/EmailTemplates';

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
          <div className="flex-1 p-6">
            {activeTab === 'overview' && <Overview />}
            {activeTab === 'reserve-studies' && <ReserveStudies />}
            {activeTab === 'documents' && <Documents />}
            {activeTab === 'email-templates' && <EmailTemplates userType={'board'} />}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BoardDashboard;
