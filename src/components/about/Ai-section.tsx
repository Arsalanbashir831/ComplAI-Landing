'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AiSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-screen-lg px-4 md:px-8 py-16 flex flex-col items-center space-y-8">
        {/* Heading Animation */}
        <motion.h2
          className="text-4xl md:text-6xl font-semibold"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          AI-Driven Compliance
        </motion.h2>

        {/* Paragraph Animation */}
        <motion.p
          className="md:text-lg text-justify md:text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Compl-AI is a specialised AI solution for SRA-regulated law firms,
          offering precise, regulation-aware responses through a custom hybrid
          architecture and proprietary data protocols. Developed and validated
          by leading solicitors, it ensures accuracy, reliability, and
          compliance with the highest legal standards. Hosted on secure,
          enterprise-grade infrastructure with full GDPR compliance, Compl-AI
          delivers real-time, low-latency insights to enhance efficiency, reduce
          risk, and elevate compliance practices beyond the capabilities of
          generic AI.
        </motion.p>

        {/* Image Animation */}
        <motion.div
          className="relative w-full h-[400px] mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/images/ai-model.svg"
            alt="AI-Driven Compliance"
            fill
            className="bg-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
