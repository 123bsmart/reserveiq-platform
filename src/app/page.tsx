'use client';

import { RoleEnum } from '@/shared/enum/auth.enum';
import authApi from '@/shared/services/auth.api';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home(): JSX.Element {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async (): Promise<void> => {
      const access_token = localStorage.getItem('access_token');
      const user_role = localStorage.getItem('user_role') as RoleEnum;

      if (access_token) {
        if (user_role === RoleEnum.BOARD_MEMBER) {
          router.push('/dashboard/board');
        } else {
          router.push('/dashboard/pm');
        }
      } else {
        // Check for refresh token in cookies
        const cookies = document.cookie.split(';');
        const refreshTokenCookie = cookies.find((cookie) => cookie.trim().startsWith('refresh_token='));

        if (refreshTokenCookie) {
          try {
            const isSuccess = await authApi.refreshToken();
            if (isSuccess) {
              const newUserRole = localStorage.getItem('user_role') as RoleEnum;
              if (newUserRole === RoleEnum.BOARD_MEMBER) {
                router.push('/dashboard/board');
              } else {
                router.push('/dashboard/pm');
              }
            } else {
              router.push('/auth');
            }
          } catch {
            router.push('/auth');
          }
        } else {
          router.push('/auth');
        }
      }
    };

    checkAuth();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
