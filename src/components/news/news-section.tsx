'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { API_ROUTES } from '@/constants/routes';
import { ArrowRight } from 'lucide-react';

import type { NewsData } from '@/types/news';

import { Skeleton } from '../ui/skeleton';
import { BlogCard } from './blog-card';

export default function NewsSection() {
  // Initialize state as null; it will later store data of type NewsData
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);

  // Helper function to extract plain text from the body of an HTML string
  const parseBodyContentToText = (
    htmlString: string,
    maxLength = 200
  ): string => {
    if (typeof window === 'undefined') return '';

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const text = doc.body.textContent || '';
    return text.slice(0, maxLength) + (text.length > maxLength ? '...' : '');
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

  // Calculate estimated read time (assuming 200 words per minute)
  const calculateReadTime = (content: string): number => {
    if (typeof window === 'undefined') return 5;

    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const text = doc.body.textContent || '';
    const wordCount = text.split(/\s+/).length;
    return Math.ceil(wordCount / 200);
  };

  // Fetch news data once on component mount
  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_ROUTES.GET_BLOGS);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error('Error fetching news data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-12 py-8 space-y-16">
        {/* Featured skeleton */}
        <div className="flex flex-col md:flex-row gap-8">
          <Skeleton className="w-full md:w-1/2 h-[380px] rounded-lg" />
          <div className="flex-1 space-y-4 py-4">
            <Skeleton className="w-1/3" />
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-40" />
            <Skeleton className="w-32 h-10 rounded-md" />
          </div>
        </div>

        {/* Recent articles skeleton grid */}
        <div>
          <Skeleton className="w-1/4 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="w-full h-48 rounded-lg" />
                <Skeleton className="w-3/4" />
                <Skeleton className="w-full h-6" />
                <Skeleton className="w-1/2 h-6" />
              </div>
            ))}
          </div>
        </div>

        {/* Load more skeleton button */}
        <div className="flex justify-center">
          <Skeleton className="w-32 h-10 rounded-md" />
        </div>
      </div>
    );
  }

  if (!newsData || !newsData.blogs || newsData.blogs.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">No articles found.</div>
    );
  }

  // Sort blogs by uploaded_at date (newest first)
  const sortedBlogs = [...newsData.blogs].sort(
    (a, b) =>
      new Date(b.uploaded_at).getTime() - new Date(a.uploaded_at).getTime()
  );

  // Get the latest blog for the featured section
  const featuredBlog = sortedBlogs[0];

  // Get the remaining blogs for the recent articles section
  const recentBlogs = sortedBlogs.slice(1);

  return (
    <div className="container mx-auto px-12 py-8">
      {/* Featured Article */}
      {featuredBlog && (
        <div className="mb-24 md:mb-16">
          <div className="flex flex-col  md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[380px] rounded-lg overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${featuredBlog.image}`}
                alt={featuredBlog.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col items-start py-4 justify-between w-full md:w-1/2 space-y-4  h-96">
              <div className=" gap-2 text-sm text-gray-400 py-1.5 rounded-full bg-[#E2ECFF] w-36">
                <span className="bg-blue-600 text-white  px-2 py-1 m-1 rounded-full ">
                  Latest
                </span>
                {calculateReadTime(featuredBlog.content)} min read
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {featuredBlog.title}
              </h2>
              <p className="text-gray-700">
                {parseBodyContentToText(featuredBlog.content, 250)}
              </p>
              <Link
                href={`/news/${featuredBlog.id}`}
                className="group text-right inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Read More{' '}
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Recent Articles */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold mb-6 text-blue-700 ">
          {' '}
          Recent News{' '}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentBlogs.map((blog, index) => (
            <BlogCard
              key={blog.id || index}
              date={formatDate(blog.uploaded_at)}
              title={blog.title}
              description={parseBodyContentToText(blog.content)}
              imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}/${blog.image}`}
              id={blog.id}
            />
          ))}
        </div>
      </div>

      {/* Load More Button */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
}
