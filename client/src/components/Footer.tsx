import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-black text-white py-24 px-6 md:px-12 border-t border-neutral-900">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold tracking-tighter uppercase mb-8">Accordance</h3>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase text-sm tracking-widest text-neutral-500">Practice</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li><Link href="/services/investment-advisory"><a className="hover:text-white transition-colors">Investment</a></Link></li>
            <li><Link href="/services/asset-management"><a className="hover:text-white transition-colors">Asset Management</a></Link></li>
            <li><Link href="/services/development"><a className="hover:text-white transition-colors">Development</a></Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-bold uppercase text-sm tracking-widest text-neutral-500">Firm</h4>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li><Link href="/about"><a className="hover:text-white transition-colors">About Us</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-white transition-colors">Careers</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link></li>
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
        <p>© 2025 Accordance Advisory AB. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
          <a href="#" className="hover:text-neutral-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
