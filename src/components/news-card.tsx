import { Calendar } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface NewsCardProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export function NewsCard({
  date,
  title,
  description,
  imageUrl,
  slug,
}: NewsCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <div className="relative rounded-xl overflow-hidden h-64 md:h-96 group">
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Black Overlay (must go above image, below text) */}
        <div className="absolute h-64 md:h-96 w-full inset-0 bg-gray-950/50 z-10" />

        <div className="absolute bottom-0 p-4 w-full text-white z-10">
          <div className="flex items-center gap-2 text-sm mb-2">
            <Calendar size={16} />
            <time>{date}</time>
          </div>
          <div className="flex justify-between items-end">
            <h3 className="text-lg font-semibold mb-1 truncate">{title}</h3>
            {/* <Link href={`/news/${id}`}>
            <Button className="bg-white hover:bg-white hover:text-black-100 text-black-100 text-sm font-medium h-fit p-1 px-2 group inline-flex items-center">
              Read More
              <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon size={16} />
              </span>
            </Button>
          </Link> */}
          </div>
          <div className="text-sm line-clamp-2 mb-4 prose prose-sm max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                p: ({ children }) => (
                  <p className="text-sm text-white">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-white">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-white">{children}</em>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-4 text-sm text-white">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-4 text-sm text-white">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-white">{children}</li>
                ),
                a: ({ children }) => (
                  <span className="text-white">{children}</span>
                ),
              }}
            >
              {description}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </Link>
  );
}
