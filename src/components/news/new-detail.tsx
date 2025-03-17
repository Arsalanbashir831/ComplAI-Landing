'use client';

import DOMPurify from 'dompurify'; // For sanitizing HTML content
import { Dot, Facebook, Linkedin, X as Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // For parsing raw HTML in markdown
import TurndownService from 'turndown';

interface NewsDetailProps {
  title: string;
  date: string;
  readingTime: string;
  coverImageUrl: string;
  content: string; // Raw HTML content
}

export default function NewsDetail({
  title,
  date,
  readingTime,
  coverImageUrl,
  content,
}: NewsDetailProps) {
  const [markdownContent, setMarkdownContent] = useState<string>('');

  // Convert HTML to markdown using Turndown
  useEffect(() => {
    const turndownService = new TurndownService();
    const sanitizedContent = DOMPurify.sanitize(content); // Sanitize HTML before converting
    const markdown = turndownService.turndown(sanitizedContent); // Convert sanitized HTML to markdown
    setMarkdownContent(markdown); // Update state with markdown content
  }, [content]);

  // Get current URL for sharing
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Social media share links
  const shareLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`,
  };

  // Custom renderers for markdown elements
  const renderers = {
    // Headings
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

    // Paragraph
    p: ({ children }: React.PropsWithChildren<unknown>) => (
      <p className="text-gray-800 leading-relaxed my-3">{children}</p>
    ),

    // Lists
    ul: ({ children }: React.PropsWithChildren<unknown>) => (
      <ul className="list-disc pl-6 my-2">{children}</ul>
    ),
    ol: ({ children }: React.PropsWithChildren<unknown>) => (
      <ol className="list-decimal pl-6 my-2">{children}</ol>
    ),
    li: ({ children }: React.PropsWithChildren<unknown>) => (
      <li className="text-gray-800">{children}</li>
    ),

    // Links
    a: ({ href = '', children }: React.PropsWithChildren<{ href?: string }>) => (
      <a href={href} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),

    // Images
    img: ({ src, alt }: { src?: string; alt?: string }) => (
      <Image src={src || ''} alt={alt || 'image'} width={800} height={600} className="max-w-full h-auto rounded-lg my-4" unoptimized />
    ),

    // Blockquote
    blockquote: ({ children }: React.PropsWithChildren<unknown>) => (
      <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-700 my-4">
        {children}
      </blockquote>
    ),

    // Code block (inline)
    code: ({ children }: React.PropsWithChildren<unknown>) => (
      <code className="bg-gray-200 px-1 py-0.5 rounded text-sm">{children}</code>
    ),

    // Preformatted Code Block
    pre: ({ children }: React.PropsWithChildren<unknown>) => (
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">{children}</pre>
    ),

    // Strong (Bold Text)
    strong: ({ children }: React.PropsWithChildren<unknown>) => (
      <strong className="font-bold text-[#232536]">{children}</strong>
    ),

    // Emphasized (Italic Text)
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

      <h1 className="text-4xl font-bold mb-2 text-[#232536] max-w-[1100px] leading-tight">{title}</h1>

      <div className="flex items-start justify-between gap-3 text-gray-600 text-sm">
        {/* Share Buttons */}
        <div className="flex flex-col items-start gap-2 text-sm text-gray-dark">
          <p className="text-[#6D6E76] text-xl">Share this news</p>
          <div className="flex space-x-4 text-[#292929]">
            <Link
              href={shareLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#292929] rounded-full p-1.5"
            >
              <Linkedin className="w-4 h-4 hover:opacity-80" />
            </Link>
            <Link
              href={shareLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#292929] rounded-full p-1.5"
            >
              <Facebook className="w-4 h-4 hover:opacity-80" />
            </Link>
            <Link
              href={shareLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#292929] rounded-full p-1.5"
            >
              <Twitter className="w-4 h-4 text-black hover:opacity-80" />
            </Link>
          </div>
        </div>
      </div>

      {/* News Image */}
      <div className="w-full my-6">
        <Image
          src={coverImageUrl}
          alt={title}
          width={1280} // Full width (adjust as needed)
          height={600} // Manually setting a fixed height to reduce image height
          className="rounded-lg w-full h-[600px] object-cover" // Fixed height with object-cover to maintain aspect ratio
        />
      </div>


      {/* Render Markdown Content with custom renderers */}
      <div className="space-y-6 text-gray-800">
        <ReactMarkdown components={renderers} rehypePlugins={[rehypeRaw]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
}
