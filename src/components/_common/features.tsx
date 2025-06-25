import { Check } from 'lucide-react';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Feature } from '@/types/feature';

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <Card className="rounded-lg overflow-hidden">
      <CardHeader className=" p-6 bg-blue-600 text-white min-h-[80px] md:min-h-[128px]">
        <h2 className=" text-2xl md:text-4xl font-semibold">{feature.title}</h2>
      </CardHeader>
      <CardContent className="p-6 bg-[#F5F7F9]">
        <h3 className="text-sm mb-4 text-[#686868] ml-6">{feature.subtitle}</h3>
        <ul className="space-y-2">
          {feature.items.map((item, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="h-4 w-4 flex-shrink-0 mt-1 mr-2 text-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      {feature.note && (
        <CardFooter className="p-6 pt-0 bg-[#F5F7F9] justify-center">
          <p className="text-xs font-semibold text-primary text-center w-2/3">
            {feature.note}
          </p>
        </CardFooter>
      )}
    </Card>
  );
}
