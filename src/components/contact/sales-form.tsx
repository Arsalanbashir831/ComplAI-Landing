import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import ContactFormLeftSide from './contact-form-left-side';

export default function SalesForm() {
  return (
    <div className="grid md:grid-cols-2 gap-8 px-4 md:px-0">
      <ContactFormLeftSide />

      <div className="space-y-4 flex-1">
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
