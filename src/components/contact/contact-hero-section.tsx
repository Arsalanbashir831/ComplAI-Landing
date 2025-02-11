'use client';

import { useState } from 'react';
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

export default function ContactHeroSection() {
  const [activeTab, setActiveTab] = useState<'sales' | 'support'>('sales');

  return (
    <>
      <div className="absolute left-0 top-0 h-[500px] w-[500px] bg-[url('/images/bg/ellipse2.svg')] bg-contain bg-left bg-no-repeat" />
      <section className="relative py-16">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-[url('/images/bg/ellipse.svg')] bg-contain bg-right bg-no-repeat" />

        <div className="container mx-auto">
          <div className="space-y-12">
            <div className="text-center space-y-2  mb-20">
              <h2 className="text-6xl font-bold">
                Get in Touch with Us Today!
              </h2>
              <p className="font-normal text-xl">
                Whether It&rsquo;s Sales, Support, or Just a Question, Our Team
                Is Happy to Help
              </p>
            </div>

            <div className="flex gap-2 justify-center">
              <Button
                variant={activeTab === 'sales' ? 'default' : 'secondary'}
                className={
                  activeTab === 'sales'
                    ? 'bg-[#1B1819] hover:bg-[#1b1819ec]'
                    : ''
                }
                onClick={() => setActiveTab('sales')}
              >
                Contact Sales
              </Button>
              <Button
                variant={activeTab === 'support' ? 'default' : 'secondary'}
                className={
                  activeTab === 'support'
                    ? 'bg-[#1B1819] hover:bg-[#1b1819ec]'
                    : ''
                }
                onClick={() => setActiveTab('support')}
              >
                Compl-AI Support
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-12">
                <Card className="bg-gradient-to-br from-[#D5EAFF] to-[#0a59ebe6] h-fit text-white p-8 rounded-lg">
                  <div className="space-y-6">
                    <h3 className="text-4xl font-semibold">
                      We&apos;d love to help
                    </h3>
                    <p className="font-medium text-xl">
                      Talk to our experts about how Compl-AI can benefit your
                      firm.
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
                <Textarea
                  placeholder="Write a message"
                  className="h-[200px] py-6"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Submit Enquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
