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
      secondaryButtonText: 'Top-up Now',
      featuresHeader: 'Top-Up & Go Details:',
      features: [
        { text: 'No commitment, pay as you go.' },
        { text: 'Minimum top-up of £50 required each time.' },
        {
          text: 'Credits can only be used within Companion (no access to other tools).',
        },
        { text: 'Basic support only, limited assistance available.' },
        {
          text: 'Suitable for users who prefer occasional usage without ongoing costs.',
        },
      ],
      footerHeading: '£50 = 500 Credits',
      footerText: 'minimum, no subscription.',
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
      badge: 'Most Popular',
      featuresHeader: 'Professional Plan Details:',
      features: [
        { text: 'Answers compliance questions instantly' },
        { text: 'Uses real regulations to guide decisions' },
        { text: 'Interprets your query for accurate replies' },
        { text: 'Supports decision-making with citations' },
        { text: 'Customizable to fit your practice needs' },
        { text: '£49/month – 12-month commitment' },
        { text: 'Better value than Top-Up & Go' },
        { text: 'Includes priority email support' },
      ],
      footerHeading: '1000 Credits / Month',
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
      featuresHeader: 'Enterprise Plan Details:',
      features: [
        {
          text: 'Custom commitment and pricing based on individual requirements.',
        },
        { text: 'Access to all available tools after consultation.' },
        {
          text: 'Priority phone support and email support for quick resolutions.',
        },
        { text: 'Dedicated account manager for personalised assistance.' },
        {
          text: 'Designed for businesses looking for comprehensive and scalable AI solutions.',
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
