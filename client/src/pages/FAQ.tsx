import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { FAQSection } from "@/components/FAQSection";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      
      <main className="pt-32">
        <div className="px-6 md:px-12 max-w-[1200px] mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <span className="block text-sm font-medium tracking-widest uppercase mb-4 text-muted-foreground">
              Support
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-balance">
              Frequently Asked Questions.
            </h1>
          </motion.div>
        </div>
        
        {/* Reusing the FAQ component but removing its internal padding since we handle layout here */}
        <div className="-mt-12">
            <FAQSection />
        </div>
      </main>
    </div>
  );
}
