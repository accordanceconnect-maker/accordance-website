import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_brutalist_concrete_architecture.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image with Parallax-like scale */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <img
          src={heroBg}
          alt="Nordic Estate Hero"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradient Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32 max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="block text-sm md:text-base font-medium tracking-widest uppercase mb-6 text-white/90 border-l-2 border-white pl-4">
            Global Real Estate Advisory
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-balance drop-shadow-xl">
            Curating the exceptional.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <button className="group flex items-center gap-3 text-lg font-medium hover:text-gray-300 transition-colors">
              Explore Portfolio
              <span className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
            <button className="group flex items-center gap-3 text-lg font-medium hover:text-gray-300 transition-colors">
              Advisory Services
              <span className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
