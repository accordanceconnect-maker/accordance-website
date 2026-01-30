import { Link } from "wouter";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container-polestar navbar-inner">

        {/* Brand */}
        <div className="brand">
          <Link href="/">Accordance</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-only">
          <Link href="/services">Advisory</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/contact">Engage</Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="mobile-only">
          <button
            className="mobile-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/services" onClick={() => setMenuOpen(false)}>Advisory</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/insights" onClick={() => setMenuOpen(false)}>Insights</Link>
          <Link href="/questions" onClick={() => setMenuOpen(false)}>Questions</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Engage</Link>
        </div>
      )}

    </header>
  );
}