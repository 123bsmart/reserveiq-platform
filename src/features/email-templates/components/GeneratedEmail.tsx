'use client';

import React from 'react';
import {
  Edit3,
  Copy,
  Download,
  Send,
  Brain,
} from 'lucide-react';

interface GeneratedEmailProps {
  isGenerating: boolean;
  generatedContent: string;
  selectedTone: string;
  selectedAudience: string;
}

const GeneratedEmail: React.FC<GeneratedEmailProps> = ({
  isGenerating,
  generatedContent,
  selectedTone,
  selectedAudience,
}) => {
  const toneName = selectedTone.charAt(0).toUpperCase() + selectedTone.slice(1);
  const audienceLabel = selectedAudience.charAt(0).toUpperCase() + selectedAudience.slice(1);

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
      {/* Header */}
      <div className="border-b border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="font-semibold text-gray-900">Generated Email</span>
            {!isGenerating && (
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                ✨ AI Generated
              </span>
            )}
          </div>
          {!isGenerating && (
            <div className="flex items-center space-x-2">
              <button className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                <Edit3 className="h-3 w-3 mr-1" />
                Edit
              </button>
              <button className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                <Copy className="h-3 w-3 mr-1" />
                Copy
              </button>
              <button className="inline-flex items-center px-3 py-1.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50">
                <Download className="h-3 w-3 mr-1" />
                PDF
              </button>
              <button className="inline-flex items-center px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <Send className="h-3 w-3 mr-1" />
                Send
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {isGenerating ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 text-purple-600 mb-4">
                <Brain className="h-6 w-6 animate-pulse" />
                <span className="text-lg font-medium">AI is crafting your email...</span>
              </div>
              <div className="text-sm text-gray-500 space-y-1">
                <div>• Analyzing building data and financial metrics</div>
                <div>• Applying {toneName} tone for {audienceLabel}</div>
                <div>• Generating professional recommendations</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap border">
            {generatedContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default GeneratedEmail;
