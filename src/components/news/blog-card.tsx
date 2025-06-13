import Image from 'next/image';
import Link from 'next/link';

interface NewsCardProps {
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
}: NewsCardProps) {
  return (
    <Link
      href={`/news/${id}`}
      className="group inline-flex flex-col overflow-hidden rounded-lg bg-white duration-300 border shadow-[0px_0px_18px_4px_#0A58EB4D] transition-all transform hover:scale-105 hover:shadow-[0px_0px_15px_#0A58EB] hover:ring-2 hover:ring-blue-500"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-bg duration-300" />
      </div>

      <div className="px-4 pt-3 pb-4 flex flex-col flex-grow">
        <div className="text-sm text-gray-500 mb-1">{date}</div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2 min-h-[4rem]">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 min-h-[4.5rem]">
          {description}
        </p>
        {/* <div className="mt-auto">
          <span className="inline-flex items-center text-blue-600 font-medium">
            Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div> */}
      </div>
    </Link>
  );
}
