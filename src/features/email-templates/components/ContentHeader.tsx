'use client';

import React from 'react';

type EmailTemplate = {
  name: string;
  description: string;
  icon: React.ElementType;
  userType: 'pm' | 'board';
};

type Tone = {
  name: string;
};

type Audience = {
  name: string;
};

interface EmailContentHeaderProps {
  selectedTemplate: string;
  emailTemplates: Record<string, EmailTemplate>;
  selectedTone: string;
  tones: Record<string, Tone>;
  selectedAudience: string;
  audiences: Record<string, Audience>;
}

const EmailContentHeader: React.FC<EmailContentHeaderProps> = ({
  selectedTemplate,
  emailTemplates,
  selectedTone,
  tones,
  selectedAudience,
  audiences,
}) => {
  const template = emailTemplates[selectedTemplate];
  const Icon = template.icon;

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <Icon className="h-6 w-6 text-purple-600" />
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{template.name}</h2>
          <p className="text-gray-600">{template.description}</p>
          <div className="flex items-center space-x-2 mt-1">
            <span
              className={`px-2 py-1 rounded-full text-xs font-medium ${
                template.userType === 'pm'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-green-100 text-green-800'
              }`}
            >
              {template.userType === 'pm' ? 'Property Manager' : 'Board Member'}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 text-sm text-right">
        <div>
          <div className="font-medium text-gray-900">{tones[selectedTone].name}</div>
          <div className="text-gray-500">for {audiences[selectedAudience].name}</div>
        </div>
      </div>
    </div>
  );
};

export default EmailContentHeader;
