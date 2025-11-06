'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Blog, getAllBlogs } from '@/services/blog-api';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { formatDate } from '@/lib/date-utils';
import useMobile from '@/hooks/useMobile';
import { Button } from '@/components/ui/button';
import { NewsCard } from '@/components/news-card';

export function NewsSection() {
  const isMobile = useMobile();
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [newsData, setNewsData] = useState<Blog[]>([]);

  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
    setActiveIndex(index);
  };

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await getAllBlogs();
        setNewsData(response.results);
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

  const latestBlogs = (newsData || [])
    // sort by uploaded_at descending, if your backend doesn’t already return newest-first
    .slice() // clone so we don’t mutate original
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(0, 3);

  return (
    <section className="py-20 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {latestBlogs.length != 0 && (
          <>
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
          </>
        )}
        <div
          className="flex gap-6 overflow-x-auto overflow-y-hidden whitespace-nowrap
          lg:overflow-x-visible lg:grid lg:grid-cols-3"
        >
          {latestBlogs?.map((news, index) => {
            const mainContentText = news.content.slice(0, 200);

            const Wrapper = isMobile ? 'div' : motion.div;

            return (
              <Wrapper
                key={news.slug}
                {...(!isMobile && {
                  initial: { y: 50 },
                  whileInView: { y: 0 },
                  transition: {
                    delay: 0.2 + 0.1 * index,
                    duration: 0.8,
                    ease: 'easeOut',
                  },
                  viewport: { once: true },
                })}
                ref={(el: HTMLDivElement) => {
                  cardRefs.current[index] = el;
                }}
                className="flex-shrink-0 w-80 lg:w-auto"
              >
                <NewsCard
                  date={formatDate(news.createdAt)}
                  title={news.title}
                  description={mainContentText}
                  imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${news.thumbnail}`}
                  slug={news.slug}
                />
              </Wrapper>
            );
          })}
        </div>

        {/* Mobile navigation dots */}
        <div className="flex lg:hidden justify-center mt-6 gap-2">
          {latestBlogs?.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to news article ${index + 1}`}
              aria-current={activeIndex === index ? 'true' : 'false'}
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
