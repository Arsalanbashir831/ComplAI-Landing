import { Check } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

import { CTAButton } from '../cta-button';

export function PricingBanner() {
  return (
    <section className="container mx-auto flex justify-center py-12 md:py-24 px-4 md:px-0">
      <Card className="bg-blue-lightest border-0 overflow-hidden w-full md:w-[90%] rounded-[40px]">
        <CardContent className="flex flex-col md:flex-row items-center justify-between gap-6 p-0 h-full">
          <div className="space-y-4 px-8 pt-8 md:py-12 md:px-16 md:basis-9/12">
            <h3 className="text-2xl md:text-3xl font-semibold">
              Boost Your Efficiency by 72% with Compl-AI
            </h3>
            <p className="text-gray-dark max-w-xl md:text-lg font-normal">
              Compl-AI cuts out the need for expensive compliance consultants,
              streamlining your workflow with intelligent automation. It boosts
              efficiency, saving time and resources so your team can focus on
              delivering results.
            </p>
            <CTAButton href="/sign-up" className="text-base font-medium py-5">
              Get Compl-AI
            </CTAButton>
          </div>
          <div className="bg-blue-600 p-8 md:p-4 text-white h-full w-full md:basis-3/12 flex flex-col justify-center md:items-center">
            <h4 className="text-xl md:text-2xl font-medium mb-4">
              All Plans Include
            </h4>
            <ul className="space-y-3 text-sm font-normal">
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>Advanced GDPR Security</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>Unlimited Regulations</span>
              </li>
              <li className="flex items-center">
                <Check className="mr-2 h-4 w-4" />
                <span>Seamless Integration</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
