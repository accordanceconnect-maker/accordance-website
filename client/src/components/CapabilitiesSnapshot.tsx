import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Strategy",
    description: "Land identification, feasibility modelling, portfolio direction."
  },
  {
    title: "Execution",
    description: "Title verification, documentation reviews, regulatory liaison, negotiation support."
  },
  {
    title: "Intelligence",
    description: "Market assessments, valuation models, compliance mapping."
  }
];

export function CapabilitiesSnapshot() {
  return (
    <section className="py-[120px] bg-white border-t border-[#E6E6E6]">
      <div className="max-w-[1080px] mx-auto px-8 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-[12px]"
            >
              <h3 className="text-[#0A0A0A] text-[22px] font-medium tracking-tight">
                {item.title}
              </h3>
              <p className="text-[#2B2B2B] text-[16px] leading-[1.5]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
