'use client';

import { cn } from '@/shared/utils';
import React from 'react';
import { EmailTemplate } from '../types';

interface EmailTemplateCardProps {
  templateKey: string;
  template: EmailTemplate;
  selectedTemplate: string;
  onSelect: (key: string) => void;
}

const getUrgencyColor = (urgency: string): string => {
  switch (urgency) {
    case 'critical':
      return 'text-red-600 bg-red-50 border-red-200';
    case 'high':
      return 'text-orange-600 bg-orange-50 border-orange-200';
    case 'medium':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'routine':
      return 'text-green-600 bg-green-50 border-green-200';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200';
  }
};

const EmailTemplateCard: React.FC<EmailTemplateCardProps> = ({ templateKey, template, selectedTemplate, onSelect }) => {
  const Icon = template.icon;

  return (
    <div
      onClick={() => onSelect(templateKey)}
      className={cn(
        'border rounded-lg p-4 cursor-pointer transition-all',
        selectedTemplate === templateKey
          ? 'border-blue-500 bg-blue-50 shadow-md'
          : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
      )}
    >
      <div className="flex items-start space-x-3">
        <div className={cn('p-2 rounded-lg', selectedTemplate === templateKey ? 'bg-blue-100' : 'bg-gray-100')}>
          <Icon className={cn('h-5 w-5', selectedTemplate === templateKey ? 'text-blue-600' : 'text-gray-600')} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm">{template.name}</h3>
          <p className="text-xs text-gray-600 mt-1">{template.description}</p>
          <div className="flex items-center space-x-3 mt-2">
            <span className="text-xs text-gray-500">{template.category}</span>
            <span className="text-xs text-gray-500">•</span>
            <span className="text-xs text-gray-500">{template.frequency}</span>
            <span className={cn('px-2 py-1 rounded-full text-xs font-medium', getUrgencyColor(template.urgency))}>
              {template.urgency}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplateCard;
