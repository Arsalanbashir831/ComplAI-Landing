'use client';

import { Blog, getBlogBySlug } from '@/services/blog-api';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import readingTime from 'reading-time';

import Spinner from '@/components/_common/spinner';
import CTASection from '@/components/cta-section';
import { NewsSection } from '@/components/news-section';
import NewsDetail from '@/components/news/new-detail';
import { formatDate } from '@/lib/date-utils';

export default function NewsExplanation() {
  const [newsItem, setNewsItem] = useState<Blog | null>(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    getBlogBySlug(id as string)
      .then(setNewsItem)
      .catch((e) => console.error('Error fetching blog:', e));
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
    buttonHref: process.env.NEXT_PUBLIC_APPLICATION_URL || '/demo',
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
          coverImageUrl={thumbnail || '/placeholder.svg'}
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
