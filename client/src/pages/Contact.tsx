import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <main className="page-content section-page">

        {/* HEADER */}
        <section className="section-standard">
          <div className="container-polestar contact-header stack-32 content-tight">

            <span className="label">Contact</span>

            <h1>Start the conversation.</h1>

            <p>
              Whether you are evaluating an acquisition, restructuring an
              existing portfolio, or seeking expansion clarity, our team
              is ready to engage.
            </p>

          </div>
        </section>

        {/* BODY */}
        <section className="section-standard section-contact">
          <div className="container-polestar stack-64">

            <div className="contact-layout stack-32">

              {/* LEFT SPINE RAIL */}
              <div />

              {/* FORM COLUMN */}
              <div className="contact-form-column content-tight">

                <form
                  action="https://formspree.io/f/mojdaopa"
                  method="POST"
                  className="stack-32 form-stack"
                >
                  <input type="hidden" name="_redirect" value="/thank-you" />
                  {/* Spam trap */}
                  <input type="text" name="_gotcha" style={{ display: "none" }} />

                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 9876543210"
                      required
                    />
                  </div>

                  <div className="form-checkbox">
                    <input
                      id="whatsapp"
                      name="whatsappAvailable"
                      type="checkbox"
                      value="Yes"
                    />
                    <label htmlFor="whatsapp">
                      This number is available on WhatsApp
                    </label>
                  </div>

                  <div className="form-field">
                    <label htmlFor="client-type">Client Type</label>
                    <select id="client-type" name="clientType" required>
                      <option value="">Select</option>
                      <option>Retail / Commercial</option>
                      <option>Institutional / Corporate</option>
                      <option>Developer</option>
                      <option>Industrial Operator</option>
                      <option>Institutional Investor / Fund</option>
                      <option>Family Office / Private Capital</option>
                      <option>Individual Investor / HNI</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="intent">Transaction Intent</label>
                    <select id="intent" name="transactionIntent" required>
                      <option value="">Select</option>
                      <option>Acquisition</option>
                      <option>Divestment</option>
                      <option>Lease Structuring</option>
                      <option>Advisory & Structuring</option>
                      <option>International Real Estate Investment</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="communication">Preferred Communication</label>
                    <select
                      id="communication"
                      name="preferredCommunication"
                      required
                    >
                      <option value="">Select</option>
                      <option>Call</option>
                      <option>Email</option>
                      <option>WhatsApp</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Briefly outline the mandate context"
                    />
                  </div>

                  {/* CTA */}
                  <button type="submit" className="cta cta-form">
                    Submit mandate inquiry
                  </button>

                </form>

              </div>

            </div>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}