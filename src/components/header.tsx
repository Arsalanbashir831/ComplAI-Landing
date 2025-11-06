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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full bg-transparent px-8',
        mounted &&
          hasScrolled &&
          'bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60'
      )}
      suppressHydrationWarning
    >
      <div
        className={cn(
          'container flex h-16 items-center justify-between mx-auto mt-4 rounded-[20px] transition-all px-2 md:px-5 gap-8 md:w-fit',
          mounted && hasScrolled ? 'border-none' : 'border px-4 bg-white/95'
        )}
        suppressHydrationWarning
      >
        <Logo />

        {/* === Desktop Nav (hidden on mobile) === */}
        <TopNavItems className="hidden lg:flex w-fit" />

        <div className="flex items-center gap-4">
          {/* Desktop Buttons */}
          <Button
            variant="ghost"
            asChild
            className="text-primary hidden lg:block transition-all duration-300 ease-in-out"
          >
            <Link href={ROUTES.SIGN_IN}>Sign In</Link>
          </Button>
          <Button
            asChild
            className="rounded-lg hidden lg:block transition-all duration-300 ease-in-out"
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
