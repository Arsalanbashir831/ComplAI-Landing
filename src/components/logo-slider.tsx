'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

type Logo = {
  name: string;
  url: string;
};

type LogoSliderProps = {
  title: string;
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
        'relative m-auto w-full overflow-hidden container',
        showSidesFade &&
          "before:absolute before:left-0 before:top-0 before:z-[2] before:h-full  before:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_60%)] md:before:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full  after:-scale-x-100 after:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_60%)]  after:content-['']",
        containerClassName
      )}
    >
      <h2 className={cn('mb-6 text-center text-xl', titleClassName)}>
        {title}
      </h2>

      <div className="relative m-auto w-full overflow-hidden pb-10">
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
          <div className="flex gap-16 px-8">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-24 md:w-[200px] h-10 md:h-[100px]"
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
          <div className="flex gap-16 px-8">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex w-24 md:w-[200px] h-10 md:h-[100px] items-center justify-center"
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

          <div className="flex gap-16 px-8">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex w-24 md:w-[200px] h-10 md:h-[100px] items-center justify-center"
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

          <div className="flex gap-16 px-8">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex w-24 md:w-[200px] h-10 md:h-[100px] items-center justify-center"
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

          <div className="flex gap-16 px-8">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex w-24 md:w-[200px] h-10 md:h-[100px] items-center justify-center"
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
      </div>
    </div>
  );
}
