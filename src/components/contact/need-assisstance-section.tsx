'use client';

import { motion, Variants } from 'framer-motion';
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
    contact: 'Manchester, UK',
    href: undefined,
  },
] as const;

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  contact: string;
  href?: string;
}

// Parent container for faster stagger
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

// Snappier spring with reduced overshoot
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: [30, -5, 0],
    transition: {
      y: { type: 'spring', stiffness: 80, damping: 12, mass: 0.5 },
      opacity: { duration: 0.3, ease: 'easeInOut' },
    },
  },
};

function ContactCard({ icon: Icon, title, contact, href }: ContactCardProps) {
  const content = (
    <>
      <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center">
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div>
        <h3 className="font-medium text-xl md:text-xl">{title}</h3>
        <span className="relative text-lg md:text-xl font-bold">{contact}</span>
      </div>
    </>
  );

  return (
    <motion.div variants={itemVariants}>
      <Card className="p-4 flex items-center justify-center gap-6 h-fit bg-[#F1F5FE] border-none shadow-none hover:ring-2 hover:ring-blue-500 transition-all">
        {href ? (
          <a href={href} className="flex items-center gap-6">
            {content}
          </a>
        ) : (
          content
        )}
      </Card>
    </motion.div>
  );
}

export default function NeedAssistanceSection() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="py-16 bg-white px-4 md:px-12"
    >
      <div className="container mx-auto space-y-8">
        {/* Heading & Paragraph */}
        <motion.div variants={itemVariants} className="text-center space-y-2">
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold"
          >
            Need Further Assistance? Contact Us Directly
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Send attachments or additional details directly to our Sales or
            Support teams for quick and reliable assistance
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info) => (
            <ContactCard key={info.title} {...info} />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
