'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgressIndicator(): JSX.Element {
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (): void => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (indicatorRef.current) {
        indicatorRef.current.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // 🧼 Clean up
  }, []);

  return <div ref={indicatorRef} className="scroll-indicator" />;
}
