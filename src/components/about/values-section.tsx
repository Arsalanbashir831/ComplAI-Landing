'use client';

// Needed if using Next.js App Router
import Image from 'next/image';
import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ValueCardProps {
  title: string;
  description: string;
  icon?: string;
  className?: string;
  delay?: number;
}

function ValueCard({
  title,
  description,
  icon,
  className,
  delay = 0,
}: ValueCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.02 }}
      viewport={{ once: true, amount: 0.5 }}
      className={cn(
        'p-4 bg-[url(/images/bg/value-card-bg.svg)] bg-cover bg-center bg-no-repeat rounded-3xl',
        className
      )}
    >
      <div className="relative p-0.5 bg-gradient-to-l from-white to-[#0a59eb96] rounded-3xl h-full">
        <Card className="h-full overflow-hidden bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center rounded-3xl">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center gap-2">
              {icon && <Image src={icon} width={52} height={52} alt="" />}
              <h3 className="text-xl md:text-2xl font-semibold text-[#000]">
                {title}
              </h3>

              <p className="md:text-lg text-[#1D1E4A]">{description}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

export default function ValuesSection() {
  return (
    <section className="md:py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Animated heading container (similar to the Features example) */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-4xl md:text-5xl font-semibold mb-4"
          >
            Our Values
          </motion.h2>
        </div>

        {/* Bento Grid Container */}
        <div className="grid md:grid-cols-[1fr_1fr_1fr] gap-6">
          {/* First Row */}
          <ValueCard
            className="col-span-full md:col-span-2"
            title="Technology-Driven Leadership"
            description="We pioneer the use of cutting-edge technology to transform compliance in the legal industry, setting new standards for efficiency and innovation"
            icon="/images/icons/technology.svg"
            delay={1}
          />
          <ValueCard
            className="col-span-full md:col-span-1"
            title="Collaboration for Impact"
            description="We foster teamwork and partnership to create meaningful change for our users and the industry."
            icon="/images/icons/collaborate.svg"
            delay={2}
          />

          {/* Second Row */}
          <ValueCard
            className="col-span-full md:col-span-1"
            title="Integrity and Accountability"
            description="We are committed to acting with integrity, taking ownership of our work, and delivering dependable solutions."
            icon="/images/icons/integrity.svg"
            delay={3}
          />
          <ValueCard
            className="col-span-full md:col-span-2"
            title="Empowerment Through Simplicity"
            description="We enable legal teams to master compliance effortlessly, delivering tools that make the complex simple and accessible."
            icon="/images/icons/empowerment.svg"
            delay={4}
          />
        </div>
      </div>
    </section>
  );
}
