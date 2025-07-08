'use client';

import React from 'react';
import { Brain } from 'lucide-react';
import {type Audience, type Tone} from "@/features/email-templates/types"
type Option = {
  name: string;
  description?: string;
};

interface EmailAiSettingsProps {
  selectedTone: Tone;
  setSelectedTone: (value: Tone) => void;
  tones: Record<string, Option>;
  selectedAudience: Audience;
  setSelectedAudience: (value: Audience) => void;
  audiences: Record<string, Option>;
}

const EmailAiSettings: React.FC<EmailAiSettingsProps> = ({
  selectedTone,
  setSelectedTone,
  tones,
  selectedAudience,
  setSelectedAudience,
  audiences,
}) => {
  return (
    <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
      <div className="flex items-center space-x-2 mb-3">
        <Brain className="h-4 w-4 text-purple-600" />
        <span className="text-sm font-semibold text-purple-800">AI Settings</span>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Tone</label>
          <select
            value={selectedTone}
            onChange={(e) => setSelectedTone(e.target.value as Tone)}
            className="w-full text-xs border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-purple-500"
          >
            {Object.entries(tones).map(([key, tone]) => (
              <option key={key} value={key}>{tone.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">Audience</label>
          <select
            value={selectedAudience}
            onChange={(e) => setSelectedAudience(e.target.value as Audience)}
            className="w-full text-xs border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-purple-500"
          >
            {Object.entries(audiences).map(([key, audience]) => (
              <option key={key} value={key}>{audience.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default EmailAiSettings;
