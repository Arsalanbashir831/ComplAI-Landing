'use client';

import { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { Check } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';
import { CTAButton } from '@/components/cta-button';

interface BannerProps {
  title: string;
  subtitle?: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  featuresTitle: string;
  features: string[];
  className?: string;
}

// Parent container controls a one-time 'visible' animation with tighter wave
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

// Fluid, springy entrance with gentle overshoot keyframes
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: [40, -10, 0],
    transition: {
      y: {
        type: 'spring',
        stiffness: 30,
        damping: 12,
        mass: 0.8,
      },
      opacity: { duration: 0.5, ease: 'easeInOut' },
    },
  },
};

export const Banner: FC<BannerProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  featuresTitle,
  features,
  className = '',
}) => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`container mx-auto flex justify-center py-12 md:py-24 px-4 md:px-0 ${className}`}
    >
      <Card className="bg-blue-lightest border-0 overflow-hidden w-full md:w-[90%] rounded-[10px] md:rounded-[40px]">
        <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-0 h-full">
          <div className="space-y-4 px-8 pt-8 md:py-20 md:px-16 md:basis-8/12">
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-semibold"
            >
              {title}
            </motion.h3>

            {subtitle && (
              <motion.h4
                variants={itemVariants}
                className="text-lg font-medium"
              >
                {subtitle}
              </motion.h4>
            )}

            <motion.p
              variants={itemVariants}
              className="text-gray-dark max-w-xl md:text-lg font-normal"
            >
              {description}
            </motion.p>

            <motion.div variants={itemVariants}>
              <CTAButton href={ctaHref} className="text-base font-medium py-5">
                {ctaText}
              </CTAButton>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="bg-blue-600 p-8 md:p-4 text-white h-full w-full md:basis-3/12 flex flex-col justify-center md:items-center"
          >
            <h4 className="text-xl md:text-2xl font-medium mb-4">
              {featuresTitle}
            </h4>
            <ul className="space-y-3 text-sm font-normal">
              {features.map((feat) => (
                <li key={feat} className="flex items-center">
                  <Check className="mr-2 h-4 w-4" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  );
};
