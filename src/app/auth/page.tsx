import AuthForm from '@/features/auth/components/AuthForm';
import AuthLayout from '@/features/auth/components/AuthLayout';
import LogoSection from '@/features/auth/components/LogoSection';

type Props = {
  searchParams: {
    partner?: string;
  };
};

const AuthPage: React.FC<Props> = ({ searchParams }) => {
  const isPartner = searchParams.partner === 'true';

  return (
    <AuthLayout>
      <LogoSection />
      <AuthForm isPartner={isPartner} />
    </AuthLayout>
  );
};

export default AuthPage;
