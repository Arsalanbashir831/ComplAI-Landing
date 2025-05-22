'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function DemoForm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 px-4 md:px-[8rem] gap-8">
      {/* Left: Heading & Desktop Illustration */}
      <div className="col-span-1 md:col-span-3 flex justify-center order-1 md:order-1">
        <div className="w-full max-w-6xl px-4 flex flex-col items-center md:items-start">
          {/* Heading */}
          <motion.h1
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black text-center md:text-left"
          >
            Let’s Walk You <br className="hidden sm:block" />
            Through <span className="text-primary">Smarter Compliance.</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-xl mb-4 text-center md:text-left"
          >
            All your compliance tools. One powerful AI platform.
          </motion.p>

          {/* Desktop Illustration */}
          <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative w-full aspect-[1.3] hidden md:block mt-6"
          >
            <Image
              src="/images/demohead.png"
              alt="Demo Illustration"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>

      {/* Right: Form + Mobile Illustration */}
      <div className="col-span-1 md:col-span-2 w-full space-y-10 order-2 md:order-2">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-fit px-6 py-2 text-center text-sm rounded-full mx-auto md:mx-0 bg-primary text-white"
        >
          For Enterprise Enquiries Only
        </motion.div>

        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col space-y-4"
        >
          <Input placeholder="Your full name" className="py-6" />
          <Input type="email" placeholder="Your email" className="py-6" />
          <Input placeholder="Company name" className="py-6" />
          <Input placeholder="Your role" className="py-6" />
          <Input placeholder="Your phone no." className="py-6" />
          <Textarea placeholder="Write a message" className="h-[200px] py-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Button className="w-full transition-all duration-300 ease-in-out">
            Submit Enquiry
          </Button>
        </motion.div>

        {/* Mobile Illustration: below form */}
        {/* <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full aspect-[1.2] md:hidden mt-6"
        >
          <Image
            src="/images/demohead.png"
            alt="Demo Illustration"
            fill
            priority
            className="object-contain"
          />
        </motion.div> */}
      </div>
    </div>
  );
}
