import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#0A0A0A] font-sans">
      <Navbar />
      
      <main className="pt-[120px]">
        <div className="px-8 md:px-[80px] max-w-[1080px] mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="block text-sm font-medium tracking-widest uppercase mb-4 text-[#2B2B2B]">
              Support
            </span>
            <h1 className="text-[#0A0A0A] mb-8">
              Questions & Answers.
            </h1>
          </motion.div>
        </div>
        
        <div className="-mt-[80px]"> {/* Pull up slightly to merge visually */}
            <FAQSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
