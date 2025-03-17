import { Calendar, ChevronRight, Dot } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface NewsCardProps {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
  id: number;
  readingTime?: string;
  avatar?: {
    name: string;
    image: string;
  };
}

export function NewsCard({
  date,
  title,
  description,
  imageUrl,
  id,
  readingTime,
  avatar,
}: NewsCardProps) {
  return (
    <Card className="overflow-hidden bg-[#EDF8FF] rounded-2xl border-none">
      <CardContent className="p-4 space-y-1">
        <div className="relative h-48 mb-4">
          <Image
            src={imageUrl || '/placeholder.svg'}
            alt={title}
            fill
            className="object-cover"
          />
        </div>

        {avatar || readingTime ? (
          <div className="flex items-center justify-between gap-2 text-sm text-gray-dark">
            {avatar && (
              <div className="flex items-center gap-2 text-sm text-gray-dark">
                <Avatar>
                  <AvatarImage src={avatar.image} />
                  <AvatarFallback>{avatar.name}</AvatarFallback>
                </Avatar>
                <span>{avatar.name}</span>
              </div>
            )}
            {readingTime && (
              <div className="flex items-center justify-self-end text-sm text-gray-dark">
                <Dot size={36} className="-mr-2" />
                <time className="text-sm">{readingTime}</time>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-2 text-sm text-gray-dark font-semibold">
            <Calendar size={16} className="font-semibold" />
            <time className="text-sm">{date}</time>
          </div>
        )}

        <h3 className="text-2xl font-semibold truncate w-[80%]">{title}</h3> {/* Truncated title */}
        <p className="line-clamp-2 text-gray-dark truncate w-[80%]">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {(avatar || readingTime) && (
          <div className="flex items-center gap-2 text-sm text-gray-dark">
            <Calendar size={16} />
            <time className="text-sm">{date}</time>
          </div>
        )}
        <Link href={`/news/${id}`} className="ml-auto">
          <Button
            variant="outline"
            className="hover:bg-blue-50 text-[#000] font-medium text-sm transition-all duration-300 ease-in-out hover:scale-105"
          >
            Read More <ChevronRight size={16} />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
