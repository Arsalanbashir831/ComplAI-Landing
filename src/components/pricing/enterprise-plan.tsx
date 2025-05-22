'use client';

import { ROUTES } from '@/constants/routes';
import { solutions } from '@/data/solutions';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { CTAButton } from '../cta-button';
import SolCard from '../sol-card';

export default function EnterprisePlan() {
  return (
    <section className="relative text-center px-4 pt-12 pb-8 flex flex-col justify-center items-center ">
      <motion.h2
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 "
      >
        Our <span className="text-primary">Solutions</span>
      </motion.h2>

      <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
        {solutions.map((card, idx) => (
          <Link
            key={idx}
            href={card.buttonLink ?? '#'}
            className="flex flex-col flex-1 h-full" // added h-full
          >
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="h-full"
            >
              <SolCard {...card} />
            </motion.div>
          </Link>
        ))}
      </div>

      <motion.div
        // initial={{ opacity: 0 }}
        // whileInView={{ opacity: 1 }}
        //   transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }} {{ delay: 1.8, duration: 0.8, ease: 'easeOut' }}
        // viewport={{ once: true }}
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
