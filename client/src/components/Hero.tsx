import heroImage from "../assets/images/BlueHero.png";

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
              Mandate-based real estate <br />
              advisory.
            </h1>

            <p className="hero-subline">
              For structured, compliant real estate decisions.
            </p>

            <a href="#contact" className="cta">
              Engage on a mandate
            </a>

          </div>

        </div>
      </div>

    </section>
  );
}