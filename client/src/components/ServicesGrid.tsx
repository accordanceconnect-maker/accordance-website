import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import advisoryImg from "@assets/generated_images/minimalist_brutalist_concrete_architecture.png";
import managementImg from "@assets/generated_images/abstract_glass_building_detail.png";
import developmentImg from "@assets/generated_images/architectural_model_or_blueprint_abstract.png";

const services = [
  {
    id: "investment-advisory",
    name: "Investment Advisory",
    tagline: "Strategic capital deployment.",
    description: "Data-driven market analysis for high-yield asset acquisition across global markets.",
    image: advisoryImg,
    theme: "light",
  },
  {
    id: "asset-management",
    name: "Asset Management",
    tagline: "Optimizing portfolio value.",
    description: "Lifecycle management ensuring sustained appreciation and operational efficiency.",
    image: managementImg,
    theme: "dark",
  },
  {
    id: "development",
    name: "Development",
    tagline: "Vision to reality.",
    description: "End-to-end project consultancy from conceptualization to delivery.",
    image: developmentImg,
    theme: "light",
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Expertise</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Uncompromising guidance for the world's most discerning investors.
            </p>
          </div>
          <Link href="/services">
            <a className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">
              View All Services <ArrowRight className="w-4 h-4" />
            </a>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <Link key={service.id} href={`/services/${service.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-10%" }}
                className="group relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 cursor-pointer"
              >
                {/* Image Container with Zoom Effect */}
                <div className="absolute inset-0 transition-transform duration-1000 ease-out group-hover:scale-105">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                {/* Content Overlay */}
                <div className={`absolute top-0 left-0 p-8 md:p-12 w-full h-full flex flex-col justify-between ${service.theme === 'light' ? 'text-black' : 'text-white'}`}>
                  
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2 group-hover:translate-x-2 transition-transform duration-500">{service.name}</h3>
                      <p className="text-lg md:text-xl font-medium opacity-80">{service.tagline}</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="max-w-md translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <p className="text-base md:text-lg leading-relaxed font-medium">
                      {service.description}
                    </p>
                    <span className="inline-block mt-6 text-xs font-bold uppercase tracking-widest border-b border-current pb-1">
                      Read More
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
