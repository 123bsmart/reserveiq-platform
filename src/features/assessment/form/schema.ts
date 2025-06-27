import { z } from 'zod';

export const assessmentFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  role: z.string().min(1),

  buildingName: z.string().min(1),
  numberOfUnits: z.string().min(1),
  yearBuilt: z.string().min(1),
  reserveBalance: z.string().min(1),
  monthlyContribution: z.string().min(1),

  reserveStudy: z
    .any()
    .refine(
      (file) => !file || file instanceof File,
      'Invalid file upload'
    )
    .optional(),

  majorExpenses: z.string().optional(),
  concerns: z.string().optional(),

  newsletter: z.boolean().default(false),
});

export const assessmentDefaultValues: z.infer<typeof assessmentFormSchema> = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  role: '',
  buildingName: '',
  numberOfUnits: '',
  yearBuilt: '',
  reserveBalance: '',
  monthlyContribution: '',
  reserveStudy: undefined,
  majorExpenses: '',
  concerns: '',
  newsletter: false,
};
