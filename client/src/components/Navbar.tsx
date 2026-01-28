import { Link } from "wouter";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container-polestar navbar-inner">

        <div className="brand">
          <Link href="/">Accordance</Link>
        </div>

        <nav className="nav-links">
          <Link href="/services">Advisory</Link>
          <Link href="/about">About</Link>
          <Link href="/insights">Insights</Link>
          <Link href="/questions">Questions</Link>
          <Link href="/contact">Engage</Link>
        </nav>

      </div>
    </header>
  );
}