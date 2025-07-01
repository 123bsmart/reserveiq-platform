
import React from 'react';
import { Logo } from '@/shared/ui';

export const Header: React.FC = () => {
  return (
    <header className="text-center py-[60px] pb-5">
      <div className="flex justify-center">
        <Logo size="medium" />
      </div>
    </header>
  );
};

export default Header;
