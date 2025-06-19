'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { API_ROUTES } from '@/constants/routes';
import readingTime from 'reading-time';

import { Blog } from '@/types/news';
import { formatDate } from '@/lib/date-utils';
import Spinner from '@/components/_common/spinner';
import CTASection from '@/components/cta-section';
import { NewsSection } from '@/components/news-section';
import NewsDetail from '@/components/news/new-detail';

export default function NewsExplanation() {
  const [newsItem, setNewsItem] = useState<Blog | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    fetch(API_ROUTES.GET_BLOGS_ID(id as string))
      .then((res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        return res.json();
      })
      .then(setNewsItem)
      .catch((e) => console.error(e));
  }, [id]);

  if (!newsItem) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const { title, createdAt, content, thumbnail } = newsItem;
  const stats = readingTime(content);
  const readTimeText = `${Math.ceil(stats.minutes)} min read`;

  const cta = {
    title: { start: 'Ready to Try ', highlight: 'Compl-AI?', end: '' },
    description:
      'Compl-AI provides instant compliance insights and solutions exactly when your team needs them. Save time, lower costs, and stay ahead with ease.',
    buttonText: 'Start Your Free Trial',
    buttonHref: '/signup',
  };

  return (
    <main>
      <div className="pt-5 md:px-12">
        <div className="container mx-auto px-6 pt-12 mt-8">
          <Link href="/" className="text-gray-500 hover:underline block">
            ← Go back
          </Link>
        </div>

        <NewsDetail
          title={title}
          date={formatDate(createdAt)}
          readingTime={readTimeText}
          coverImageUrl={thumbnail}
          content={content}
        />
      </div>

      <CTASection
        cta={cta}
        containerClassName="bg-[#EDF8FF]"
        titleClassName="lg:text-[40px]"
        descriptionClassName="max-w-4xl"
      />

      <div className="md:px-12">
        <NewsSection />
      </div>
    </main>
  );
}
