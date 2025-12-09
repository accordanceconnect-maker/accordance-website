import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/minimalist_brutalist_concrete_architecture.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#F5F5F5]">
      {/* Background Image - Grayscale forced by CSS */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Accordance Architecture"
          className="w-full h-full object-cover"
        />
        {/* No overlay unless required. Let's assume the image might need a slight tint if text is unreadable, 
            but the prompt says "No overlay unless required... use rgba(255,255,255,0.75)". 
            Let's add a subtle white fade at the bottom to ensure the black text pops if the image is dark. 
            Or stick to white text on image?
            
            Prompt says: "Text block positioned lower-left quadrant"
            Usually architectural images are light/grey. If text is black (Monochrome Palette), image needs to be light enough.
            Or text is white. 
            
            Re-reading: "Color Palette... Carbon Black... Neutral 100". 
            If I use black text on a dark image, it fails.
            Let's assume the Hero Image is meant to be a background and the text sits on top.
            Standard Polestar is often text over image.
            Let's try White text for Hero if image is dark, or Black text if image is light.
            The generated image "minimalist_brutalist_concrete_architecture.png" might be darkish.
            
            Let's use the rgba(255,255,255,0.75) overlay mentioned in the prompt to ensure readability of BLACK text (Carbon Black),
            which aligns with the strict color palette.
        */}
         <div className="absolute inset-0 bg-white/20" /> {/* Subtle lighten */}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-[1080px] mx-auto px-8 md:px-[80px] flex flex-col justify-end pb-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[560px] bg-white/75 backdrop-blur-sm p-8 md:p-0 md:bg-transparent md:backdrop-blur-none" // Mobile readability fallback
        >
          <h1 className="text-[#0A0A0A] mb-[12px]">
            Real Estate. Re-Engineered.
          </h1>
          
          <p className="text-[#0A0A0A] mb-[24px]">
            We bring structure, clarity, and precision to commercial, industrial, and institutional real estate decisions.
          </p>
          
          <a href="/contact" className="btn-polestar">
            Book a Consultation &rarr;
          </a>
        </motion.div>
      </div>
    </section>
  );
}
