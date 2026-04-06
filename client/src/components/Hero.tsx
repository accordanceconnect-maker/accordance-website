import heroImage from "../assets/images/BlueHero.png";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-heading">
      
      {/* Background media */}
      <img
        src={heroImage}
        alt=""
        className="hero-image"
        loading="eager"
        decoding="async"
      />

      {/* Content layer */}
      <div className="hero-inner">
        <div className="container-polestar">
          
          {/* Spine width guard for mobile */}
          <div className="reading-column">

            <h1 id="hero-heading">
              Retail. Land. Transactions — <br /> structured to close.
            </h1>

            <p className="hero-subline">
              Active across New Gurgaon, Dwarka Expressway, and emerging NCR corridors — aligning brands, developers, and capital in live transactions.
            </p>

            <div className="hero-signals">
              <p>Current Focus:</p>
              <p>New Gurgaon · Dwarka Expressway · Retail (1000–2000 sq ft) · Select Land Corridors</p>
            </div>

            <Link href="/contact" className="cta">
              Initiate a Conversation
            </Link>

          </div>

        </div>
      </div>

    </section>
  );
}