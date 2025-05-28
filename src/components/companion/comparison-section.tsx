'use client';

import { motion, Variants } from 'framer-motion';
import { Check, X } from 'lucide-react';

// Parent container for staggered fluid animation
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: [40, -8, 0],
    transition: {
      y: { type: 'spring', stiffness: 45, damping: 14, mass: 0.7 },
      opacity: { duration: 0.4, ease: 'easeInOut' },
    },
  },
};

export function ComparisonSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="w-full md:py-16 pt-16"
    >
      <div className="container px-4 mx-auto space-y-12">
        {/* Headings Group */}
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            From <span className="text-primary">Compliance</span> Query to Resolution
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            In Under <span className="text-primary">60 Seconds</span>
          </h3>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div variants={itemVariants} className="max-w-6xl mx-auto rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Before Companion */}
            <motion.div variants={itemVariants} className="py-7 px-7 md:px-14 rounded-l-lg border-4 border-[#E9E8E8] space-y-10">
              <h3 className="text-4xl font-bold text-[#4C4C4C] mb-6">Before Companion</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <X className="h-6 w-6 text-red-500 mr-4 mt-1" />,
                    title: '1-3 Hours',
                    desc: (<><span className="text-red-400">Spent searching</span> through the SRA Handbook, LAA contract, Warning Notices, and outdated templates</>),
                  },
                  {
                    icon: <X className="h-6 w-6 text-red-500 mr-4 mt-1" />,
                    title: '+5 Days',
                    desc: (<><span className="text-red-400">Waiting for replies</span> from helplines or external advisers</>),
                  },
                  {
                    icon: <X className="h-6 w-6 text-red-500 mr-4 mt-1" />,
                    title: 'Unclear next steps',
                    desc: (<><span className="text-red-400">Struggling</span> to apply the <span className="text-red-400">rules</span> confidently</>),
                  },
                ].map(({ icon, title, desc }, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start">
                    {icon}
                    <div>
                      <h4 className="text-3xl font-bold text-[#4C4C4C] mb-2">{title}</h4>
                      <p className="text-[#4C4C4C] text-lg">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* With Companion */}
            <motion.div variants={itemVariants} className="py-7 px-7 md:px-14 bg-blue-600 text-[#EFEFEF] space-y-10">
              <h3 className="text-4xl font-bold mb-6">With Companion</h3>

              <div className="space-y-6">
                {[
                  {
                    icon: <Check className="h-6 w-6 text-green-400 mr-4 mt-1" />,
                    title: 'Under 60 seconds',
                    desc: 'Type your compliance question and get a clear, accurate answer.',
                  },
                  {
                    icon: <Check className="h-6 w-6 text-green-400 mr-4 mt-1" />,
                    title: 'Guided next Steps',
                    desc: 'Follow on with compliant actions — draft replies, update documents, escalate when required.',
                  },
                  {
                    icon: <Check className="h-6 w-6 text-green-400 mr-4 mt-1" />,
                    title: 'Resolve the Issue Fully',
                    desc: 'Move from query to confident resolution — without delay, doubt, or cost.',
                  },
                ].map(({ icon, title, desc }, i) => (
                  <motion.div key={i} variants={itemVariants} className="flex items-start">
                    {icon}
                    <div>
                      <h4 className="text-3xl font-bold mb-2">{title}</h4>
                      <p className="text-lg">{desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
