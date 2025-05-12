import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import TeamsSlider from '../teams-slider';
import { Card } from '../ui/card';

export default function SalesForm() {
  return (
    <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
      <div className="overflow-hidden grid grid-cols-1 gap-8 order-2 items-center justify-items-center  text-left md:order-1">
        <Card className="md:w-3/4 bg-gradient-to-br from-[#6499F4] to-[#0a59eb] to-85% h-fit text-white p-8 rounded-lg ">
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
          className="md:text-3xl font-semibold justify-self-center md:text-left px-8"
          showSidesFade={false}
        />
      </div>

      <div className="md:w-4/5 space-y-4 flex-1 order-1 md:order-2">
        <Input placeholder="Your full name" className="py-6" />
        <Input type="email" placeholder="Your email" className="py-6" />
        <Input placeholder="Company name" className="py-6" />
        <Input placeholder="Your role" className="py-6" />
        <Input placeholder="+44" className="py-6" />
        <Textarea placeholder="Write a message" className="h-[200px] py-6" />
        <Button className="w-full transition-all duration-300 ease-in-out hover:scale-105">
          Submit Enquiry
        </Button>
      </div>
    </div>
  );
}
