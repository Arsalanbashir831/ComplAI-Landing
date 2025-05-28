'use client';

import { motion, Variants } from 'framer-motion';
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
  // Parent to stagger children
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Fluid spring for each item
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 16,
        mass: 0.6,
      },
    },
  };

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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 container rounded-lg px-8 py-10 md:py-28 md:px-12 lg:px-16 flex flex-col items-center text-center space-y-6 max-w-5xl mx-auto"
      >
        <motion.h3
          variants={itemVariants}
          className={cn('font-semibold text-3xl lg:text-5xl', titleClassName)}
        >
          {cta.title.start}
          <span className="text-primary">{cta.title.highlight}</span>
          {cta.title.end}
        </motion.h3>

        <motion.p
          variants={itemVariants}
          className={cn('max-w-3xl md:text-xl/relaxed', descriptionClassName)}
        >
          {cta.description}
        </motion.p>

        <motion.div variants={itemVariants}>
          <CTAButton
            href={cta.buttonHref}
            className="relative z-10 text-base font-medium py-6"
          >
            {cta.buttonText}
          </CTAButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
