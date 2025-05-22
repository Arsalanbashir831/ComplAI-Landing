'use client';

import { Suspense } from 'react';

import { SecurityFeatures } from '@/components/_common/security-features';
import CTASection from '@/components/cta-section';
import FAQSection from '@/components/faq';
import { Hero } from '@/components/home/hero';
import IndustryStandards from '@/components/home/industry-standards';
import NavigateToTop from '@/components/navigate-to-top';
import { NewsSection } from '@/components/news-section';
import { PricingBanner } from '@/components/pricing/pricing-banner';
import SolutionsSection from '@/components/solutions-section';
import TeamsSlider from '@/components/teams-slider';
import TestimonialSlider from '@/components/testimonials';

export default function Home() {
  const cta = {
    title: { start: 'Ready to Try ', highlight: 'Compl-AI?', end: '' },
    description:
      'Compl-AI provides instant compliance insights and solutions exactly when your team needs them. Save time, lower costs, and stay ahead with ease.',
    buttonText: 'Start Your Free Trial',
    buttonHref: '/signup',
  };

  return (
    <>
      <Suspense>
        <main>
          <Hero />
          <IndustryStandards />
          <SolutionsSection />
          <TeamsSlider />
          <SecurityFeatures />
          <TestimonialSlider showBadge={false} />
          <PricingBanner />
          <FAQSection showBadge={false} />
          <CTASection
            cta={cta}
            showBgImage={true}
            showRadialImage={false}
          />
          <NewsSection />
        </main>
      </Suspense>
      <NavigateToTop />
    </>
  );
}
