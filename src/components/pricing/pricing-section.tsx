import { PricingPlan } from '@/types/pricing';
import { PricingCards } from '@/components/pricing/new-pricing-cards';

export function PricingSection() {
  const pricingPlans: PricingPlan[] = [
    {
      id: 'top-up',
      name: 'Top-Up & Go',
      price: '£50',
      description: 'min top-up',
      buttonText: 'Start Free Trial',
      badge: 'Starter',
      secondaryButtonText: 'Top-up Now',
      featuresHeader: 'Top-Up & Go Details:',
      features: [
        { text: 'No commitment, top-up as you go.' },
        { text: 'Minimum Top-up of £50.' },
        {
          text: 'Credits to be used with Companion Solution.',
        },
        { text: 'Basic email support.' },
        {
          text: 'Suitable for users who prefer occasional usage.',
        },
      ],
      footerHeading: '£50 = 100 Credits',
      footerText: 'No subscription.',
      color: 'default',
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '£49',
      description: '/month',
      message: '50% Cheaper than Top-up',
      buttonText: 'Select Plan',
      popular: true,
      badge: 'Professional',
      featuresHeader: 'Everything in Top-up and Go PLUS:',
      features: [
        { text: '12-month commitment.' },
        { text: 'Access file uploads for Companion (5mb).' },
        { text: 'Priority email support.' },
        {
          text: 'Test new features with exclusive, limited access rolled out randomly every month.',
        },
      ],
      footerHeading: '500 Credits / Month',
      footerText: 'No Rollover',
      color: 'blue',
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom Quote',
      description: '',
      buttonText: 'Contact Sales',
      badge: 'Advanced',
      featuresHeader: 'Everything in Professional PLUS:',
      features: [
        {
          text: 'Access to all solutions.',
        },
        { text: 'Companion maximum file upload (100mb). ' },
        {
          text: 'Various levels of support.',
        },
        {
          text: 'We’ll walk you through all our solutions so you can make the most of them.',
        },
      ],
      footerHeading: 'Custom pricing',
      footerText: 'Contact Us Now',
      color: 'default',
    },
  ];

  return (
    <main className="container pt-3 pb-12 px-16 mx-auto md:max-w-screen-xl">
      <PricingCards plans={pricingPlans} />
    </main>
  );
}
