import AboutHeroSection from '@/components/about/about-hero-section';
import AiSection from '@/components/about/Ai-section';
import TrustedSection from '@/components/about/trusteded-section';
import ValuesSection from '@/components/about/values-section';
import CTASection from '@/components/cta-section';
import { NewsSection } from '@/components/news-section';
import TeamsSlider from '@/components/teams-slider';

export default function Contact() {
  const cta = {
    title: {
      start: 'Ready to Experience ',
      highlight: 'AI-Powered Compliance?',
      end: '',
    },
    description:
      'Compl-AI leverages advanced AI to simplify compliance, delivering instant answers and smart insights when you need them. Save time, enhance accuracy, and let AI handle the heavy lifting.',
    buttonText: 'Get Compl-AI Free',
    buttonHref: '/signup',
  };

  return (
    <>
      <main className="pt-20">
        <AboutHeroSection />
        <TrustedSection />
        <AiSection />
        <ValuesSection />
        <div className="py-20 px-12">
          <TeamsSlider />
        </div>
        <CTASection
          cta={cta}
          containerClassName="bg-[#EDF8FF]"
          titleClassName="lg:text-[40px]"
          descriptionClassName="max-w-4xl"
        />
        <NewsSection />
      </main>
    </>
  );
}
