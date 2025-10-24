import { HomeFAQs } from '@/constants/faqs';
import { Metadata } from 'next';
import { Suspense } from 'react';

import { SecurityFeatures } from '@/components/_common/security-features';
import CTASection from '@/components/cta-section';
import FAQSection from '@/components/faq';
import { Hero } from '@/components/home/hero';
import NavigateToTop from '@/components/navigate-to-top';
import { NewsSection } from '@/components/news-section';
import { PricingBanner } from '@/components/pricing/pricing-banner';
import SolutionsSection from '@/components/solutions-section';

export const metadata: Metadata = {
  title: 'Compl-AI | Instant Compliance Insights for Your Team',
  description:
    'Compl-AI provides instant compliance insights and solutions exactly when your team needs them. Save time, lower costs, and stay ahead with ease.',
  openGraph: {
    title: 'Compl-AI | Instant Compliance Insights',
    description: 'Save time, reduce costs, and stay compliant with Compl-AI.',
    url: 'https://compl-ai.co.uk.com/',
    siteName: 'Compl-AI',

    type: 'website',
  },
};
export default function Home() {
  const cta = {
    title: { start: 'Ready to Try ', highlight: 'Compl-AI?', end: '' },
    description:
      'Compl-AI provides instant compliance insights and solutions exactly when your team needs them. Save time, lower costs, and stay ahead with ease.',
    buttonText: 'Start Your Free Trial',
    buttonHref: process.env.NEXT_PUBLIC_APPLICATION_URL || '/demo',
  };

  return (
    <>
      <Suspense>
        <main>
          <Hero />
          {/* <IndustryStandards /> */}
          <SolutionsSection />
          {/* <TeamsSlider /> */}
          <SecurityFeatures />
          {/* <TestimonialSlider showBadge={false} /> */}
          <PricingBanner />
          <FAQSection faqs={HomeFAQs.questions} showBadge={false} />
          <CTASection cta={cta} showBgImage={true} showRadialImage={false} />
          <NewsSection />
        </main>
      </Suspense>
      <NavigateToTop />
    </>
  );
}
