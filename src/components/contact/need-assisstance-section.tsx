'use client';

// if you’re using Next.js App Router
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Mail, MapPin, Phone } from 'lucide-react';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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
    contact: 'Manchester, UK',
    href: undefined,
  },
] as const;

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  contact: string;
  href?: string;
  // showUnderlineEffect?: boolean;
}

function ContactCard({
  icon: Icon,
  title,
  contact,
  href,
  // showUnderlineEffect = true,
}: ContactCardProps) {
  const content = (
    <>
      <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <h3 className="font-medium text-xl md:text-xl">{title}</h3>
        <span
          className={cn(
            'relative text-lg md:text-xl font-bold'
            // showUnderlineEffect &&
            //   'after:block after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-500 after:ease-in-out after:absolute after:left-0 after:-bottom-1 hover:after:w-full'
          )}
        >
          {contact}
        </span>
      </div>
    </>
  );

  return (
    <Card className="p-4 flex items-center md:justify-center gap-6 h-fit bg-[#F1F5FE] border-none shadow-none transition-all transform hover:ring-2 hover:ring-blue-500">
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
    <section className="py-16 bg-white px-4 md:px-12">
      <div className="container mx-auto">
        <div className="space-y-8">
          {/* Animated Heading & Paragraph */}
          <div className="text-center space-y-2">
            <motion.h2
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold"
            >
              Need Further Assistance? Contact Us Directly
            </motion.h2>

            <motion.p
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-lg md:text-xl max-w-2xl mx-auto"
            >
              Send attachments or additional details directly to our Sales or
              Support teams for quick and reliable assistance
            </motion.p>
          </div>

          {/* Animated Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={info.title}
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{
                  delay: 0.3 + 0.2 * idx,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                viewport={{ once: true }}
              >
                <ContactCard
                  {...info}
                // showUnderlineEffect={info.href !== undefined}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
