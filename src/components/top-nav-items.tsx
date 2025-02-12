'use client';

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
    href: `${ROUTES.HOME}?section=features`, // Updated to add query parameter
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

export default function TopNavItems() {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    item: { title: string; href: string }
  ) => {
    if (item.title === 'Features') {
      event.preventDefault();
      router.push(`${ROUTES.HOME}?section=features`, { scroll: false });

      // Smooth scroll to the Features section
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="hidden md:flex gap-6">
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
