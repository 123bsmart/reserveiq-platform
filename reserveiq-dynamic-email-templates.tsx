import React, { useState, useEffect } from 'react';
import { Mail, Send, Download, Eye, Copy, Edit3, Zap, Clock, CheckCircle, AlertTriangle, DollarSign, Calendar, Users, Settings, Filter, Search, ArrowRight, Brain, FileText, Sparkles } from 'lucide-react';

const DynamicEmailTemplates = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('board-update');
  const [selectedTone, setSelectedTone] = useState('formal');
  const [selectedAudience, setSelectedAudience] = useState('board');
  const [generatedContent, setGeneratedContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('templates');
  const [searchQuery, setSearchQuery] = useState('');
  const [userType, setUserType] = useState('all');

  // Mock building data that would come from existing components
  const buildingData = {
    name: "Maple Heights Condominiums",
    units: 156,
    currentReserve: 125000,
    targetReserve: 170000,
    monthlyVariance: -2340,
    upcomingExpenses: [
      { item: "Roof Replacement", cost: 485000, timeline: "Q2 2025", urgency: "Critical" },
      { item: "HVAC Maintenance", cost: 12500, timeline: "Q1 2025", urgency: "Routine" }
    ],
    complianceDeadlines: [
      { item: "Reserve Study Update", due: "2025-03-15", status: "Upcoming" },
      { item: "Fire Safety Inspection", due: "2025-01-30", status: "Overdue" }
    ],
    reserveHealth: 72,
    riskLevel: "High"
  };

  // User types and filters
  const userTypes = {
    all: { name: 'All Templates', description: 'PM and Board templates' },
    pm: { name: 'Property Manager', description: 'PM-to-Board communications' },
    board: { name: 'Board Member', description: 'Board-to-Owner communications' }
  };

  // Email templates with dynamic content
  const emailTemplates = {
    // PM Templates
    'board-update': {
      name: 'Monthly Board Financial Update',
      description: 'Comprehensive monthly financial summary with reserve health and recommendations',
      category: 'PM Financial',
      frequency: 'Monthly',
      icon: DollarSign,
      urgency: 'routine',
      userType: 'pm'
    },
    'reserve-status': {
      name: 'Reserve Fund Status Notice',
      description: 'Current reserve health status with upcoming expenditure alerts',
      category: 'PM Financial',
      frequency: 'Quarterly',
      icon: AlertTriangle,
      urgency: 'medium',
      userType: 'pm'
    },
    'compliance-reminder': {
      name: 'Compliance Deadline Reminder',
      description: 'Jurisdiction-specific compliance deadlines with penalty warnings',
      category: 'PM Compliance',
      frequency: 'As needed',
      icon: Calendar,
      urgency: 'high',
      userType: 'pm'
    },
    'special-assessment': {
      name: 'Special Assessment Announcement',
      description: 'Professional explanation of special assessment with cost scenarios',
      category: 'PM Financial',
      frequency: 'As needed',
      icon: AlertTriangle,
      urgency: 'critical',
      userType: 'pm'
    },
    'owner-faq': {
      name: 'Owner FAQ Response',
      description: 'Pre-written answers to common reserve fund questions',
      category: 'PM Communication',
      frequency: 'As needed',
      icon: Users,
      urgency: 'routine',
      userType: 'pm'
    },
    'insurance-update': {
      name: 'Insurance Update Notice',
      description: 'Professional insurance notifications with impact analysis',
      category: 'PM Insurance',
      frequency: 'Annual',
      icon: FileText,
      urgency: 'medium',
      userType: 'pm'
    },
    
    // Board Templates
    'owner-announcement': {
      name: 'Owner Announcement',
      description: 'General building updates, policy changes, and community news',
      category: 'Board Communication',
      frequency: 'Monthly',
      icon: Users,
      urgency: 'routine',
      userType: 'board'
    },
    'fee-increase-notice': {
      name: 'Fee Increase Notification',
      description: 'Professional explanation of maintenance fee increases with justification',
      category: 'Board Financial',
      frequency: 'Annual',
      icon: DollarSign,
      urgency: 'high',
      userType: 'board'
    },
    'emergency-notification': {
      name: 'Emergency Building Notice',
      description: 'Urgent building issues, service disruptions, and emergency procedures',
      category: 'Board Emergency',
      frequency: 'As needed',
      icon: AlertTriangle,
      urgency: 'critical',
      userType: 'board'
    },
    'annual-meeting': {
      name: 'Annual Meeting Announcement',
      description: 'AGM invitations with agenda, budget overview, and voting information',
      category: 'Board Governance',
      frequency: 'Annual',
      icon: Calendar,
      urgency: 'high',
      userType: 'board'
    },
    'construction-update': {
      name: 'Construction Project Update',
      description: 'Major renovation progress, timeline updates, and impact on residents',
      category: 'Board Projects',
      frequency: 'As needed',
      icon: Settings,
      urgency: 'medium',
      userType: 'board'
    },
    'board-resolution': {
      name: 'Board Resolution Notice',
      description: 'Official board decisions, policy changes, and governance updates',
      category: 'Board Governance',
      frequency: 'As needed',
      icon: CheckCircle,
      urgency: 'medium',
      userType: 'board'
    }
  };

  // Tone and audience options
  const tones = {
    formal: { name: 'Formal Professional', description: 'Corporate, official language' },
    friendly: { name: 'Friendly Professional', description: 'Approachable, warm tone' },
    urgent: { name: 'Urgent Action', description: 'Direct, action-oriented' },
    reassuring: { name: 'Reassuring Leadership', description: 'Calm, confidence-building' },
    transparent: { name: 'Transparent Governance', description: 'Open, honest, accountable' }
  };

  const audiences = {
    board: { name: 'Board of Directors', description: 'Technical, governance-focused' },
    owners: { name: 'Unit Owners', description: 'Simple, owner-friendly language' },
    vendors: { name: 'Vendors/Contractors', description: 'Professional, business-focused' },
    community: { name: 'Building Community', description: 'Inclusive, community-focused' }
  };

  // Generate AI content based on template, tone, and audience
  const generateContent = () => {
    setIsGenerating(true);
    
    // Simulate AI generation delay
    setTimeout(() => {
      const content = generateTemplateContent(selectedTemplate, selectedTone, selectedAudience);
      setGeneratedContent(content);
      setIsGenerating(false);
    }, 2000);
  };

  const generateTemplateContent = (template, tone, audience) => {
    const content = {
      'board-update': `Subject: Monthly Financial Update - ${buildingData.name} - December 2024

Dear Board Members,

I am pleased to present the December 2024 financial update for ${buildingData.name}.

**Reserve Fund Status:**
Current Balance: $${buildingData.currentReserve.toLocaleString()}
Target Balance: $${buildingData.targetReserve.toLocaleString()}
Funding Level: ${buildingData.reserveHealth}% of recommended target

**Monthly Variance Analysis:**
December showed a variance of $${Math.abs(buildingData.monthlyVariance).toLocaleString()} ${buildingData.monthlyVariance < 0 ? 'over' : 'under'} budget, primarily due to unscheduled maintenance expenses.

**Critical Action Items:**
• Roof replacement scheduled for Q2 2025 ($${buildingData.upcomingExpenses[0].cost.toLocaleString()})
• Reserve funding shortfall requires immediate attention
• Recommend increasing monthly contributions by $35/unit

**AI Risk Assessment:**
Current risk level: ${buildingData.riskLevel}
Recommended action: Board resolution for contribution increase at next meeting

Please review the attached detailed financial analysis. I recommend scheduling a special meeting to discuss funding strategies.

Best regards,
[Property Manager Name]

Generated by ReserveIQ AI | Confidence: 94%`,

      'owner-announcement': `Subject: Important Building Update - ${buildingData.name}

Dear Fellow Homeowners,

Your Board of Directors wants to keep you informed about important developments in our building community.

**Building Updates:**
• Our recent reserve fund analysis shows we're currently at ${buildingData.reserveHealth}% of recommended funding levels
• We're proactively planning for upcoming maintenance to protect our investment
• Building operations continue smoothly with no major service disruptions

**Upcoming Projects:**
We're preparing for our ${buildingData.upcomingExpenses[0].item} project scheduled for ${buildingData.upcomingExpenses[0].timeline}. This planned maintenance will help preserve our building's value and prevent more costly emergency repairs.

**Financial Transparency:**
Our current reserve balance is $${buildingData.currentReserve.toLocaleString()}. We're committed to maintaining strong financial health while keeping monthly fees reasonable.

**How You Can Stay Informed:**
• Attend board meetings (next meeting: January 15, 2025)
• Review financial reports posted in the lobby
• Contact any board member with questions or concerns

We appreciate your continued trust in our stewardship of our shared investment.

Warm regards,
${buildingData.name} Board of Directors

Powered by ReserveIQ Transparency Tools`,

      'fee-increase-notice': `Subject: IMPORTANT: Monthly Fee Adjustment - Effective March 1, 2025

Dear ${buildingData.name} Homeowners,

After careful analysis and planning, your Board of Directors has approved a monthly maintenance fee adjustment effective March 1, 2025.

**The Numbers:**
Current monthly fee: $XXX per unit
New monthly fee: $XXX per unit (increase of $35/unit)
Annual impact: $420 per unit

**Why This Increase is Necessary:**

1. **Proactive Reserve Planning:**
   Our AI analysis shows we need to strengthen reserves for upcoming ${buildingData.upcomingExpenses[0].item} ($${buildingData.upcomingExpenses[0].cost.toLocaleString()})

2. **Prevent Special Assessments:**
   This modest increase prevents a potential $${Math.round(buildingData.upcomingExpenses[0].cost / buildingData.units).toLocaleString()} special assessment per unit

3. **Market Comparison:**
   Even with this increase, our fees remain competitive with similar buildings in our area

**Your Investment Protection:**
This decision protects your property value by:
• Maintaining building systems before they fail
• Avoiding emergency repair costs
• Keeping our building competitive in the market

**Timeline:**
• January 15: Board resolution approved
• February 1: 30-day notice period begins
• March 1: New fees take effect

**Questions?**
We encourage you to attend our February board meeting or contact any board member. We're committed to transparency in all our decisions.

Thank you for your understanding and continued investment in our community.

Respectfully,
${buildingData.name} Board of Directors

This analysis powered by ReserveIQ Financial Intelligence`,

      'emergency-notification': `Subject: URGENT: Building Emergency - Immediate Action Required

Dear ${buildingData.name} Residents,

We are currently experiencing a building emergency that requires immediate attention and your cooperation.

**SITUATION:**
Water main break in the basement - Building water supply temporarily shut off

**IMMEDIATE IMPACT:**
• No water service to all units
• Elevators may be affected
• Parking garage partially flooded

**WHAT WE'RE DOING:**
✅ Emergency repair crews dispatched (ETA: 2 hours)
✅ Water restoration crews on standby
✅ Building management monitoring 24/7
✅ Insurance company notified

**WHAT YOU NEED TO DO:**
• Stay in your unit unless directed otherwise
• Conserve any stored water
• Avoid using the parking garage (Level B1)
• Monitor your phone/email for updates

**ESTIMATED RESOLUTION:**
Water service restoration: 4-6 hours
Full building systems: 8-12 hours

**EMERGENCY CONTACTS:**
Building Emergency Line: [XXX-XXX-XXXX]
Property Management: [XXX-XXX-XXXX]
Board President: [XXX-XXX-XXXX]

**NEXT UPDATE:**
We will send another update within 2 hours or sooner if the situation changes.

We understand this is disruptive and apologize for the inconvenience. Our priority is resolving this safely and quickly.

${buildingData.name} Board of Directors
Property Management Team

Emergency protocols managed by ReserveIQ Crisis Systems`,

      'annual-meeting': `Subject: Annual General Meeting - ${buildingData.name} - March 15, 2025

Dear Unit Owners,

You are cordially invited to attend the Annual General Meeting of ${buildingData.name} Condominium Corporation.

**MEETING DETAILS:**
Date: Saturday, March 15, 2025
Time: 2:00 PM - 4:00 PM
Location: Building Party Room
Backup: Virtual attendance available

**AGENDA HIGHLIGHTS:**
1. Financial Review & 2024 Performance
2. Reserve Fund Analysis & Future Planning
3. Board Election (3 positions available)
4. 2025 Budget Approval
5. Major Project Updates
6. Q&A Session

**KEY DECISIONS:**
• Approval of 2025 operating budget
• Reserve fund contribution levels
• Authorization for ${buildingData.upcomingExpenses[0].item} project
• Election of board members

**YOUR PARTICIPATION MATTERS:**
This meeting shapes decisions affecting your investment and your home. Your voice and your vote count.

**FINANCIAL OVERVIEW:**
• Current reserve health: ${buildingData.reserveHealth}%
• Proposed budget increase: 3.2%
• Major projects planned: $${buildingData.upcomingExpenses[0].cost.toLocaleString()}

**MEETING MATERIALS:**
Detailed financial statements, reserve study summary, and budget documents will be available 7 days before the meeting at [website] or in the lobby.

**PROXY VOTING:**
If you cannot attend, proxy forms are available from property management. Deadline for proxy submission: March 12, 2025.

**VIRTUAL ATTENDANCE:**
Login details will be sent to registered participants 24 hours before the meeting.

We encourage all owners to participate in this important governance process.

Respectfully,
${buildingData.name} Board of Directors

Meeting management powered by ReserveIQ Governance Tools`
    };

    return content[template] || 'Template content not found. Please try different settings.';
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'high': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'routine': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const TemplateCard = ({ templateKey, template }) => {
    const Icon = template.icon;
    return (
      <div
        onClick={() => setSelectedTemplate(templateKey)}
        className={`border rounded-lg p-4 cursor-pointer transition-all ${
          selectedTemplate === templateKey
            ? 'border-blue-500 bg-blue-50 shadow-md'
            : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
        }`}
      >
        <div className="flex items-start space-x-3">
          <div className={`p-2 rounded-lg ${
            selectedTemplate === templateKey ? 'bg-blue-100' : 'bg-gray-100'
          }`}>
            <Icon className={`h-5 w-5 ${
              selectedTemplate === templateKey ? 'text-blue-600' : 'text-gray-600'
            }`} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 text-sm">{template.name}</h3>
            <p className="text-xs text-gray-600 mt-1">{template.description}</p>
            <div className="flex items-center space-x-3 mt-2">
              <span className="text-xs text-gray-500">{template.category}</span>
              <span className="text-xs text-gray-500">•</span>
              <span className="text-xs text-gray-500">{template.frequency}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(template.urgency)}`}>
                {template.urgency}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Filter templates based on user type
  const filteredTemplates = Object.entries(emailTemplates).filter(([key, template]) => {
    const matchesUserType = userType === 'all' || template.userType === userType;
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         template.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesUserType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg border-r border-gray-200 z-10 overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Email Templates</span>
          </div>

          {/* User Type Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Template Type</label>
            <select
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {Object.entries(userTypes).map(([key, type]) => (
                <option key={key} value={key}>{type.name}</option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Template Categories */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Templates ({filteredTemplates.length})
            </h3>
            {filteredTemplates.map(([key, template]) => (
              <TemplateCard key={key} templateKey={key} template={template} />
            ))}
          </div>

          {/* AI Settings */}
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
                  onChange={(e) => setSelectedTone(e.target.value)}
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
                  onChange={(e) => setSelectedAudience(e.target.value)}
                  className="w-full text-xs border border-gray-300 rounded px-2 py-1 focus:ring-1 focus:ring-purple-500"
                >
                  {Object.entries(audiences).map(([key, audience]) => (
                    <option key={key} value={key}>{audience.name}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-80 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-purple-600" />
                Dynamic Email Generator
              </h1>
              <p className="text-gray-600 mt-2">
                AI-powered professional communications for Property Managers AND Board Members
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-500">
                Building: <span className="font-medium text-gray-900">{buildingData.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Template Info */}
        {selectedTemplate && (
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                {React.createElement(emailTemplates[selectedTemplate].icon, {
                  className: "h-6 w-6 text-purple-600"
                })}
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {emailTemplates[selectedTemplate].name}
                  </h2>
                  <p className="text-gray-600">{emailTemplates[selectedTemplate].description}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      emailTemplates[selectedTemplate].userType === 'pm' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {emailTemplates[selectedTemplate].userType === 'pm' ? 'Property Manager' : 'Board Member'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right text-sm">
                  <div className="font-medium text-gray-900">
                    {tones[selectedTone].name}
                  </div>
                  <div className="text-gray-500">
                    for {audiences[selectedAudience].name}
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={generateContent}
              disabled={isGenerating}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isGenerating ? (
                <>
                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                  Generating AI Content...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  Generate Email with AI
                </>
              )}
            </button>
          </div>
        )}

        {/* Generated Content */}
        {(generatedContent || isGenerating) && (
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="border-b border-gray-200 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
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
                      <div>• Applying {tones[selectedTone].name.toLowerCase()} tone for {audiences[selectedAudience].name.toLowerCase()}</div>
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
        )}

        {/* Quick Actions */}
        {!generatedContent && !isGenerating && (
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              🚀 Complete Communication Ecosystem
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="font-medium text-gray-900">Save 5-10 Hours/Week</span>
                </div>
                <p className="text-sm text-gray-600">
                  Stop writing emails from scratch. Generate professional communications in 30 seconds.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-gray-900">PM + Board Templates</span>
                </div>
                <p className="text-sm text-gray-600">
                  Complete ecosystem for all building communications - PM efficiency + board professionalism.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center space-x-2 mb-2">
                  <Brain className="h-4 w-4 text-purple-600" />
                  <span className="font-medium text-gray-900">Smart Integration</span>
                </div>
                <p className="text-sm text-gray-600">
                  Pulls live data from your building's financial and compliance systems.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicEmailTemplates;