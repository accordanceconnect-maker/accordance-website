import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ease-in-out h-[72px] flex items-center border-b border-transparent",
          (isScrolled || isMobileMenuOpen) ? "bg-white border-neutral-300" : "bg-transparent"
        )}
      >
        <div className="w-full max-w-[1080px] mx-auto px-8 md:px-[80px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className={cn(
              "text-[18px] font-medium tracking-tight z-50 relative transition-colors",
              (isScrolled || isMobileMenuOpen || location !== "/") ? "text-[#0A0A0A]" : "text-white" // Assuming hero text needs to be white initially if over image, but strictly guidelines say monochrome. If hero image is grayscale, black text might be hard to read unless image is light.
              // Let's stick to black text if background becomes white, otherwise mix.
              // Guideline: "Height: 72px, no background unless scrolled -> then solid white"
              // Color of text isn't explicitly defined for transparent state, but typically white on dark img or black on light.
              // Let's assume white on transparent hero, black on white bg.
            )}>
              Accordance
            </a>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <a className={cn(
                  "text-[14px] font-normal transition-opacity hover:opacity-70",
                   (isScrolled || location !== "/") ? "text-[#2B2B2B]" : "text-white/80"
                )}>
                  {link.name}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden z-50 p-2",
               (isScrolled || isMobileMenuOpen || location !== "/") ? "text-[#0A0A0A]" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-40 flex flex-col pt-[100px] px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <a
                    className="text-[24px] font-medium text-[#0A0A0A]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
