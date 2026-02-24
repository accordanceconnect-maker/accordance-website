import { Link } from "wouter";

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
            We structure commercial, industrial, and institutional real estate decisions with discipline, capital awareness, and execution rigor.
            </p>
          </div>

          {/* CTA */}
          <Link href="/contact" className="cta">
            Initiate a Conversation
          </Link>

        </div>
      </div>
    </section>
  );
}