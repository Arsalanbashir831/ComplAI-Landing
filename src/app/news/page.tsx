import CTASection from '@/components/cta-section';
import NewsSection from '@/components/news/news-section';

export default function News() {
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
        <div className="text-center space-y-2  my-20">
          <h2 className="text-6xl font-bold">News & Articles</h2>
          <p className="font-normal text-xl">
            Our latest updates, news, and AI insights to keep you connected to
            innovation and progress.
          </p>
        </div>

        <NewsSection />

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
