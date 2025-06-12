// NewsCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
    date: string;
    title: string;
    description: string;
    imageUrl: string;
    id: number;
}

export function NewsCard({
    date,
    title,
    description,
    imageUrl,
    id,
}: NewsCardProps) {
    return (
        <Link href={`/news/${id}`}>
            <div
                className={`
          group
          relative
          overflow-hidden
          rounded-2xl
          bg-white

          /* default subtle glow */
          
          shadow-[0_0_16px_rgba(96,174,255,0.5)]

       
          transition-all duration-300 
          hover:border-4 hover:border-blue-500 hover:ring-opacity-100
          hover:shadow-[0_0_24px_rgba(96,174,255,0.8)]
        `}
            >
                {/* image (top corners clipped automatically) */}
                <div className="relative h-48 md:h-64 w-full overflow-hidden">
                    <Image
                        src={imageUrl || '/placeholder.svg'}
                        alt={title}
                        fill
                        className="
              object-cover
              w-full h-full
              transition-transform duration-300
              group-hover:scale-105
            "
                    />
                </div>

                {/* dark overlay for text readability */}
                <div className="absolute inset-0 bg-gray-900/30 z-10" />

                {/* content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
                    <div className="flex items-center gap-2 text-sm mb-1">
                        <Calendar size={16} />
                        <time>{date}</time>
                    </div>
                    <h3 className="text-lg font-semibold mb-1 truncate">{title}</h3>
                    <p className="text-sm line-clamp-2">{description}</p>
                </div>
            </div>
        </Link>
    );
}
