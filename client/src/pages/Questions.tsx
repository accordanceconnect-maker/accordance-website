import  Navbar  from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { QuestionsSection } from "@/components/QuestionsSection";

export default function Questions() {
  return (
    <>
      

      {/* ==========================================================
          QUESTIONS PAGE — SPINE COMPLIANT
         ========================================================== */}

      <main className="questions-page">

        {/* HEADER — SAME CONTRACT AS SERVICES / INSIGHTS */}
        <section className="section-standard">
          <div className="container-polestar stack-32">

            <span className="label">FREQUENTLY ASKED</span>

            <h1>Questions</h1>

            <div className="reading-column">
              <p>
                Clear answers to the questions we are most often asked about our work,
                our approach, and how mandates operate with Accordance.
              </p>
            </div>

            <a href="/contact" className="chevron-cta">
              Contact us
            </a>

          </div>
        </section>

        {/* QUESTIONS CONTENT — LEDGER SYSTEM */}
        <section className="section-standard">
          <div className="container-polestar">
            <QuestionsSection />
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}