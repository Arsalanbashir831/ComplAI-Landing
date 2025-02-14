'use client';

import React from 'react';
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
    }

    // If we have an onLinkClick callback (passed from MobileSideNav),
    // call it to close the sheet.
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <nav className={cn('gap-6', className)}>
      {mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            { 'text-primary': pathname === item.href }
          )}
          onClick={(event) => handleNavClick(event, item)}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
