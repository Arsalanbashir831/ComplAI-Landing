import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { NewsCard } from '@/components/news-card';

const NEWS_ITEMS = [
  {
    date: 'Feb 5, 2025',
    title: 'Latest News Title',
    description:
      'Compl-AI leverages advanced AI to simplify compliance, delivering quality instant...',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/latest-news-1',
  },
  {
    date: 'Feb 5, 2025',
    title: 'Latest News Title',
    description:
      'Compl-AI leverages advanced AI to simplify compliance, delivering quality instant...',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/latest-news-2',
  },
  {
    date: 'Feb 5, 2025',
    title: 'Latest News Title',
    description:
      'Compl-AI leverages advanced AI to simplify compliance, delivering quality instant...',
    imageUrl: '/images/card-placeholder-img.png',
    href: '/news/latest-news-3',
  },
];

export function NewsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold">Latest news</h2>
          <Link href="/news">
            <Button className="font-medium transition-all duration-300 ease-in-out hover:scale-105">
              Browse All <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        {/* 
          - On small screens: flex layout with horizontal scroll
          - On medium screens+: grid layout
        */}
        <div
          className="
          flex gap-6 overflow-x-auto whitespace-nowrap
          md:overflow-x-visible md:grid md:grid-cols-2 lg:grid-cols-3
        "
        >
          {NEWS_ITEMS.map((item, index) => (
            <div
              key={index}
              className="
                flex-shrink-0 w-80 
                md:w-auto
              "
            >
              <NewsCard
                date={item.date}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                slug={item.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
