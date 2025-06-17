'use client';

import { motion, Variants } from 'framer-motion';
import { Star } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
  showBadge?: boolean;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: [30, -5, 0],
    transition: {
      y: {
        type: 'spring',
        stiffness: 40,
        damping: 15,
        mass: 0.7,
      },
      opacity: { duration: 0.4, ease: 'easeInOut' },
    },
  },
};

export default function FAQSection({
  faqs,
  showBadge = false,
}: FAQSectionProps) {
  return (
    <section className="w-full py-16 px-4 md:px-0">
      <div className="container flex flex-col items-center justify-center space-y-4 text-center mx-auto">
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center px-2 py-1.5 mb-4 text-sm font-medium rounded-lg bg-[#F1F2F6] space-x-1"
          >
            <div className="bg-[#D5EAFF] rounded-lg px-3 py-1 text-primary">
              <Star size={12} />
            </div>
            <span>FAQ</span>
          </motion.div>
        )}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
        >
          Explore the most common questions about our platform and how it helps
          you stay compliant.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="container max-w-6xl py-12 mx-auto"
      >
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((item, index) => (
            <motion.div variants={itemVariants} key={index}>
              <AccordionItem
                value={`item-${index}`}
                className="border rounded-xl px-6 py-2 data-[state=open]:bg-[#0A58EB0F] data-[state=open]:border-none"
              >
                <AccordionTrigger
                  className="text-left font-semibold hover:no-underline"
                  iconClassName="bg-primary p-1 rounded-full h-7 w-7 text-white"
                >
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="font-normal">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
