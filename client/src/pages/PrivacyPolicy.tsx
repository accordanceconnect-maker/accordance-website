import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <main className="page-content section-page">

        {/* HEADER — SPINE LOCKED */}
        <section className="section-standard">
          <div className="container-polestar">
            <div className="reading-column stack-32">

              <span className="label">Legal</span>

              <h1>Privacy Policy</h1>

              <p>
                This Privacy Policy explains how Accordance India Projects
                collects, uses, and protects personal information when you
                interact with our website and services.
              </p>

            </div>
          </div>
        </section>

        {/* BODY — EDITORIAL COLUMN */}
        <section className="section-standard">
          <div className="container-polestar">
            <div className="reading-column stack-32">

              <h2>Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email
                address, phone number, organisation details, and inquiry content
                when you submit forms or communicate with us.
              </p>

              <h2>How We Use Information</h2>
              <p>
                Information collected is used strictly to respond to inquiries,
                manage mandates, improve service delivery, and maintain
                operational communication. We do not sell or trade personal
                data.
              </p>

              <h2>Data Storage and Security</h2>
              <p>
                We implement reasonable technical and organisational safeguards
                to protect data from unauthorised access, misuse, or loss.
                However, no online transmission is fully risk-free.
              </p>

              <h2>Cookies and Analytics</h2>
              <p>
                Our website may use cookies and analytics tools to understand
                usage behaviour and improve performance. These tools do not
                collect personally identifiable financial or transactional
                information.
              </p>

              <h2>Third-Party Disclosure</h2>
              <p>
                We do not share personal information with third parties except
                where required by law or where operational delivery of a mandate
                requires controlled professional disclosure.
              </p>

              <h2>Your Rights</h2>
              <p>
                You may request access, correction, or deletion of personal
                information by contacting us directly. Requests are handled
                subject to legal and regulatory obligations.
              </p>

              <h2>Policy Updates</h2>
              <p>
                This policy may be updated periodically. Continued use of this
                website constitutes acceptance of the latest version.
              </p>

              <h2>Contact</h2>
              <p>
                For privacy-related concerns, contact Accordance India Projects
                through the official contact page.
              </p>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}