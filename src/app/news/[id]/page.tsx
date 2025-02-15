import Link from 'next/link';

import CTASection from '@/components/cta-section';
import { NewsSection } from '@/components/news-section';
import NewsDetail from '@/components/news/new-detail';

export default function NewsExplanation() {
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
        <div className="container mx-auto px-6 pt-12 mt-8 mb-2">
          <Link href="/" className="text-gray-500 hover:underline mb-4 block">
            ← Go back
          </Link>
        </div>

        <NewsDetail
          title="Step-by-step guide to choosing great font pairs"
          author="Andrew Jonson"
          authorRole="Graphic Designer"
          date="January 25, 2025"
          readingTime="8 min"
          avatarUrl="https://github.com/shadcn.png"
          coverImageUrl="/images/card-placeholder-img.png"
          content={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit... Ut enim ad minim veniam, quis nostrud exercitation ullamco... Duis aute irure dolor in reprehenderit in voluptate velit... Excepteur sint occaecat cupidatat non proident...'
          }
        />

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
