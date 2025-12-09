import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { AboutSection } from "@/components/AboutSection";
import { CapabilitiesSnapshot } from "@/components/CapabilitiesSnapshot";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#E6E6E6] selection:text-[#0A0A0A]">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <AboutSection />
        <CapabilitiesSnapshot />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
