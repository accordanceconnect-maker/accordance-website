import { Link } from "wouter";
export function Footer() {
  return (
    <footer
      className="footer"
      aria-labelledby="footer-heading"
      role="contentinfo"
    >
      <div className="container-polestar">
        <div className="footer-grid">

          {/* BRAND / POSITIONING */}
          <div className="footer-col brand">
            <h2 id="footer-heading" className="footer-brand">
              Accordance India Projects
            </h2>

            <p>
              Mandate-based real estate advisory supporting structured <br />
              decision-making across land, assets and capital allocation.
            </p>

            <div className="footer-contact">
              <a
                className="footer-link footer-email"
                href="mailto:connect@accordanceindia.com"
              >
                connect@accordanceindia.com
              </a>
            </div>

            <div className="footer-contact-spacer" />
          </div>

          {/* SOCIALS */}
          <div className="footer-col socials">
            <h3
              className="footer-heading"
              id="footer-social-heading"
            >
              Socials
            </h3>

            <nav
              className="footer-nav"
              aria-labelledby="footer-social-heading"
            >
              <div className="footer-links">
                <a
                  className="footer-link"
                  href="https://www.instagram.com/accordanceindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>

                <a
                  className="footer-link"
                  href="https://www.linkedin.com/company/accordanceindia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </nav>
          </div>

          {/* NAVIGATION */}
          <div className="footer-col navigate">
            <h3
              className="footer-heading"
              id="footer-nav-heading"
            >
              Navigate
            </h3>

            <nav
              className="footer-nav"
              aria-labelledby="footer-nav-heading"
            >
              <div className="footer-links">
                <Link className="footer-link" to="/">Home</Link>
                <Link className="footer-link" to="/services">Advisory</Link>
                <Link className="footer-link" to="/about">About</Link>
                <Link className="footer-link" to="/insights">Insights</Link>
                <Link className="footer-link" to="/contact">Engage</Link>
              </div>
            </nav>
          </div>

        </div>

        <div className="footer-separator" />

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <div className="footer-copy footer-copy-spaced">
            © 2025 Accordance India Projects. All rights reserved.
          </div>

          <nav
            className="footer-legal"
            aria-label="Legal"
          >
            {/* WORKING PRIVACY LINK */}
            <Link to="/privacy-policy">Privacy Policy</Link>

            {/* Reserved for legal page */}
            
          </nav>
        </div>

      </div>
    </footer>
  );
}