'use client';

import { BlogListResponse, getAllBlogs } from '@/services/blog-api';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import readingTime from 'reading-time';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

import { formatDate } from '@/lib/date-utils';

import { Skeleton } from '../ui/skeleton';
import { BlogCard } from './blog-card';

type NewsData = BlogListResponse;

export default function NewsSection() {
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        setLoading(true);
        const data = await getAllBlogs();
        setNewsData(data);
      } catch (err) {
        console.error('Error fetching news data:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsData();
  }, []);

  // Loading skeleton
  if (loading) {
    return (
      <div className="container mx-auto px-12 py-8 space-y-16">
        <div className="flex flex-col md:flex-row gap-8">
          <Skeleton className="w-full md:w-1/2 h-[380px] rounded-lg" />
          <div className="flex-1 space-y-4 py-4">
            <Skeleton className="w-1/3" />
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-40" />
            <Skeleton className="w-32 h-10 rounded-md" />
          </div>
        </div>
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
        <div className="flex justify-center">
          <Skeleton className="w-32 h-10 rounded-md" />
        </div>
      </div>
    );
  }

  // No data
  if (!newsData || !newsData.results || newsData.results.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">No articles found.</div>
    );
  }

  // Sort by date desc
  const sorted = [...newsData.results].sort(
    (a, b) => b.createdAt - a.createdAt
  );
  const featured = sorted[0];
  const recent = sorted.slice(1);

  return (
    <div className="container mx-auto px-12 py-8">
      {/* Featured */}
      {featured && (
        <div className="mb-24 md:mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[380px] rounded-lg overflow-hidden">
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${featured.thumbnail}`}
                alt={featured.title}
                fill
                className="object-cover rounded-lg"
                unoptimized
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-between w-full md:w-1/2 space-y-4 h-96 py-4">
              <div className="flex items-center gap-2 text-sm text-gray-400 py-1.5 px-2 bg-[#E2ECFF] w-max rounded-full">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full">
                  Latest
                </span>
                <span>{`${Math.ceil(readingTime(featured.content).minutes)} min read`}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {featured.title}
              </h2>
              <div className="text-gray-700 prose prose-sm max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    p: ({ children }) => (
                      <p className="text-gray-700">{children}</p>
                    ),
                    strong: ({ children }) => (
                      <strong className="font-semibold">{children}</strong>
                    ),
                    em: ({ children }) => (
                      <em className="italic">{children}</em>
                    ),
                    ul: ({ children }) => (
                      <ul className="list-disc pl-4">{children}</ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="list-decimal pl-4">{children}</ol>
                    ),
                    li: ({ children }) => (
                      <li className="text-gray-700">{children}</li>
                    ),
                    a: ({ children }) => (
                      <span className="text-gray-700">{children}</span>
                    ),
                  }}
                >
                  {featured.content.slice(0, 200)}
                </ReactMarkdown>
              </div>
              <Link
                href={`/news/${featured.slug}`}
                className="group text-right inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-fit"
              >
                Read More{' '}
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Recent */}
      {recent.length > 1 && (
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-6 text-blue-700">Recent News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recent.map((blog) => (
              <BlogCard
                key={blog.slug}
                date={formatDate(blog.createdAt)}
                title={blog.title}
                description={blog.content.slice(0, 200)}
                imageUrl={`${process.env.NEXT_PUBLIC_BACKEND_URL}${blog.thumbnail}`}
                slug={blog.slug}
              />
            ))}
          </div>
        </div>
      )}

      {/* Load More */}
      <div className="flex justify-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors">
          Load More
        </button>
      </div>
    </div>
  );
}
