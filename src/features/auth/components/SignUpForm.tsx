'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Form } from '@/shared/ui';
import { z } from 'zod';
import { signUpSchema } from '../form/schema';
import React, { useRef, useState } from 'react';
import AuthApi from '../services/auth.api';
import { useMutation } from '@tanstack/react-query';
import { RoleEnum } from '@/shared/enum/auth.enum';
import { Modal } from '@/shared/ui/modal';
import ReCAPTCHA from 'react-google-recaptcha';

type SignUpValues = z.infer<typeof signUpSchema>;

const SignUpForm: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<SignUpValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      userType: undefined,
      fullName: '',
      email: '',
      companyName: '',
      password: '',
      termsAgree: false,
    },
  });

  const mutation = useMutation({
    mutationFn: AuthApi.signup,
    onSuccess: () => {
      setModalOpen(true);
      form.reset();
    },
    onError: (error) => {
      console.warn('onError', error);
    },
  });

  const onSubmit = async (data: SignUpValues): Promise<void> => {
    console.log('[SIGN UP]', data); // eslint-disable-line

    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    console.log('token', token);
    mutation.mutate({
      name: data.fullName,
      email: data.email,
      company: data.companyName,
      role: data.userType,
      password: data.password,
    });
  };

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Thanks for signing up!"
        footer={
          <Button onClick={() => setModalOpen(false)} variant="default">
            Got it
          </Button>
        }
      >
        <p>
          You’re on the early access list — Olivia from ReserveIQ will be in touch shortly. In the meantime, feel free
          to explore our platform or reply to this email if you have questions. We’ll review your details within 48
          hours and send your login credentials once approved.
        </p>
      </Modal>
      <Form {...form} onSubmit={() => onSubmit(form.getValues())} className="space-y-6">
        <Form.Field
          name="userType"
          label="I am a..."
          render={({ field }) => (
            <Form.Select {...field}>
              <option>Select your role</option>
              <option value={RoleEnum.BOARD_MEMBER}>{RoleEnum.BOARD_MEMBER}</option>
              <option value={RoleEnum.PROPERTY_MANAGER}>{RoleEnum.PROPERTY_MANAGER}</option>
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
                  <a href="https://www.reserveiq.net/terms.html" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="https://www.reserveiq.net/privacy.html" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                </>
              }
            />
          )}
        />
        <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} size="invisible" ref={recaptchaRef} />
        <Form.Button type="submit" className="text-[1.1rem]">
          Create Account
        </Form.Button>
      </Form>
    </>
  );
};

export default SignUpForm;
