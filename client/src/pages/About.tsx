import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AboutSection } from "@/components/AboutSection";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A0A0A] font-sans selection:bg-[#E6E6E6] selection:text-[#0A0A0A]">
      <Navbar />
      
      <main className="pt-[120px] pb-[120px]">
        <div className="max-w-[1080px] mx-auto px-8 md:px-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[800px] mb-[120px]"
          >
             <h1 className="text-[#0A0A0A] mb-8">
              About Accordance.
            </h1>
            <p className="text-[#2B2B2B] text-[18px] leading-relaxed mb-8">
              We are a specialized real estate advisory firm dedicated to bringing engineering-grade precision to the property market. Our team consists of architects, data scientists, and financial analysts who believe that clarity is the ultimate asset.
            </p>
            <p className="text-[#2B2B2B] text-[18px] leading-relaxed">
              Founded on the principles of transparency and rigor, we serve a global clientele of institutional investors, developers, and family offices who demand more than just market sentiment.
            </p>
          </motion.div>
        </div>

        {/* Reuse the About Section component for the visual/statement part */}
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
}
