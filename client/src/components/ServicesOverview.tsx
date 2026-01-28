// client/src/components/ServicesOverview.tsx
import { motion } from "framer-motion";

export function ServicesOverview() {
  return (
    <section aria-labelledby="services-heading">
      <div className="with-cta">

        {/* Section Heading */}
        <span className="label">Services</span>
        <h2 id="services-heading" className="section-heading">What we enable</h2>

        {/* Services Grid */}
        <div className="services-grid">

          <motion.div
            className="service-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="service-title">Expansion Strategy</h3>
            <p>
              Decision architecture for site selection, feasibility and acquisition sequencing.
              Location logic, access, logistics and operating constraints are resolved.
            </p>
          </motion.div>

          <motion.div
            className="service-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.06 }}
          >
            <h3 className="service-title">Regulatory Clarity</h3>
            <p>
              Title certainty and statutory diagnostics that surface zoning, compliance and
              ownership risk early.
            </p>
          </motion.div>

          <motion.div
            className="service-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.12 }}
          >
            <h3 className="service-title">Capital View</h3>
            <p>
              Clear thinking and valuation<br />
              discipline test pricing logic<br />
              and align capital.
            </p>
          </motion.div>

        </div>

        {/* Thesis Block */}
        <div className="thesis-block services-thesis">
          <h3>Advisory, not brokerage.</h3>

          <p>
            Structure precedes capital. We remove uncertainty before price, timelines or
            reputation are risked.
          </p>

          <a
            className="chevron-cta animated-cta"
            href="/services"
            aria-label="View Advisory Services"
          >
            View Advisory
          </a>
        </div>

      </div>
    </section>
  );
}

export default ServicesOverview;