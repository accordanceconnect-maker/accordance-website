import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What differentiates your advisory approach?",
    answer: "We employ a strictly data-driven methodology combined with architectural heritage analysis. Our focus is not volume, but value extraction through design-led asset positioning."
  },
  {
    question: "Do you handle international acquisitions?",
    answer: "Yes. Our team operates globally with specialized desks in London, Stockholm, New York, and Tokyo, providing seamless cross-border transaction support."
  },
  {
    question: "What asset classes do you specialize in?",
    answer: "We focus exclusively on Prime Residential, Boutique Hospitality, and Grade-A Commercial assets with architectural significance."
  },
  {
    question: "How do you structure your fees?",
    answer: "Our fee structure is transparent and bespoke, typically involving a retainer for advisory services and a success fee for transactional execution."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Common Inquiries</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Understanding our philosophy and operational framework.
            </p>
            <a href="/contact" className="text-sm font-bold uppercase tracking-widest border-b border-foreground pb-1 hover:opacity-60 transition-opacity">
              Contact Support
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-0 border-t border-border">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 flex items-start justify-between text-left group"
                >
                  <span className={cn(
                    "text-xl md:text-2xl font-medium transition-colors duration-300",
                    openIndex === index ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {faq.question}
                  </span>
                  <span className="ml-8 mt-1 text-foreground/50 group-hover:text-foreground transition-colors">
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
