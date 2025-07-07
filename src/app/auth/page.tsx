import AuthForm from "@/features/auth/components/AuthForm";
import AuthLayout from "@/features/auth/components/AuthLayout";
import LogoSection from "@/features/auth/components/LogoSection";

const AuthPage: React.FC = () => {
  return (
    <AuthLayout>
      <LogoSection />
      <AuthForm />
    </AuthLayout>
  );
};

export default AuthPage;
