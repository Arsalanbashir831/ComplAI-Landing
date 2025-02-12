import Image from 'next/image';
import { Check } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const logos = [
  {
    name: 'AWH Solicitors',
    url: './images/logos/awh_solicitors_logo.svg',
  },
  {
    name: 'Kaizen Law',
    url: './images/logos/kaizen_logo.svg',
  },
  {
    name: 'Fenchurch Legal',
    url: './images/logos/fenchurch_logo.svg',
  },
  {
    name: 'Barings',
    url: './images/logos/barings_logo.svg',
  },
  {
    name: 'Nera Capital',
    url: './images/logos/nera_logo.svg',
  },
];

export default function ContactForm() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="space-y-12">
        <Card className="bg-gradient-to-br from-[#6499F4] to-[#0a59eb] to-85% h-fit text-white p-8 rounded-lg">
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold">We&apos;d love to help</h3>
            <p className="font-medium text-xl">
              Talk to our experts about how Compl-AI can benefit your firm.
            </p>
            <ul className="space-y-3 font-normal">
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
                Request customized quotes
              </li>
            </ul>
          </div>
        </Card>

        <div className="space-y-4">
          <p className="text-2xl font-semibold">Trusted by teams at</p>
          <div className="flex items-center gap-x-4 flex-wrap">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="flex w-24 md:w-[190px] items-center justify-center"
              >
                <Image
                  width={130}
                  height={130}
                  src={logo.url || '/placeholder.svg'}
                  alt={`${logo.name} logo`}
                  className="h-10 md:h-[80px] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        <Input placeholder="Your full name" className="py-6" />
        <Input type="email" placeholder="Your email" className="py-6" />
        <Input placeholder="Company name" className="py-6" />
        <Input placeholder="Your role" className="py-6" />
        <Input placeholder="+44" className="py-6" />
        <Textarea placeholder="Write a message" className="h-[200px] py-6" />
        <Button className="w-full">Submit Enquiry</Button>
      </div>
    </div>
  );
}
