import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import carSide from "@assets/side_profile_of_performance_electric_car.png";
import carInterior from "@assets/minimalist_car_interior_dashboard.png";

const cars = [
  {
    name: "Polestar 2",
    tagline: "The 100% electric fastback.",
    image: carSide,
    price: "From $49,900",
    features: ["476 hp", "0-60 mph in 4.2s", "300+ mi range"],
    theme: "light",
  },
  {
    name: "Polestar 3",
    tagline: "The SUV for the electric age.",
    image: carInterior, // Using interior as placeholder for variety
    price: "From $83,900",
    features: ["517 hp", "LiDAR capable", "Bowers & Wilkins"],
    theme: "dark",
  },
];

export function CarGrid() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Models</h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Pure design. Pure performance. Sustainable materials and advanced technology in harmony.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {cars.map((car, index) => (
            <motion.div
              key={car.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-10%" }}
              className="group relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900"
            >
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-105">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>

              <div className={`absolute top-0 left-0 p-8 md:p-16 w-full ${car.theme === 'light' ? 'text-black' : 'text-white'}`}>
                <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-2">{car.name}</h3>
                <p className="text-lg md:text-xl font-medium opacity-90 mb-8">{car.tagline}</p>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-auto">
                  <button className="bg-transparent border border-current px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-current hover:text-background transition-all duration-300">
                    Configure
                  </button>
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                    Discover <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className={`absolute bottom-0 right-0 p-8 md:p-16 hidden md:flex gap-12 ${car.theme === 'light' ? 'text-black' : 'text-white'}`}>
                {car.features.map((feature) => (
                    <div key={feature} className="flex flex-col">
                        <span className="text-2xl font-bold">{feature.split(' ').slice(0,1).join('')}</span>
                        <span className="text-xs font-bold uppercase tracking-widest opacity-70">{feature.split(' ').slice(1).join(' ')}</span>
                    </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
