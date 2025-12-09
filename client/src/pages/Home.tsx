import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FAQSection } from "@/components/FAQSection";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-neutral-200 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <Features />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
