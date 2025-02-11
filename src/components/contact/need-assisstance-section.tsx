import type { LucideIcon } from 'lucide-react';
import { Mail, MapPin, Phone } from 'lucide-react';

import { Card } from '@/components/ui/card';

const contactInfo = [
  {
    icon: Mail,
    title: 'Support Email',
    contact: 'support@compl-ai.co.uk',
    href: 'mailto:support@compl-ai.co.uk',
  },
  {
    icon: Phone,
    title: 'Sales Email',
    contact: 'sales@compl-ai.co.uk',
    href: 'mailto:sales@compl-ai.co.uk',
  },
  {
    icon: MapPin,
    title: 'Our Office',
    contact: 'Manchester, United Kingdom',
  },
] as const;

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  contact: string;
  href?: string;
}

function ContactCard({ icon: Icon, title, contact, href }: ContactCardProps) {
  const content = (
    <>
      <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <h3 className="font-medium text-2xl">{title}</h3>
        <span className="text-xl font-bold underline">{contact}</span>
      </div>
    </>
  );

  return (
    <Card className="p-4 flex items-center justify-center gap-6 h-fit border-primary shadow-primary drop-shadow-md">
      {href ? (
        <a href={href} className="flex items-center gap-6">
          {content}
        </a>
      ) : (
        content
      )}
    </Card>
  );
}

export default function NeedAssistanceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-4xl font-bold">
              Need Further Assistance? Contact Us Directly
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Send attachments or additional details directly to our Sales or
              Support teams for quick and reliable assistance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info) => (
              <ContactCard key={info.title} {...info} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
