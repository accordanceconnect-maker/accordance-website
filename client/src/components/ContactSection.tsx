import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="py-[120px] bg-white border-t border-[#E6E6E6]">
      <div className="max-w-[1080px] mx-auto px-8 md:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px]"
        >
          <h2 className="text-[#0A0A0A] mb-[12px] text-[32px] md:text-[48px] leading-tight tracking-[-0.03em] font-medium">
            Let’s Build With Clarity
          </h2>
          <p className="text-[#2B2B2B] text-[16px] leading-[1.5] mb-[48px]">
            For mandates, partnerships, or structured advisory, reach out to our team.
          </p>
          <a href="/contact" className="btn-polestar">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
