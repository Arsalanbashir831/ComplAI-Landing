import { Suspense } from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HomeFAQs } from '@/constants/faqs';

import { Hero } from '@/components/home/hero';

// Lazy load below-the-fold components
const SolutionsSection = dynamic(
  () => import('@/components/solutions-section'),
  { ssr: true }
);
const SecurityFeatures = dynamic(
  () =>
    import('@/components/_common/security-features').then((mod) => ({
      default: mod.SecurityFeatures,
    })),
  { ssr: true }
);
const PricingBanner = dynamic(
  () =>
    import('@/components/pricing/pricing-banner').then((mod) => ({
      default: mod.PricingBanner,
    })),
  { ssr: true }
);
const FAQSection = dynamic(() => import('@/components/faq'), { ssr: true });
const CTASection = dynamic(() => import('@/components/cta-section'), {
  ssr: true,
});
const NewsSection = dynamic(
  () =>
    import('@/components/news-section').then((mod) => ({
      default: mod.NewsSection,
    })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: 'Compl-AI - AI-powered compliance for SRA-regulated law firms',
  description:
    'Compl-AI provides instant compliance insights and solutions exactly when your team needs them. Save time, lower costs, and stay ahead with ease.',
  openGraph: {
    title: 'Compl-AI - AI-powered compliance for SRA-regulated law firms',
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
  );
}
