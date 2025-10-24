import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface NewsCardProps {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

export function BlogCard({
  slug,
  title,
  description,
  imageUrl,
  date,
}: NewsCardProps) {
  return (
    <Link
      href={`/news/${slug}`}
      className="group flex flex-col overflow-hidden rounded-lg bg-white border transition-all duration-300 transform hover:scale-105 hover:shadow-[0px_0px_15px_#0A58EB] hover:ring-2 hover:ring-blue-500"
    >
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          fill
          priority
          className="object-cover transition-transform duration-300 scale-x-125"
          unoptimized
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300" />
      </div>

      <div className="flex flex-col flex-grow px-4 pt-3 pb-4">
        <div className="text-sm text-gray-500 mb-1">{date}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[4rem]">
          {title}
        </h3>
        <div className="text-gray-600 mb-4 line-clamp-3 min-h-[4.5rem] prose prose-sm max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              p: ({ children }) => (
                <p className="text-gray-600 mb-2">{children}</p>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),
              em: ({ children }) => <em className="italic">{children}</em>,
              ul: ({ children }) => (
                <ul className="list-disc pl-4 text-sm">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal pl-4 text-sm">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="text-gray-600">{children}</li>
              ),
            }}
          >
            {description}
          </ReactMarkdown>
        </div>
      </div>
    </Link>
  );
}
