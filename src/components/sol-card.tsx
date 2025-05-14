import Image from 'next/image';
import Link from 'next/link';

import { Solution } from '@/types/solutions';

export default function SolCard({
  image,
  title,
  description,
  buttonLabel,
  buttonLink,
  comingSoon = false,
  imageAlign = 'center',
}: Solution) {
  const alignClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[imageAlign];

  return (
    <div className="bg-white rounded-xl border pb-5 w-full max-w-sm flex flex-col h-full shadow-[0px_0px_18px_4px_#0A58EB4D] transition-all transform hover:scale-105 hover:shadow-[0px_0px_15px_#0A58EB] hover:ring-2 hover:ring-blue-500">
      {/* Fixed height image container for equal spacing */}
      <div className={`flex ${alignClass} h-[180px] items-center`}>
        {typeof image === 'string' ? (
          <Image
            src={image}
            alt={title}
            width={400}
            height={200}
            className="object-contain max-h-[200px]"
          />
        ) : (
          image
        )}
      </div>

      {/* Title + Coming Soon */}
      <div className="flex items-center px-7 gap-3 mt-6 mb-2">
        <h3 className="text-xl font-semibold text-[#0A2758]">{title}</h3>
        {comingSoon && (
          <span className="text-white text-xs  px-4 py-1 rounded-full bg-gradient-to-r from-[#0058FF] to-[#21C8F6] shadow-md">
            Coming Soon
          </span>
        )}
      </div>

      {/* Description should stretch to fill available space */}
      <p className="text-gray-600 px-7 text-left text-md flex-1">
        {description}
      </p>

      {buttonLabel && buttonLink && (
        <Link
          href={buttonLink}
          className="text-blue-600 px-5 text-sm font-medium text-right hover:underline mt-2"
        >
          {buttonLabel}
        </Link>
      )}
    </div>
  );
}
