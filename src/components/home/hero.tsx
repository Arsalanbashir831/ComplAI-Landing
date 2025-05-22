'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { CTAButton } from '@/components/cta-button'; // Assuming this path is correct

const title = {
  start: 'AI-driven',
  middle: ' compliance for ',
  highlight: 'SRA',
  end: ' regulated law firms',
};
const subtitle =
  'Your in-house compliance partner, powered by Artificial Intelligence.';
const buttons = {
  primary: {
    text: 'Get Started',
    href: '/pricing',
  },
  secondary: {
    text: 'Learn More',
    href: '/learn-more',
  },
};

const images = [
  { src: '/images/homehero.png', alt: 'Hero Image 1' },
  { src: '/images/homehero2.png', alt: 'Hero Image 2' },
];

export function Hero() {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const imageHeightReservationClass = 'pb-[16rem] md:pb-[24rem]';

  return (
    <section
      className={`relative pt-36 md:pt-[8rem] ${imageHeightReservationClass} px-4 md:px-0 bg-[url(/images/bg/home-hero-bg.svg)] bg-no-repeat bg-center bg-cover min-h-[60vh] md:min-h-screen flex flex-col justify-center items-center overflow-hidden`}
    >
      <div className="mx-auto container max-w-5xl text-center z-10">
        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          className="mb-6 font-bold tracking-tight text-3xl md:text-6xl leading-[1.5]"
        >
          <span className="text-primary">{title.start}</span>
          {title.middle}
          <br className="hidden md:inline" />
          <span className="text-primary">{title.highlight}</span>
          {title.end}
        </motion.h1>

        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          className="mb-4 text-md sm:text-xl"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}  // ideal speed 
          className="flex justify-center gap-4 py-5 "
        >
          <CTAButton
            href={buttons.primary.href}
            className="group text-base font-medium px-4 py-5"
          >
            {buttons.primary.text}
            <ArrowRight className="ml-0.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </CTAButton>
        </motion.div>
      </div>

      {/* Image container - absolutely positioned at the bottom */}
      <AnimatePresence mode="wait">
        <motion.div
          key={visibleIndex}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          exit={{ y: 50 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          className="absolute bottom-0 md:-bottom-4 lg:bottom-0  -translate-x-1/2 max-w-[800px] w-full"
        >
          <Image
            src={images[visibleIndex].src}
            alt={images[visibleIndex].alt}
            width={800}
            height={800}
            priority
            className="block w-full h-auto"
          />
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
