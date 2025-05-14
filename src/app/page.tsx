'use client';

import { Suspense } from 'react';

import CTASection from '@/components/cta-section';
import FAQSection from '@/components/faq';
import { Hero } from '@/components/home/hero';
import NavigateToTop from '@/components/navigate-to-top';
import { NewsSection } from '@/components/news-section';
import { PricingBanner } from '@/components/pricing/pricing-banner';
import SolutionsSection from '@/components/solutions-section';
import TeamsSlider from '@/components/teams-slider';
import TestimonialSlider from '@/components/testimonials';

export default function Home() {
  const cta = {
    title: {
      start: 'Ready to Try ',
      highlight: 'Compl-AI?',
      end: '',
    },
    description:
      'Compl-AI delivers instant compliance insights and tools when your team needs them most. Save time, reduce costs, and stay ahead effortlessly',
    buttonText: 'Get Compl-AI Free',
    buttonHref: '/signup',
  };
  return (
    <>
      <Suspense>
        <main>
          <Hero />
          <SolutionsSection />
          {/* <Features /> */}
          <TeamsSlider />
          <PricingBanner />
          <TestimonialSlider showBadge={false} />
          <FAQSection showBadge={false} />
          <CTASection cta={cta} showBgImage={true} showRadialImage={false} />
          <NewsSection />
          <NavigateToTop />
        </main>
      </Suspense>
    </>
  );
}
