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
              Engage on active requirements.
            </h2>

            <p>
            We are active across retail leasing and land transactions in NCR corridors, working with brands, developers, and capital on live requirements.
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