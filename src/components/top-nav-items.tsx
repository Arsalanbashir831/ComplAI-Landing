'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

export default function TopNavItems() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex gap-6">
      {siteConfig.mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary',
            { 'text-primary': pathname === item.href }
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
