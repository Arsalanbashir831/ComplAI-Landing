'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { API_ROUTES } from '@/constants/routes';

import Spinner from '@/components/_common/spinner';
import CTASection from '@/components/cta-section';
import { NewsSection } from '@/components/news-section';
import NewsDetail from '@/components/news/new-detail';

export default function NewsExplanation() {
  const [newsItem, setNewsItem] = useState(null); // State to hold the news item
  const { id } = useParams(); // Get the `id` from the URL

  // Helper function to format an ISO date string into "dd MMM yyyy" (e.g., "03 Feb 2025")
  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  useEffect(() => {
    const getNewsItem = async () => {
      try {
        if (typeof id !== 'string') return;
        const response = await fetch(API_ROUTES.GET_BLOGS_ID(id));
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNewsItem(data);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    if (id) {
      getNewsItem();
    }
  }, [id]);

  if (newsItem === null) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const { title, uploaded_at, content, image } = newsItem;

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
      <main className="pt-5 px-12">
        <div className="container mx-auto px-6 pt-12 mt-8">
          <Link href="/" className="text-gray-500 hover:underline block">
            ← Go back
          </Link>
        </div>

        <NewsDetail
          title={title}
          date={formatDate(uploaded_at)}
          readingTime={'3 min read'}
          coverImageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${image}`}
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
