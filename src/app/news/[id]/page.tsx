'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { newsData } from '@/constants/news'; // Assuming you have a `newsData` array with the articles

import CTASection from '@/components/cta-section';
import { NewsSection } from '@/components/news-section';
import NewsDetail from '@/components/news/new-detail';

export default function NewsExplanation() {
  const { id } = useParams(); // Get the `id` from the URL

  // Find the specific news article using the `id`
  const newsItem = newsData.find((news) => news.id.toString() === id);

  // If no news item is found, you can show an error message or redirect
  if (!newsItem) {
    return <div>Article not found</div>;
  }

  const { title, date, readingTime, content, imageUrl } = newsItem;

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
      <main className="pt-5">
        <div className="container mx-auto px-6 pt-12 mt-8 ">
          <Link href="/" className="text-gray-500 hover:underline  block">
            ← Go back
          </Link>
        </div>

        {/* Pass the filtered news data to NewsDetail component */}
        <NewsDetail
          title={title}
          date={date}
          readingTime={readingTime}
          coverImageUrl={imageUrl}
          content={content}
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
