'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

import { Button } from './ui/button';

export default function NavigateToTop() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted || !visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="rounded-full h-fit p-3 text-primary border-primary hover:text-blue-800 transition-all duration-300 ease-in-out shadow-md shadow-primary/40"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
