'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import { cn } from '@/lib/utils';

type SecurityFeature = {
  icon: string;
  iconSize: {
    width: string;
    height: string;
  };
  title: string;
  detailLink?: string;
};

interface SecurityFeaturesProps {
  title?: string;
  features?: SecurityFeature[];
  className?: string;
  companyName?: string;
  securityDescription?: string;
}

export function SecurityFeatures({
  title = 'Security you can rely on',
  features = defaultFeatures,
  className = '',
  companyName = 'Compl-AI',
  securityDescription = "We've built a comprehensive system that protects data at every level—from robust user authentication to vigilant network monitoring. Our approach combines cutting-edge technology with rigorous protocols, ensuring that information remains secure in an ever-changing digital landscape.",
}: SecurityFeaturesProps) {
  return (
    <section className={`w-full ${className}`}>
      <div>
        {/* Top section with title and features */}
        <div className="flex flex-col items-center justify-center space-y-12 py-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center"
          >
            {title}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4 + 0.2 * index,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center space-y-2"
              >
                <div
                  className={cn(
                    'text-blue-600 h-32 w-32 flex items-center justify-center',
                    feature.iconSize.width,
                    feature.iconSize.height
                  )}
                >
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={120}
                    height={120}
                    className={cn(
                      'w-32 h-32 object-contain',
                      feature.iconSize.width,
                      feature.iconSize.height
                    )}
                    priority
                  />
                </div>
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <Link
                  href={feature.detailLink || '#'}
                  className="text-[#7A7A7A] flex items-center"
                >
                  Detail <ArrowUpRight className="h-3 w-3 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom blue section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="bg-blue-50"
        >
          <div className="container max-w-5xl mx-auto py-20 px-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="md:w-1/2">
              <h3 className="text-4xl font-semibold md:max-w-[380px]">
                <span className="text-blue-600">Security</span> is fundamental
                to <br />
                Everything <span className="text-blue-600">
                  {companyName}
                </span>{' '}
                <br className="hidden md:block" />
                do
              </h3>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <p className="md:max-w-[380px] text-justify">
                {securityDescription}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const defaultFeatures: SecurityFeature[] = [
  {
    icon: '/images/icons/lock-simple.svg',
    iconSize: {
      width: 'w-32 md:w-40',
      height: 'h-32 md:h-40',
    },
    title: 'End-to-End Encryption',
    detailLink: '/security/encryption',
  },
  {
    icon: '/images/icons/shield.svg',
    iconSize: {
      width: 'w-40 md:w-56',
      height: 'h-40',
    },
    title: 'GDPR Complaint',
    detailLink: '/security/gdpr',
  },
  {
    icon: '/images/icons/iso.svg',
    iconSize: {
      width: 'w-56 md:w-64',
      height: 'h-40',
    },
    title: 'ISO 27001 Hosting',
    detailLink: '/security/iso',
  },
];
