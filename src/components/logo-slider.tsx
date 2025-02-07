'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
  {
    name: 'Amazon',
    url: './images/logos/sra_logo.svg',
  },
  {
    name: 'Oracle',
    url: './images/logos/laa_logo.svg',
  },
  {
    name: 'Accenture',
    url: './images/logos/lexcel_logo.svg',
  },
  {
    name: 'Nike',
    url: './images/logos/sqm_logo.svg',
  },
  {
    name: 'Infosys',
    url: './images/logos/law_society_logo.svg',
  },
  {
    name: 'Google',
    url: './images/logos/gov_uk_logo.svg',
  },
];

export default function LogoSlider() {
  return (
    <div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_60%)] md:before:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_60%)] md:after:bg-[linear-gradient(to_right,#f3f4f6fc,rgba(255,255,255,0)_100%)] after:content-['']">
      <div className="flex items-center justify-center">
        <h2 className="mb-6 text-center text-xl md:text-3xl px-4 text-[#808897]">
          Aligned with Industry Standards
        </h2>
      </div>

      <div className="relative m-auto w-full overflow-hidden py-10">
        <motion.div
          className="flex w-full"
          animate={{
            x: [0, -1035],
          }}
          transition={{
            x: {
              repeat: Number.POSITIVE_INFINITY,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {/* First set of logos */}
          <div className="flex gap-16 px-8">
            {logos.map((logo, idx) => (
              <div
                key={idx}
                className="flex w-24 md:w-[200px] items-center justify-center"
              >
                <Image
                  width={150}
                  height={150}
                  src={logo.url || '/placeholder.svg'}
                  alt={`${logo.name} logo`}
                  className="h-10 md:h-[100px] w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Duplicate set of logos for seamless loop */}
          <div className="flex gap-16 px-8">
            {logos.map((logo, idx) => (
              <div
                key={`duplicate-${idx}`}
                className="flex w-24 md:w-[200px] items-center justify-center"
              >
                <Image
                  width={150}
                  height={150}
                  src={logo.url || '/placeholder.svg'}
                  alt={`${logo.name} logo`}
                  className="h-10 md:h-[100px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
