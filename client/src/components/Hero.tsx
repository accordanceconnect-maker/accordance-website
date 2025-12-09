import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import heroBg from "@assets/generated_images/minimalist_electric_car_in_snowy_landscape.png";

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
          alt="Polestar Hero"
          className="w-full h-full object-cover opacity-90"
        />
        {/* Gradient Overlay for Text Contrast */}
        {/* Top gradient protects the white navbar */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent" />
        {/* Bottom gradient protects the white hero text */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-24 md:pb-32 max-w-[1800px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="block text-sm md:text-base font-medium tracking-widest uppercase mb-4 text-white/90">
            Polestar 3
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-balance drop-shadow-2xl">
            The SUV for the electric age.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <button className="group flex items-center gap-2 text-lg font-medium hover:text-gray-300 transition-colors">
              Discover
              <span className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
            <button className="group flex items-center gap-2 text-lg font-medium hover:text-gray-300 transition-colors">
              Configure
              <span className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
