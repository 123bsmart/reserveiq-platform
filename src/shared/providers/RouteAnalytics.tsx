'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { pushToDataLayer } from '@/shared/components/GoogleTagManager';

export const RouteAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const page_path = `${pathname}?${searchParams.toString()}`;
    pushToDataLayer({ event: 'pageview', page_path });
  }, [pathname, searchParams]);

  return null;
};
