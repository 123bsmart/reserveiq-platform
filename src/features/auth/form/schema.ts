import { RoleEnum } from '@/shared/enum/auth.enum';
import { z } from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
});

export const signUpSchema = z.object({
  userType: z.enum([RoleEnum.BOARD_MEMBER, RoleEnum.PROPERTY_MANAGER]),
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  companyName: z.string().min(2, 'Company or building name is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  termsAgree: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and privacy policy',
  }),
});
