import { LucideIcon } from 'lucide-react';

export type UserType = 'pm' | 'board';
export type UrgencyLevel = 'routine' | 'medium' | 'high' | 'critical';
export type Tone = 'formal' | 'friendly' | 'urgent' | 'reassuring' | 'transparent';
export type Audience = 'board' | 'owners' | 'vendors' | 'community';

export interface EmailTemplate {
  name: string;
  description: string;
  category: string;
  frequency: string;
  icon: LucideIcon;
  urgency: UrgencyLevel;
  userType: UserType;
}

export interface BuildingData {
  name: string;
  units: number;
  currentReserve: number;
  targetReserve: number;
  monthlyVariance: number;
  upcomingExpenses: {
    item: string;
    cost: number;
    timeline: string;
    urgency: string;
  }[];
  complianceDeadlines: {
    item: string;
    due: string;
    status: string;
  }[];
  reserveHealth: number;
  riskLevel: string;
}

export interface ToneOption {
  name: string;
  description: string;
}

export interface AudienceOption {
  name: string;
  description: string;
}

export interface UserTypeOption {
  name: string;
  description: string;
}
