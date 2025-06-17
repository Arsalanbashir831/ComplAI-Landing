import { DemoFAQs } from '@/constants/faqs';
import { TooltipProvider } from '@radix-ui/react-tooltip';

import DemoHeroSection from '@/components/demo/demo-hero-section';
import FAQSection from '@/components/faq';
import TeamsSlider from '@/components/teams-slider';
import TestimonialCarousel from '@/components/testimonials';

export default function Demo() {
  return (
    <>
      <main className="pt-20 ">
        <TooltipProvider>
          <DemoHeroSection />
          <TeamsSlider className="md:text-5xl" showSidesFade={false} />
          <TestimonialCarousel />
          <FAQSection faqs={DemoFAQs.questions}></FAQSection>
        </TooltipProvider>
      </main>
    </>
  );
}
