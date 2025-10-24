'use client';

import { FormEvent, useState } from 'react';
import Image from 'next/image';
import { API_ROUTES } from '@/constants/routes';
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

export default function SalesForm() {
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
      const payload = {
        full_name: fullName,
        email,
        company_name: companyName,
        role,
        phone_no: phoneNo,
        message,
        form_type: 'general',
      };

      const resp = await fetch(API_ROUTES.SEND_EMAIL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (resp.ok) {
        // reset fields
        setFullName('');
        setEmail('');
        setCompanyName('');
        setRole('');
        setPhoneNo('');
        setMessage('');
        setShowSuccess(true);
      } else {
        const data = await resp.json();
        setError(data.error || 'Submission failed.');
      }
    } catch (err: unknown) {
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
        className="grid md:grid-cols-2 gap-8 px-4 md:px-0"
      >
        {/* Left Info Card */}
        <motion.div
          variants={itemVariants}
          className="overflow-hidden grid grid-cols-1 gap-8 order-2 items-center justify-items-center text-left md:order-1"
        >
          <Image
            src="/images/demohead.png"
            alt="Demo Illustration"
            width={600}
            height={400}
            className="object-contain hidden md:block"
          />
          {/* ...You can keep other informational content here...*/}
        </motion.div>

        {/* Form */}
        <motion.div
          variants={itemVariants}
          className="md:w-4/5 space-y-4 order-1 md:order-2"
        >
          {error && <p className="text-red-600 text-center">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
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
              onChange={(e) => setMessage(e.target.value)}
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
