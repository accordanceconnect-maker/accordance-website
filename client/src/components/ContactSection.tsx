export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-standard"
      aria-labelledby="contact-heading"
    >
      <div className="container-polestar">
        <div className="stack-32">

          {/* Heading */}
          <div className="stack-16">
            <h2 id="contact-heading">
              Engagement begins with clarity.
            </h2>

            <p>
              We take on a limited number of mandates where structure,
              statutory discipline and execution rigor are decisive.
            </p>
          </div>

          {/* CTA */}
          <a href="/contact" className="cta">
            Request a mandate discussion
          </a>

        </div>
      </div>
    </section>
  );
}