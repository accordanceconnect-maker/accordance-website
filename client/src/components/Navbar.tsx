import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect viewport once + on resize
  useEffect(() => {
    const checkViewport = () => {
      const mobile = window.innerWidth <= 900;
      setIsMobile(mobile);

      // Force-close menu if switching to desktop
      if (!mobile) {
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

        {/* Desktop Navigation — spine untouched */}
        <nav className="nav-links desktop-only">
          <Link href="/services">Advisory</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/contact">Engage</Link>
        </nav>

        {/* Mobile Hamburger — DOM guarded */}
        {isMobile && (
          <button
            className="mobile-menu-toggle"
            onClick={() => setOpen(prev => !prev)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        )}

      </div>

      {/* Mobile Dropdown Menu */}
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