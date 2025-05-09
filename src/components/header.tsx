'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import { Logo } from './logo';
import { MobileSideNav } from './mobile-side-nav';
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
        'fixed top-0 z-50 w-full bg-transparent px-8',
        hasScrolled &&
          'bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'
      )}
    >
      <div
        className={cn(
          'container flex h-16 items-center justify-between mx-auto mt-4 rounded-[20px] transition-all px-2 md:px-5',
          hasScrolled ? 'border-none' : 'border px-4 bg-white/95'
        )}
      >
        <Logo />

        {/* === Desktop Nav (hidden on mobile) === */}
        <TopNavItems className="hidden md:flex" />

        <div className="flex items-center gap-4">
          {/* Desktop Buttons */}
          <Button
            variant="ghost"
            asChild
            className="text-primary hidden md:block transition-all duration-300 ease-in-out hover:scale-105"
          >
            <Link href={ROUTES.SIGN_IN}>Sign In</Link>
          </Button>
          <Button
            asChild
            className="rounded-lg hidden md:block transition-all duration-300 ease-in-out hover:scale-105"
          >
            <Link href={ROUTES.REGISTER}>Register</Link>
          </Button>

          {/* === Mobile Nav (Sheet) === */}
          <MobileSideNav />
        </div>
      </div>
    </header>
  );
}
