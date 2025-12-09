import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import advisoryImg from "@assets/generated_images/minimalist_brutalist_concrete_architecture.png";
import managementImg from "@assets/generated_images/abstract_glass_building_detail.png";
import developmentImg from "@assets/generated_images/architectural_model_or_blueprint_abstract.png";

const services = {
  "investment-advisory": {
    name: "Investment Advisory",
    tagline: "Strategic capital deployment.",
    description: "Our Investment Advisory practice leverages proprietary data analytics and deep market intelligence to identify high-yield acquisition opportunities across global markets. We guide institutional and private capital through the entire investment lifecycle.",
    features: [
      "Market Entry Strategy",
      "Financial Modeling & Valuation",
      "Due Diligence Coordination",
      "Deal Structuring & Negotiation"
    ],
    image: advisoryImg
  },
  "asset-management": {
    name: "Asset Management",
    tagline: "Optimizing portfolio value.",
    description: "We provide comprehensive lifecycle management ensuring sustained appreciation and operational efficiency. Our approach combines rigorous financial discipline with proactive tenant engagement strategies.",
    features: [
      "Operational Optimization",
      "Tenant Mix Strategy",
      "Capital Expenditure Planning",
      "Sustainability Retrofitting"
    ],
    image: managementImg
  },
  "development": {
    name: "Development",
    tagline: "Vision to reality.",
    description: "From conceptualization to delivery, our development consultancy ensures projects are delivered on time, within budget, and to the highest standards of architectural excellence.",
    features: [
      "Feasibility Studies",
      "Design Management",
      "Planning & Zoning",
      "Construction Oversight"
    ],
    image: developmentImg
  }
};

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:id");
  const serviceId = params?.id;
  const service = services[serviceId as keyof typeof services];

  if (!match || !service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/"><a className="text-muted-foreground hover:text-foreground">Return Home</a></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main>
        {/* Header Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="h-[60vh] w-full relative overflow-hidden bg-neutral-900"
        >
          <img 
            src={service.image} 
            alt={service.name} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full">
            <Link href="/">
              <a className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 uppercase text-xs tracking-widest font-bold transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Overview
              </a>
            </Link>
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-2"
            >
              {service.name}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl"
            >
              {service.tagline}
            </motion.p>
          </div>
        </motion.div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Overview</h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
                {service.description}
              </p>

              <h3 className="text-xl font-bold mb-6">Key Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 border-b border-border py-4">
                    <div className="bg-foreground text-background rounded-full p-1">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 bg-neutral-100 dark:bg-neutral-900">
              <h3 className="text-xl font-bold mb-4">Inquire</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Discuss your requirements with our dedicated {service.name.toLowerCase()} team.
              </p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-background border-b border-border px-0 py-3 focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground/50"
                />
                <button className="w-full bg-foreground text-background py-4 font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity mt-4">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
