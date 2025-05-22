'use client';

import { motion } from 'framer-motion';

export default function AboutHeroSection() {
  return (
    <>
      <div className="absolute  left-0 top-0 bottom-0 right-0 bg-gradient-to-b from-[#70a2ff36] to-[#43619900] " />
      <section className="relative overflow-hidden py-16 px-4 md:px-12">
        <div className="absolute right-0 top-10 h-[500px] w-[500px] bg-[url('/images/bg/about-hero-bg.svg')] bg-contain bg-right bg-no-repeat" />

        <div className="container relative mx-auto space-y-8">
          <div className="mx-auto space-y-8">
            <motion.h1
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold tracking-tight md:text-6xl max-w-4xl text-black-100"
            >
              Our mission is to harness AI to transform compliance in the legal
              industry.
            </motion.h1>
            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-lg md:text-xl max-w-xl"
            >
              The most advanced AI compliance solutions are now within reach,
              delivering powerful insights and practical solutions for every
              legal professional.
            </motion.p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col items-center md:flex-row gap-4 mb-4 md:mb-0">
              <div className="basis-6/12 space-y-4">
                <motion.p
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="font-medium text-gray-dark max-w-xl text-lg md:text-xl"
                >
                  For COLPs, COFAs, and compliance leads, especially in small
                  and medium sized firms, routine compliance work can quickly
                  become a drain on time and focus. Hours are lost trying to
                  interpret complex rules, respond to complaints, draft new
                  policies, and prepare for audits — time that could be better
                  spent on billable work or managing your team. When answers are
                  unclear, firms often rely on helplines or external advisers,
                  waiting days for guidance that may still lack certainty. It is
                  inefficient, frustrating, and unnecessarily costly.
                </motion.p>
              </div>
              <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="basis-6/12 border-l-4 border-primary h-fit pl-4 mt-2 md:mt-0"
              >
                <p className="font-semibold text-black-100 text-3xl md:text-4xl">
                  AI makes compliance faster, smarter, and more <br />{' '}
                  efficient.
                </p>
              </motion.div>
            </div>

            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="font-semibold text-black-100 text-xl md:text-2xl"
            >
              That&rsquo;s why we built Compl-AI
            </motion.p>
            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="font-medium text-gray-dark text-lg md:text-xl max-w-xl"
            >
              A suite of intelligent solutions designed to make compliance
              faster, clearer, and more manageable. No waiting for advice, no
              bloated consultancy costs, and no friction in day to day tasks.
              Just practical, reliable support across everything from answering
              regulatory questions to handling complaints, reviewing files, and
              drafting policies.
            </motion.p>
          </div>
        </div>
      </section>
    </>
  );
}
