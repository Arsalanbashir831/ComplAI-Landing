'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { newsData } from '@/constants/news';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { NewsCard } from '@/components/news-card';

export function NewsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: number) => {
    cardRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
    setActiveIndex(index);
  };

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

    const currentRefs = cardRefs.current;
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

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

        <div
          className="
          flex gap-6 overflow-x-auto whitespace-nowrap
          md:overflow-x-visible md:grid md:grid-cols-2 lg:grid-cols-3
        "
        >
          {newsData.map((item, index) => (
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
                date={item.date}
                title={item.title}
                description={item.description}
                imageUrl={item.imageUrl}
                id={item.id}
              />
            </div>
          ))}
        </div>

        <div className="flex md:hidden justify-center mt-6 gap-2">
          {newsData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-400'}`}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
