'use client';

import Image from 'next/image';
import Link from 'next/link';
import { solutions } from '@/data/solutions';
import { motion, Variants } from 'framer-motion';

import SolCard from './sol-card';

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 60,
      damping: 16,
      mass: 0.5,
    },
  },
};

interface SolutionsSectionProps {
  ctaButton?: React.ReactNode;
  backgroundImage?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
  };
  title?: string;
  description?: string;
  className?: string;
}

export default function SolutionsSection({
  ctaButton,
  backgroundImage,
  title = 'Our Solutions',
  description = 'Discover the innovative features that streamline compliance, enhance productivity, and provide peace of mind. Tailored for legal professionals, by legal professionals.',
  className = '',
}: SolutionsSectionProps) {
  return (
    <section
      className={`text-center px-4 pt-10 pb-24 md:pb-32 md:px-6 relative ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1], // smooth ease-in-out
          }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-2"
        >
          {title.includes('<span') ? (
            <span dangerouslySetInnerHTML={{ __html: title }} />
          ) : (
            <>
              {title.split(' ').map((word, i) =>
                word === 'Solutions' ? (
                  <span key={i} className="text-primary">
                    {word}{' '}
                  </span>
                ) : (
                  word + ' '
                )
              )}
            </>
          )}
        </motion.h2>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto mb-10"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-y-[3.25rem] gap-x-9 sm:grid-cols-2 lg:grid-cols-3 items-stretch"
        >
          {solutions.map((card, idx) => {
            const isCompanion = card.title === 'Companion';
            const cardContent = (
              <motion.div variants={itemVariants} className="h-full">
                <SolCard {...card} />
              </motion.div>
            );
            return isCompanion ? (
              <Link
                key={idx}
                href={card.buttonLink ?? '#'}
                className="flex flex-col"
              >
                {cardContent}
              </Link>
            ) : (
              <div key={idx} className="flex flex-col cursor-default">
                {cardContent}
              </div>
            );
          })}
        </motion.div>
        {ctaButton && (
          <div className="flex flex-col items-center justify-center mt-10">
            {ctaButton}
          </div>
        )}
      </div>
      {backgroundImage && (
        <div className="absolute bottom-0 flex items-center justify-center w-full z-0">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            width={backgroundImage.width || 800}
            height={backgroundImage.height || 800}
            className={backgroundImage.className || 'h-full object-cover'}
          />
        </div>
      )}
    </section>
  );
}
