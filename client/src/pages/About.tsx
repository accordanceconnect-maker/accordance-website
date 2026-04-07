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
                In-market. Transaction-led.
              </motion.h2>

              <div className="about-intro-copy stack-24">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  Accordance India operates across retail leasing and land transactions within active commercial corridors in North India.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  We work with brands, developers, and investors, aligning site selection, commercial terms, and transaction structure.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  Engagements are carried through evaluation, alignment, and execution with clarity on outcome.
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
                <li>Evaluate corridors, sites, and transaction fit.</li>
                <li>Align commercial terms and structure.</li>
                <li>Coordinate stakeholders and documentation.</li>
                <li>Execute through to closure.</li>
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
                <li><span>Alignment before commitment.</span></li>
                <li><span>Structure before negotiation.</span></li>
                <li><span>Execution over intent.</span></li>
                <li><span>Documentation over assumption.</span></li>
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
                  Aanjney Cowshik leads Accordance India, working across retail leasing and land transactions in North India.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  His work focuses on aligning capital, land, and transaction structure across developer, retail, and investor mandates.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  Engagements involve site evaluation, commercial alignment, and execution across active corridors.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  Execution-led. Structurally aligned.
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