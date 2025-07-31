import { ToneOption } from '../types';

export const tones: Record<string, ToneOption> = {
  formal: {
    name: 'Formal Professional',
    description: 'Corporate, official language',
  },
  friendly: {
    name: 'Friendly Professional',
    description: 'Approachable, warm tone',
  },
  urgent: {
    name: 'Urgent Action',
    description: 'Direct, action-oriented',
  },
  reassuring: {
    name: 'Reassuring Leadership',
    description: 'Calm, confidence-building',
  },
  transparent: {
    name: 'Transparent Governance',
    description: 'Open, honest, accountable',
  },
};
