'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { CTAButton } from '@/components/cta-button';

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
      <div className="relative z-10 container rounded-lg px-8 py-10 md:py-28 md:px-12 lg:px-16 flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto">
        <div className="space-y-2">
          <motion.h3
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className={cn('font-semibold text-3xl lg:text-5xl', titleClassName)}
          >
            {cta.title.start}
            <span className="text-primary">{cta.title.highlight}</span>
            {cta.title.end}
          </motion.h3>
          <motion.p
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className={cn('max-w-3xl md:text-xl/relaxed', descriptionClassName)}
          >
            {cta.description}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <CTAButton
            href={cta.buttonHref}
            className="relative z-10 text-base font-medium py-6"
          >
            {cta.buttonText}
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
