import { UserTypeOption } from '@/features/email-templates/types';

export const userTypes: Record<string, UserTypeOption> = {
  all: {
    name: 'All Templates',
    description: 'PM and Board templates',
  },
  pm: {
    name: 'Property Manager',
    description: 'PM-to-Board communications',
  },
  board: {
    name: 'Board Member',
    description: 'Board-to-Owner communications',
  },
};
