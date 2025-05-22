'use client';

import { motion } from 'framer-motion';

import { Feature } from '@/types/feature';

import { FeatureCard } from '../_common/features';

const features: Feature[] = [
  {
    title: 'Instant, Informed Answers',
    subtitle:
      'Companion understands your compliance questions and responds with clarity and precision:',
    items: [
      'Handles routine and complex compliance queries in seconds.',
      'Removes delays by replacing the need for external advice.',
      'Frees up staff by resolving common issues independently.',
      'Maintains high standards while reducing internal strain.',
    ],
  },
  {
    title: 'Speed and Efficiency',
    subtitle:
      'Companion understands your compliance questions and responds with clarity and precision:',
    items: [
      'Handles compliance queries in seconds, both routine and complex.',
      'Removes delays by reducing the need for external input.',
      'Frees up senior staff by resolving everyday issues.',
      'Streamlines work while maintaining high compliance standards.',
    ],
  },
  {
    title: 'Ideal for Busy Professionals',
    subtitle:
      "Compl-AI delivers accurate answers instantly — no waiting, no hourly fees. Whether you're handling day-to-day compliance queries or responding to high-stakes regulatory issues, it helps you resolve them faster, more efficiently, and without draining internal resources.",
    items: [
      'Focus on high‑impact tasks while Resolve handles the rest',
      'Easy setup with minimal training required',
      'Accessible via web, mobile, and email',
      'Flexible plans tailored to firm size',
    ],
  },
  {
    title: 'Legal Precision',
    subtitle:
      'Companion provides dependable answers rooted in legal and compliance expertise:',
    items: [
      'Validated by professionals for trusted accuracy.',
      'Built specifically for the demands of regulated legal work.',
      'Responds confidently to complex compliance scenarios.',
      'Promotes consistency and confidence across your team.',
    ],
  },
];

export default function WhyCompanionSection() {
  // split the array in half
  const mid = Math.ceil(features.length / 2);
  const leftFeatures = features.slice(0, mid);
  const rightFeatures = features.slice(mid);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Why Your Firm Needs Companion?
        </motion.h2>
        <motion.p
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl "
        >
          Focus on your real work — let Companion handle the complaints.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 flex flex-col justify-center md:flex-row gap-8">
        {/* Left column */}
        <div className="flex-1 space-y-8 max-w-md">
          {leftFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>

        {/* Right column */}
        <div className="flex-1 space-y-8 md:mt-12 max-w-md">
          {rightFeatures.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
