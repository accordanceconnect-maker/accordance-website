import { motion } from "framer-motion";

const services = [
  {
    title: "Property Transaction Advisory",
    description: "We structure and negotiate commercial and industrial land transactions with clarity, precision, and disciplined execution."
  },
  {
    title: "Developer & Brand Expansion Strategy",
    description: "We guide developers and institutional chains in identifying, screening, and securing expansion-ready sites through aligned planning and due-diligence frameworks."
  },
  {
    title: "Valuation & Financial Assessment",
    description: "We deliver objective, data-grounded valuation work for land, built assets, and developments to inform acquisition, disposal, or financing decisions."
  },
  {
    title: "Legal & Statutory Due Diligence",
    description: "We audit land titles, approvals, compliance status, and statutory exposure using a methodical framework that ensures regulatory certainty."
  }
];

export function ServicesGrid() {
  return (
    <section className="py-[120px] bg-white">
      <div className="max-w-[1080px] mx-auto px-8 md:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-[48px] max-w-[600px]"
        >
          <span className="section-label">Services</span>
          <h2 className="text-[#0A0A0A] mb-[12px] text-[32px] md:text-[48px] leading-tight tracking-[-0.03em]">
            What We Do
          </h2>
          <p className="text-[#2B2B2B] text-[16px] leading-[1.5]">
            We translate complex real-estate challenges into structured, actionable workstreams for institutional decision-making.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-[#E6E6E6]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-b border-r border-[#E6E6E6] p-[48px] flex flex-col justify-start items-start hover:opacity-80 transition-opacity duration-300"
            >
              <h3 className="text-[#0A0A0A] text-[24px] leading-tight mb-[12px] font-medium tracking-tight">
                {service.title}
              </h3>
              <p className="text-[#2B2B2B] text-[16px] leading-[1.5]">
                {service.description}
              </p>
              <a
                href="/services"
                className="chevron-cta mt-[16px]"
                aria-label={`View details for ${service.title}`}
              >
                View service
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
