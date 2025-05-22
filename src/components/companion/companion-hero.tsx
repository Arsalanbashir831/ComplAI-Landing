'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { CTAButton } from '../cta-button';

export function CompanionHero() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto overflow-hidden bg-[url('/images/bg/companion-hero-bg.svg')] bg-cover bg-no-repeat bg-center">
      <div className="pt-32 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Hero content */}
          <div className="flex flex-col items-start justify-center px-8 md:pl-16">
            <motion.h1
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-primary"
            >
              Companion
            </motion.h1>
            <motion.h2
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-semibold text-gray-900"
            >
              Your AI Compliance Expert
            </motion.h2>
            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-xl mt-6 mb-4"
            >
              Get instant answers to compliance queries
            </motion.p>
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <CTAButton href="/pricing" className="z-10 text-base px-4">
                Get Companion
              </CTAButton>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex justify-end pl-4 md:p-0"
          >
            <Image
              src="/images/companion-hero.png"
              alt="Companion Hero Image"
              width={700}
              height={700}
              className="w-full max-w-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
