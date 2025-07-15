'use client';

import React, { useState } from 'react';

import { emailTemplates, tones, audiences, userTypes } from '@/features/email-templates/data';
import { EmailTemplatesSidebar } from '@/features/email-templates/components/TemplatesSidebar';
import { Audience, EmailTemplateType, Tone } from '@/features/email-templates/types';
import EmailContentHeader from '@/features/email-templates/components/ContentHeader';
import EmailAiSettings from '@/features/email-templates/components/EmailAiSettings';
import GeneratedEmail from '@/features/email-templates/components/GeneratedEmail';
import QuickActions from '@/features/email-templates/components/QuickActions';
import GenerateButton from '@/features/email-templates/components/GenerateButton';
import { generateTemplateContent } from '@/features/email-templates/utils';
import MainContent from '@/features/email-templates/components/MainContent';

const EmailTemplatesPage: React.FC = () => {
  const [generatedContent, setGeneratedContent] = useState('Subject: Test Email\n\nThis is a generated preview...');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('board-update');
  const [userType, setUserType] = useState<EmailTemplateType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTone, setSelectedTone] = useState<Tone>('formal');
  const [selectedAudience, setSelectedAudience] = useState<Audience>('board');  

  // Filter templates
  const filteredTemplates = Object.entries(emailTemplates).filter(([_, template]) => {
    const matchUserType = userType === 'all' || template.userType === userType;
    const matchSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchUserType && matchSearch;
  });

    const generateContent = () => {
    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      const content = generateTemplateContent(selectedTemplate);
      setGeneratedContent(content);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col xl:flex-row min-h-screen xl:pl-96">
      <EmailTemplatesSidebar
        userType={userType}
        setUserType={setUserType}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        emailTemplates={filteredTemplates}
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        selectedTone={selectedTone}
        setSelectedTone={setSelectedTone}
        selectedAudience={selectedAudience}
        setSelectedAudience={setSelectedAudience}
        userTypes={userTypes}
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
          />
        )}
        {generatedContent && !isGenerating && <QuickActions />}
      </div>
    </div>
  );
};

export default EmailTemplatesPage;
