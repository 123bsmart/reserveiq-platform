'use client';
import { DashboardHeader, DashboardLayout, SidebarTools } from '@/features/dashboard/components';
import EmailTemplates from '@/features/dashboard/components/EmailTemplates';
import Documents from '@/features/dashboard/pm/components/Documents';
import Overview from '@/features/dashboard/pm/components/Overview';
import ReserveStudies from '@/features/dashboard/pm/components/ReserveStudies';
import SideDrawer from '@/shared/components/SideDrawer';
import { RoleEnum } from '@/shared/enum/auth.enum';
import { useState } from 'react';

const PMDashboard: React.FC = () => {
  const [leftMenuOpen, setLeftMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <DashboardLayout>
      <DashboardHeader type={RoleEnum.PROPERTY_MANAGER} onLeftMenuClick={() => setLeftMenuOpen(true)} />
      {/* Mobile Sidebar */}
      <SideDrawer isOpen={leftMenuOpen} onClose={() => setLeftMenuOpen(false)} position="left">
        <SidebarTools className="border-none shadow-none" activeTab={activeTab} setActiveTab={setActiveTab} />
      </SideDrawer>

      <div className="flex">
        <SidebarTools
          className="border-none shadow-none hidden lg:block"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        {/* Main Content */}
        <div className="flex-1 p-6">
          {activeTab === 'overview' && <Overview />}
          {activeTab === 'reserve-studies' && <ReserveStudies />}
          {activeTab === 'documents' && <Documents />}
          {activeTab === 'email-templates' && <EmailTemplates userType={'pm'} />}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PMDashboard;
