'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { CTAButton } from '@/components/cta-button';

import IndustryStandards from './industry-standards';

const title = {
  start: 'AI-driven',
  middle: ' compliance for ',
  highlight: 'SRA',
  end: ' regulated law firms',
};
const subtitle = 'Your In-house compliance partner, powered by AI.';
const buttons = {
  primary: {
    text: 'Get Started',
    href: '/get-started',
  },
  secondary: {
    text: 'Learn More',
    href: '/learn-more',
  },
};

export function Hero() {
  const images = [
    '/images/hero1.svg',
    '/images/hero2.svg',
    '/images/hero3.svg',
  ];

  const displayDuration = 5; // Display each image for 5 seconds
  const fadeDuration = 1; // Fade transition duration of 1 second
  const totalInterval = displayDuration + 2 * fadeDuration; // Total cycle time per image
  //test
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, totalInterval * 1000); // Convert to milliseconds

    return () => clearInterval(interval);
  }, [images.length, totalInterval]);

  return (
    <section className="relative pt-[6rem] px-4 md:px-0 bg-[url(/images/bg/home-hero-bg.svg)] bg-no-repeat bg-center bg-cover space-y-10">
      <div className="mx-auto container max-w-5xl text-center">
        <h1 className="mb-6 font-bold tracking-tight text-3xl md:text-6xl leading-[1.5]  ">
          <span className="text-primary">{title.start}</span>
          {title.middle}
          <br className="hidden md:inline" />
          <span className="text-primary">{title.highlight}</span>
          {title.end}
        </h1>

        <p className="mb-4 text-md sm:text-xl">{subtitle}</p>
        <div className="flex justify-center gap-4">
          <CTAButton
            href={buttons.primary.href}
            className="text-base font-medium px-4 py-5"
          >
            {buttons.primary.text}
          </CTAButton>
          <CTAButton
            href={buttons.secondary.href}
            variant="outline"
            className="border-blue-light text-base font-medium px-4 py-5"
          >
            {buttons.secondary.text}
          </CTAButton>
        </div>
        <div className="relative mx-auto mt-8 w-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-primary/10 rounded-lg blur-3xl opacity-50" />
          <div className="relative w-full h-[300px] md:h-[500px] mx-auto bg-cover ml-[1rem] md:ml-[5rem]">
            <AnimatePresence mode="wait">
              {images.map((src, index) =>
                index === currentImageIndex ? (
                  <motion.div
                    key={src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: fadeDuration }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={src}
                      alt={`Hero image ${index + 1}`}
                      fill
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* <div className="mt-20"> */}
      <IndustryStandards />
      {/* </div> */}
    </section>
  );
}
