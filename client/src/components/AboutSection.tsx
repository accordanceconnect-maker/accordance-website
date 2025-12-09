import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1080px] mx-auto px-8 md:px-[80px]">
        <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="max-w-[800px]"
          >
            <h2 className="text-[#0A0A0A] mb-[12px] text-[32px] md:text-[48px] leading-tight tracking-[-0.03em] font-medium">
              Built for Clarity
            </h2>
            <p className="text-[#2B2B2B] text-[16px] leading-[1.5] mb-[12px]">
              Accordance is engineered as a precision-driven partner for commercial, industrial, and institutional real estate.
            </p>
            <p className="text-[#2B2B2B] text-[16px] leading-[1.5]">
              Our work is structured, analytical, and documentation-led, enabling confident decisions in environments where accuracy matters.
            </p>
          </motion.div>
      </div>
    </section>
  );
}
