// client/src/components/ServicesOverview.tsx
import { motion } from "framer-motion";

export function ServicesOverview() {
  return (
    <section aria-labelledby="services-heading">
      <div className="with-cta">

        {/* Section Heading */}
        <span className="label">Services</span>
        <h2 id="services-heading" className="section-heading">What we execute</h2>

        {/* Services Grid */}
        <div className="services-grid">

          <motion.div
            className="service-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="service-title">Retail Leasing</h3>
            <p>
              We align brands to active commercial corridors, identifying and evaluating sites based on format fit, catchment strength, and commercial viability.
              Engagement includes site selection, commercial terms, and transaction support through closure.
            </p>
          </motion.div>

          <motion.div
            className="service-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.06 }}
          >
            <h3 className="service-title">Land Transactions</h3>
            <p>
              We work with developers and investors on acquisition, positioning, and exit alignment across active land corridors.
              Transactions are structured with clarity on use, pricing logic, and execution pathway.
            </p>
          </motion.div>

          <motion.div
            className="service-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.12 }}
          >
            <h3 className="service-title">Structuring</h3>
            <p>
              We integrate legal, statutory, and commercial structure into transactions, ensuring alignment before execution.
              Documentation, compliance, and deal terms are resolved as part of the process — not after.
            </p>
          </motion.div>

        </div>

        {/* Thesis Block */}
        <div className="thesis-block services-thesis">
          <h3>Execution, not intermediation.</h3>

          <p>
            We operate across both sides of transactions, aligning brands, developers, and capital within active commercial corridors.
          </p>

          <a
            className="chevron-cta animated-cta"
            href="/services"
            aria-label="View Advisory Services"
          >
            View Engagement
          </a>
        </div>

      </div>
    </section>
  );
}

export default ServicesOverview;