import { RoleEnum } from '@/shared/enum/auth.enum';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home(): Promise<void> {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access_token')?.value;
  if (accessToken) {
    const user_role = cookieStore.get('user_role')?.value as RoleEnum;
    if (user_role === RoleEnum.BOARD_MEMBER) {
      redirect('/dashboard/board');
    }
    redirect('/dashboard/pm');
  } else {
    redirect('/auth');
  }
}
