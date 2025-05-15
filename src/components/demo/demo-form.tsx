'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function DemoForm() {
  return (
    <div className="grid md:grid-cols-2  px-4 md:px-12">
      <div className="w-full flex justify-center  ">
        <div className="w-full max-w-6xl px-4 flex flex-col">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-5xl md:text-[68px] font-bold leading-tight mb-4 text-black"
          >
            Let’s Walk You <br className="hidden sm:block" />
            Through Smarter Compliance.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-xl mb-4"
          >
            All your compliance tools. One powerful AI platform.
          </motion.p>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative md:-ml-4 w-full aspect-[1.2] hidden md:block"
          >
            <Image
              src="/images/demohead.svg"
              alt="Demo Illustration"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="w-full md:w-4/5 md:ml-auto space-y-4 pt-8 md:flex-1 order-1 md:order-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="w-fit px-6 py-2 text-center text-sm rounded-full mb-4 mx-auto bg-primary text-white"
        >
          For Enterprise Enquiries Only
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="flex flex-col space-y-4"
        >
          <Input placeholder="Your full name" className="py-6" />
          <Input type="email" placeholder="Your email" className="py-6" />
          <Input placeholder="Company name" className="py-6" />
          <Input placeholder="Your role" className="py-6" />
          <Input placeholder="+44" className="py-6" />
          <Textarea placeholder="Write a message" className="h-[200px] py-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <Button className="w-full transition-all duration-300 ease-in-out hover:scale-105">
            Submit Enquiry
          </Button>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative w-full aspect-[1.2] md:hidden"
        >
          <Image
            src="/images/demohead.svg"
            alt="Demo Illustration"
            fill
            priority
            className="object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
}
