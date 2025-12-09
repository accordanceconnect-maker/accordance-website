import { motion } from "framer-motion";

const services = [
  {
    title: "Transaction Strategy & Land Advisory",
    description: "Structuring acquisitions and dispositions with mathematical precision and strategic foresight."
  },
  {
    title: "Statutory & Legal Due Diligence",
    description: "Navigating regulatory landscapes to mitigate risk and ensure absolute compliance."
  },
  {
    title: "Valuation, Data & Dispute Resolution",
    description: "Data-backed valuation models and expert resolution for complex asset disputes."
  }
];

export function ServicesGrid() {
  return (
    <section className="py-[120px] bg-[#F5F5F5]">
      <div className="max-w-[1080px] mx-auto px-8 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-[#E6E6E6] p-[48px] h-full flex flex-col justify-start items-start md:border-r-0 last:md:border-r md:first:border-l md:border-y md:border-r-[#E6E6E6] border-solid"
              // Note: "Three vertical cards, equal width... White background, thin gray border"
              // Grid gap usually separates them, but "Polestar style" might imply connected or separated.
              // Prompt says "Three vertical cards". Let's keep them separate with gap if implied, or connected borders.
              // "Three vertical cards" in a grid usually implies columns.
              // Let's use gap-6 for separation to be safe and clean.
              // Actually, "Three vertical cards" could mean stacked vertically? No, usually means 3 columns side-by-side.
              // Let's assume side-by-side columns.
            >
              <h3 className="text-[#0A0A0A] text-[22px] md:text-[24px] leading-tight mb-4 font-medium">
                {service.title}
              </h3>
              <p className="text-[#2B2B2B] text-[16px] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
