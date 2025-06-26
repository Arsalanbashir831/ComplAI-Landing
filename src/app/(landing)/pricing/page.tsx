'use client';

import { PricingFAQs } from '@/constants/faqs';
import { ROUTES } from '@/constants/routes';
import { motion } from 'framer-motion';

import { SecurityFeatures } from '@/components/_common/security-features';
import { CTAButton } from '@/components/cta-button';
import CTASection from '@/components/cta-section';
import FAQSection from '@/components/faq';
import { NewsSection } from '@/components/news-section';
import { PricingBanner } from '@/components/pricing/pricing-banner';
import { PricingSection } from '@/components/pricing/pricing-section';
import SolutionsSection from '@/components/solutions-section';
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
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            className="text-3xl md:text-6xl font-bold"
          >
            <span className="text-primary">Smart Compliance</span>, <br />
            Priced for Your Success
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            className="font-normal text-md md:text-xl !mt-  md:!mb-0"
          >
            Streamline Your Law Firm&rsquo;s Compliance with Artificial
            Intelligence
          </motion.p>

          {/* add button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            className="flex justify-center md:!mt-4 md:!mb-16"
          ></motion.div>

          <PricingSection />
        </div>
        {/* Enterprise Solutions Section */}
        <SolutionsSection
          title="Our <span class='text-primary'>Solutions</span>"
          description=""
          ctaButton={
            <CTAButton
              href={ROUTES.DEMO}
              className="relative z-10 text-base font-medium py-5 px-12 mt-10"
            >
              Book a Demo for Enterprise
            </CTAButton>
          }
          backgroundImage={{
            src: '/images/bg/blur-cta-bg.svg',
            alt: 'background image',
            width: 800,
            height: 800,
            className: 'h-full object-cover',
          }}
          className="pt-12 pb-8 flex flex-col justify-center items-center"
        />
        <PricingBanner />
        <SecurityFeatures className="mb-28" />
        <TeamsSlider />
        <FAQSection faqs={PricingFAQs.questions} />
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
