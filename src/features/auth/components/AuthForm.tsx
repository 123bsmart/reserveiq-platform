'use client';
import { useState } from 'react';
import Tabs from '@/features/auth/components/Tabs';
import SignInForm from '@/features/auth/components/SignInForm';
import SignUpForm from '@/features/auth/components/SignUpForm';

type Tab = 'signin' | 'signup';

type Props = {
  isPartner: boolean;
};

const AuthForm: React.FC<Props> = ({ isPartner }) => {
  const [activeTab, setActiveTab] = useState<Tab>(isPartner ? 'signup' : 'signin');

  return (
    <div className="w-full max-w-[500px] mx-auto">
      <Tabs active={activeTab} setActive={setActiveTab} />

      <div className="mt-8">{activeTab === 'signin' ? <SignInForm /> : <SignUpForm isPartner={isPartner} />}</div>

      <div className="text-center text-gray-muted text-sm mt-8 mb-4 relative">
        <div className="absolute inset-x-0 top-1/2 border-t border-gray-200 z-0" />
        <span className="relative z-10 bg-white px-4">Secure Authentication</span>
      </div>

      <div className="flex justify-center text-xs text-gray-muted">
        <span className="flex items-center gap-1">🔒 256-bit SSL encryption protects your data</span>
      </div>

      <div className="text-center mt-8 border-t pt-6 border-gray-200">
        <a
          href="https://reserveiq-platform-gateway.vercel.app"
          className="text-sm text-gray-muted hover:text-blue inline-flex items-center gap-1"
          target="_blank"
        >
          ← Back to Platform Gateway
        </a>
      </div>
    </div>
  );
};

export default AuthForm;
