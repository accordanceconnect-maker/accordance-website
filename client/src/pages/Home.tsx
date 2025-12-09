import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CarGrid } from "@/components/CarGrid";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-orange-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CarGrid />
        <Features />
      </main>
      
      <footer className="bg-black text-white py-24 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1">
                <h3 className="text-2xl font-bold tracking-tighter uppercase mb-8">Polestar</h3>
            </div>
            
            <div className="space-y-4">
                <h4 className="font-bold uppercase text-sm tracking-widest text-neutral-500">Polestar</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                    <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Polestar 2</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Polestar 3</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Precept</a></li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold uppercase text-sm tracking-widest text-neutral-500">Support</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                    <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
                </ul>
            </div>

            <div className="space-y-4">
                <h4 className="font-bold uppercase text-sm tracking-widest text-neutral-500">Social</h4>
                <ul className="space-y-2 text-sm text-neutral-300">
                    <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">YouTube</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-[1800px] mx-auto mt-24 pt-8 border-t border-neutral-800 text-xs text-neutral-500 flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2024 Polestar Performance AB. All rights reserved.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-neutral-300">Privacy</a>
                <a href="#" className="hover:text-neutral-300">Legal</a>
                <a href="#" className="hover:text-neutral-300">Cookies</a>
            </div>
        </div>
      </footer>
    </div>
  );
}
