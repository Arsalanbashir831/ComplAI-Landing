import { useState } from 'react';
import { Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

import TeamsSlider from '../teams-slider';
import { Card } from '../ui/card';

export default function SupportForm() {
  const [selectedVersion, setSelectedVersion] = useState('');

  return (
    <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
      {/* Form: Displayed first on mobile, second on desktop */}
      <div className="space-y-4 flex-1 order-1 md:order-2">
        <Input placeholder="Your full name" className="py-6" />
        <Input type="email" placeholder="Your email" className="py-6" />

        {/* Version Dropdown */}
        <Select onValueChange={setSelectedVersion}>
          <SelectTrigger
            className={cn(!selectedVersion && 'text-muted-foreground')}
          >
            <SelectValue placeholder="Version" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="version1">Compl-AI-v1</SelectItem>
            {/* <SelectItem value="version2">Version 2</SelectItem> */}
          </SelectContent>
        </Select>

        <Textarea placeholder="Description" className="h-[200px] py-6" />
        <Button className="w-full transition-all duration-300 ease-in-out hover:scale-105">
          Submit Support Request
        </Button>
      </div>

      {/* Card and TeamsSlider: Displayed second on mobile, first on desktop */}
      <div className="overflow-hidden grid grid-cols-1 gap-8 order-2 md:order-1">
        <Card className="bg-gradient-to-br from-[#6499F4] to-[#0a59eb] to-85% h-fit text-white p-8 rounded-lg">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-semibold">
              We value your input
            </h3>
            <p className="font-medium text-lg md:text-xl">
              We&rsquo;re here to support you with any Compl-AI-related issues
              or questions.
            </p>
            <ul className="space-y-3 font-normal text-sm md:text-base">
              <li className="flex items-center gap-2">
                <Check size={24} />
                Get support
              </li>
              <li className="flex items-center gap-2">
                <Check size={24} />
                Share your insights
              </li>
              <li className="flex items-center gap-2">
                <Check size={24} />
                Share your suggestions
              </li>
              <li className="flex items-center gap-2">
                <Check size={24} />
                Uncover capabilities, Q&A
              </li>
            </ul>
          </div>
        </Card>

        <TeamsSlider
          className="md:text-3xl font-semibold justify-self-start text-left"
          showSidesFade={false}
        />
      </div>
    </div>
  );
}
