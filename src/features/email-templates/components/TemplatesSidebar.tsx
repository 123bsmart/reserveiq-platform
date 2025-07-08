// File: components/email-templates/EmailTemplatesSidebar.tsx
'use client';
import React from 'react';
import { Search } from 'lucide-react';
import EmailTemplateCard from './TemplateCard';
import { Audience, EmailTemplate, EmailTemplateType, Tone } from '@/features/email-templates/types';

interface Props {
  userType: string;
  setUserType: (val: EmailTemplateType) => void;
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
  userTypes: Record<string, { name: string; description: string }>;
}

export const EmailTemplatesSidebar: React.FC<Props> = ({
  userType,
  setUserType,
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
  userTypes,
  emailTemplates
}) => {


  return (
    <aside className="fixed top-0 left-0 h-full w-96 bg-white border-r border-gray-200 shadow-sm overflow-y-auto p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-gray-900">Email Templates</h2>
      </div>

      {/* Template Type Selector */}
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1 block">Template Type</label>
        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value as EmailTemplateType)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
        >
          {Object.entries(userTypes).map(([key, type]) => (
            <option key={key} value={key}>
              {type.name}
            </option>
          ))}
        </select>
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
    </aside>
  );
};
