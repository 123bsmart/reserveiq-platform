import { RoleEnum } from '@/shared/enum/auth.enum';
import authApi from '@/shared/services/auth.api';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home(): Promise<void> {
  const access_token = localStorage.getItem('access_token');
  const user_role = localStorage.getItem('user_role') as RoleEnum;
  if (access_token) {
    if (user_role === RoleEnum.BOARD_MEMBER) {
      redirect('/dashboard/board');
    }
    redirect('/dashboard/pm');
  } else {
    const cookieStore = await cookies();
    const refresh_token = cookieStore.get('refresh_token')?.value;
    if (refresh_token) {
      const isSuccess = await authApi.refreshToken();
      if (isSuccess) {
        if (user_role === RoleEnum.BOARD_MEMBER) {
          redirect('/dashboard/board');
        }
        redirect('/dashboard/pm');
      }
    }
    redirect('/auth');
  }
}
