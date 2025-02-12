import CTASection from '@/components/cta-section';
import FAQSection from '@/components/faq';
import Features from '@/components/home/features';
import { Hero } from '@/components/home/hero';
import IndustryStandards from '@/components/home/industry-standards';
import { NewsSection } from '@/components/news-section';
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
      <main>
        <Hero />
        <div className="-mt-64">
          <IndustryStandards />
        </div>
        <Features />
        <TestimonialSlider />
        <FAQSection />
        <CTASection cta={cta} showBgImage={true} showRadialImage={false} />
        <NewsSection />
      </main>
    </>
  );
}
