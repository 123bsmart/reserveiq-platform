'use client';

import React, { useState } from 'react';

import { emailTemplates, tones, audiences } from './data';
import { EmailTemplatesSidebar } from './components/TemplatesSidebar';
import { Audience, UserType, Tone } from './types';
import EmailContentHeader from './components/ContentHeader';
import EmailAiSettings from './components/EmailAiSettings';
import GeneratedEmail from './components/GeneratedEmail';
import QuickActions from './components/QuickActions';
import GenerateButton from './components/GenerateButton';
import { generateTemplateContent } from './utils';
import MainContent from './components/MainContent';

type Props = {
  userType: UserType;
};

const EmailTemplates: React.FC<Props> = ({ userType }) => {
  const [generatedContent, setGeneratedContent] = useState(generateTemplateContent('board-update'));
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('board-update');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTone, setSelectedTone] = useState<Tone>('formal');
  const [selectedAudience, setSelectedAudience] = useState<Audience>('board');

  // Filter templates
  const filteredTemplates = Object.entries(emailTemplates).filter(([_, template]) => {
    const matchUserType = template.userType === userType;
    const matchSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchUserType && matchSearch;
  });

  const generateContent = (): void => {
    setIsGenerating(true);

    // Simulate AI generation delay
    setTimeout(() => {
      const content = generateTemplateContent(selectedTemplate);
      setGeneratedContent(content);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col xl:flex-row min-h-screen">
      <EmailTemplatesSidebar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        emailTemplates={filteredTemplates}
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        selectedTone={selectedTone}
        setSelectedTone={setSelectedTone}
        selectedAudience={selectedAudience}
        setSelectedAudience={setSelectedAudience}
        tones={tones}
        audiences={audiences}
      />

      {/* You can render the main content area here */}
      <div className="flex-1 xl:p-10 p-5 space-y-8">
        <MainContent />
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <EmailContentHeader
            selectedTemplate={selectedTemplate}
            emailTemplates={emailTemplates}
            selectedTone={selectedTone}
            tones={tones}
            selectedAudience={selectedAudience}
            audiences={audiences}
          />
          <GenerateButton isGenerating={isGenerating} generateContent={generateContent} />
        </div>
        <EmailAiSettings
          selectedTone={selectedTone}
          setSelectedTone={setSelectedTone}
          tones={tones}
          selectedAudience={selectedAudience}
          setSelectedAudience={setSelectedAudience}
          audiences={audiences}
        />
        {(generatedContent || isGenerating) && (
          <GeneratedEmail
            isGenerating={isGenerating}
            generatedContent={generatedContent}
            selectedTone={selectedTone}
            selectedAudience={selectedAudience}
            selectedTemplate={selectedTemplate}
          />
        )}
        {generatedContent && !isGenerating && <QuickActions />}
      </div>
    </div>
  );
};

export default EmailTemplates;
