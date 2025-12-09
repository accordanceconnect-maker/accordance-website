import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Polestar 2", href: "#" },
  { name: "Polestar 3", href: "#" },
  { name: "Polestar 4", href: "#" },
  { name: "Polestar 5", href: "#" },
  { name: "02 Concept", href: "#" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 md:px-12 py-6 flex items-center justify-between",
          isScrolled || isMobileMenuOpen ? "bg-background text-foreground" : "bg-transparent text-white"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <Link href="/">
          <a className="text-2xl font-bold tracking-tighter uppercase z-50 relative">
            Polestar
          </a>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
            >
              {link.name}
            </a>
          ))}
          <div className="h-4 w-[1px] bg-current opacity-30 mx-2" />
          <a href="#" className="text-sm font-medium hover:opacity-70 transition-opacity">
            Log in
          </a>
          <button className="ml-4 p-2 hover:bg-foreground/5 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-background z-40 flex flex-col pt-32 px-6"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-3xl font-bold tracking-tight flex items-center justify-between group"
                >
                  {link.name}
                  <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-auto mb-12 flex flex-col gap-4 border-t pt-8"
            >
               <a href="#" className="text-lg font-medium">Log in</a>
               <a href="#" className="text-lg font-medium text-muted-foreground">Support</a>
               <a href="#" className="text-lg font-medium text-muted-foreground">United States</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
