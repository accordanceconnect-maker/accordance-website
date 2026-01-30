import { Link } from "wouter";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close mobile menu automatically on desktop resize
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth > 900) {
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
        <nav className="nav-links desktop-only">
          <Link href="/services">Advisory</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/contact">Engage</Link>
        </nav>

        {/* Mobile hamburger */}
        <div className="mobile-only">
          <button
            className="mobile-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

      </div>

      {/* Mobile dropdown menu */}
      {open && (
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