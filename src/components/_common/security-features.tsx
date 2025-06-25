'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

type SecurityFeature = {
  icon: string;
  iconSize: { width: string; height: string };
  title: string;
  detailLink?: string;
};

const defaultFeatures: SecurityFeature[] = [
  {
    icon: '/images/icons/shield.svg',
    iconSize: { width: 'w-40 md:w-56', height: 'h-40' },
    title: 'GDPR Compliant',
    detailLink: 'https://www.legislation.gov.uk/eur/2016/679/contents',
  },
  {
    icon: '/images/icons/iso.svg',
    iconSize: { width: 'w-56 md:w-64', height: 'h-40' },
    title: 'ISO 27001 Hosting',
    detailLink: 'https://www.iso.org/standard/27001',
  },
  {
    icon: '/images/icons/lock-simple.svg',
    iconSize: { width: 'w-32 md:w-40', height: 'h-32 md:h-40' },
    title: 'End-to-End Encryption',
    detailLink: 'https://www.ibm.com/think/topics/end-to-end-encryption',
  },
];

// Parent variant to stagger children
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// "Fluid" spring for each item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 16,
      mass: 0.6,
    },
  },
};

export function SecurityFeatures({ className = '' }: { className?: string }) {
  return (
    <section className={`w-full ${className}`}>
      {/* Top block: heading + cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center space-y-12 py-12"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center"
        >
          <span className="text-primary">Security</span> you can rely on
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          {defaultFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center text-center space-y-2"
            >
              <div
                className={cn(
                  'flex items-center justify-center',
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
                    'object-contain',
                    feature.iconSize.width,
                    feature.iconSize.height
                  )}
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={feature.detailLink || '#'}
                className="group flex items-center space-x-1 text-[#7A7A7A]"
              >
                <span className="inline-flex items-center text-blue-600 font-medium transition-transform duration-300">
                  More Details
                </span>
                <ArrowRight className="h-4 w-4 text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom block: full-width blue section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 60,
          damping: 16,
          mass: 0.6,
          delay: 0.3,
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-blue-50"
      >
        <div className="container max-w-5xl mx-auto py-20 px-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start">
          <div className="md:w-1/2">
            <h3 className="text-4xl font-semibold md:max-w-[380px]">
              <span className="text-blue-600">Security</span> is fundamental to{' '}
              <br />
              Everything <span className="text-blue-600">we</span> do
            </h3>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <p className="md:max-w-[380px] text-justify">
              We&apos;re deeply committed to GDPR compliance and the protection of
              sensitive client and firm information. Our system is built with
              security at its core, using end-to-end encryption, strict access
              controls and continuous threat monitoring. We&apos;re hosted on secure
              servers, operate under robust data processing agreements and
              follow strict protocols to ensure your data stays safe and your
              trust is always protected.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
