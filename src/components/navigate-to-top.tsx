'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

import { Button } from './ui/button';

export default function NavigateToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="rounded-full h-fit p-3 text-white bg-blue-600 hover:bg-blue-200 transition-all duration-300 ease-in-out hover:scale-105"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
}
