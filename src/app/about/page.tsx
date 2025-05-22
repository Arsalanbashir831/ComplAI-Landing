import { SecurityFeatures } from '@/components/_common/security-features';
import AboutHeroSection from '@/components/about/about-hero-section';
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
      'Compl-AI is your all in one platform for AI solutions built for real compliance work, delivering fast insights and confident results across every task.',
    buttonText: 'Get Started',
    buttonHref: '/pricing',
  };

  return (
    <>
      <main className="pt-20">
        <AboutHeroSection />
        <TrustedSection />
        <ValuesSection />
        <SecurityFeatures />
        <div className="py-20">
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
