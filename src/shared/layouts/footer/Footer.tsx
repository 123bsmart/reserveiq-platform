import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-[40px] px-5 text-[0.9rem] bg-[rgba(30,42,120,0.8)] text-[#cbd5e1] leading-[1.6]">
      &copy; {currentYear} ReserveIQ Inc. All rights reserved.<br /><br />
      Are you a board member looking for reserve crisis prevention?<br />
      <Link href="/boards" className="text-[#60a5fa] no-underline font-[600] transition-colors duration-300 hover:text-[#93c5fd]">
        See Board Member Solutions →
      </Link>
    </footer>
  );
};

export default Footer;
