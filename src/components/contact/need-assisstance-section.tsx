'use client';

// if you’re using Next.js App Router
import { motion } from 'framer-motion';
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
        <h3 className="font-medium text-xl md:text-2xl">{title}</h3>
        <span className="text-lg md:text-xl font-bold underline">
          {contact}
        </span>
      </div>
    </>
  );

  return (
    <Card className="p-4 flex items-center md:justify-center gap-6 h-fit border-primary shadow-primary drop-shadow-md">
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
    <section className="py-16 bg-white px-4 md:px-0">
      <div className="container mx-auto">
        <div className="space-y-8">
          {/* Animated Heading & Paragraph */}
          <div className="text-center space-y-2">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.5 }}
              className="text-3xl md:text-4xl font-bold"
            >
              Need Further Assistance? Contact Us Directly
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ amount: 0.5 }}
              className="text-lg md:text-xl max-w-3xl mx-auto"
            >
              Send attachments or additional details directly to our Sales or
              Support teams for quick and reliable assistance
            </motion.p>
          </div>

          {/* Animated Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ amount: 0.5 }}
              >
                <ContactCard {...info} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
