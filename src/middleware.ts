import { RoleEnum } from '@/shared/enum/auth.enum';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('access_token');
  const userRole = req.cookies.get('access_token')?.value as RoleEnum;

  const url = req.nextUrl.clone();

  if (!token && url.pathname.startsWith('/dashboard')) {
    url.pathname = '/auth';
    return NextResponse.redirect(url);
  }

  if (token && (url.pathname === '/auth' || url.pathname === '/onboarding')) {
    if (userRole == RoleEnum.BOARD_MEMBER) {
      url.pathname = '/dashboard/board';
    } else {
      url.pathname = '/dashboard/pm';
    }

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/auth', '/onboarding', '/dashboard/:path*'],
};
