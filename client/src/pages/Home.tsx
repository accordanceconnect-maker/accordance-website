import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { FAQSection } from "@/components/FAQSection";
import { Features } from "@/components/Features";

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
      
      <footer className="bg-black text-white py-24 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
                <h3 className="text-2xl font-bold tracking-tighter uppercase mb-8">Nordic Estate</h3>
            </div>
            
            <div className="space-y-4">
                <h4 className="font-bold uppercase text-sm tracking-widest text-neutral-500">Practice</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                    <li><a href="/services/investment-advisory" className="hover:text-white transition-colors">Investment</a></li>
                    <li><a href="/services/asset-management" className="hover:text-white transition-colors">Asset Management</a></li>
                    <li><a href="/services/development" className="hover:text-white transition-colors">Development</a></li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold uppercase text-sm tracking-widest text-neutral-500">Firm</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                    <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="/contact" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold uppercase text-sm tracking-widest text-neutral-500">Connect</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                    <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-[1800px] mx-auto mt-24 pt-8 border-t border-neutral-800 text-xs text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2025 Nordic Estate Advisory AB. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
                <a href="#" className="hover:text-neutral-300">Terms of Service</a>
            </div>
        </div>
      </footer>
    </div>
  );
}
