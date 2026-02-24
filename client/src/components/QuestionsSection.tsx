import { useState } from "react";

type QA = { q: string; a: string };
type Section = { title: string; items: QA[] };

const sections: Section[] = [
  {
    title: "About Accordance",
    items: [
      {
        q: "What is Accordance India Projects?",
        a: "Accordance is a commercial real estate advisory firm operating across key and emerging commercial corridors in India.\n\nWe advise brands, developers, and investors on leasing, acquisitions, and commercial asset positioning.\n\nOur role is to bring clarity to real estate decisions before capital is committed."
      },
      {
        q: "What defines your advisory approach?",
        a: "Our work begins with evaluation — location logic, regulatory position, commercial terms, and long-term viability.\n\nWe prioritise informed positioning over transactional speed.\n\nEvery engagement is aligned to objective, scope, and commercial intent."
      },
      {
        q: "Who typically engages Accordance?",
        a: "We are engaged by:\n\n• Retail brands expanding into growth corridors\n• Developers structuring commercial inventory\n• Institutional and private investors evaluating assets\n• Family offices assessing capital deployment in real estate\n\nEngagements are selective and objective-led."
      }
    ]
  },
  {
    title: "Advisory & Engagement",
    items: [
      {
        q: "What does your advisory typically cover?",
        a: "Our advisory spans:\n\n• Corridor and location assessment\n• Site identification and evaluation\n• Commercial term review and negotiation support\n• Transaction coordination\n• Statutory and diligence alignment\n\nThe emphasis is considered movement, not reactive execution."
      },
      {
        q: "Do you represent brands, developers, or investors?",
        a: "Yes.\n\nWe represent brands seeking expansion, developers positioning commercial supply, and investors evaluating acquisitions — across key and emerging commercial corridors in India.\n\nRepresentation is defined clearly at the outset."
      },
      {
        q: "How are engagements structured?",
        a: "Engagements are structured based on scope, transaction complexity, and alignment requirements.\n\nWe operate through defined representation agreements to ensure clarity of role and accountability throughout the transaction lifecycle."
      }
    ]
  },
  {
    title: "Real Estate & Process",
    items: [
      {
        q: "What transaction formats do you handle?",
        a: "We handle:\n\n• Retail leasing (high-street, mall, and SCO formats)\n• Commercial asset acquisition\n• Developer-side positioning\n• Strategic portfolio alignment\n\nOur focus remains commercial and capital-sensitive assets."
      },
      {
        q: "What does your due diligence framework include?",
        a: "Our review includes:\n\n• Title position and statutory compliance\n• Zoning and land-use validation\n• Lease structure and documentation review\n• Commercial defensibility assessment\n\nSpecialist coordination is undertaken where required."
      },
      {
        q: "How do you approach risk in commercial real estate transactions?",
        a: "Risk is addressed through early evaluation of regulatory exposure, commercial terms, and structural alignment.\n\nThe objective is long-term defensibility and stability — not short-term closure."
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