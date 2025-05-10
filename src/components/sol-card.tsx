import Image from 'next/image';

export type CardProps = {
  image: string | React.ReactNode;
  title: string;
  description: string;
  buttonLabel?: string;
  buttonLink?: string;
  comingSoon?: boolean;
  imageAlign?: 'left' | 'center' | 'right';
};

export default function SolCard({
  image,
  title,
  description,
  buttonLabel,
  buttonLink,
  comingSoon = false,
  imageAlign = 'center',
}: CardProps) {
  const alignClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[imageAlign];

  return (
    <div className="bg-white rounded-xl border pb-5 w-full max-w-sm flex flex-col h-full shadow-[0px_0px_18.7px_4px_#0A58EB4D] transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[0px_0px_25px_#0A58EB] hover:ring-2 hover:ring-blue-500">
      {/* Fixed height image container for equal spacing */}
      <div className={`flex ${alignClass} h-[180px] items-center`}>
        {typeof image === 'string' ? (
          <Image
            src={image}
            alt={title}
            width={300}
            height={150}
            className="object-contain max-h-[150px]"
          />
        ) : (
          image
        )}
      </div>

      {/* Title + Coming Soon */}
      <div className="flex items-center px-5 gap-3 mt-4 mb-2">
        <h3 className="text-xl font-semibold text-[#0A2758]">{title}</h3>
        {comingSoon && (
          <span className="text-white text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-[#0058FF] to-[#21C8F6] shadow-md">
            Coming Soon
          </span>
        )}
      </div>

      {/* Description should stretch to fill available space */}
      <p className="text-gray-600 px-5 text-left text-md flex-1">
        {description}
      </p>

      {buttonLabel && buttonLink && (
        <a
          href={buttonLink}
          className="text-blue-600 px-5 text-sm font-medium text-right hover:underline mt-2"
        >
          {buttonLabel}
        </a>
      )}
    </div>
  );
}
