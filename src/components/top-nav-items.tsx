'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

const mainNav = [
  { title: 'Home', href: ROUTES.HOME },
  { title: 'Solutions', href: '#' },
  { title: 'Features', href: `${ROUTES.HOME}?section=features` },
  { title: 'Pricing', href: ROUTES.PRICING },
  { title: 'About', href: ROUTES.ABOUT },
  { title: 'News', href: ROUTES.NEWS },
  { title: 'Demo', href: ROUTES.DEMO },
  { title: 'Contact', href: ROUTES.CONTACT },
];

const solutions = [
  {
    title: 'Companion',
    description: 'Your compliance assistant',
    href: '/companion',
    icon: '/images/icons/bot-sparkle-blue.svg',
    comingSoon: false,
  },
  {
    title: 'Resolve',
    description: 'Swift Complaint Handling',
    href: '/resolve',
    icon: '/images/icons/file-sparkle-blue.svg',
    comingSoon: false,
  },
  {
    title: 'Review',
    description: 'Find Compliance Gaps',
    href: '/review',
    icon: '/images/icons/files-sparkle-gray.svg',
    comingSoon: true,
  },
  {
    title: 'Audit',
    description: 'LAA Audits and Peer Review',
    href: '/audit',
    icon: '/images/icons/users-four-gray.svg',
    comingSoon: true,
  },
  {
    title: 'Compose',
    description: 'Create policies with AI support',
    href: '/compose',
    icon: '/images/icons/magic-wand-gray.svg',
    comingSoon: true,
  },
  {
    title: 'Validate',
    description: 'Compliance file review made easy',
    href: '/validate',
    icon: '/images/icons/file-text-gray.svg',
    comingSoon: true,
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
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const featuresEl = document.getElementById('features');
    if (!featuresEl) return;
    const obs = new IntersectionObserver(
      ([entry]) => setActiveSection(entry.isIntersecting ? 'features' : 'home'),
      { threshold: 0.5 }
    );
    obs.observe(featuresEl);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    setActiveSection(
      pathname === ROUTES.HOME ? 'home' : pathname.replace('/', '')
    );
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLElement>,
    item: { title: string; href: string }
  ) => {
    if (item.title === 'Features') {
      e.preventDefault();
      router.push(`${ROUTES.HOME}?section=features`, { scroll: false });
      document
        .getElementById('features')
        ?.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('features');
    } else {
      setActiveSection(item.title.toLowerCase());
    }
    onLinkClick?.();
  };

  const isActive = (title: string) => activeSection === title.toLowerCase();

  return (
    <nav className={cn('relative flex items-center gap-6', className)}>
      {mainNav.map((item) =>
        item.title === 'Solutions' ? (
          <Popover
            key={item.title}
            open={solutionsOpen}
            onOpenChange={setSolutionsOpen}
          >
            <PopoverTrigger asChild>
              <button
                onClick={() => setSolutionsOpen((open) => !open)}
                onMouseEnter={() => setSolutionsOpen(true)}
                className={cn(
                  'text-md font-medium transition-colors hover:text-primary',
                  { 'text-primary': isActive('solutions') }
                )}
              >
                {item.title}
              </button>
            </PopoverTrigger>
            {solutionsOpen && (
              <PopoverContent
                side="bottom"
                align="center"
                className="!max-w-96 md:max-w-[700px] w-full mt-2 !p-0 md:p-4 bg-white rounded-2xl shadow-lg"
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <div className="grid md:grid-cols-2">
                  {solutions.map((sol, idx) => (
                    <Link
                      key={sol.title}
                      href={sol.href}
                      onClick={() => {
                        setSolutionsOpen(false);
                        onLinkClick?.();
                      }}
                      className={cn(
                        'flex items-center gap-3 p-3 hover:bg-gray-50',
                        idx % 2 === 1 && 'md:border-l border-gray-200'
                      )}
                    >
                      <div
                        className={cn(
                          'p-2 border rounded-lg',
                          sol.comingSoon ? 'border-[#A1A7B4]' : 'border-primary'
                        )}
                      >
                        <Image
                          src={sol.icon}
                          alt={sol.title}
                          width={24}
                          height={24}
                          className="w-4 h-4 md:w-6 md:h-6"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p
                            className={cn(
                              'md:text-xl font-semibold',
                              sol.comingSoon ? 'text-[#A1A7B4]' : 'text-primary'
                            )}
                          >
                            {sol.title}
                          </p>
                          {sol.comingSoon && (
                            <Badge className="px-3 py-0.5 text-[7px] font-medium text-white bg-gradient-to-r from-[#0058FF] to-[#21C8F6] rounded-full shadow">
                              Coming Soon
                            </Badge>
                          )}
                        </div>
                        <p
                          className={cn(
                            'md:mt-1 text-xs',
                            sol.comingSoon ? 'text-[#A1A7B4]' : 'text-gray-dark'
                          )}
                        >
                          {sol.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            )}
          </Popover>
        ) : (
          <Link
            key={item.title}
            href={item.href}
            className={cn(
              'text-md font-medium transition-colors hover:text-primary',
              { 'text-primary': isActive(item.title) }
            )}
            onClick={(e) => handleNavClick(e, item)}
          >
            {item.title}
          </Link>
        )
      )}
    </nav>
  );
}
