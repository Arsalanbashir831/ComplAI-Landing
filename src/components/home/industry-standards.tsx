'use client';

import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';

import LogoSlider from '../logo-slider';

export default function IndustryStandards() {
  const logos = [
    { name: 'Solicitors Regulation Authority', url: './images/logos/sra_logo.svg' },
    { name: 'Legal Aid Agency', url: './images/logos/laa_logo.svg' },
    { name: 'Lexcel', url: './images/logos/lexcel_logo.svg' },
    { name: 'SQM', url: './images/logos/sqm_logo.svg' },
    { name: 'The Law Society', url: './images/logos/law_society_logo.svg' },
    { name: 'Gov.uk', url: './images/logos/gov_uk_logo.svg' },
    // ...repeat or dedupe as needed
  ];

  const containerRef = useRef(null);

  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <>
      <motion.h2
        ref={containerRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
        variants={revealVariants}
        className="text-3xl md:text-5xl font-bold text-center pt-4 mt-20"
      >
        Aligned with <span className="text-primary">Industry Standards</span>
      </motion.h2>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        variants={revealVariants}
        className="overflow-hidden w-full relative "
      >
        <LogoSlider
          title=""
          logos={logos}
          titleClassName="text-xl md:text-3xl px-4 pt-4 text-[#494C53]"
          containerClassName="before:bg-[linear-gradient(to_right,#e6eefc,rgba(255,255,255,0)_60%)] md:before:bg-[linear-gradient(to_right,#e6eefc,rgba(255,255,255,0)_100%)] after:bg-[linear-gradient(to_right,#e6eefc,rgba(255,255,255,0)_60%)] md:after:bg-[linear-gradient(to_right,#e6eefc,rgba(255,255,255,0)_100%)] px-0 md:px-8"
        />
      </motion.div>
    </>
  );
}
