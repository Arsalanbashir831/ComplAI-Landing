'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { SecurityFeatures } from '@/components/_common/security-features';
import CTASection from '@/components/cta-section';
import FAQSection from '@/components/faq';
import { NewsSection } from '@/components/news-section';
import EnterprisePlan from '@/components/pricing/enterprise-plan';
import { PricingBanner } from '@/components/pricing/pricing-banner';
import { PricingSection } from '@/components/pricing/pricing-section';
import TeamsSlider from '@/components/teams-slider';

export default function Contact() {
  const cta = {
    title: {
      start: 'Ready to Experience ',
      highlight: 'AI-Powered Compliance?',
      end: '',
    },
    description:
      'Compl-AI is your all in one platform for AI solutions built for real compliance work, delivering fast insights and confident results across every task.',
    buttonText: 'Start Your Free Trial',
    buttonHref: '/signup',
  };

  return (
    <>
      <main>
        <div className="relative text-center space-y-2 mt-28 bg-gradient-to-b from-[#edf8ff00] to-[#70a2ff85] md:mt-32">
          <motion.h1
            // 1. Animation starting state
            initial={{ y: 50 }}
            // 2. Animation end state
            animate={{ y: 0 }}
            // 3. Animation timing
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl md:text-6xl font-bold"
          >
            <span className="text-primary">Smart Compliance</span>, <br />
            Priced for Your Success
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="font-normal text-md md:text-xl !mt-4 !mb-10 md:!mb-0"
          >
            Streamline Your Law Firm&rsquo;s Compliance with Artificial
            Intelligence
          </motion.p>

          {/* add button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
            className="flex justify-center !mt-4 !mb-16"
          >
            <Button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300 w-full max-w-64 md:max-w-96">
              <Image
                src="/images/icons/bot-sparkle-white.svg"
                alt=""
                width={20}
                height={20}
              />
              Companion Pricing
            </Button>
          </motion.div>

          <PricingSection />
        </div>
        <EnterprisePlan />
        <PricingBanner />
        <SecurityFeatures className="mb-28" />
        <TeamsSlider />
        <FAQSection />
        <CTASection
          cta={cta}
          containerClassName="bg-[#EDF8FF]"
          titleClassName="lg:text-[40px]"
          descriptionClassName="max-w-4xl"
        />
        <NewsSection />
      </main>
    </>
  );
}
