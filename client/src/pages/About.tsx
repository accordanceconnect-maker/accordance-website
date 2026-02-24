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
                  Accordance India Projects is a commercial real estate advisory firm operating across key and emerging commercial corridors in India.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  We advise on commercial, institutional, industrial, and warehousing assets — aligning capital, land, and regulatory position before transactions are undertaken.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  Our role is to reduce uncertainty before capital, reputation, or time is committed.
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
                <li>Understanding intent, capital and scope.</li>
                <li>Mapping logics, feasibility and strategy.</li>
                <li>Aligning assets, terms and timing.</li>
                <li>Executing with long-term defensibility.</li>
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
                <li><span>Deliberate by design. Depth over noise.</span></li>
                <li><span>Not every opportunity is pursued.</span></li>
                <li><span>Documentation over assumptions.</span></li>
                <li><span>Position over promotion.</span></li>
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

              <span className="label">Founder</span>

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
                  Aanjney Cowshik leads Accordance India Projects, a commercial real estate advisory operating across key and emerging corridors in North India.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  With a background in finance as a Chartered Accountant, his work sits at the intersection of capital structure, land strategy, regulatory positioning, and transaction architecture.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  He advises developers, retailers, and institutional operators on decisions where capital exposure and long-term positioning matter.

                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  Deliberate. Structured. Aligned.
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