import heroImage from "../assets/images/Accordance Website Hero Image.png";
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
              
            </p>

            <Link href="/contact" className="cta">
              Initiate a Conversation
            </Link>

          </div>

        </div>
      </div>

    </section>
  );
}