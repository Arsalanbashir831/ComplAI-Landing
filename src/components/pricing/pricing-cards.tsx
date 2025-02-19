import { Check, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Logo } from '../logo';

const PricingCard = ({
  title,
  price,
  subtitle,
  buttonText,
  description,
  features,
  mostPopular,
}: {
  title: string;
  price: string;
  subtitle?: string;
  buttonText: string;
  description: string;
  features: string[];
  mostPopular?: boolean;
}) => {
  return (
    <Card className="relative w-full max-w-full border rounded-2xl shadow-md p-6">
      {mostPopular && (
        <div className="absolute -top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-xl rounded-ss-none rounded-ee-none flex items-center gap-1">
          <Star className="h-3 w-3 inline-block" />
          <span>Most Popular</span>
        </div>
      )}
      <CardHeader className="text-start p-0 space-y-6">
        <Logo className="justify-start" />
        <CardTitle className="text-xl font-bold text-[#000]">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-start gap-4 p-0 text-start my-4">
        <div className="">
          <p className="flex items-center gap-2 text-3xl font-bold text-gray-900">
            {price}
            <span className="text-sm text-gray-500">{subtitle}</span>
          </p>
        </div>
        <Button className="text-white font-semibold py-2 px-4 rounded-md mb-4">
          {buttonText}
        </Button>
        <p className="text-justify text-[#1F1F1F] mb-4">{description}</p>
        <ul className="space-y-3 text-gray-700 text-start">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="text-teal-500 mr-2" size={20} /> {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default function PricingCards() {
  const cardsData = [
    {
      title: 'Pay As You Use',
      price: 'Top-up Anytime',
      buttonText: 'Try for free',
      description:
        'Firms seeking occasional compliance support without long-term commitments',
      features: [
        'No Contract',
        'Single User License',
        'Desktop Only Accessibility',
        'Flexibility',
        'Interactive Query Assistance',
        'Create & Manage Documents',
        'Account & Data Security',
        'Step-by-Step Guidance',
      ],
    },
    {
      mostPopular: true,
      title: 'Professional',
      price: '$49',
      subtitle: 'per month',
      buttonText: 'Get Professional',
      description:
        'Firms aiming to stay ahead of compliance requirements and maintain quality accreditations ',
      features: [
        '12 Months Minimum Commitment',
        'Single User License',
        'Desktop Only Accessibility',
        'Comprehensive Support',
        'Interactive Query Assistance',
        'Create & Manage Documents',
        'Account & Data Security',
        'Step-by-Step Guidance',
        'Automated Policy Review',
        'Upload Document upto 10 MB',
      ],
    },
    {
      title: 'Enterprise',
      price: 'Custom Quote',
      buttonText: 'Contact Sales',
      description:
        'Firms managing high-risk areas, multiple legal services, or volume litigation',
      features: [
        '24 Months Minimum Commitment',
        'Multi User License',
        'Desktop & Mobile Accessibility',
        'Scaleable Solutions',
        'Interactive Query Assistance',
        'Create & Manage Documents',
        'Account & Data Security',
        'Step-by-Step Guidance',
        'Automated Policy Review',
        'Upload Document upto 100 MB',
        'File Review & Analysis',
        'Voice Assistance',
        'Upload Custom Compliance Manual',
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6 md:hidden px-4">
      {cardsData.map((card, index) => (
        <PricingCard key={index} {...card} />
      ))}
    </div>
  );
}
