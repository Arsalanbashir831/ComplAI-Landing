'use client';

import Image from 'next/image';
import { ROUTES } from '@/constants/routes';
import { solutions } from '@/data/solutions';
import { motion } from 'framer-motion';

import { CTAButton } from '../cta-button';
import SolCard from '../sol-card';

export default function EnterprisePlan() {
  return (
    <section className="relative text-center px-4 pt-12 pb-8 flex flex-col justify-center items-center ">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl md:text-6xl font-bold mb-8 md:mb-16 "
      >
        Our Solutions
        {/* <span className="bg-gradient-to-b from-[#179DFF] to-[#1754FF] bg-clip-text text-transparent  ">
          {' '}
          Enterprise Plans
        </span> */}
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-stretch">
        {solutions.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4 + 0.2 * idx,
              duration: 0.8,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
          >
            <SolCard {...card} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mt-10"
      >
        <CTAButton
          href={ROUTES.DEMO}
          className="relative z-10 text-base font-medium py-5 px-12 mt-10"
        >
          Book a Demo for Enterprise
        </CTAButton>
      </motion.div>

      <div className="absolute bottom-0 flex items-center justify-center">
        <Image
          src="/images/bg/blur-cta-bg.svg"
          alt="background image"
          width={800}
          height={800}
          className="h-full object-cover"
        />
      </div>
    </section>
  );
}
