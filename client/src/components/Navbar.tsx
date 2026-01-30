import { Link } from "wouter";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container-polestar navbar-inner">

        <div className="brand">
          <Link href="/">Accordance</Link>
        </div>

        {/* Desktop navigation (unchanged spine) */}
        <nav className="nav-links desktop-only">
          <Link href="/services">Advisory</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/contact">Engage</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-toggle mobile-only"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

      </div>

      {/* Mobile dropdown */}
      {open && (
        <nav className="mobile-menu mobile-only">
          <Link href="/services">Advisory</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/contact">Engage</Link>
        </nav>
      )}
    </header>
  );
}