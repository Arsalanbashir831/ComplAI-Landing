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
      'Compl-AI is your all in one platform for AI solutions built for real compliance work, delivering fast insights and confident results across every task.',
    buttonText: 'Get Started',
    buttonHref: '/signup',
  };

  return (
    <>
      <main className="pt-20">
        <div className="text-center space-y-2 pt-16 pb-4 md:pt-20 md:pb-8 px-6">
          <motion.h1
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold"
          >
            News & Articles
          </motion.h1>

          <motion.p
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="font-normal text-xl"
          >
            Our latest updates, news, and AI insights to keep you connected to{' '}
            <br />
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
