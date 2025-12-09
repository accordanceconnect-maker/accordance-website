import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] selection:bg-[#E6E6E6] selection:text-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <ServicesGrid />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
