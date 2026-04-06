// client/src/components/CapabilitiesSnapshot.tsx
import { motion } from "framer-motion";

const capabilities = [
  {
    title: "Evaluate",
    description:
      "We assess corridors, sites, and assets across retail and land transactions, establishing commercial viability, regulatory position, and transaction fit."
  },
  {
    title: "Structure",
    description:
      "We align commercial terms, documentation, and stakeholder positions, integrating legal and financial structure before movement."
  },
  {
    title: "Execute",
    description:
      "We drive transactions to closure through negotiation, coordination, and on-ground alignment across all involved parties."
  }
];

export function CapabilitiesSnapshot() {
  return (
    <div className="stack-32">

      {/* Section Heading */}
      <span className="label">Process</span>

      <h2 id="capabilities-heading">
        How transactions move
      </h2>

      <p className="section-subheading">
        Every engagement is structured across evaluation, alignment, and execution — ensuring clarity before and during transaction movement.
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