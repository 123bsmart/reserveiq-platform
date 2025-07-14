import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface SideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'left' | 'right';
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, onClose, children, position = 'left' }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [onClose]);

  if (!isMounted) return null;

  const isRight = position === 'right';

  return createPortal(
    <div
      className={`
        fixed inset-0 z-50
        transition-opacity duration-300
        ${isOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'}
      `}
    >
      {/* overlay */}
      <div
        onClick={onClose}
        className={`
          absolute inset-0 bg-black bg-opacity-40
          transition-opacity duration-300
          ${isOpen ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* sliding panel */}
      <div
        className={`
          fixed top-0 ${isRight ? 'right-0' : 'left-0'}
          w-auto h-full bg-white shadow-xl p-4 overflow-y-auto
          transition-transform duration-300
          ${isOpen ? 'translate-x-0' : isRight ? 'translate-x-full' : '-translate-x-full'}
        `}
      >
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 absolute top-4 right-4">
          ✕
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};
export default SideDrawer;
