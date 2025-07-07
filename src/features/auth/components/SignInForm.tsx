'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/shared/ui';
import { z } from 'zod';
import { signInSchema } from '../form/schema';

type SignInValues = z.infer<typeof signInSchema>;

const SignInForm: React.FC = () => {
  const form = useForm<SignInValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = (data: SignInValues): void => {
    console.log('[SIGN IN]', data); // eslint-disable-line
    // Call sign-in mutation here
  };

  return (
    <Form {...form} onSubmit={() => onSubmit(form.getValues())} className="space-y-6">
      <Form.Field
        name="email"
        label="Email Address"
        render={({ field }) => (
          <Form.Input {...field} type="email" placeholder="Enter your email" />
        )}
      />

      <Form.Field
        name="password"
        label="Password"
        render={({ field }) => (
          <Form.Input {...field} type="password" placeholder="Enter your password" />
        )}
      />

      <Form.Field
        name="rememberMe"
        render={({ field }) => <Form.Checkbox {...field} label="Remember me for 30 days" />}
      />

      <Form.Button type="submit" className="text-[1.1rem]">
        Sign In to Platform
      </Form.Button>

      <div className="text-center mt-4">
        <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
          Forgot your password?
        </a>
      </div>
    </Form>
  );
};

export default SignInForm;
