'use client';

import React from 'react';
import Image from 'next/image';
import { Dot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface NewsDetailProps {
  title: string;
  date: string;
  readingTime: string;
  coverImageUrl: string;
  content: string; // Markdown content
}

export default function NewsDetail({
  title,
  date,
  readingTime,
  coverImageUrl,
  content,
}: NewsDetailProps) {
  // Custom renderers for markdown elements
  const renderers = {
    h1: ({ children }: React.PropsWithChildren<unknown>) => (
      <h1 className="text-4xl font-bold text-[#232536] my-6">{children}</h1>
    ),
    h2: ({ children }: React.PropsWithChildren<unknown>) => (
      <h2 className="text-3xl font-semibold text-[#232536] my-5">{children}</h2>
    ),
    h3: ({ children }: React.PropsWithChildren<unknown>) => (
      <h3 className="text-2xl font-semibold text-[#232536] my-4">{children}</h3>
    ),
    h4: ({ children }: React.PropsWithChildren<unknown>) => (
      <h4 className="text-xl font-medium text-[#232536] my-3">{children}</h4>
    ),
    h5: ({ children }: React.PropsWithChildren<unknown>) => (
      <h5 className="text-lg font-medium text-[#232536] my-2">{children}</h5>
    ),
    h6: ({ children }: React.PropsWithChildren<unknown>) => (
      <h6 className="text-base font-medium text-[#232536] my-1">{children}</h6>
    ),
    p: ({ children }: React.PropsWithChildren<unknown>) => (
      <p className="text-gray-800 leading-relaxed my-3">{children}</p>
    ),
    ul: ({ children }: React.PropsWithChildren<unknown>) => (
      <ul className="list-disc pl-6 my-2">{children}</ul>
    ),
    ol: ({ children }: React.PropsWithChildren<unknown>) => (
      <ol className="list-decimal pl-6 my-2">{children}</ol>
    ),
    li: ({ children }: React.PropsWithChildren<unknown>) => (
      <li className="text-gray-800">{children}</li>
    ),
    a: ({ href, children }: React.PropsWithChildren<{ href?: string }>) => (
      <a
        href={href}
        className="text-blue-600 hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    img: ({ src, alt }: { src?: string | Blob; alt?: string }) => (
      <Image
        src={typeof src === 'string' ? src : ''}
        alt={alt || 'image'}
        width={800}
        height={600}
        className="max-w-full h-auto rounded-lg my-4"
        unoptimized
      />
    ),
    blockquote: ({ children }: React.PropsWithChildren<unknown>) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 my-4">
        {children}
      </blockquote>
    ),
    code: ({ children }: React.PropsWithChildren<unknown>) => (
      <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">
        {children}
      </code>
    ),
    pre: ({ children }: React.PropsWithChildren<unknown>) => (
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        {children}
      </pre>
    ),
    strong: ({ children }: React.PropsWithChildren<unknown>) => (
      <strong className="font-bold text-[#232536]">{children}</strong>
    ),
    em: ({ children }: React.PropsWithChildren<unknown>) => (
      <em className="italic text-[#232536]">{children}</em>
    ),
  };

  return (
    <div className="container mx-auto p-6">
      {/* Title & Metadata */}
      <div className="flex items-center gap-4 text-sm">
        <p className="text-[#6D6E76]">Posted on {date}</p>
        <div className="flex items-center text-gray-dark">
          <Dot size={36} className="-mr-2" />
          <p>{readingTime} read</p>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-2 text-[#232536] max-w-[1100px] leading-tight">
        {title}
      </h1>

      {/* News Image */}
      <div className="w-full my-6">
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${coverImageUrl}`}
          alt={title}
          width={1280}
          height={600}
          className="rounded-lg w-full md:h-[600px] object-cover"
        />
      </div>

      {/* Render Markdown Content with custom renderers */}
      <div className="space-y-6 text-gray-800 prose max-w-none">
        <ReactMarkdown
          components={renderers}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
