'use client';

import { motion } from 'framer-motion';

import CTASection from '@/components/cta-section';
import FAQSection from '@/components/faq';
import { PricingBanner } from '@/components/pricing/pricing-banner';
import PricingTable from '@/components/pricing/pricing-table';
import TeamsSlider from '@/components/teams-slider';

export default function Contact() {
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
      <main>
        <div className="relative text-center space-y-2 my-20 bg-gradient-to-b from-[#edf8ff00] to-[#70a2ff85] pt-10 md:pt-20 h-screen">
          <motion.h2
            // 1. Animation starting state
            initial={{ opacity: 0, y: 50 }}
            // 2. Animation end state
            animate={{ opacity: 1, y: 0 }}
            // 3. Animation timing
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-6xl font-bold"
          >
            Smart Compliance, <br />
            Priced for Your Success
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="font-normal text-md md:text-xl"
          >
            Streamline Your Law Firm&rsquo;s Compliance with Artificial
            Intelligence
          </motion.p>

          <div className="absolute md:top-1/3 left-1/2 transform -translate-x-1/2 text-start w-full">
            <PricingTable />
          </div>
        </div>
        <div className="h-96 mt-72 md:mt-32" />
        <PricingBanner />
        <TeamsSlider />
        <FAQSection />
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
