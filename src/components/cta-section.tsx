import Image from 'next/image';

import { CTAButton } from '@/components/cta-button';
import { cn } from '@/lib/utils';

export default function CTASection({
  cta,
  containerClassName,
  titleClassName,
  descriptionClassName,
  showBgImage = false,
  showRadialImage = true,
}: {
  cta: {
    title: { start: string; highlight: string; end?: string };
    description: string;
    buttonText: string;
    buttonHref: string;
  };
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  showBgImage?: boolean;
  showRadialImage?: boolean;
}) {
  return (
    <section className={cn('relative bg-blue-lightest', containerClassName)}>
      {showBgImage && (
        <div className="absolute right-0 inset-0 flex items-center justify-end">
          <Image
            src="/images/bg/home-cta-bg.svg"
            alt="background image"
            width={800}
            height={800}
            className="h-full object-cover"
          />
          {/* das */}
        </div>
      )}

      {showRadialImage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/images/bg/blur-cta-bg.svg"
            alt="background image"
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* content */}
      <div className="container rounded-lg px-8 py-28 md:px-12 lg:px-16 flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto">
        <div className="space-y-2">
          <h3
            className={cn(
              'text-2xl font-semibold md:text-3xl lg:text-7xl',
              titleClassName
            )}
          >
            {cta.title.start}
            <span className="text-primary">{cta.title.highlight}</span>
            {cta.title.end}
          </h3>
          <p
            className={cn('max-w-3xl md:text-xl/relaxed', descriptionClassName)}
          >
            {cta.description}
          </p>
        </div>
        <CTAButton
          href={cta.buttonHref}
          className="relative z-10 text-base font-medium py-6"
        >
          {cta.buttonText}
        </CTAButton>
      </div>
    </section>
  );
}
