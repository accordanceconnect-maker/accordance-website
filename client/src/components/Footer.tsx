import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-white pt-[60px] pb-[60px] border-t border-[#E6E6E6] text-left">
      <div className="max-w-[1080px] mx-auto px-8 md:px-[80px] grid grid-cols-1 md:grid-cols-2 gap-[48px]">
        
        {/* Column 1: Branding */}
        <div className="flex flex-col gap-[12px]">
           <div className="text-[16px] text-[#0A0A0A] font-medium">
             Accordance
           </div>
           <p className="text-[16px] text-[#2B2B2B] max-w-[300px]">
             Real-Estate Advisory for Commercial, Industrial & Institutional Clients
           </p>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col gap-[12px]">
           <div className="text-[16px] text-[#0A0A0A] font-medium mb-2">
             Links
           </div>
           <Link href="/"><a className="text-[16px] text-[#2B2B2B] hover:opacity-70 transition-opacity">Home</a></Link>
           <Link href="/services"><a className="text-[16px] text-[#2B2B2B] hover:opacity-70 transition-opacity">Services</a></Link>
           <Link href="/about"><a className="text-[16px] text-[#2B2B2B] hover:opacity-70 transition-opacity">About</a></Link>
           <Link href="/contact"><a className="text-[16px] text-[#2B2B2B] hover:opacity-70 transition-opacity">Contact</a></Link>
        </div>

      </div>
      
      <div className="max-w-[1080px] mx-auto px-8 md:px-[80px] mt-[60px]">
         <p className="text-[12px] text-[#2B2B2B]">
           © Accordance India Projects. All rights reserved.
         </p>
      </div>
    </footer>
  );
}
