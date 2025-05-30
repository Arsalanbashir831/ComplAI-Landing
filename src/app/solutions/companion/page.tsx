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
  // Example default props
  const comparisonSectionProps = {
    headingLines: [
      { text: 'From Compliance Query to Resolution', highlight: false },
      { text: 'In Under 60 Seconds', highlight: true },
    ],
    beforeItems: [
      {
        id: 'b1',
        positive: false,
        title: '1-3 Hours',
        desc: (
          <>
            <span className="text-red-400">Spent searching</span> through the SRA Handbook,
            LAA contract, Warning Notices, and outdated templates
          </>
        ),
      },
      {
        id: 'b2',
        positive: false,
        title: '+5 Days',
        desc: (
          <>
            <span className="text-red-400">Waiting for replies</span> from helplines or
            external advisers
          </>
        ),
      },
      {
        id: 'b3',
        positive: false,
        title: 'Unclear next steps',
        desc: (
          <>
            <span className="text-red-400">Struggling</span> to apply the{' '}
            <span className="text-red-400">rules</span> confidently
          </>
        ),
      },
    ],
    afterItems: [
      {
        id: 'a1',
        positive: true,
        title: 'Under 60 seconds',
        desc: 'Type your compliance question and get a clear, accurate answer.',
      },
      {
        id: 'a2',
        positive: true,
        title: 'Guided next Steps',
        desc: 'Follow on with compliant actions — draft replies, update documents, escalate when required.',
      },
      {
        id: 'a3',
        positive: true,
        title: 'Resolve the Issue Fully',
        desc: 'Move from query to confident resolution — without delay, doubt, or cost.',
      },
    ],
  };

  return (
    <>
      <Suspense>
        <main>
          <CompanionHero />
          <ComparisonSection
            headingLines={comparisonSectionProps.headingLines}
            beforeItems={comparisonSectionProps.beforeItems}
            afterItems={comparisonSectionProps.afterItems}
          />
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
