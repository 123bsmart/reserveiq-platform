import { AlertTriangle, Calendar, CheckCircle, DollarSign, FileText, Settings, Users } from "lucide-react";
import { EmailTemplate } from "@/features/email-templates/types";

export const emailTemplates: Record<string, EmailTemplate> = {
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
