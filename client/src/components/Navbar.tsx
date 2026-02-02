import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Auto-close mobile menu when switching to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar">
      <div className="container-polestar navbar-inner">

        {/* Brand */}
        <div className="brand">
          <Link href="/">Accordance</Link>
        </div>

        {/* Desktop Navigation (never touched by mobile logic) */}
        <nav className="nav-links desktop-only">
          <Link href="/services">Advisory</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/contact">Engage</Link>
        </nav>

        {/* Mobile Hamburger (CSS controls visibility) */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setOpen(prev => !prev)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="mobile-menu">
          <Link href="/services" onClick={() => setOpen(false)}>Advisory</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/insights" onClick={() => setOpen(false)}>Insights</Link>
          <Link href="/questions" onClick={() => setOpen(false)}>Questions</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Engage</Link>
        </div>
      )}
    </header>
  );
}