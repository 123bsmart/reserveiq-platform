type DashboardHeaderProps = {
  title: string;
  fullName: string;
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, fullName }) => {
  return (
    <div className="bg-white shadow-sm border-b">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-background-dark">ReserveIQ</div>
            <div className="text-sm text-gray-500">{title}</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-600">Welcome back, {fullName}</div>
            <div className="w-8 h-8 bg-background-dark rounded-full flex items-center justify-center text-white font-semibold">
              SJ
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
