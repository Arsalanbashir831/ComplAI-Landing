import React from 'react';
import { Check, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const pricingPlans = [
  {
    key: 'payasyouuse',
    name: 'Pay As You Use',
    subheading: 'Top-up Anytime',
    description:
      'From seeking assistance to compliance support without long-term commitments',
    buttonText: 'Try for Free',
    linkText: 'top-up now',
  },
  {
    key: 'professional',
    name: 'Professional',
    price: '£49',
    priceSuffix: '/month',
    description:
      'Firms aiming to stay ahead of compliance requirements and maintain quality accreditations',
    buttonText: 'Get Professional',
    mostPopular: true,
  },
  {
    key: 'enterprise',
    name: 'Enterprise',
    price: 'Custom Quote',
    description:
      'From managing high-risk firms, multiple legal service or future flagman',
    buttonText: 'Contact Sales',
  },
];

const tableSections = [
  {
    title: 'Core',
    rows: [
      {
        label: 'Minimum Commitment',
        payasyouuse: 'No Contract',
        professional: '12 Months',
        enterprise: '24 Months',
      },
      {
        label: 'User Licenses',
        payasyouuse: 'Single User',
        professional: 'Single User',
        enterprise: 'Multiple Users',
      },
      {
        label: 'Accessibility',
        payasyouuse: 'Desktop Only',
        professional: 'Desktop Only',
        enterprise: 'Desktop & Mobile',
      },
      {
        label: 'Key Benefits',
        payasyouuse: 'Flexibility',
        professional: 'Comprehensive Support',
        enterprise: 'Scalable Solutions',
      },
    ],
  },
  {
    title: 'Features',
    rows: [
      {
        label: 'Interactive Query Assistance',
        payasyouuse: true,
        professional: true,
        enterprise: true,
      },
      {
        label: 'Create & Manage Documents',
        payasyouuse: true,
        professional: true,
        enterprise: true,
      },
      {
        label: 'Account & Data Security',
        payasyouuse: true,
        professional: true,
        enterprise: true,
      },
      {
        label: 'Step-by-Step Guidance',
        payasyouuse: true,
        professional: true,
        enterprise: true,
      },
      {
        label: 'Automated Policy Review',
        payasyouuse: true,
        professional: true,
        enterprise: true,
      },
      {
        label: 'Document Upload',
        payasyouuse: '-',
        professional: 'Up to 15 MB',
        enterprise: 'Up to 100 MB',
      },
      {
        label: 'File Review & Analysis',
        payasyouuse: '-',
        professional: '-',
        enterprise: true,
      },
      {
        label: 'Voice Assistance',
        payasyouuse: '-',
        professional: '-',
        enterprise: true,
      },
      {
        label: 'Upload Custom Compliance Manual',
        payasyouuse: '-',
        professional: '-',
        enterprise: true,
      },
    ],
  },
];

const PricingTable = () => {
  return (
    <div className="px-4 md:px-0 mt-10">
      <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-2xl">
        <Table>
          <TableHeader>
            <TableRow className="border-none hover:bg-transparent">
              {/* Left static header cell */}
              <TableHead className="flex flex-col py-2">
                <div className="mb-8 text-[#000] space-y-2">
                  <h2 className="text-3xl md:text-3xl font-semibold">
                    Find Your Compliance Plan
                  </h2>
                  <p className="max-w-56 text-base">
                    Flexible, scorable, and tailored solutions to keep your firm
                    compliant and confident.
                  </p>
                </div>
              </TableHead>
              {/* Map over pricing plans */}
              {pricingPlans.map((plan) => (
                <TableHead key={plan.key} className="w-1/4">
                  <div className=" text-center relative border border-b-0 rounded-xl rounded-b-none h-full pt-8">
                    {plan.mostPopular && (
                      <div className="absolute -top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-xl flex items-center gap-1">
                        <Star className="h-3 w-3 inline-block" />
                        <span>Most Popular</span>
                      </div>
                    )}
                    <div className="space-y-2">
                      <div className="font-semibold text-xl text-[#000]">
                        {plan.name}
                      </div>
                      {plan.price ? (
                        <div className="text-primary text-lg font-semibold">
                          {plan.price}{' '}
                          <span className="text-sm text-[#7C7C7C]">
                            {plan.priceSuffix}
                          </span>
                        </div>
                      ) : (
                        <div className="text-primary text-lg font-semibold">
                          {plan.subheading}
                        </div>
                      )}
                      <p className="text-xs text-[#1F1F1F] w-44 mx-auto">
                        {plan.description}
                      </p>
                    </div>
                    <div className="space-y-2">
                      <Button className="w-44 mx-auto mt-6 transition-all duration-300 ease-in-out hover:scale-105">
                        {plan.buttonText}
                      </Button>
                      {plan.linkText && (
                        <div className="text-xs text-center text-[#000]">
                          or{' '}
                          <span className="text-primary hover:underline cursor-pointer">
                            {plan.linkText}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          <TableBody className="text-[#454545]">
            {tableSections.map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                {/* Section header row */}
                <TableRow className="border-none">
                  <TableCell className="font-semibold">
                    {section.title}
                  </TableCell>
                  {pricingPlans.map((plan) => (
                    <TableCell key={plan.key} className="!py-0">
                      <div className="border border-y-0 p-2 h-10"></div>
                    </TableCell>
                  ))}
                </TableRow>
                {/* Section content rows */}
                {section.rows.map((row, rowIndex) => (
                  <TableRow key={rowIndex} className="border-none">
                    <TableCell className="!py-0">
                      <p className="border-b mr-4">{row.label}</p>
                    </TableCell>
                    {pricingPlans.map((plan) => {
                      const cellValue = row[plan.key as keyof typeof row];
                      return (
                        <TableCell key={plan.key} className="!py-0">
                          <div className="border border-y-0 p-2">
                            {typeof cellValue === 'boolean' && cellValue ? (
                              <p className="border-b w-44 mx-auto flex items-center justify-center">
                                <Check className="h-4 w-4" />
                              </p>
                            ) : (
                              <p className="border-b text-center w-44 mx-auto">
                                {cellValue}
                              </p>
                            )}
                          </div>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </React.Fragment>
            ))}
            {/* Final empty row to round the table (if needed) */}
            <TableRow className="border-none">
              <TableCell className="!py-0"></TableCell>
              {pricingPlans.map((plan) => (
                <TableCell key={plan.key} className="!py-0">
                  <div className="border border-t-0 rounded-b-xl p-2 h-10"></div>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>

        <p className="text-base text-gray-dark mt-6 text-center">
          Mobile functionality on Pay As You Use and Professional plans is
          limited but still usable, with full optimisation exclusive to
          Enterprise
        </p>
      </div>
    </div>
  );
};

export default PricingTable;
