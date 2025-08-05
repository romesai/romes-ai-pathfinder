import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is RomesAI really free to use?",
    answer: "Yes! We offer a generous free tier that includes basic AI consultations and deadline tracking. Premium features like advanced job matching and unlimited legal consultations are available with our paid plans."
  },
  {
    question: "How accurate is the immigration advice?",
    answer: "Our AI is trained on current USCIS regulations and is regularly updated. However, for complex legal situations, we always recommend consulting with a licensed immigration attorney, which we can help you find."
  },
  {
    question: "Can RomesAI help with visa applications?",
    answer: "We provide guidance on preparing applications and understanding requirements, but we cannot file applications on your behalf. We'll walk you through the process and connect you with legal professionals when needed."
  },
  {
    question: "What makes this different from generic career advice?",
    answer: "RomesAI understands the unique challenges of F-1 students - visa restrictions, cultural barriers, and the complexity of U.S. immigration law. Our advice is specifically tailored to international students."
  },
  {
    question: "Is my personal information secure?",
    answer: "Absolutely. We use enterprise-grade encryption and never share your personal information with third parties. Your privacy and security are our top priorities."
  },
  {
    question: "Can I use this if I'm on a different visa type?",
    answer: "Currently, RomesAI is optimized for F-1 students, but we're expanding to support other visa types like J-1 and H-1B. Contact us if you have specific needs."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">FAQ</span>
          </div>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Got questions? We've got answers. Here are the most common questions from F-1 students.
          </p>
        </div>
        
        <div className="bg-card rounded-2xl shadow-soft border border-border/50 overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left px-6 py-4 hover:bg-muted/30 transition-colors">
                  <span className="font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <div className="inline-flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Contact us at:</span>
            <a 
              href="mailto:help@romesai.com" 
              className="text-primary hover:text-primary-dark font-medium transition-colors"
            >
              help@romesai.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;