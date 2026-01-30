import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handler = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);

      // Kill mobile menu instantly when switching to desktop
      if (!mobile) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <header className="navbar">
      <div className="container-polestar navbar-inner">

        {/* Brand */}
        <div className="brand">
          <Link href="/">Accordance</Link>
        </div>

        {/* Desktop navigation */}
        {!isMobile && (
          <nav className="nav-links">
            <Link href="/services">Advisory</Link>
            <Link href="/about">About</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/questions">Questions</Link>
            <Link href="/contact">Engage</Link>
          </nav>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            className="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        )}

      </div>

      {/* Mobile dropdown */}
      {isMobile && open && (
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