// client/src/components/CapabilitiesSnapshot.tsx
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Strategy",
    description:
      "Structured frameworks aligning land, capital, regulation, and operating intent before commitment."
  },
  {
    title: "Execution",
    description:
      "Disciplined sequencing that converts approved strategy into compliant, time-defined outcomes."
  },
  {
    title: "Impact",
    description:
      "Decisions designed to remain defensible through negotiation, scrutiny, and long-term holding."
  }
];

export function CapabilitiesSnapshot() {
  return (
    <div className="stack-32">

      {/* Section Heading */}
      <span className="label">Framework</span>

      <h2 id="capabilities-heading">
        How we work
      </h2>

      <p className="section-subheading">
        Every engagement follows a defined sequence to reduce uncertainty before capital, reputation, or time is committed.
      </p>

      {/* Capabilities Grid */}
      <div className="capabilities-grid">
        {capabilities.map((item, index) => (
          <motion.div
            key={index}
            className="capability-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: index * 0.06 }}
          >
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}

export default CapabilitiesSnapshot;