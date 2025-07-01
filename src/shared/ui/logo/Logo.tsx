import React from 'react';
import { cn } from '@/shared/utils/cn';

export interface LogoProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

/**
 * ReserveIQ Logo component
 * Can be used with or without the text part
 */
export const Logo: React.FC<LogoProps> = ({ className, size = 'medium', showText = true }) => {
  // Size mappings
  const sizeMap = {
    small: {
      container: 'w-[40px] h-[40px]',
      textSize: 'text-[24px]',
      tagline: 'text-[11px]',
    },
    medium: {
      container: 'w-[60px] h-[60px]',
      textSize: 'text-[36px]',
      tagline: 'text-[15px]',
    },
    large: {
      container: 'w-[80px] h-[80px]',
      textSize: 'text-[48px]',
      tagline: 'text-[18px]',
    },
  };

  return (
    <div className={cn('flex items-center gap-[15px]', className)}>
      {/* Shield Logo SVG */}
      <svg className={cn(sizeMap[size].container)} viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
        {/* Shield background */}
        <path d="M30 5 L45 10 L45 30 C45 42 30 52 30 52 C30 52 15 42 15 30 L15 10 Z" fill="#3b82f6" stroke="none" />

        {/* Building elements */}
        <rect x="20" y="18" width="4" height="12" fill="white" opacity="0.9" />
        <rect x="26" y="16" width="4" height="14" fill="white" opacity="0.9" />
        <rect x="32" y="19" width="4" height="11" fill="white" opacity="0.9" />
        <rect x="38" y="17" width="4" height="13" fill="white" opacity="0.9" />

        {/* AI symbol */}
        <circle cx="30" cy="38" r="8" fill="#10b981" />
        <circle cx="30" cy="38" r="3" fill="white" />
        <circle cx="26" cy="35" r="1.5" fill="white" />
        <circle cx="34" cy="35" r="1.5" fill="white" />
        <circle cx="26" cy="41" r="1.5" fill="white" />
        <circle cx="34" cy="41" r="1.5" fill="white" />

        {/* Connection lines */}
        <line x1="26" y1="35" x2="30" y2="38" stroke="white" strokeWidth="1" />
        <line x1="34" y1="35" x2="30" y2="38" stroke="white" strokeWidth="1" />
        <line x1="26" y1="41" x2="30" y2="38" stroke="white" strokeWidth="1" />
        <line x1="34" y1="41" x2="30" y2="38" stroke="white" strokeWidth="1" />
      </svg>

      {/* Logo Text */}
      {showText && (
        <div>
          <div className={cn('font-[600] tracking-[-0.5px]', sizeMap[size].textSize)}>
            <span className="text-[#fff]">Reserve</span>
            <span className="text-[#10b981]">IQ</span>
          </div>
          <div className={cn('text-[#cbd5e1] tracking-wide', sizeMap[size].tagline)}>AI-Powered Condo Intelligence</div>
        </div>
      )}
    </div>
  );
};

export default Logo;
