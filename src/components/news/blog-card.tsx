'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BlogCardProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
}

export function BlogCard({
    id,
    title,
    description,
    imageUrl,
    date,
}: BlogCardProps) {
    return (
        <div className="relative group h-full">
            {/* Blue blur glow behind */}
            <div
                className="
          absolute inset-0
          bg-blue-200/30
          blur-xl
          rounded-2xl
          transition-opacity duration-300
          hover:bg-blue-200/50
        "
            />

            {/* Card front */}
            <Link
                href={`/news/${id}`}
                className="
          relative
          flex flex-col h-full
          bg-white
          overflow-hidden
          rounded-2xl
          border border-blue-200
          shadow-[0_0_16px_rgba(96,174,255,0.3)]
          transition-all duration-300
          
        "
            >
                {/* Image (top corners rounded) */}
                <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-t-2xl">
                    <Image
                        src={imageUrl || '/placeholder.svg'}
                        alt={title}
                        fill
                        className="
              object-cover w-full h-full
              transition-transform duration-300
              group-hover:scale-105
            "
                    />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 mb-2">{date}</p>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                        {title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 mt-auto">
                        {description}
                    </p>
                </div>
            </Link>
        </div>
    );
}
