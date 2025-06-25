'use client';

import { motion, Variants } from 'framer-motion';

import useMobile from '@/hooks/useMobile';

// Parent container for fluid staggered reveal
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Fluid springy keyframes for each item
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: [50, -10, 0],
    transition: {
      y: { type: 'spring', stiffness: 50, damping: 14, mass: 0.7 },
      opacity: { duration: 0.5, ease: 'easeInOut' },
    },
  },
};

export default function AboutHeroSection() {
  const isMobile = useMobile();
  return (
    <>
      <div className="absolute left-0 top-0 bottom-0 right-0 bg-gradient-to-b from-[#70a2ff36] to-[#43619900]" />
      <div className="absolute right-0 top-10 h-[500px] w-[550px] bg-[url('/images/bg/about-hero-bg.svg')] bg-contain bg-right bg-no-repeat" />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative overflow-hidden py-16 md:mx-auto  max-w-7xl"
      >
        {/* Background SVG */}

        <div className="container relative mx-auto space-y-8">
          {/* Heading & Subheading */}
          <motion.div variants={itemVariants} className="mx-auto space-y-8">
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold tracking-tight md:text-6xl max-w-4xl text-black-100"
            >
              Our mission is to harness AI to transform compliance in the legal
              industry.
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl max-w-xl"
            >
              The most advanced AI compliance solutions are now within reach,
              delivering powerful insights and practical solutions for every
              legal professional.
            </motion.p>
          </motion.div>

          {/* Content Blocks */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center md:flex-row gap-4 mb-4 md:mb-0"
            >
              <motion.div
                variants={itemVariants}
                className="basis-6/12 space-y-4"
              >
                <motion.p
                  variants={itemVariants}
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
              </motion.div>
              {!isMobile && (
                <>
                  <motion.div
                    variants={itemVariants}
                    className="basis-6/12 border-l-4 border-primary h-fit pl-4 mt-2 md:mt-0"
                  >
                    <motion.p
                      variants={itemVariants}
                      className="font-semibold text-black-100 text-3xl md:text-4xl"
                    >
                      AI makes compliance faster, smarter, and more efficient.
                    </motion.p>
                  </motion.div>
                </>
              )}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="font-semibold text-black-100 text-xl md:text-2xl"
            >
              That&rsquo;s why we built Compl-AI
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="font-medium text-gray-dark text-lg md:text-xl max-w-xl"
            >
              A suite of intelligent solutions designed to make compliance
              faster, clearer, and more manageable. No waiting for advice, no
              bloated consultancy costs, and no friction in day to day tasks.
              Just practical, reliable support across everything from answering
              regulatory questions to handling complaints, reviewing files, and
              drafting policies.
            </motion.p>
          </motion.div>
          {isMobile && (
            <>
              <motion.div
                variants={itemVariants}
                className="basis-6/12 border-l-4 border-primary h-fit pl-4 mt-2 md:mt-0"
              >
                <motion.p
                  variants={itemVariants}
                  className="font-semibold text-black-100 text-3xl md:text-4xl"
                >
                  AI makes compliance faster, smarter, and more efficient.
                </motion.p>
              </motion.div>
            </>
          )}
        </div>
      </motion.section>
    </>
  );
}
