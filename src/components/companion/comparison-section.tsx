'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export function ComparisonSection() {
  return (
    <section className="w-full py-16">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            From <span className="text-primary">Compliance</span> Query to
            Resolution
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: 'easeOut',
            }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            In Under <span className="text-primary">60 Seconds</span>
          </motion.h3>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: 'easeOut',
          }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto rounded-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {/* Before Companion Column */}
            <div className="py-7 px-7 md:px-14 rounded-l-lg border-[3px] border-[#E9E8E8]">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                className="text-4xl font-bold text-[#4C4C4C] mb-8"
              >
                Before Companion
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                className="space-y-10"
              >
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <X className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-[#4C4C4C] mb-2">
                      1-3 Hours
                    </h4>
                    <p className="text-[#4C4C4C] text-lg">
                      <span className="text-red-400">Spent searching</span>{' '}
                      through the SRA Handbook, LAA contract, Warning Notices,
                      and outdated templates
                    </p>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.8,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="mr-4 mt-1">
                    <X className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-[#4C4C4C] mb-2">
                      +5 Days
                    </h4>
                    <p className="text-[#4C4C4C] text-lg">
                      Waiting for{' '}
                      <span className="text-red-400">
                        replies from helplines
                      </span>{' '}
                      or external advisers
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.4,
                    duration: 0.8,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="mr-4 mt-1">
                    <X className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold text-[#4C4C4C] mb-2">
                      Unclear next steps
                    </h4>
                    <p className="text-[#4C4C4C] text-lg">
                      <span className="text-red-400">Struggling</span> to apply
                      the <span className="text-red-400">rules</span>{' '}
                      confidently to real-world situations
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* With Companion Column */}
            <div className="py-7 px-7 md:px-14 bg-blue-600 text-[#EFEFEF]">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
                className="text-4xl font-bold mb-8"
              >
                With Companion
              </motion.h3>

              <div className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1,
                    duration: 0.8,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="mr-4 mt-1">
                    <Check className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-2">
                      Under 60 seconds
                    </h4>
                    <p className="text-lg">
                      Type your compliance question and get a clear, accurate
                      answer.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.2,
                    duration: 0.8,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="mr-4 mt-1">
                    <Check className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-2">
                      Guided next Steps
                    </h4>
                    <p className="text-lg">
                      Follow on with compliant actions — draft replies, update
                      documents, escalate when required.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1.4,
                    duration: 0.8,
                    ease: 'easeOut',
                  }}
                  viewport={{ once: true }}
                  className="flex"
                >
                  <div className="mr-4 mt-1">
                    <Check className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-2">
                      Resolve the Issue Fully
                    </h4>
                    <p className="text-lg">
                      Move from query to confident resolution — without delay,
                      doubt, or cost
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
