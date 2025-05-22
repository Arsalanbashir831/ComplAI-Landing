'use client';

import { motion } from 'framer-motion';

import SalesForm from './sales-form';

export default function ContactHeroSection() {
  return (
    <>
      <div className="absolute left-0 top-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] bg-[url('/images/bg/ellipse2.svg')] bg-contain bg-left bg-no-repeat" />
      <section className="relative pt-16 md:py-16">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] md:h-[600px] md:w-[600px] bg-[url('/images/bg/ellipse.svg')] bg-contain bg-right bg-no-repeat" />

        <div className="container mx-auto relative z-10">
          <div className="space-y-12 md:space-y-16">
            <div className="text-center space-y-2">
              {/* Animated heading */}
              <motion.h1
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl md:text-5xl font-bold"
              >
                <span className="text-primary">Get in Touch</span> with Us
                Today!
              </motion.h1>

              {/* Animated paragraph */}
              <motion.p
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
                className="font-normal  md:text-md   max-w-xs md:max-w-2xl mx-auto"
              >
                Whether It&rsquo;s Sales, Support, or Just a Question, Our Team
                Is Happy to Help
              </motion.p>
            </div>

            <SalesForm />
          </div>
        </div>
      </section>
    </>
  );
}
