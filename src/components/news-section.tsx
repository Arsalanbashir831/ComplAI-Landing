'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { API_ROUTES } from '@/constants/routes';
import { ArrowRight } from 'lucide-react';

import { NewsData } from '@/types/news';
import { Button } from '@/components/ui/button';
import { NewsCard } from '@/components/news-card';

export function NewsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [newsData, setNewsData] = useState<NewsData | null>(null);

  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
    setActiveIndex(index);
  };

  // Helper function to extract plain text from the body of an HTML string
  const parseBodyContentToText = (htmlString: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    return doc.body.textContent || '';
  };

  // Helper function to format the ISO date into "dd MMM yyyy" (e.g., "03 Feb 2025")
  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  };

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(API_ROUTES.GET_BLOGS);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNewsData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    const refs = cardRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-20 px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl md:text-5xl font-semibold">Latest news</h2>
          <Link href="/news">
            <Button className="font-medium transition-all duration-300 ease-in-out hover:scale-105">
              Browse All <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        <div
          className="flex gap-6 overflow-x-auto whitespace-nowrap
          md:overflow-x-visible md:grid md:grid-cols-2 lg:grid-cols-3"
        >
          {newsData?.blogs.map((news, index) => {
            const mainContentText = parseBodyContentToText(news.content).slice(
              0,
              200
            );
            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="
                flex-shrink-0 w-80 
                md:w-auto
              "
              >
                <NewsCard
                  date={formatDate(news.uploaded_at)}
                  title={news.title}
                  description={mainContentText}
                  imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${news.image}`}
                  id={news.id}
                />
              </div>
            );
          })}
        </div>

        {/* Mobile navigation dots */}
        <div className="flex md:hidden justify-center mt-6 gap-2">
          {newsData?.blogs.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-blue-600' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
