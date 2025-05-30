'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Check, X } from 'lucide-react';

// Animation variants for staggered, springy entrance with fade
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.6, ease: 'easeInOut' },
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual item variants: slide up and fade
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: [40, -8, 0],
    transition: {
      y: { type: 'spring', stiffness: 45, damping: 14, mass: 0.7 },
      opacity: { duration: 0.4, ease: 'easeInOut' },
    },
  },
};

// Data shape for a comparison entry
export interface ComparisonItem {
  id: string;
  title: string;
  desc: React.ReactNode;
  positive: boolean; // true uses Check icon, false uses X icon
}

export interface ComparisonSectionProps {
  headingLines: Array<{ text: string; highlight?: boolean }>;
  beforeItems: ComparisonItem[];
  afterItems: ComparisonItem[];
}

export function ComparisonSection({
  headingLines,
  beforeItems,
  afterItems,
}: ComparisonSectionProps) {
  const iconSize = 24; // consistent icon size (px)

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full md:py-16 pt-16"
    >
      <div className="container px-4 mx-auto space-y-12">
        {/* Headings */}
        <motion.div variants={itemVariants} className="text-center">
          {headingLines?.map((line, idx) => {
            const HeadingTag = headingLines.length === 1 ? 'h2' : 'h3';
            return (
              <HeadingTag
                key={idx}
                className={`text-4xl md:text-5xl font-bold mb-2 ${
                  line.highlight ? 'text-primary' : ''
                }`}
              >
                {line.text}
              </HeadingTag>
            );
          })}
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          variants={itemVariants}
          className="max-w-6xl mx-auto rounded-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Before */}
            <motion.div
              variants={itemVariants}
              className="py-7 px-7 md:px-14 bg-white text-gray-800 border-4 border-gray-200 space-y-10"
            >
              <h3 className="text-3xl font-bold mb-6">Before Companion</h3>
              <div className="space-y-6">
                {beforeItems?.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    {item.positive ? (
                      <Check
                        size={iconSize}
                        className="flex-shrink-0 text-green-400 mr-4 mt-1"
                      />
                    ) : (
                      <X
                        size={iconSize}
                        className="flex-shrink-0 text-red-500 mr-4 mt-1"
                      />
                    )}
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* After */}
            <motion.div
              variants={itemVariants}
              className="py-7 px-7 md:px-14 bg-blue-600 text-white space-y-10"
            >
              <h3 className="text-3xl font-bold mb-6">With Companion</h3>
              <div className="space-y-6">
                {afterItems?.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    {item.positive ? (
                      <Check
                        size={iconSize}
                        className="flex-shrink-0 text-green-200 mr-4 mt-1"
                      />
                    ) : (
                      <X
                        size={iconSize}
                        className="flex-shrink-0 text-red-400 mr-4 mt-1"
                      />
                    )}
                    <div>
                      <h4 className="text-xl font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
