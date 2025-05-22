'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { PricingPlan } from '@/types/pricing';

import Link from 'next/link';
import { Separator } from '../ui/separator';

// Define the types for our pricing plans
export type PricingFeature = {
  text: string;
};

interface PricingCardsProps {
  plans: PricingPlan[];
}

export function PricingCards({ plans }: PricingCardsProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {plans.map((plan, idx) => (
        <PricingCard key={plan.id} id={idx} plan={plan} />
      ))}
    </div>
  );
}

interface PricingCardProps {
  id: number;
  plan: PricingPlan;
}

export function PricingCard({ plan }: PricingCardProps) {
  return (
    <motion.div
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex flex-col "
    >
      <Card
        className={cn(
          'relative flex flex-col border rounded-xl h-full',
          plan.color === 'blue' &&
          'bg-primary text-white border-primary shadow-[0px_0px_39px_5px_#0686F6]'
        )}
      >
        {plan.popular && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="absolute -top-16 -right-2/3 w-full h-16 bg-[url(/images/professional-pricing-promo.svg)] bg-contain bg-center bg-no-repeat hidden lg:block"
          />
        )}
        <CardHeader className="pt-6 pb-2 px-6">
          <div className="flex justify-between items-center">
            <div>
              <h3
                className={cn(
                  'text-xl md:text-2xl font-bold',
                  plan.color === 'blue' && 'text-[#EDEDED]'
                )}
              >
                {plan.name}
              </h3>
            </div>
            {plan.badge && (
              <Badge
                variant="outline"
                className={cn(
                  'bg-white text-primary border-white font-medium px-2 md:px-3 py-0.5 md:py-1 text-[10px] md:text-xs rounded-full shadow',
                  plan.color === 'blue' && 'shadow-[0px_2px_3px_0px_#ffffff9a]'
                )}
              >
                {plan.badge}
              </Badge>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-6 pt-2">
          <div className="mt-2 mb-4">
            <div className="flex items-baseline h-fit">
              <span
                className={cn(
                  'text-3xl md:text-4xl font-bold',
                  plan.color === 'blue' ? 'text-white' : 'text-primary'
                )}
              >
                {plan.price}
              </span>
              {plan.description && (
                <span
                  className={cn(
                    'ml-2 text-2xl md:text-3xl font-bold',
                    plan.color === 'blue' ? 'text-white' : 'text-primary'
                  )}
                >
                  {plan.description}
                </span>
              )}
            </div>
          </div>

          <Link href={plan.btn_redirection}>
            <Button
              variant={plan.color === 'blue' ? 'default' : 'outline'}
              className={cn(
                'w-full mb-4 text-xl',
                plan.color === 'blue'
                  ? 'bg-white text-primary hover:bg-blue-50'
                  : 'text-primary hover:text-blue-600 border-primary'
              )}
            >
              {plan.buttonText}
            </Button>
          </Link>

          {plan.secondaryButtonText && (
            <div className="mb-4">
              <div className="flex items-center justify-center text-sm gap-4 px-7">
                <Separator className="basis-1/2 bg-[#9D9D9D]" />
                <p className="text-[#000000] font-semibold">Or</p>
                <Separator className="basis-1/2 bg-[#9D9D9D]" />
              </div>
              <Button className="w-full mt-2 bg-primary text-white hover:bg-blue-600 text-xl">
                {plan.secondaryButtonText}
              </Button>
            </div>
          )}

          {plan.color === 'blue' && (
            <div className="border-t border-blue-500 mb-6" />
          )}

          {plan.name === 'Enterprise' && (
            <div className="border-t border-[#D1D1D1] mb-6" />
          )}

          <div className="space-y-2">
            {plan.name && (
              <p
                className={cn(
                  'mb-2 text-left text-sm font-bold w-2/3',
                  plan.color === 'blue' && 'text-white'
                )}
              >
                {plan.featuresHeader}
              </p>
            )}

            <div className="space-y-3 mt-4">
              {/* <>
                <p className="font-bold underline">{plan.comitmentText}</p>
              </> */}
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 text-left">
                  <Check
                    className={cn(
                      'h-4 w-4 shrink-0 mt-0.5',
                      plan.color === 'blue' ? 'text-white' : 'text-[#454545]'
                    )}
                  />
                  <span
                    className={cn(
                      'text-sm',
                      plan.color === 'blue' ? 'text-blue-50' : 'text-[#454545]'
                    )}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>

        {(plan.footerText || plan.footerHeading) && (
          <CardFooter className="p-0 px-6 mt-10">
            <div
              className={cn(
                'w-full py-2 text-center text-sm rounded-full mb-4 mx-auto',
                plan.color === 'blue'
                  ? 'bg-white text-primary'
                  : 'bg-primary text-white'
              )}
            >
              {plan.footerHeading && (
                <p className="text-sm font-semibold">{plan.footerHeading}</p>
              )}
              {plan.footerText && <p className="text-sm">{plan.footerText}</p>}{' '}
            </div>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
