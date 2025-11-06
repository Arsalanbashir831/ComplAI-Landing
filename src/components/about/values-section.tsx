'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ValueCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
}

// Parent container variants for staggered, fluid animation
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
    y: 0,
    transition: {
      y: { type: 'spring', stiffness: 45, damping: 14, mass: 0.7 },
      opacity: { duration: 0.5, ease: 'easeInOut' },
    },
  },
};

function ValueCard({ title, description, icon, className }: ValueCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
      className={cn(' ', className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="relative p-1  rounded-3xl h-full "
      >
        <Card className="h-full overflow-hidden bg-white border-2 border-primary transition-all duration-300 flex flex-col items-center justify-center rounded-3xl">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            {icon && (
              <Image
                src={icon}
                width={52}
                height={52}
                alt={title}
                loading="lazy"
              />
            )}
            <h3 className="text-xl md:text-2xl font-semibold text-[#000] mt-4">
              {title}
            </h3>
            <p className="md:text-lg text-[#1D1E4A] mt-2 text-center">
              {description}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}

export default function ValuesSection() {
  return (
    <section className="pt-16 md:py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-semibold mb-4"
          >
            Our <span className="text-primary">Values</span>
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-[1fr_1fr_1fr] gap-6"
        >
          <ValueCard
            title="Technology-Driven Leadership"
            description="We pioneer the use of cutting-edge technology to transform compliance in the legal industry, setting new standards for efficiency and innovation."
            icon="/images/icons/technology.png"
            className="col-span-full md:col-span-2"
          />
          <ValueCard
            title="Collaboration for Impact"
            description="We foster teamwork and partnership to create meaningful change for our users and the industry."
            icon="/images/icons/collaborate.png"
          />
          <ValueCard
            title="Integrity and Accountability"
            description="We are committed to acting with integrity, taking ownership of our work, and delivering dependable solutions."
            icon="/images/icons/integrity.png"
          />
          <ValueCard
            title="Empowerment Through Simplicity"
            description="We enable legal teams to master compliance effortlessly, delivering tools that make the complex simple and accessible."
            icon="/images/icons/empowerment.png"
            className="col-span-full md:col-span-2"
          />
        </motion.div>
      </div>
    </section>
  );
}
