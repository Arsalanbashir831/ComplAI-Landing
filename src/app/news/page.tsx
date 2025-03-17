'use client';

import { motion } from 'framer-motion';

import CTASection from '@/components/cta-section';
import NewsSection from '@/components/news/news-section';

export default function News() {
  const cta = {
    title: {
      start: 'Ready to Experience ',
      highlight: 'AI-Powered Compliance?',
      end: '',
    },
    description:
      'Compl-AI leverages advanced AI to simplify compliance, delivering instant answers and smart insights when you need them. Save time, enhance accuracy, and let AI handle the heavy lifting.',
    buttonText: 'Get Compl-AI Free',
    buttonHref: '/signup',
  };

  return (
    <>
      <main className="pt-20">
        <div className="text-center space-y-2 pt-16 pb-4 md:pt-20 md:pb-8 px-6">
          <motion.h1
            // 1. Animation starting state
            initial={{ opacity: 0, y: 50 }}
            // 2. Animation end state
            animate={{ opacity: 1, y: 0 }}
            // 3. Animation timing
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-5xl md:text-6xl font-bold"
          >
            News & Articles
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="font-normal text-xl"
          >
            Our latest updates, news, and AI insights to keep you connected to
            innovation and progress.
          </motion.p>
        </div>

        <NewsSection />

        <CTASection
          cta={cta}
          containerClassName="bg-[#EDF8FF]"
          titleClassName="lg:text-[40px]"
          descriptionClassName="max-w-4xl"
        />
      </main>
    </>
  );
}
