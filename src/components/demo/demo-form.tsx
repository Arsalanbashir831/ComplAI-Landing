'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import SuccessSubmissionModal from '../modals/SuccessModal';

// Animation variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: [40, -10, 0],
    transition: {
      y: { type: 'spring', stiffness: 50, damping: 14, mass: 0.7 },
      opacity: { duration: 0.5, ease: 'easeInOut' },
    },
  },
};

export default function DemoForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setShowSuccess(false);
    setLoading(true);
    try {
      const body = {
        full_name: fullName,
        email,
        company_name: companyName,
        role,
        phone_no: phoneNo,
        message,
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/feedback/enterprise-enquiries/`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );
      if (response.ok) {
        // reset inputs
        setFullName('');
        setEmail('');
        setCompanyName('');
        setRole('');
        setPhoneNo('');
        setMessage('');
        // open success modal
        setShowSuccess(true);
      } else {
        const data = await response.json();
        setError(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-5 px-4 md:px-[8rem] gap-8"
      >
        {/* Left: Heading & Illustration */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-3 flex justify-center order-1"
        >
          <div className="w-full max-w-6xl px-4 flex flex-col items-center md:items-start">
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black text-center md:text-left"
            >
              Let’s Walk You <br className="hidden sm:block" /> Through{' '}
              <span className="text-primary">Smarter Compliance.</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl mb-4 text-center md:text-left"
            >
              All your compliance tools. One powerful AI platform.
            </motion.p>
            <motion.div
              variants={itemVariants}
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
        </motion.div>

        {/* Right: Form */}
        <motion.div
          variants={itemVariants}
          className="col-span-1 md:col-span-2 w-full order-2"
        >
          <motion.div
            variants={itemVariants}
            className="w-fit px-6 py-2 text-center text-sm rounded-full mx-auto md:mx-0 bg-primary text-white"
          >
            For Enterprise Enquiries Only
          </motion.div>

          {error && <p className="text-red-600 text-center mt-4">{error}</p>}

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 mt-4"
          >
            <Input
              placeholder="Your full name"
              className="py-6"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Your email"
              className="py-6"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="Company name"
              className="py-6"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
            <Input
              placeholder="Your role"
              className="py-6"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
            <Input
              placeholder="Your phone no."
              className="py-6"
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              required
            />
            <Textarea
              placeholder="Write a message"
              className="h-[200px] py-6"
              value={message}
              onChange={(e) => {
                console.log(
                  'Textarea onChange fired. New value:',
                  e.target.value
                );
                setMessage(e.target.value);
              }}
              required
            />
            <Button
              type="submit"
              className="w-full transition-all duration-300 ease-in-out p-6 text-base"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Enquiry'}
            </Button>
          </form>
        </motion.div>
      </motion.div>

      {/* Success Modal */}
      <SuccessSubmissionModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
}
