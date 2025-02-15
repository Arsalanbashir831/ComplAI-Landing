'use client';

import { motion } from 'framer-motion';

export default function TrustedSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      {/* Background Pattern */}
      <div className="absolute left-0 -top-2 h-[300px] w-[300px] bg-[url('/images/bg/quator-circle.svg')] bg-contain bg-right bg-no-repeat" />
      <div className="absolute right-0 -bottom-2 h-[300px] w-[300px] bg-[url('/images/bg/quator-circle.svg')] bg-contain bg-right bg-no-repeat rotate-180" />

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-3xl space-y-8 text-center px-4 md:px-0">
          {/* Heading Animation */}
          <motion.h2
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Trusted by Legal Teams Everywhere
          </motion.h2>

          {/* Paragraphs Animation */}
          <motion.div
            className="space-y-6 md:text-lg leading-relaxed text-white/90"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <p>
              Our users are the compliance champions their teams trust to keep
              everything running smoothly. They&apos;re the ones who navigate
              complex regulations, interpret ever-changing legal standards, and
              ensure their organisations stay ahead of risk. They can&apos;t
              afford delays or guesswork—precision and speed are essential to
              their success.
            </p>
            <p>
              Compl-AI is built for these experts. We empower them with instant,
              accurate, regulation-specific insights, cutting out the
              time-consuming research and expensive consultants they&apos;ve had
              to rely on in the past. Our users move fast, make informed
              decisions, and lead with confidence, knowing that Compl-AI keeps
              them ahead of every compliance challenge.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
