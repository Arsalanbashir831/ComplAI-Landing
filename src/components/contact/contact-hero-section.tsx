'use client';

import { motion, Variants } from 'framer-motion';

import SalesForm from './sales-form';

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

// Fluid spring with gentle overshoot keyframes
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: [40, -10, 0],
    transition: {
      y: { type: 'spring', stiffness: 50, damping: 16, mass: 0.7 },
      opacity: { duration: 0.5, ease: 'easeInOut' },
    },
  },
};

export default function ContactHeroSection() {
  return (
    <>
      <div className="absolute left-0 top-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] bg-[url('/images/bg/ellipse2.svg')] bg-contain bg-left bg-no-repeat" />
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative pt-16 md:py-16"
      >
        <div className="absolute right-0 top-0 h-[400px] w-[400px] md:h-[600px] md:w-[600px] bg-[url('/images/bg/ellipse.svg')] bg-contain bg-right bg-no-repeat" />

        <motion.div
          variants={containerVariants}
          className="container mx-auto relative z-10 space-y-12 md:space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-5xl font-bold"
            >
              <span className="text-primary">Get in Touch</span> with Us Today!
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="font-normal md:text-md max-w-xs md:max-w-2xl mx-auto"
            >
              Whether It&rsquo;s Sales, Support, or Just a Question, Our Team Is
              Happy to Help
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SalesForm />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
