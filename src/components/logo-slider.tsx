'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type Logo = {
  name: string;
  url: string;
};

type LogoSliderProps = {
  title: React.ReactNode;
  logos: Logo[];
  titleClassName?: string;
  showSidesFade?: boolean;
  containerClassName?: string;
};

export default function LogoSlider({
  title,
  logos,
  titleClassName,
  showSidesFade = true,
  containerClassName,
}: LogoSliderProps) {
  return (
    <div
      className={cn(
        'relative m-auto w-full overflow-hidden container px-8  ',
        showSidesFade &&
          "before:absolute before:left-0 before:top-0 before:z-[2] before:h-full  before:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_60%)] md:before:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full  after:-scale-x-100 after:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_60%)]  after:content-['']",
        containerClassName
      )}
    >
      {title && (
        <>
          <motion.h2
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className={cn('mb-6 text-center text-3xl pb-5', titleClassName)}
          >
            {title}
          </motion.h2>
        </>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative m-auto w-full overflow-hidden pb-10 pt-10"
      >
        <motion.div
          className="flex w-full"
          animate={{
            x: [0, -8000],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'loop',
              duration: 200,
              ease: 'linear',
            },
          }}
        >
          {/* First set of logos */}
          <div className="flex gap-4 md:gap-16 px-8 ">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-48 md:w-[180px] h-14  md:h-[80px]"
              >
                <Image
                  width={200}
                  height={100}
                  src={logo.url || '/placeholder.svg'}
                  alt={`${logo.name} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set of logos for seamless loop */}
          <div className="flex gap-4 md:gap-16 px-8">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex w-48 md:w-[200px] h-14 md:h-[100px] items-center justify-center"
              >
                <Image
                  width={200}
                  height={100}
                  src={logo.url || '/placeholder.svg'}
                  alt={`${logo.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4 md:gap-16 px-8">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex w-48 md:w-[200px] h-14 md:h-[100px] items-center justify-center"
              >
                <Image
                  width={200}
                  height={100}
                  src={logo.url || '/placeholder.svg'}
                  alt={`${logo.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4 md:gap-16 px-8">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex w-48 md:w-[200px] h-14 md:h-[100px] items-center justify-center"
              >
                <Image
                  width={200}
                  height={100}
                  src={logo.url || '/placeholder.svg'}
                  alt={`${logo.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex gap-4 md:gap-16 px-8">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex w-48 md:w-[200px] h-14 md:h-[100px] items-center justify-center"
              >
                <Image
                  width={200}
                  height={100}
                  src={logo.url || '/placeholder.svg'}
                  alt={`${logo.name} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
