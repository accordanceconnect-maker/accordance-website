import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="py-[120px] bg-[#F5F5F5]">
      <div className="max-w-[1080px] mx-auto px-8 md:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[600px]"
        >
          <h2 className="text-[#0A0A0A] mb-8">
            Let’s bring clarity to your next decision.
          </h2>
          <a href="/contact" className="btn-polestar">
            Start the conversation &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
