import { Sparkles } from 'lucide-react';
import { buildingData } from '../data';

const MainContent: React.FC = () => {
  return (
    <div className="mb-8">
      <div className="flex md:flex-row flex-col gap-y-5 md:items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-purple-600 shrink-0" />
            Dynamic Email Generator
          </h1>
          <p className="text-gray-600 mt-2">
            AI-powered professional communications for Property Managers AND Board Members
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-sm text-gray-500">
            Building: <span className="font-medium text-gray-900">{buildingData.building.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
