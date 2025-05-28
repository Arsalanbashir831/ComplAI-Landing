'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// Parent container for fluid, staggered reveal
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
      y: { type: 'spring', stiffness: 50, damping: 14, mass: 0.7 },
      opacity: { duration: 0.5, ease: 'easeInOut' },
    },
  },
};

export default function DemoForm() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-5 px-4 md:px-[8rem] gap-8"
    >
      {/* Left: Heading & Illustration */}
      <motion.div variants={itemVariants} className="col-span-1 md:col-span-3 flex justify-center order-1">
        <div className="w-full max-w-6xl px-4 flex flex-col items-center md:items-start">
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black text-center md:text-left">
            Let’s Walk You <br className="hidden sm:block" /> Through{' '}
            <span className="text-primary">Smarter Compliance.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl mb-4 text-center md:text-left">
            All your compliance tools. One powerful AI platform.
          </motion.p>

          <motion.div variants={itemVariants} className="relative w-full aspect-[1.3] hidden md:block mt-6">
            <Image
              src="/images/demohead.png"
              alt="Demo Illustration"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Right: Form + Label */}
      <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 w-full space-y-10 order-2">
        <motion.div variants={itemVariants} className="w-fit px-6 py-2 text-center text-sm rounded-full mx-auto md:mx-0 bg-primary text-white">
          For Enterprise Enquiries Only
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col space-y-4">
          <Input placeholder="Your full name" className="py-6" />
          <Input type="email" placeholder="Your email" className="py-6" />
          <Input placeholder="Company name" className="py-6" />
          <Input placeholder="Your role" className="py-6" />
          <Input placeholder="Your phone no." className="py-6" />
          <Textarea placeholder="Write a message" className="h-[200px] py-6" />
        </motion.div>

        <motion.div variants={itemVariants} className="w-full">
          <Button className="w-full transition-all duration-300 ease-in-out">Submit Enquiry</Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}