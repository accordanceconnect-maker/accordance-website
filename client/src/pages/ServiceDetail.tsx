import { motion } from "framer-motion";
import { Link, useRoute } from "wouter";
import { ArrowLeft, Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import advisoryImg from "@assets/generated_images/minimalist_brutalist_concrete_architecture.png";
import managementImg from "@assets/generated_images/abstract_glass_building_detail.png";
import developmentImg from "@assets/generated_images/architectural_model_or_blueprint_abstract.png";

const services = {
  "investment-advisory": {
    name: "Transaction Strategy",
    tagline: "Structuring acquisitions with precision.",
    description: "We structure acquisitions and dispositions with mathematical precision and strategic foresight, ensuring optimal capital deployment.",
    features: [
      "Market Entry Strategy",
      "Financial Modeling",
      "Due Diligence",
      "Deal Structuring"
    ],
    image: advisoryImg
  },
  "asset-management": {
    name: "Statutory & Legal",
    tagline: "Navigating regulatory landscapes.",
    description: "Mitigating risk through comprehensive statutory and legal due diligence, ensuring absolute compliance across all jurisdictions.",
    features: [
      "Regulatory Compliance",
      "Title Verification",
      "Zoning Analysis",
      "Risk Mitigation"
    ],
    image: managementImg
  },
  "development": {
    name: "Valuation & Data",
    tagline: "Data-backed valuation models.",
    description: "Providing expert resolution for complex asset disputes and valuation challenges through rigorous data analysis.",
    features: [
      "Asset Valuation",
      "Dispute Resolution",
      "Market Analytics",
      "Feasibility Studies"
    ],
    image: developmentImg
  }
};

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:id");
  const serviceId = params?.id;
  // Fallback for demo purposes if ID doesn't match exactly
  const service = services[serviceId as keyof typeof services] || services["investment-advisory"];

  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A0A0A] font-sans">
      <Navbar />
      
      <main>
        {/* Header Image */}
        <div className="h-[60vh] w-full relative overflow-hidden bg-[#E6E6E6]">
          <img 
            src={service.image} 
            alt={service.name} 
            className="w-full h-full object-cover grayscale"
          />
          {/* No overlay, just raw image as per "No overlay unless required" - assumes image is suitable */}
          
          <div className="absolute bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-[#E6E6E6] py-12">
            <div className="max-w-[1080px] mx-auto px-8 md:px-[80px]">
                <Link href="/services">
                <a className="inline-flex items-center gap-2 text-[#2B2B2B] hover:text-[#0A0A0A] mb-4 uppercase text-xs tracking-widest font-bold transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Overview
                </a>
                </Link>
                <h1 className="text-[#0A0A0A] mb-2">
                {service.name}
                </h1>
                <p className="text-[18px] text-[#2B2B2B] max-w-2xl">
                {service.tagline}
                </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1080px] mx-auto px-8 md:px-[80px] py-[120px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#0A0A0A] mb-6 text-[32px]">Overview</h2>
              <p className="text-[18px] text-[#2B2B2B] leading-relaxed mb-12">
                {service.description}
              </p>

              <h3 className="text-[24px] font-medium mb-6 text-[#0A0A0A]">Key Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 border-b border-[#E6E6E6] py-4">
                    <div className="bg-[#0A0A0A] text-white rounded-none p-1">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="font-medium text-[#0A0A0A]">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 p-8 border border-[#E6E6E6] bg-white">
              <h3 className="text-[20px] font-medium mb-4 text-[#0A0A0A]">Inquire</h3>
              <p className="text-[14px] text-[#2B2B2B] mb-6">
                Discuss your requirements with our team.
              </p>
              <form className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-transparent border-b border-[#E6E6E6] px-0 py-3 focus:outline-none focus:border-[#0A0A0A] transition-colors placeholder:text-[#2B2B2B]/50 text-[#0A0A0A]"
                />
                <button className="btn-polestar w-full justify-center mt-4">
                  Request Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
