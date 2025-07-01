import React from 'react';
import Link from 'next/link';
import { ComingSoonWrapper } from '@/shared/components/ComingSoonWrapper';

export const FooterLinks: React.FC = () => {
  return (
    <div className="mt-16 text-center flex flex-col md:flex-row gap-y-[10px] gap-x-10 items-center justify-center text-blue-200 text-base font-medium">
      <ComingSoonWrapper>
        <Link href="/demo-request" className="hover:text-white">
          Book a Demo
        </Link>
      </ComingSoonWrapper>
      <ComingSoonWrapper>
        <Link href="/trial" className="hover:text-white">
          Start Free Trial
        </Link>
      </ComingSoonWrapper>
      <ComingSoonWrapper>
        <Link href="/contact" className="hover:text-white">
          Contact Us
        </Link>
      </ComingSoonWrapper>
    </div>
  );
};
