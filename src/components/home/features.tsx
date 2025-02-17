'use client';

import { motion } from 'framer-motion';
import { Command } from 'lucide-react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  titleIcon?: string;
  leftImage?: string;
  rightImage?: string;
  topImage?: string;
  bottomImage?: string;
  className?: string;
  bottomImageClassName?: string;
  delay?: number;
}

function FeatureCard({
  title,
  description,
  titleIcon,
  leftImage,
  rightImage,
  topImage,
  bottomImage,
  className,
  bottomImageClassName,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={'text-center ' + className}
      viewport={{ once: true }}
    >
      <Card className="h-full overflow-hidden bg-blue-50/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center">
        <CardContent className=" md:py-1 py-6 px-6 flex flex-col items-center justify-center">
          {topImage && (
            <div className="relative h-28 w-full mb-2">
              <Image src={topImage} layout="fill" objectFit="contain" alt="" />
            </div>
          )}
          <div className="flex items-center justify-center gap-4">
            {leftImage && (
              <div className="relative h-56 w-full p-8">
                <Image
                  src={leftImage}
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
            )}
            <div>
              <div className="flex items-center justify-center gap-4 mb-4">
                {titleIcon && (
                  <Image src={titleIcon} width={52} height={52} alt="" />
                )}
                <h3 className="text-xl font-semibold text-[#0A2758]">
                  {title}
                </h3>
              </div>
              <p className="text-base text-[#73726D]">{description}</p>
            </div>
            {rightImage && (
              <div className="relative h-40 w-full">
                <Image
                  src={rightImage}
                  layout="fill"
                  objectFit="contain"
                  alt=""
                />
              </div>
            )}
          </div>
          {bottomImage && (
            <div
              className={cn('relative h-40 w-full mt-6', bottomImageClassName)}
            >
              <Image
                src={bottomImage}
                layout="fill"
                objectFit="contain"
                alt=""
              />
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Features() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section && document.getElementById(section)) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [searchParams]);

  return (
    <Suspense>
      <section id="features" className="py-8 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center px-2 py-1.5 mb-4 text-sm font-medium rounded-lg bg-[#F1F2F6] space-x-1"
            >
              <div className="bg-[#D5EAFF] rounded-lg px-3 py-1 text-primary">
                <Command size={12} />
              </div>
              <span>Features</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-semibold mb-4"
            >
              The Features.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl max-w-3xl mx-auto"
            >
              Discover the innovative features that streamline compliance,
              enhance productivity, and provide peace of mind. Tailored for
              legal professionals, by legal professionals.
            </motion.p>
          </div>

          {/* Bento Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr_0.75fr_0.75fr_0.5fr_1fr] gap-6 md:gap-2 ">
            {/* First Row */}
            <FeatureCard
              className="col-span-full md:col-span-2"
              title="Smart Document Handling"
              description="Upload, review, and draft tailored responses to emails, letters, and more—effortlessly"
              delay={1}
            />
            <FeatureCard
              className="col-span-full md:col-span-2"
              title="AI-Powered File Reviews"
              description="Perform detailed file reviews in minutes and get a clear list of next steps."
              titleIcon="/images/features/2.svg"
              delay={2}
            />
            <FeatureCard
              className="col-span-full md:col-span-2 text-start"
              title="Custom Compliance Manual Upload"
              description="Add your compliance manual to align AI recommendations with your internal policies."
              rightImage="/images/features/3.svg"
              delay={3}
            />

            {/* Second Row */}
            <FeatureCard
              className="col-span-full md:col-span-1 md:row-span-2"
              title="Voice Assistance"
              description="Experience hands-free AI that delivers real-time, accurate compliance insights on demand."
              topImage="/images/features/4.svg"
              delay={4}
            />
            {/* test */}
            <FeatureCard
              className="col-span-full md:col-span-4 md:row-span-2"
              title="Interactive Query Assistance"
              description="Provides instant, accurate compliance answers, clarifying SRA Rules, AML, Legal Aid, Lexcel, SQM, and more."
              bottomImage="/images/features/5.svg"
              delay={5}
            />
            <FeatureCard
              className="col-span-full md:col-span-1 md:row-span-2"
              title="Instant Document Creation"
              description="Generate bespoke policies, reports, and procedures in seconds to ensure firm-wide compliance."
              topImage="/images/features/6.svg"
              delay={6}
            />

            {/* Third Row */}
            <FeatureCard
              className="col-span-full md:col-span-4"
              title="Automated Policy Review & Gap Analysis"
              description="Review policies, uncover compliance gaps, and receive actionable feedback to stay aligned."
              leftImage="/images/features/7.svg"
              delay={7}
            />
            <FeatureCard
              className="col-span-full md:col-span-2"
              title="Guided Compliance Steps"
              description="Simplify complex regulations with step-by-step actions and expert best practices."
              bottomImage="/images/features/8.svg"
              bottomImageClassName="h-28"
              delay={8}
            />
          </div>
        </div>
      </section>
    </Suspense>
  );
}
