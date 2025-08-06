'use client';

import React from 'react';
import { cn } from '@/shared/utils';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className, footer }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div
        className={cn(
          'bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative animate-fade-in overflow-y-auto scrollbar-thin',
          className
        )}
      >
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl z-10">
          ×
        </button>

        {/* Title */}
        {title && <h2 className="text-2xl font-bold text-gray-900 mb-6 pr-8">{title}</h2>}

        {/* Body */}
        <div className="text-gray-700">{children}</div>

        {/* Footer */}
        {footer && <div className="mt-6">{footer}</div>}
      </div>
    </div>
  );
};
