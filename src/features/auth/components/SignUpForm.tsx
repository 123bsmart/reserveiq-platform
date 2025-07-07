'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/shared/ui';
import { z } from 'zod';
import { signUpSchema } from '../form/schema';

type SignUpValues = z.infer<typeof signUpSchema>;

const SignUpForm = () => {
  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      userType: '',
      fullName: '',
      email: '',
      companyName: '',
      password: '',
      termsAgree: false,
    },
  });

  const onSubmit = (data: SignUpValues) => {
    console.log('[SIGN UP]', data);
    // Call sign-up mutation here
  };

  return (
    <Form {...form} onSubmit={() => onSubmit(form.getValues())} className="space-y-6">
      <Form.Field
        name="userType"
        label="I am a..."
        render={({ field }) => (
          <Form.Select {...field}>
            <option value="">Select your role</option>
            <option value="board">Board Member</option>
            <option value="pm">Property Manager</option>
          </Form.Select>
        )}
      />

      <Form.Field
        name="fullName"
        label="Full Name"
        render={({ field }) => <Form.Input {...field} type="text" placeholder="Enter your full name" />}
      />

      <Form.Field
        name="email"
        label="Email Address"
        render={({ field }) => <Form.Input {...field} type="email" placeholder="Enter your email" />}
      />

      <Form.Field
        name="companyName"
        label="Company/Building Name"
        render={({ field }) => <Form.Input {...field} type="text" placeholder="Enter company or building name" />}
      />

      <Form.Field
        name="password"
        label="Password"
        render={({ field }) => <Form.Input {...field} type="password" placeholder="Create a secure password" />}
      />

      <Form.Field
        name="termsAgree"
        render={({ field }) => (
          <Form.Checkbox
            {...field}
            label={
              <>
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </>
            }
          />
        )}
      />

      <Form.Button type="submit" className="text-[1.1rem]">
        Create Account
      </Form.Button>
    </Form>
  );
};

export default SignUpForm;
