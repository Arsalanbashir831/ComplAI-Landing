'use client';

import { motion } from 'framer-motion';

import { PricingCards } from '@/components/pricing/new-pricing-cards';
import { PricingPlan } from '@/types/pricing';

const pricingPlans: PricingPlan[] = [
  {
    id: 'top-up',
    name: 'Top-Up & Go',
    price: '',
    description: '',
    buttonText: 'Start Free Trial',
    btn_redirection: `${process.env.NEXT_PUBLIC_APPLICATION_URL}`,
    badge: 'Starter',
    secondaryButtonText: 'Top-up Now',
    featuresHeader: 'Top-Up & Go Details:',
    comitmentText: 'No commitment.',
    features: [
      { text: 'Buy credits as needed, with a minimum top-up of £50.' },
      { text: 'Access to Companion, your AI-powered compliance expert.' },
      { text: 'Basic email support for general assistance.' },
      {
        text: 'Suitable for occasional users who require flexible, pay-as-you-go access.',
      },
    ],
    footerHeading: 'No commitment',
    footerText: '',
    color: 'default',
  },
  {
    id: 'professional',
    name: 'Professional',
    btn_redirection: `${process.env.NEXT_PUBLIC_APPLICATION_URL}/auth/sign-up?subscription=monthly`,
    price: '£199',
    description: '/month',
    message: '50% Cheaper than Top-up',
    buttonText: 'Select Plan',
    popular: true,
    badge: 'Professional',
    featuresHeader: 'Everything in Top-up and Go PLUS:',
    comitmentText: '12-month commitment.',
    features: [
      { text: '500 credits per month with no rollover.' },
      {
        text: 'Access to Resolve, our AI-powered tool for efficient complaint handling.',
      },
      { text: 'File upload feature on Companion for documents up to 5MB.' },
      {
        text: 'Priority email support for quicker assistance when you need it.',
      },
      {
        text: 'Suitable for regular users who need consistent and reliable AI support.',
      },
    ],
    footerHeading: '12-month commitment',
    footerText: '',
    color: 'blue',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom Quote',
    btn_redirection: '/contact',
    description: '',
    buttonText: 'Contact Sales',
    badge: 'Advanced',
    featuresHeader: 'Everything in Professional PLUS:',
    comitmentText: '24-month commitment.',
    features: [
      { text: 'Access all solutions with unlimited usage across the platform' },
      { text: 'File upload on Companion for documents up to 30MB' },
      {
        text: 'Dedicated account manager to support your team and ensure success',
      },
      {
        text: 'Exclusive demos and walkthroughs for every solution to maximise value.',
      },
      {
        text: 'Ideal for teams and professionals who require comprehensive access and support.',
      },
    ],
    footerHeading: '24-month commitment',
    footerText: '',
    color: 'default',
  },
];

export function PricingSection() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 20,
        mass: 0.6,
        delay: 0.2,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="container pt-3 pb-12 px-8 md:px-16 mx-auto md:max-w-screen-xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring',
          stiffness: 45,
          damping: 14,
          mass: 0.7,
          delay: 0.4,
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <PricingCards plans={pricingPlans} />
      </motion.div>
    </motion.main>
  );
}
