import { motion } from "framer-motion";
import aboutImg from "@assets/generated_images/architectural_model_or_blueprint_abstract.png";

export function AboutSection() {
  return (
    <section className="py-[120px] bg-[#F5F5F5]">
      <div className="max-w-[1080px] mx-auto px-8 md:px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Left Column: Text */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0A0A0A] mb-6">
              Clarity in Every Square Foot.
            </h2>
            <p className="text-[#2B2B2B]">
              At Accordance India Projects, we translate complex land, statutory, and valuation challenges into structured, actionable decisions.
            </p>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] w-full"
          >
            <img 
              src={aboutImg} 
              alt="Accordance Structure" 
              className="w-full h-full object-cover grayscale"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
