import Image from 'next/image';
import Link from 'next/link';
import { Dot, Facebook, Linkedin, X as Twitter } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

interface NewsDetailProps {
  title: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: string;
  avatarUrl: string;
  coverImageUrl: string;
  content: string;
}

export default function NewsDetail({
  title,
  author,
  authorRole,
  date,
  readingTime,
  avatarUrl,
  coverImageUrl,
  content,
}: NewsDetailProps) {
  // Get current URL for sharing
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  // Social media share links
  const shareLinks = {
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(title)}`,
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

      <h1 className="text-6xl font-bold mb-2 text-[#232536] max-w-[1100px] leading-tight">
        {title}
      </h1>

      <div className="flex items-start justify-between gap-3 text-gray-600 text-sm">
        {/* Author Info */}
        <div className="flex items-center gap-3 text-sm text-gray-dark">
          <Avatar>
            <AvatarImage src={avatarUrl} />
            <AvatarFallback>{author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-primary text-2xl">{author}</p>
            <p className="text-[#6D6E76]">{authorRole}</p>
          </div>
        </div>

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

      {/* News Image - Fixed Elegant Display */}
      <div className="w-full my-6">
        <Image
          src={coverImageUrl}
          alt={title}
          width={1280} // High-quality resolution
          height={720} // 16:9 aspect ratio
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>

      {/* News Content */}
      <div className="space-y-6 text-gray-800">
        <p className="leading-relaxed">{content}</p>
      </div>
    </div>
  );
}
