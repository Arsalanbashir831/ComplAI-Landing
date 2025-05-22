'use client';

import { motion } from 'framer-motion';

export default function TrustedSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 md:p-16">
      {/* Background Pattern */}
      <div className="absolute left-0 -top-2 h-[300px] w-[300px] bg-[url('/images/bg/quator-circle.svg')] bg-contain bg-right bg-no-repeat" />
      <div className="absolute right-0 -bottom-2 h-[300px] w-[300px] bg-[url('/images/bg/quator-circle.svg')] bg-contain bg-right bg-no-repeat rotate-180" />

      <div className="container relative mx-auto">
        <div className="mx-auto max-w-3xl space-y-8 text-center px-4 md:px-0">
          {/* Heading Animation */}
          <motion.h2
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Fair Compliance for Everyone
          </motion.h2>

          {/* Paragraphs Animation */}
          <div className="space-y-6 md:text-lg leading-relaxed text-white/90">
            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Compl-AI was founded by lawyers who know firsthand the frustration
              of overpriced, profit-driven legal software. We understand what it
              feels like to be taken advantage of by big software companies that
              charge high fees while offering little flexibility. That’s why
              we’re building something different.
            </motion.p>
            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              Our commitment is to make powerful, reliable compliance support
              accessible to everyone — not just large firms with big budgets.
              Supporting us means being part of a movement that prioritises
              fairness, practicality, and affordability. We believe that small
              firms and solo practitioners should not be priced out of the tools
              they need to stay compliant.
            </motion.p>
            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              By backing Compl-AI, you’re helping to put an end to the outdated
              model of exploiting the legal sector. Together, we’re proving that
              compliance can be effective, accessible, and fair.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
