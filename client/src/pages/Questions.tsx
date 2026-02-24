import { Link } from "wouter";
import Navbar from "@/components/Navbar";
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

            <span className="label">Architecture</span>

            <h1>Understanding Accordance</h1>

            <div className="reading-column">
              <p>
               Direct responses to common questions about our engagement structure, transaction handling, and execution scope.
              </p>
            </div>

            <Link to="/contact" className="chevron-cta">
              Contact us
            </Link>

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