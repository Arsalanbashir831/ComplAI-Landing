import { Check } from 'lucide-react';

import { Card } from '@/components/ui/card';

import TeamsSlider from '../teams-slider';

export default function ContactFormLeftSide() {
  return (
    <div className="overflow-hidden grid grid-cols-1 gap-8">
      <Card className="bg-gradient-to-br from-[#6499F4] to-[#0a59eb] to-85% h-fit text-white p-8 rounded-lg">
        <div className="space-y-6">
          <h3 className="text-3xl md:text-4xl font-semibold">
            We&apos;d love to help
          </h3>
          <p className="font-medium text-lg md:text-xl">
            Talk to our experts about how Compl-AI can benefit your firm.
          </p>
          <ul className="space-y-3 font-normal text-sm md:text-base">
            <li className="flex items-center gap-2">
              <Check size={24} />
              Enquire about our Enterprise plan
            </li>
            <li className="flex items-center gap-2">
              <Check size={24} />
              Explore product suitability
            </li>
            <li className="flex items-center gap-2">
              <Check size={24} />
              Uncover capabilities Q&A
            </li>
            <li className="flex items-center gap-2">
              <Check size={24} />
              Request customised quotes
            </li>
          </ul>
        </div>
      </Card>

      <TeamsSlider
        className="md:text-3xl font-semibold justify-self-start text-left"
        showSidesFade={false}
      />
    </div>
  );
}
