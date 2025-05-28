'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { solutions } from '@/data/solutions';
import { motion, Variants } from 'framer-motion';

import { CTAButton } from '../cta-button';
import SolCard from '../sol-card';

// Parent container for fluid staggered reveal
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Fluid, springy keyframes for each item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: [50, -10, 0],
    transition: {
      y: { type: 'spring', stiffness: 50, damping: 16, mass: 0.7 },
      opacity: { duration: 0.5, ease: 'easeInOut' },
    },
  },
};

export default function EnterprisePlan() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative text-center px-4 pt-12 pb-8 flex flex-col justify-center items-center"
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-bold mb-8 md:mb-12"
      >
        Our <span className="text-primary">Solutions</span>
      </motion.h2>

      <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {solutions.map((card, idx) => (
          <Link
            key={idx}
            href={card.buttonLink ?? '#'}
            className="flex flex-col flex-1 h-full"
          >
            <motion.div variants={itemVariants} className="h-full">
              <SolCard {...card} />
            </motion.div>
          </Link>
        ))}
      </div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center justify-center mt-10"
      >
        <CTAButton
          href={ROUTES.DEMO}
          className="relative z-10 text-base font-medium py-5 px-12 mt-10"
        >
          Book a Demo for Enterprise
        </CTAButton>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="absolute bottom-0 flex items-center justify-center w-full"
      >
        <Image
          src="/images/bg/blur-cta-bg.svg"
          alt="background image"
          width={800}
          height={800}
          className="h-full object-cover"
        />
      </motion.div>
    </motion.section>
  );
}
