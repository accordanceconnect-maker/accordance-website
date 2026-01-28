import { useState } from "react";

type QA = { q: string; a: string };
type Section = { title: string; items: QA[] };

const sections: Section[] = [
  {
    title: "About Accordance",
    items: [
      {
        q: "What is Accordance India Projects?",
        a: "Accordance is a mandate-led real estate acquisition advisory. We support businesses and institutions in acquiring, leasing, or divesting real estate through a structured process that runs from requirement definition to transaction closure. Our focus is decision quality, execution control, and long-term suitability."
      },
      {
        q: "How are you different from brokers?",
        a: "We do not optimise for inventory movement. We optimise for mandate outcomes. Advisory governs decisions, while execution is tightly controlled. Where brokerage is required, it is engaged as execution support, not as the driver of strategy."
      },
      {
        q: "Who typically engages Accordance?",
        a: "CFOs, CXOs, promoters, family offices, and investment committees who understand that real estate mistakes are expensive and slow to unwind."
      }
    ]
  },
  {
    title: "Advisory & Engagement",
    items: [
      {
        q: "What exactly do you do for clients?",
        a: "We manage the full acquisition lifecycle: requirement modelling, asset filtering, negotiation leadership, legal and statutory coordination, and transaction execution. Advisory sets the direction. Execution ensures outcomes."
      },
      {
        q: "Do you advise on buying and leasing assets?",
        a: "Yes. We support acquisitions, divestments, and lease transactions. The structure remains consistent regardless of format."
      },
      {
        q: "How are engagements and fees structured?",
        a: "Engagements are mandate-based with defined scope and timelines. Advisory is typically fixed-fee. Transaction execution fees apply where we manage outcomes. All commercials are documented upfront."
      }
    ]
  },
  {
    title: "Real Estate & Process",
    items: [
      {
        q: "What transaction types do you handle?",
        a: "Commercial offices, industrial and logistics assets, institutional real estate, development land, and portfolio transactions. We operate at institutional scale."
      },
      {
        q: "What does your due diligence cover?",
        a: "Title validation, encumbrance analysis, zoning and statutory compliance, tax exposure, and operational suitability. Findings are synthesised into decision-ready recommendations."
      },
      {
        q: "How do you manage execution risk?",
        a: "Through milestone-led sequencing, early risk identification, and disciplined stakeholder coordination. If a transaction is likely to derail, clients are informed early."
      }
    ]
  }
];

export function QuestionsSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  return (
    <div className="questions-wrapper">

      {sections.map((section, si) => (

        <div key={section.title} className="questions-row">

          {/* LEFT COLUMN */}
          <div className="questions-left">
            <span className="questions-section-title">
              {section.title}
            </span>
            <span className="questions-section-underline" />
          </div>

          {/* RIGHT COLUMN */}
          <div className="questions-right">

            {section.items.map((item, qi) => {
              const key = `${si}-${qi}`;
              const isOpen = openKey === key;

              return (
                <div
                  key={key}
                  className={`qa-item ${isOpen ? "open" : ""}`}
                  onClick={() => toggle(key)}
                >

                  <div className="qa-top">
                    <div className="qa-question">{item.q}</div>
                    <div className="qa-toggle">›</div>
                  </div>

                  {isOpen && (
                    <div className="qa-answer">
                      {item.a}
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>
      ))}

    </div>
  );
}