import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="about-page">
        <main className="page-content">

          {/* INTRO */}
          <section className="section-standard">
            <div className="container-polestar stack-32">

              <span className="label">About</span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Clarity precedes commitment.
              </motion.h2>

              <div className="about-intro-copy stack-24">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  Accordance India Projects is a mandate–based real estate advisory
                  working across commercial, industrial, institutional, and
                  warehousing assets in India. Our work sits at the intersection
                  of capital, land, regulation and disciplined execution.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  We operate as an advisory partner where clarity, statutory
                  certainty and transaction structure determine outcomes. Our
                  role is to reduce uncertainty before capital, reputation or
                  time is committed.
                </motion.p>
              </div>

            </div>
          </section>

          {/* WAY OF WORKING — LEDGER */}
          <section className="section-standard">
            <div className="container-polestar stack-32">

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                Our way of working
              </motion.h2>

              <ol className="about-ledger">
                <li>Every decision balances regulation, capital and long-term operating fit.</li>
                <li>Mandate discipline provides structure before negotiation begins.</li>
                <li>Statutory clarity and documentation reduce execution risk.</li>
                <li>Real estate decisions are engineered, not improvised.</li>
              </ol>

            </div>
          </section>

          {/* PRINCIPLES — LEDGER */}
          <section className="section-standard">
            <div className="container-polestar stack-32">

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                Principles that anchor our work
              </motion.h2>

              <ol className="about-principles-ledger">
                <li><span>Long-term alignment over short-term optimisation.</span></li>
                <li><span>Mandate discipline guides execution.</span></li>
                <li><span>Statutory clarity before negotiation.</span></li>
                <li><span>Documentation over assumption.</span></li>
                <li><span>Precision over promotion.</span></li>
              </ol>

            </div>
          </section>

          {/* WHO WE WORK WITH */}
          <section className="section-standard">
            <div className="container-polestar stack-32">

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                Who we work with
              </motion.h2>

              <div className="who-we-work-with-grid">
                <div className="who-column">
                  <div className="who-item">Retail &amp; Consumer Businesses</div>
                  <div className="who-item">Industrial &amp; Manufacturing</div>
                  <div className="who-item">Institutional Buyers</div>
                </div>

                <div className="who-column">
                  <div className="who-item">Private Investors</div>
                  <div className="who-item">Developers</div>
                  <div className="who-item">Corporates</div>
                </div>
              </div>

            </div>
          </section>

          {/* LEADERSHIP */}
          <section className="section-standard">
            <div className="container-polestar stack-32">

              <span className="label">Leadership</span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                Leadership
              </motion.h2>

              <div className="about-intro-copy stack-24">

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  Aanjney Cowshik leads Accordance India Projects, a commercial real estate advisory firm operating across Delhi-NCR and expanding across North India.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  With an educational background in Finance as a Chartered Accountant, his work focuses on mandate-driven commercial land transactions, retail expansion alignment, developer asset monetisation, and structured regulatory due diligence.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  Accordance operates across Gurgaon, New Gurgaon, Dwarka Expressway, Noida, Faridabad, and emerging North Indian corridors, advising developers, retailers, and institutional operators on capital-aligned real estate decisions.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  Execution-led. Structurally disciplined. Institution-focused.
                </motion.p>

              </div>

            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}