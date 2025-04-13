'use client';

import { API_ROUTES } from '@/constants/routes';
import { NewsData } from '@/types/news';
import { useEffect, useState } from 'react';
import { NewsCard } from '../news-card';

export default function NewsSection() {
  // Define TypeScript interfaces for the blog data structure


  // Initialize state as null; it will later store data of type NewsData
  const [newsData, setNewsData] = useState<NewsData | null>(null);

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

  // Fetch news data once on component mount
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

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-3 mx-3">
        {newsData?.blogs.map((news, index) => {
          // Convert the HTML content to plain text extracted from the body,
          // and slice for a preview if desired.
          const mainContentText = parseBodyContentToText(news.content).slice(0, 200);
          return (
            <NewsCard
              key={news.id || index}
              date={formatDate(news.uploaded_at)}
              title={news.title}
              description={mainContentText}
              imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${news.image}`}
              id={news.id}
            />
          );
        })}
      </div>
    </div>
  );
}
