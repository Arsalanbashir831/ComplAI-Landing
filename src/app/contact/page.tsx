import { TooltipProvider } from '@radix-ui/react-tooltip';

import ContactHeroSection from '@/components/contact/contact-hero-section';
import NeedAssistanceSection from '@/components/contact/need-assisstance-section';
import FAQSection from '@/components/faq';
import TestimonialCarousel from '@/components/testimonials';

export default function Contact() {
  return (
    <>
      <main className="pt-20">
        <TooltipProvider>
          <ContactHeroSection />
          <NeedAssistanceSection />
          <TestimonialCarousel />
          <FAQSection />
        </TooltipProvider>
      </main>
    </>
  );
}
