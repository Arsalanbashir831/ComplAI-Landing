'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import { Logo } from './logo';
import TopNavItems from './top-nav-items';

export function Header() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-transparent',
        hasScrolled &&
          'bg-white/95  backdrop-blur supports-[backdrop-filter]:bg-white/60'
      )}
    >
      <div
        className={cn(
          'container flex h-16 items-center justify-between mx-auto mt-4 rounded-[20px] transition-all',
          hasScrolled ? 'border-none' : 'border px-4'
        )}
      >
        <Logo />

        <TopNavItems />

        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="text-primary">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild className="rounded-lg">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
