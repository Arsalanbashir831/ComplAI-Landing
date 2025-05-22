'use client';

import { API_ROUTES } from '@/constants/routes';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import { NewsCard } from '@/components/news-card';
import { Button } from '@/components/ui/button';
import { NewsData } from '@/types/news';

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

  const latestBlogs = newsData?.blogs
    // sort by uploaded_at descending, if your backend doesn’t already return newest-first
    .slice() // clone so we don’t mutate original
    .sort(
      (a, b) =>
        new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime()
    )
    .slice(0, 3);

  return (
    <section className="py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-8">
          <motion.h2
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-semibold"
          >
            Latest News
          </motion.h2>
          <Link href="/news">
            <Button className="group font-medium transition-all duration-300 ease-in-out">
              Browse All{' '}
              <ArrowRight className="ml-0.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div
          className="flex gap-6 overflow-x-auto overflow-y-hidden whitespace-nowrap
          lg:overflow-x-visible lg:grid lg:grid-cols-3"
        >
          {latestBlogs?.map((news, index) => {
            const mainContentText = parseBodyContentToText(news.content).slice(
              0,
              200
            );
            return (
              <motion.div
                key={index}
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{
                  delay: 0.2 + 0.1 * index,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="
                flex-shrink-0 w-80 
                lg:w-auto
              "
              >
                <NewsCard
                  date={formatDate(news.uploaded_at)}
                  title={news.title}
                  description={mainContentText}
                  imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${news.image}`}
                  id={news.id}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Mobile navigation dots */}
        <div className="flex lg:hidden justify-center mt-6 gap-2">
          {latestBlogs?.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-blue-600' : 'bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
