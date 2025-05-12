import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';

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
          <Link href={`/news/${id}`}>
            <Button className="bg-white hover:bg-white hover:text-black-100 text-black-100 text-sm font-medium h-fit p-1 px-2">
              Read More <ChevronRight size={16} className="ml-1" />
            </Button>
          </Link>
        </div>
        <p className="text-sm line-clamp-2 mb-4">{description}</p>
      </div>
    </div>
  );
}
