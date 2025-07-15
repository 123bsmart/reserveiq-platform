'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/shared/ui';
import { z } from 'zod';
import { signInSchema } from '../form/schema';
import { useMutation } from '@tanstack/react-query';
import AuthApi from '../services/auth.api';
import { RoleEnum } from '@/shared/enum/auth.enum';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

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

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: AuthApi.login,
    onSuccess: (data) => {
      switch (data.data?.user.role) {
        case RoleEnum.BOARD_MEMBER:
          router.push('/dashboard/board');
          break;
        case RoleEnum.PROPERTY_MANAGER:
          router.push('/dashboard/pm');
          break;
      }
    },
    onError: (error) => {
      console.warn('onError', error);
    },
  });

  const onSubmit = (data: SignInValues): void => {
    console.log('[SIGN IN]', data); // eslint-disable-line
    mutation.mutate({
      email: data.email,
      password: data.password,
    });
  };

  return (
    <Form {...form} onSubmit={() => onSubmit(form.getValues())} className="space-y-6">
      <Form.Field
        name="email"
        label="Email Address"
        render={({ field }) => <Form.Input {...field} type="email" placeholder="Enter your email" />}
      />

      <Form.Field
        name="password"
        label="Password"
        render={({ field }) => <Form.Input {...field} type="password" placeholder="Enter your password" />}
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
