'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

import { cn } from '@/lib/utils';

const mainNav = [
  {
    title: 'Home',
    href: ROUTES.HOME,
  },
  {
    title: 'Features',
    href: `${ROUTES.HOME}?section=features`,
  },
  {
    title: 'Pricing',
    href: ROUTES.PRICING,
  },
  {
    title: 'About',
    href: ROUTES.ABOUT,
  },
  {
    title: 'News',
    href: ROUTES.NEWS,
  },
  {
    title: 'Contact',
    href: ROUTES.CONTACT,
  },
];

interface TopNavItemsProps {
  className?: string;
  onLinkClick?: () => void;
}

export default function TopNavItems({
  className,
  onLinkClick,
}: TopNavItemsProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const featuresSection = document.getElementById('features');
    if (!featuresSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection('features');
        } else {
          setActiveSection('home');
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(featuresSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (pathname !== ROUTES.HOME) {
      setActiveSection(pathname);
    } else {
      setActiveSection('home');
    }
  }, [pathname]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: { title: string; href: string }
  ) => {
    if (item.title === 'Features') {
      event.preventDefault();
      router.push(`${ROUTES.HOME}?section=features`, { scroll: false });

      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
      setActiveSection('features');
    } else if (item.title === 'Home') {
      setActiveSection('home');
    }

    if (onLinkClick) {
      onLinkClick();
    }
  };

  const isActive = (item: { title: string; href: string }) => {
    if (item.title === 'Features') return activeSection === 'features';
    if (item.title === 'Home') return activeSection === 'home';
    return pathname === item.href;
  };

  return (
    <nav className={cn('gap-6', className)}>
      {mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            { 'text-primary': isActive(item) }
          )}
          onClick={(event) => handleNavClick(event, item)}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
