import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { content } from '@/content/content';

export const FAQ = () => {
  const { faq } = content;
  
  return (
    <section
      id="faq"
      className="container py-16 sm:py-20"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {faq.title.main}{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {faq.title.highlight}
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full AccordionRoot"
      >
        {faq.questions.map(({ question, answer }, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>
            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        {faq.contact.text}{" "}
        <a
          rel="noreferrer noopener"
          href={faq.contact.href}
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          {faq.contact.linkText}
        </a>
      </h3>
    </section>
  );
};
