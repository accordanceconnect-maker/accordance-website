import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#F5F5F5] pt-[60px] pb-[60px] border-t border-[#E6E6E6]">
      <div className="max-w-[1080px] mx-auto px-8 md:px-[80px] grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Column 1: Copyright/Branding */}
        <div className="flex flex-col justify-between h-full">
           <div className="text-[12px] text-[#2B2B2B] font-medium uppercase tracking-wider mb-4">
             Accordance India Projects
           </div>
           <p className="text-[12px] text-[#2B2B2B]">
             © {new Date().getFullYear()} Accordance. All rights reserved.
           </p>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col gap-2 md:items-start">
           <Link href="/services"><a className="text-[12px] text-[#2B2B2B] hover:opacity-70 transition-opacity">Services</a></Link>
           <Link href="/about"><a className="text-[12px] text-[#2B2B2B] hover:opacity-70 transition-opacity">About</a></Link>
           <Link href="/contact"><a className="text-[12px] text-[#2B2B2B] hover:opacity-70 transition-opacity">Contact</a></Link>
           <a href="#" className="text-[12px] text-[#2B2B2B] hover:opacity-70 transition-opacity mt-4">LinkedIn</a>
        </div>

      </div>
    </footer>
  );
}
