'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { CTAButton } from '../cta-button';

export function CompanionHero() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto overflow-hidden">
      <div className="pt-24 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Hero content */}
          <div className="flex flex-col items-start justify-center px-16">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-primary"
            >
              Companion
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.8,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="text-4xl font-semibold text-gray-900"
            >
              Your AI Compliance Expert
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
              className="text-xl mt-6 mb-4"
            >
              Get instant answers to compliance queries
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: 'easeOut',
              }}
              viewport={{ once: true }}
            >
              <CTAButton href="#" className="z-10 text-base px-4">
                Get Companion
              </CTAButton>
            </motion.div>
          </div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            className="flex justify-end pl-4 md:p-0"
          >
            <Image
              src="/images/companion-hero.svg"
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
