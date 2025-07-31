'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import EmailTemplateCard from './TemplateCard';
import { Audience, EmailTemplate, Tone } from '../types';
import SideDrawer from '@/shared/components/SideDrawer';

interface Props {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedTemplate: string;
  setSelectedTemplate: (val: string) => void;
  tones: Record<string, { name: string; description: string }>;
  audiences: Record<string, { name: string; description: string }>;
  selectedTone: Tone;
  selectedAudience: Audience;
  setSelectedTone: (val: Tone) => void;
  setSelectedAudience: (val: Audience) => void;
  emailTemplates: [string, EmailTemplate][];
}

const EmailTemplateSidebarContent: React.FC<Props> = ({
  searchQuery,
  setSearchQuery,
  selectedTemplate,
  setSelectedTemplate,
  tones,
  audiences,
  selectedTone,
  selectedAudience,
  setSelectedTone,
  setSelectedAudience,
  emailTemplates,
}) => {
  return (
    <React.Fragment>
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">Email Templates</h2>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search templates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm w-full focus:ring-2 focus:ring-purple-500 focus:outline-none"
        />
      </div>

      {/* Template List */}
      <div className="space-y-3">
        {emailTemplates.map(([key, template]) => (
          <EmailTemplateCard
            key={key}
            templateKey={key}
            template={template}
            onSelect={setSelectedTemplate}
            selectedTemplate={selectedTemplate}
          />
        ))}
      </div>

      {/* AI Settings */}
      <div className="mt-6 p-4 border rounded-lg bg-gray-50">
        <div className="text-sm font-medium mb-2 text-gray-800">AI Settings</div>

        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-600">Tone</label>
            <select
              value={selectedTone}
              onChange={(e) => setSelectedTone(e.target.value as Tone)}
              className="w-full text-xs border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-purple-500"
            >
              {Object.entries(tones).map(([key, tone]) => (
                <option key={key} value={key}>
                  {tone.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-600">Audience</label>
            <select
              value={selectedAudience}
              onChange={(e) => setSelectedAudience(e.target.value as Audience)}
              className="w-full text-xs border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-purple-500"
            >
              {Object.entries(audiences).map(([key, audience]) => (
                <option key={key} value={key}>
                  {audience.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export const EmailTemplatesSidebar: React.FC<Props> = (props) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <React.Fragment>
      <aside className="h-full w-96 bg-white border-r border-gray-200 shadow-sm overflow-y-auto p-6 space-y-6 hidden xl:block">
        <EmailTemplateSidebarContent {...props} />
      </aside>
      <div className="xl:hidden px-5 pt-4">
        <button onClick={() => setIsSidebarOpen(true)} className="xl:hidden text-gray-600 hover:text-black">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <SideDrawer isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
          <div className="w-full space-y-6">
            <EmailTemplateSidebarContent {...props} />
          </div>
        </SideDrawer>
      </div>
    </React.Fragment>
  );
};
