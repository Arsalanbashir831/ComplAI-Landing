'use client';

import { motion } from 'framer-motion';

import { StepCard } from './step-card';

const steps = [
  {
    stepNumber: 1,
    title: 'Ask Your Question',
    descriptions: [
      'Simply type your compliance-related question into the Companion AI tool.',
      'You can use plain language to describe your query or concern.',
    ],
    image: '/images/solutions/companion/work-1.png',
  },
  {
    stepNumber: 2,
    title: 'Companion Analyses Your Query',
    descriptions: [
      'Companion processes your question by understanding the context and identifying the key compliance issue, drawing on its comprehensive knowledge of laws and industry standards.',
    ],
    image: '/images/solutions/companion/work-2.png',
  },
  {
    stepNumber: 3,
    title: 'Get a Clear and Reliable Response',
    descriptions: [
      'Companion provides a well-structured answer, offering practical guidance while ensuring compliance with relevant regulations.',
    ],
    image: '/images/solutions/companion/work-3.png',
  },
];

export function HowItWorks() {
  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            How Companion Works
          </motion.h2>
          <motion.p
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-2xl text-gray-700"
          >
            Interpret, Check, Support for fast, accurate answers.
          </motion.p>
        </div>

        <div className="max-w-[1200px] mx-auto border border-[#86C0FF] rounded-lg p-6 md:py-8 md:px-16 space-y-16">
          {steps.map((step, index) => (
            <StepCard
              key={step.stepNumber}
              {...step}
              reverse={index % 2 === 1} // alternate layout for every other step
            />
          ))}
        </div>
      </div>
    </section>
  );
}
