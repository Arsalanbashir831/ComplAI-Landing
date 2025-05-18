'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface StepCardProps {
  stepNumber: number;
  title: string;
  descriptions: string[];
  image: string;
  reverse?: boolean;
}

export function StepCard({
  stepNumber,
  title,
  descriptions,
  image,
  reverse = false,
}: StepCardProps) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between ${reverse ? 'md:flex-row-reverse' : ''}`}
    >
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
        viewport={{ once: true }}
        className="flex"
      >
        <div className="mr-6 shrink-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white font-bold text-xl">
            {stepNumber}
          </div>
        </div>
        <div className="max-w-sm text-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
          {descriptions.map((text, idx) => (
            <p key={idx} className="mb-2 last:mb-0 text-lg md:text-xl">
              {text}
            </p>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
        viewport={{ once: true }}
      >
        <Image
          src={image}
          alt={`Step ${stepNumber} illustration`}
          width={400}
          height={400}
          className="w-full max-w-[500px] h-auto ml-auto"
        />
      </motion.div>
    </div>
  );
}
