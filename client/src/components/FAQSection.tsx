import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What distinguishes your methodology?",
    answer: "We employ a strictly data-driven framework combined with deep regulatory insight. Our focus is on precision and risk mitigation rather than speculative volume."
  },
  {
    question: "Do you operate pan-India?",
    answer: "Yes. Headquartered in New Delhi, we have operational capabilities in Mumbai, Bangalore, Hyderabad, and Pune, ensuring seamless execution across major markets."
  },
  {
    question: "What is your primary client base?",
    answer: "We exclusively serve institutional investors, multinational corporations, and large-scale developers requiring high-compliance real estate solutions."
  },
  {
    question: "How are fees structured?",
    answer: "Our engagement models are transparent, typically involving a strategic retainer for advisory services and performance-linked fees for transactional success."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-[120px] px-8 md:px-[80px] bg-[#F5F5F5]">
      <div className="max-w-[1080px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#0A0A0A] mb-6">Common Inquiries</h2>
            <p className="text-[#2B2B2B] text-[18px] mb-8">
              Understanding our philosophy and operational framework.
            </p>
            <a href="/contact" className="text-[14px] font-bold uppercase tracking-widest border-b border-[#0A0A0A] pb-1 hover:opacity-60 transition-opacity text-[#0A0A0A]">
              Contact Support
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-8">
          <div className="space-y-0 border-t border-[#E6E6E6]">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#E6E6E6]">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-8 flex items-start justify-between text-left group"
                >
                  <span className={cn(
                    "text-[20px] md:text-[24px] font-medium transition-colors duration-300",
                    openIndex === index ? "text-[#0A0A0A]" : "text-[#2B2B2B] group-hover:text-[#0A0A0A]"
                  )}>
                    {faq.question}
                  </span>
                  <span className="ml-8 mt-1 text-[#0A0A0A] transition-colors">
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
                  <div className="pb-8 text-[18px] text-[#2B2B2B] max-w-2xl leading-relaxed">
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
