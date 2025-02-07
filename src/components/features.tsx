'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  titleIcon?: string;
  leftImage?: string;
  rightImage?: string;
  topImage?: string;
  bottomImage?: string;
  className?: string;
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
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className={'text-center ' + className}
    >
      <Card className="h-full overflow-hidden bg-blue-50/50 hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center">
        <CardContent className="p-6 flex flex-col items-center justify-center">
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
                <h3 className="text-2xl font-semibold text-[#0A2758]">
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
            <div className="relative h-28 w-full">
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
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-blue-100 text-blue-800"
          >
            Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-6xl font-semibold mb-4"
          >
            The Features.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xl max-w-3xl mx-auto"
          >
            Discover the innovative features that streamline compliance, enhance
            productivity, and provide peace of mind. Tailored for legal
            professionals, by legal professionals.
          </motion.p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_0.5fr_0.75fr_0.75fr_0.5fr_1fr] gap-6 ">
          {/* First Row */}
          <FeatureCard
            className="md:col-span-2"
            title="Smart Document Handling"
            description="Upload, review, and draft tailored responses to emails, letters, and more—effortlessly"
            delay={1}
          />
          <FeatureCard
            className="md:col-span-2"
            title="AI-Powered File Reviews"
            description="Perform detailed file reviews in minutes and get a clear list of next steps."
            titleIcon="/images/features/2.svg"
            delay={2}
          />
          <FeatureCard
            className="md:col-span-2 text-start"
            title="Custom Compliance Manual Upload"
            description="Add your compliance manual to align AI recommendations with your internal policies."
            rightImage="/images/features/3.svg"
            delay={3}
          />

          {/* Second Row */}
          <FeatureCard
            className="row-span-2"
            title="Voice Assistance"
            description="Experience hands-free AI that delivers real-time, accurate compliance insights on demand."
            topImage="/images/features/4.svg"
            delay={4}
          />
          <FeatureCard
            className="col-span-4 row-span-2"
            title="Interactive Query Assistance"
            description="Provides instant, accurate compliance answers, clarifying SRA Rules, AML, Legal Aid, Lexcel, SQM, and more."
            delay={5}
          />
          <FeatureCard
            className="row-span-2"
            title="Instant Document Creation"
            description="Generate bespoke policies, reports, and procedures in seconds to ensure firm-wide compliance."
            topImage="/images/features/6.svg"
            delay={6}
          />

          {/* Third Row */}
          <FeatureCard
            className="md:col-span-4"
            title="Automated Policy Review & Gap Analysis"
            description="Review policies, uncover compliance gaps, and receive actionable feedback to stay aligned."
            leftImage="/images/features/7.svg"
            delay={7}
          />
          <FeatureCard
            className="md:col-span-2"
            title="Guided Compliance Steps"
            description="Simplify complex regulations with step-by-step actions and expert best practices."
            delay={8}
          />
        </div>
      </div>
    </section>
  );
}
