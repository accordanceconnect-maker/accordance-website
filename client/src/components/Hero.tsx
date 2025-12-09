import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/minimalist_brutalist_concrete_architecture.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      {/* Background Image - Grayscale forced by CSS */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Accordance Architecture"
          className="w-full h-full object-cover grayscale"
        />
        {/* White block overlay for text readability as per Polestar style often used */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-[1080px] mx-auto px-8 md:px-[80px] flex flex-col justify-end pb-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[560px]"
        >
          <h1 className="text-[#0A0A0A] mb-[12px] text-[48px] leading-[1.1] tracking-[-0.04em] font-medium">
            Real Estate. Re-Imagined.
          </h1>
          
          <p className="text-[#2B2B2B] mb-[48px] text-[16px] leading-[1.5]">
            At Accordance, we apply structured methods and distilled insight to optimise commercial and industrial real-estate decisions.
          </p>
          
          <a href="/contact" className="btn-polestar">
            Book a call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
