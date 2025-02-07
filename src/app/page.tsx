import CTASection from '@/components/cta-section';
import FAQSection from '@/components/faq';
import Features from '@/components/features';
import { Hero } from '@/components/hero';
import TestimonialSlider from '@/components/testimonials';

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <TestimonialSlider />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
