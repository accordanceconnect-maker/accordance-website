import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Spine breakpoint authority
  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 900);
      if (window.innerWidth > 900) {
        setOpen(false);
      }
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => window.removeEventListener("resize", checkViewport);
  }, []);

  return (
    <header className="navbar">
      <div className="container-polestar navbar-inner">

        {/* Brand */}
        <div className="brand">
          <Link href="/">Accordance</Link>
        </div>

        {/* Desktop navigation (never hidden by JS) */}
        <nav className="nav-links desktop-only">
          <Link href="/services">Advisory</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/contact">Engage</Link>
        </nav>

        {/* Mobile hamburger — rendered ONLY on mobile */}
        {isMobile && (
          <button
            className="mobile-menu-toggle mobile-only"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        )}

      </div>

      {/* Mobile dropdown — structurally isolated */}
      {isMobile && open && (
        <div className="mobile-menu mobile-only">
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