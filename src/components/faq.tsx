import { siteConfig } from '@/config/site';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQSection() {
  const { faq } = siteConfig;

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center space-y-4 text-center mx-auto">
        <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm">
          FAQ
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-6xl">
          {faq.title}
        </h2>
        <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {faq.subtitle}
        </p>
      </div>

      <div className="container max-w-3xl py-12 mx-auto">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full space-y-4"
        >
          {faq.questions.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-xl px-6 py-2 data-[state=open]:bg-blue-lightest"
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
          ))}
        </Accordion>
      </div>
    </section>
  );
}
