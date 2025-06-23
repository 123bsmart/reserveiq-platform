import React, { useState } from 'react';
import { Send, Users, Mail, Bell, MessageSquare, Calendar, AlertTriangle, CheckCircle, Clock, Eye, Filter, Search } from 'lucide-react';

const CommunicationsHub = () => {
  const [activeTab, setActiveTab] = useState('announcements');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [composeMode, setComposeMode] = useState(false);

  const communicationTypes = [
    { id: 'announcements', name: 'Board Announcements', icon: Bell, count: 12 },
    { id: 'meetings', name: 'Meeting Notices', icon: Calendar, count: 3 },
    { id: 'emergencies', name: 'Emergency Alerts', icon: AlertTriangle, count: 1 },
    { id: 'maintenance', name: 'Maintenance Updates', icon: MessageSquare, count: 8 }
  ];

  const templates = {
    announcements: [
      { id: 'reserve-crisis', name: 'Reserve Fund Crisis Alert', subject: 'URGENT: Reserve Fund Action Required' },
      { id: 'fee-increase', name: 'Monthly Fee Increase Notice', subject: 'Important: Monthly Fee Adjustment' },
      { id: 'special-assessment', name: 'Special Assessment Proposal', subject: 'Special Assessment Vote Required' },
      { id: 'agm-notice', name: 'Annual General Meeting', subject: 'AGM Notice - Your Attendance Required' }
    ],
    emergencies: [
      { id: 'elevator-outage', name: 'Elevator Service Disruption', subject: 'EMERGENCY: Elevator Out of Service' },
      { id: 'water-shutoff', name: 'Water Service Interruption', subject: 'URGENT: Planned Water Shutoff' },
      { id: 'fire-alarm', name: 'Fire System Testing', subject: 'NOTICE: Fire Alarm System Testing' }
    ]
  };

  const recentCommunications = [
    {
      id: 1,
      type: 'emergency',
      subject: 'URGENT: Reserve Fund Crisis - Immediate Action Required',
      recipients: 84,
      sentDate: '2024-06-22',
      sentTime: '09:15 AM',
      status: 'delivered',
      openRate: 89,
      responseRate: 23,
      urgent: true
    },
    {
      id: 2,
      type: 'announcement',
      subject: 'Monthly Fee Increase Proposal - Board Meeting June 30',
      recipients: 84,
      sentDate: '2024-06-20',
      sentTime: '02:30 PM',
      status: 'delivered',
      openRate: 76,
      responseRate: 12,
      urgent: false
    },
    {
      id: 3,
      type: 'maintenance',
      subject: 'Elevator Modernization Project Update',
      recipients: 84,
      sentDate: '2024-06-18',
      sentTime: '11:00 AM',
      status: 'delivered',
      openRate: 82,
      responseRate: 8,
      urgent: false
    },
    {
      id: 4,
      type: 'meeting',
      subject: 'Emergency Board Meeting - June 25th at 7:00 PM',
      recipients: 7,
      sentDate: '2024-06-17',
      sentTime: '04:45 PM',
      status: 'delivered',
      openRate: 100,
      responseRate: 86,
      urgent: true
    }
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'delivered': return 'text-green-600 bg-green-50';
      case 'sending': return 'text-blue-600 bg-blue-50';
      case 'failed': return 'text-red-600 bg-red-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'emergency': return 'text-red-600 bg-red-50';
      case 'announcement': return 'text-blue-600 bg-blue-50';
      case 'meeting': return 'text-purple-600 bg-purple-50';
      case 'maintenance': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const handleSendCommunication = () => {
    alert('Communication sent! In a real implementation, this would send emails/notifications to all residents.');
    setComposeMode(false);
  };

  const renderComposeForm = () => (
    <div className="bg-white rounded-lg border shadow-sm p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Compose Communication</h3>
        <button 
          onClick={() => setComposeMode(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Communication Type</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option value="announcement">Board Announcement</option>
              <option value="emergency">Emergency Alert</option>
              <option value="meeting">Meeting Notice</option>
              <option value="maintenance">Maintenance Update</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Template</label>
            <select 
              value={selectedTemplate}
              onChange={(e) => setSelectedTemplate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select a template...</option>
              {templates.announcements && templates.announcements.map(template => (
                <option key={template.id} value={template.id}>{template.name}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Recipients</label>
          <div className="flex items-center gap-4">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300" defaultChecked />
              <span className="ml-2 text-sm">All Unit Owners (84)</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="ml-2 text-sm">Board Members Only (7)</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300" />
              <span className="ml-2 text-sm">Tenants (12)</span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Subject Line</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter subject line..."
            defaultValue={selectedTemplate && templates.announcements ? templates.announcements.find(t => t.id === selectedTemplate)?.subject || '' : ''}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            rows={8}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your message here..."
            defaultValue={selectedTemplate === 'reserve-crisis' ? `Dear Residents,

This is an urgent communication regarding our building's reserve fund status. Our recent analysis has revealed a critical funding shortfall that requires immediate action.

Current Situation:
- Reserve fund balance: $142,000
- Required target balance: $280,000
- Funding shortfall: $138,000 (49% below target)

Immediate Risks:
- Elevator modernization required within 18 months ($65,000)
- Potential for emergency special assessments
- Regulatory compliance issues

Proposed Solutions:
We will be presenting funding options at an emergency meeting on June 30th at 7:00 PM in the community room. Your attendance is crucial.

Thank you for your immediate attention to this matter.

Maple Heights Condominium Board` : ''}
          />
        </div>
        
        <div className="flex items-center gap-2">
          <input type="checkbox" className="rounded border-gray-300" />
          <label className="text-sm text-gray-700">Mark as urgent/high priority</label>
        </div>
        
        <div className="flex items-center gap-2">
          <input type="checkbox" className="rounded border-gray-300" />
          <label className="text-sm text-gray-700">Request read receipt</label>
        </div>
        
        <div className="flex gap-3 pt-4">
          <button 
            onClick={handleSendCommunication}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send Communication
          </button>
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            Save as Draft
          </button>
          <button className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            Preview
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Communications Hub</h1>
            <p className="text-gray-600">Manage board announcements, meeting notices, and resident communications</p>
          </div>
          
          <button 
            onClick={() => setComposeMode(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            New Communication
          </button>
        </div>

        {composeMode && renderComposeForm()}

        {!composeMode && (
          <>
            {/* Communication Type Tabs */}
            <div className="bg-white rounded-lg border shadow-sm mb-8">
              <div className="p-6 border-b">
                <div className="flex items-center gap-6">
                  {communicationTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.id}
                        onClick={() => setActiveTab(type.id)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                          activeTab === type.id
                            ? 'bg-blue-100 text-blue-700 border border-blue-200'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span>{type.name}</span>
                        <span className="ml-1 px-2 py-0.5 bg-gray-200 text-gray-700 text-xs rounded-full">
                          {type.count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Filters and Search */}
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Search communications..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                      <option>All Status</option>
                      <option>Delivered</option>
                      <option>Sending</option>
                      <option>Failed</option>
                    </select>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Filter className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Last 30 days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Communications List */}
            <div className="bg-white rounded-lg border shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold text-gray-900">Recent Communications</h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {recentCommunications.map((comm) => (
                  <div key={comm.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(comm.type)}`}>
                            {comm.type.charAt(0).toUpperCase() + comm.type.slice(1)}
                          </span>
                          {comm.urgent && (
                            <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                              URGENT
                            </span>
                          )}
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(comm.status)}`}>
                            {comm.status.charAt(0).toUpperCase() + comm.status.slice(1)}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{comm.subject}</h3>
                        
                        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {comm.recipients} recipients
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {comm.sentDate} at {comm.sentTime}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <Eye className="w-4 h-4 text-blue-500" />
                            <span className="text-gray-600">
                              {comm.openRate}% open rate
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-green-500" />
                            <span className="text-gray-600">
                              {comm.responseRate}% response rate
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded">
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Emergency Alert</h3>
                    <p className="text-sm text-gray-600">Send urgent notifications</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  Send Emergency Alert
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Meeting Notice</h3>
                    <p className="text-sm text-gray-600">Schedule board meetings</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Create Meeting Notice
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-lg border shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Bell className="w-8 h-8 text-yellow-600" />
                  <div>
                    <h3 className="font-semibold text-gray-900">General Announcement</h3>
                    <p className="text-sm text-gray-600">Inform residents</p>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700">
                  Make Announcement
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommunicationsHub;
