'use client';

import { motion } from 'framer-motion';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import SalesForm from './sales-form';
import SupportForm from './support-form';

export default function ContactHeroSection() {
  return (
    <>
      <div className="absolute left-0 top-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] bg-[url('/images/bg/ellipse2.svg')] bg-contain bg-left bg-no-repeat" />
      <section className="relative py-16">
        <div className="absolute right-0 top-0 h-[400px] w-[400px] md:h-[600px] md:w-[600px] bg-[url('/images/bg/ellipse.svg')] bg-contain bg-right bg-no-repeat" />

        <div className="container mx-auto relative z-10">
          <div className="space-y-12">
            <div className="text-center space-y-2 mb-20">
              {/* Animated heading */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold"
              >
                Get in Touch with Us Today!
              </motion.h2>

              {/* Animated paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="font-normal sm:text-lg md:text-xl"
              >
                Whether It&rsquo;s Sales, Support, or Just a Question, Our Team
                Is Happy to Help
              </motion.p>
            </div>

            <Tabs defaultValue="support" className="w-full">
              <TabsList className="flex justify-center items-center mb-6 w-fit mx-auto">
                <TabsTrigger
                  value="sales"
                  className="data-[state=active]:bg-[#1B1819] data-[state=active]:text-white py-2 rounded-lg bg-gray-light"
                >
                  Contact Sales
                </TabsTrigger>
                <TabsTrigger
                  value="support"
                  className="data-[state=active]:bg-[#1B1819] data-[state=active]:text-white py-2 rounded-lg bg-gray-light"
                >
                  Compl-AI Support
                </TabsTrigger>
              </TabsList>

              <TabsContent value="sales">
                <SalesForm />
              </TabsContent>
              <TabsContent value="support">
                <SupportForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
