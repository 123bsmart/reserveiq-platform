'use client';

import React, { useState } from 'react';

import { emailTemplates, tones, audiences, userTypes } from '@/features/email-templates/data';
import { EmailTemplatesSidebar } from '@/features/email-templates/components/TemplatesSidebar';
import { Audience, EmailTemplateType, Tone } from '@/features/email-templates/types';
import EmailContentHeader from '@/features/email-templates/components/ContentHeader';
import EmailAiSettings from '@/features/email-templates/components/EmailAiSettings';
import GeneratedEmail from '@/features/email-templates/components/GeneratedEmail';
import QuickActions from '@/features/email-templates/components/QuickActions';

const EmailTemplatesPage: React.FC = () => {
  const [generatedContent] = useState('Subject: Test Email\n\nThis is a generated preview...');
  const [isGenerating] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<string>('board-update');
  const [userType, setUserType] = useState<EmailTemplateType>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTone, setSelectedTone] = useState<Tone>('formal');
  const [selectedAudience, setSelectedAudience] = useState<Audience>('board');

  // Filter templates
  const filteredTemplates = Object.entries(emailTemplates).filter(([_, template]) => {
    const matchUserType = userType === 'all' || template.userType === userType;
    console.log({ template: typeof template.name }); // eslint-disable-line

    const matchSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchUserType && matchSearch;
  });

  return (
    <div className="flex min-h-screen pl-96">
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
      <div className="flex-1 p-10 space-y-8">
        <EmailContentHeader
          selectedTemplate={selectedTemplate}
          emailTemplates={emailTemplates}
          selectedTone={selectedTone}
          tones={tones}
          selectedAudience={selectedAudience}
          audiences={audiences}
        />
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
