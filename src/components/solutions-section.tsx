'use client';

import { solutions } from '@/data/solutions';
import { motion } from 'framer-motion';
import Link from 'next/link';

import SolCard from './sol-card';

export default function SolutionsSection() {
  return (
    <section className="text-center px-4 pt-10 pb-24 md:pb-32 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* when scroll into view */}
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-2"
        >
          Our <span className="text-primary">Solutions</span>
        </motion.h2>
        <motion.p
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-10"
        >
          Discover the innovative features that streamline compliance, enhance
          productivity, and provide peace of mind. Tailored for legal
          professionals, by legal professionals.
        </motion.p>

        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {solutions.map((card, idx) => (
            <Link
              key={idx}
              href={card.buttonLink ?? '#'}
              className="flex flex-col flex-1 h-full" // added h-full
            >
              <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{
                  delay: 0.4 + 0.2 * idx,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                className="h-full"
              >
                <SolCard {...card} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
