import { motion } from "framer-motion";
import detailImg from "@assets/generated_images/electric_car_charging_port_detail.png";

export function Features() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-[1800px] mx-auto">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <span className="text-foreground font-bold tracking-widest uppercase text-xs mb-6 block">
            Innovation
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Sustainable performance. <br />
            Without compromise.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 max-w-xl">
            We are determined to improve the society we live in by accelerating the change to a fully electric, climate-neutral future. 
            Design is our tool to create a better world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <h4 className="text-xl font-bold mb-2">Climate Neutral</h4>
              <p className="text-muted-foreground text-sm">Targeting a climate-neutral car by 2030, without offsetting.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Material Innovation</h4>
              <p className="text-muted-foreground text-sm">Using flax composites and recycled PET bottles for interiors.</p>
            </div>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-1 lg:order-2 relative aspect-[4/3] w-full"
        >
          <img 
            src={detailImg} 
            alt="Polestar Detail" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
