'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faq = {
  questions: [
    {
      question: 'What is Compl-AI?',
      answer:
        'Compl-AI is an advanced AI solution designed specifically for SRA-regulated law firms in England and Wales. It provides instant, precise, and actionable guidance on legal compliance, tailored to align with relevant regulations, legislations, and standards such as SRA, Lexcel, Legal Aid, and SQM requirements.',
    },
    {
      question:
        'How is Compl-AI different from general-purpose AI tools like ChatGPT?',
      answer:
        'Unlike general-purpose AI tools, Compl-AI is purpose-built for the legal sector and fine-tuned by legal professionals. It integrates a highly specialised knowledge base of regulations, legislations, and standards to deliver accurate and relevant insights specific to the compliance needs of law firms.',
    },
    {
      question:
        'Why should I choose Compl-AI over hiring compliance consultants?',
      answer:
        'Compl-AI is faster, more cost-effective, and far more reliable than traditional compliance consultants. While consultants often take time to research and prepare advice, Compl-AI provides instant results, drawing on its advanced knowledge base. This ensures timely and accurate guidance, without the delays or high costs typically associated with consultancy services.',
    },
    {
      question: 'What compliance frameworks does Compl-AI cover?',
      answer:
        'Compl-AI supports a comprehensive range of frameworks, including SRA regulations, government standards, Lexcel accreditation, Legal Aid requirements, SQM, and more.',
    },
    {
      question: 'Is Compl-AI secure?',
      answer:
        'Yes, Compl-AI is built with security as a core principle. It adheres to all relevant data protection standards, ensuring that your sensitive client information is handled with the utmost care and integrity.',
    },
    {
      question: 'How does Compl-AI ensure its guidance remains up-to-date?',
      answer:
        'Compl-AI uses advanced Retrieval-Augmented Generation (RAG) technology, which integrates a continuously updated knowledge base. This ensures that the guidance provided is always aligned with the latest regulations, legislations, and compliance standards.',
    },
  ],
};

export default function FAQSection({
  showBadge = false,
}: {
  showBadge?: boolean;
}) {
  return (
    <section className="w-full py-16 px-4 md:px-0">
      <div className="container flex flex-col items-center justify-center space-y-4 text-center mx-auto">
        {showBadge && (
          <div className="inline-flex items-center justify-center px-2 py-1.5 mb-4 text-sm font-medium rounded-lg bg-[#F1F2F6] space-x-1">
            <div className="bg-[#D5EAFF] rounded-lg px-3 py-1 text-primary">
              <Star size={12} />
            </div>
            <span>FAQ</span>
          </div>
        )}
        <motion.h2
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-3xl font-bold sm:text-4xl md:text-5xl"
        >
          Frequently Asked <span className="text-primary">Questions</span>
        </motion.h2>
        <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Explore the most common questions about our platform and how it helps
          you stay compliant.
        </p>
      </div>

      <div className="container max-w-6xl py-12 mx-auto">
        <Accordion
          type="single"
          collapsible
          // defaultValue="item-0"
          className="w-full space-y-4"
        >
          {faq.questions.map((item, index) => (
            <motion.div
              // initial={{ opacity: 0, y: 50 }}
              // whileInView={{ opacity: 1, y: 0 }}
              //   transition={{ delay: 0.3, duration: 0.4, ease: 'easeOut' }} {{
              //   delay: 0.2 * index,
              //   duration: 0.8,
              //   ease: 'easeOut',
              // }}
              viewport={{ once: true }}
              key={index}
            >
              <AccordionItem
                key={index}
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
      </div>
    </section>
  );
}
