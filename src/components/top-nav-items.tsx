'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { ScrollArea } from './ui/scroll-area';

const mainNav = [
  { title: 'Home', href: ROUTES.HOME },
  { title: 'Solutions', href: '#' },
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
    href: ROUTES.COMPANION,
    icon: '/images/icons/bot-sparkle-blue.svg',
    comingSoon: false,
  },
  // {
  //   title: 'Audit',
  //   description: 'LAA Audits and Peer Review',
  //   href: ROUTES.AUDIT,
  //   icon: '/images/icons/users-four-gray.svg',
  //   comingSoon: true,
  // },
  // {
  //   title: 'Resolve',
  //   description: 'Swift Complaint Handling',
  //   href: ROUTES.RESOLVE,
  //   icon: '/images/icons/file-sparkle-gray.svg',
  //   comingSoon: true,
  // },
  // {
  //   title: 'Compose',
  //   description: 'Create policies with AI support',
  //   href: ROUTES.COMPOSE,
  //   icon: '/images/icons/magic-wand-gray.svg',
  //   comingSoon: true,
  // },
  // {
  //   title: 'Review',
  //   description: 'Find Compliance Gaps',
  //   href: ROUTES.REVIEW,
  //   icon: '/images/icons/files-sparkle-gray.svg',
  //   comingSoon: true,
  // },
  // {
  //   title: 'Validate',
  //   description: 'Compliance file review made easy',
  //   href: ROUTES.VALIDATE,
  //   icon: '/images/icons/file-text-gray.svg',
  //   comingSoon: true,
  // },
];

interface TopNavItemsProps {
  className?: string;
  onLinkClick?: () => void;
}

const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, type: 'spring' as const, stiffness: 100 },
  }),
  hover: {
    // scale: 1.05,
    transition: { duration: 0.2 },
  },
};

export default function TopNavItems({
  className,
  onLinkClick,
}: TopNavItemsProps) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport based on window width
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Sync activeSection when the route changes
  useEffect(() => {
    setActiveSection(
      pathname === ROUTES.HOME ? 'home' : pathname.replace('/', '')
    );
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLElement>,
    item: { title: string; href: string }
  ) => {
    setActiveSection(item.title.toLowerCase());
    onLinkClick?.();
  };

  const isActive = (title: string) =>
    activeSection.startsWith(title.toLowerCase());

  return (
    <ScrollArea>
      <nav
        className={cn(
          'relative flex gap-8 overflow-x-auto no-scrollbar mt-6 md:mt-0 md:items-center',
          className
        )}
        aria-label="Primary Navigation"
      >
        {mainNav.map((item, idx) => {
          if (item.title === 'Solutions') {
            if (!isMobile) {
              // Desktop: Popover with animated button trigger
              return (
                <Popover
                  key={item.title}
                  open={solutionsOpen}
                  onOpenChange={setSolutionsOpen}
                >
                  <PopoverTrigger asChild>
                    <motion.button
                      custom={idx}
                      initial="hidden"
                      animate="visible"
                      variants={navItemVariants}
                      whileHover="hover"
                      onClick={() => setSolutionsOpen((o) => !o)}
                      onMouseEnter={() => setSolutionsOpen(true)}
                      className={cn(
                        'text-base font-medium transition-colors hover:text-primary flex items-center whitespace-nowrap',
                        { 'text-primary': isActive('solutions') }
                      )}
                    >
                      {item.title} <ChevronDown className="w-4 h-4 ml-1" />
                    </motion.button>
                  </PopoverTrigger>

                  <PopoverContent
                    side="bottom"
                    align="center"
                    className={cn(
                      'pointer-events-auto z-50 w-full max-w-96 md:max-w-[700px] mt-2 p-0 md:p-4 bg-white rounded-2xl shadow-lg'
                    )}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <div className="grid md:grid-cols-2">
                      {solutions.map((sol, idx) => (
                        <Link
                          key={sol.title}
                          href={sol.comingSoon ? '#' : sol.href}
                          className={cn(
                            'flex items-center gap-[0.3rem] p-3 hover:bg-gray-50 whitespace-nowrap',
                            idx % 2 === 1 && 'md:border-l border-gray-200'
                          )}
                        >
                          <div
                            className={cn(
                              'p-2 border rounded-lg',
                              sol.comingSoon
                                ? 'border-[#A1A7B4]'
                                : 'border-primary'
                            )}
                          >
                            <Image
                              src={sol.icon}
                              alt={sol.title}
                              width={24}
                              height={24}
                              className="w-5 h-5 md:w-6 md:h-6"
                              unoptimized
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p
                                className={cn(
                                  'md:text-xl font-semibold',
                                  sol.comingSoon
                                    ? 'text-[#A1A7B4]'
                                    : 'text-primary'
                                )}
                              >
                                {sol.title}
                              </p>
                              {sol.comingSoon && (
                                <div className="px-3 py-0.5 text-[7px] font-medium text-white bg-gradient-to-r from-[#0058FF] to-[#21C8F6] rounded-full shadow">
                                  Coming Soon
                                </div>
                              )}
                            </div>
                            <p
                              className={cn(
                                'md:mt-1 text-xs',
                                sol.comingSoon
                                  ? 'text-[#A1A7B4]'
                                  : 'text-gray-dark'
                              )}
                            >
                              {sol.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </PopoverContent>
                </Popover>
              );
            } else {
              // Mobile: Collapsible nested menu with animation
              return (
                <motion.div
                  key={item.title}
                  className="flex flex-col"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <motion.button
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className={cn(
                      'text-lg font-medium transition-colors hover:text-primary flex items-center whitespace-nowrap',
                      { 'text-primary': isActive('solutions') }
                    )}
                    aria-expanded={mobileSolutionsOpen}
                    aria-controls="mobile-solutions-menu"
                    initial="rest"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.title}
                    {mobileSolutionsOpen ? (
                      <ChevronUp className="w-4 h-4 ml-1" />
                    ) : (
                      <ChevronDown className="w-4 h-4 ml-1" />
                    )}
                  </motion.button>

                  <motion.div
                    id="mobile-solutions-menu"
                    className="mt-2 flex flex-col space-y-2 pl-0 border-l border-gray-300"
                    initial={{ opacity: 0, height: 0, display: 'none' }}
                    animate={
                      mobileSolutionsOpen
                        ? { opacity: 1, height: 'auto', display: 'block' }
                        : { opacity: 0, height: 0, display: 'none' }
                    }
                    style={{ overflow: 'hidden' }}
                    transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                  >
                    {solutions.map((sol) => (
                      <motion.div
                        key={sol.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Link
                          href={sol.comingSoon ? '#' : sol.href}
                          className={cn(
                            'flex items-center gap-[0.3rem] p-2 rounded hover:bg-gray-100 whitespace-nowrap',
                            sol.comingSoon
                              ? 'text-[#A1A7B4] cursor-not-allowed'
                              : 'text-gray-900'
                          )}
                          onClick={() => {
                            if (!sol.comingSoon) {
                              setMobileSolutionsOpen(false);
                              onLinkClick?.();
                              setActiveSection('solutions');
                            }
                          }}
                          aria-disabled={sol.comingSoon}
                          tabIndex={sol.comingSoon ? -1 : 0}
                        >
                          <div
                            className={cn(
                              'p-1 border rounded-lg',
                              sol.comingSoon
                                ? 'border-[#A1A7B4]'
                                : 'border-primary'
                            )}
                          >
                            <Image
                              src={sol.icon}
                              alt={sol.title}
                              width={20}
                              height={20}
                              className="w-5 h-5"
                              unoptimized
                            />
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2">
                              <p
                                className={cn(
                                  'font-semibold text-sm',
                                  sol.comingSoon
                                    ? 'text-[#A1A7B4]'
                                    : 'text-primary'
                                )}
                              >
                                {sol.title}
                              </p>
                              {sol.comingSoon && (
                                <div className="px-3 py-0.5 text-[7px] font-medium text-white bg-gradient-to-r from-[#0058FF] to-[#21C8F6] rounded-full shadow">
                                  Coming Soon
                                </div>
                              )}
                            </div>

                            <p
                              className={cn(
                                'text-xs',
                                sol.comingSoon
                                  ? 'text-[#A1A7B4]'
                                  : 'text-gray-700'
                              )}
                            >
                              {sol.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              );
            }
          }

          // Normal nav links with animation
          return (
            <motion.div
              key={item.title}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
            >
              <motion.div whileHover="hover" className="text-lg md:!text-base">
                <Link
                  href={item.href}
                  className={cn(
                    'font-medium transition-colors hover:text-primary whitespace-nowrap',
                    { 'text-primary font-semibold': isActive(item.title) }
                  )}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.title}
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </nav>
    </ScrollArea>
  );
}
