import CTASection from '@/components/cta-section';
import FAQSection from '@/components/faq';
import { PricingBanner } from '@/components/pricing/pricing-banner';
import PricingTable from '@/components/pricing/pricing-table';
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
      <main>
        <div className="relative text-center space-y-2 my-20 bg-gradient-to-b from-[#edf8ff00] to-[#70a2ff85] h-screen">
          <h2 className="text-6xl font-bold">
            Smart Compliance, <br />
            Priced for Your Success
          </h2>
          <p className="font-normal text-xl">
            Streamline Your Law Firm&rsquo;s Compliance with Artificial
            Intelligence
          </p>

          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-start w-full">
            <PricingTable />
          </div>
        </div>
        <div className="h-96 mt-32" />
        <PricingBanner />
        <TeamsSlider />
        <FAQSection />
        <CTASection
          cta={cta}
          containerClassName="bg-[#EDF8FF]"
          titleClassName="lg:text-[40px]"
          descriptionClassName="max-w-4xl"
        />
      </main>
    </>
  );
}
