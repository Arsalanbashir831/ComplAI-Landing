'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { CTAButton } from '../cta-button';

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

export const Banner: FC<BannerProps> = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaHref,
  featuresTitle,
  features,
  className = '',
}) => (
  <motion.section
    initial={{ y: 50 }}
    whileInView={{ y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    viewport={{ once: true }}
    className={`container mx-auto flex justify-center py-12 md:py-24 px-4 md:px-0 ${className}`}
  >
    <Card className="bg-blue-lightest border-0 overflow-hidden w-full md:w-[90%] rounded-[40px]">
      <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-0 h-full">
        <div className="space-y-4 px-8 pt-8 md:py-20 md:px-16 md:basis-8/12">
          <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
          {subtitle && <h4 className="text-lg font-medium">{subtitle}</h4>}
          <p className="text-gray-dark max-w-xl md:text-lg font-normal">
            {description}
          </p>
          <CTAButton href={ctaHref} className="text-base font-medium py-5">
            {ctaText}
          </CTAButton>
        </div>
        <div className="bg-blue-600 p-8 md:p-4 text-white h-full w-full md:basis-3/12 flex flex-col justify-center md:items-center">
          <h4 className="text-xl md:text-2xl font-medium mb-4">
            {featuresTitle}
          </h4>
          <ul className="space-y-3 text-sm font-normal">
            {features.map((feature) => (
              <li key={feature} className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  </motion.section>
);
