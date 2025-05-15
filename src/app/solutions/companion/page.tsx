'use client';

import { Suspense } from 'react';

import { CompanionBanner } from '@/components/companion/companion-banner';
import { CompanionHero } from '@/components/companion/companion-hero';
import { ComparisonSection } from '@/components/companion/comparison-section';
import { HowItWorks } from '@/components/companion/how-it-works';
import WhyCompanionSection from '@/components/companion/why-companion';
import NavigateToTop from '@/components/navigate-to-top';
import TestimonialSlider from '@/components/testimonials';

export default function CompanionPage() {
  return (
    <>
      <Suspense>
        <main>
          <CompanionHero />
          <ComparisonSection />
          <WhyCompanionSection />
          <HowItWorks />
          <CompanionBanner />
          <TestimonialSlider showBadge={false} />
          <NavigateToTop />
        </main>
      </Suspense>
    </>
  );
}
