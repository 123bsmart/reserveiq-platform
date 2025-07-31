import { AudienceOption } from '../types';

export const audiences: Record<string, AudienceOption> = {
  board: {
    name: 'Board of Directors',
    description: 'Technical, governance-focused',
  },
  owners: {
    name: 'Unit Owners',
    description: 'Simple, owner-friendly language',
  },
  vendors: {
    name: 'Vendors/Contractors',
    description: 'Professional, business-focused',
  },
  community: {
    name: 'Building Community',
    description: 'Inclusive, community-focused',
  },
};
