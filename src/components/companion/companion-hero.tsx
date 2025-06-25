'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import { CTAButton } from '../cta-button';

// Parent container for staggered, fluid reveal
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Fluid spring with gentle overshoot
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: [50, -10, 0],
    transition: {
      y: {
        type: 'spring',
        stiffness: 50,
        damping: 12,
        mass: 0.7,
      },
      opacity: { duration: 0.4, ease: 'easeInOut' },
    },
  },
};

export function CompanionHero() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full  mx-auto overflow-hidden bg-[url('/images/bg/companion-hero-bg.svg')] bg-cover bg-no-repeat bg-center"
    >
      <div className="pt-32 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Hero content */}
          <div className="flex flex-col items-start justify-center px-8 md:pl-16">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-primary"
            >
              Companion
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-semibold text-gray-900"
            >
              Your AI Compliance Expert
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl mt-6 mb-4">
              Get instant answers to compliance queries
            </motion.p>
            <motion.div variants={itemVariants}>
              <CTAButton href="/pricing" className="z-10 text-base p-7">
                Get Companion
              </CTAButton>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-end pl-4 md:p-0"
          >
            <Image
              src="/images/companion-hero.png"
              alt="Companion Hero Image"
              width={700}
              height={700}
              className="w-full max-w-2xl"
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
