import { useState, type ReactNode } from "react";

type QA = { q: string; a: string };
type Section = { title: string; items: QA[] };

const sections: Section[] = [
  {
    title: "About Accordance",
    items: [
      {
        q: "What is Accordance India Projects?",
        a: "Accordance is a commercial real estate firm working across retail leasing and land transactions in active corridors.\n\nWe work with brands, developers, and investors on site selection, commercial alignment, and transaction execution.\n\nEngagements focus on clarity before commitments are made."
      },
      {
        q: "What defines your advisory approach?",
        a: "Work begins with evaluation — corridor, site, commercial terms, and regulatory position.\n\nDecisions are aligned before movement, not after.\n\nEvery engagement is defined by scope and transaction intent."
      },
      {
        q: "Who typically engages Accordance?",
        a: "We are engaged by:\n\n• Retail brands expanding into active corridors\n• Developers positioning commercial assets\n• Investors evaluating acquisitions\n• Family offices deploying capital into real estate\n\nEngagements are selective and mandate-driven."
      }
    ]
  },
  {
    title: "Engagement",
    items: [
      {
        q: "What does your advisory typically cover?",
        a: "Engagement spans:\n\n• Corridor and site evaluation\n• Site identification\n• Commercial term alignment\n• Transaction coordination\n• Statutory and diligence alignment\n\nThe focus is structured movement through to execution."
      },
      {
        q: "Do you represent brands, developers, or investors?",
        a: "Yes.\n\nWe work with brands, developers, and investors across retail leasing and land transactions.\n\nRepresentation is defined clearly at the outset."
      },
      {
        q: "How are engagements structured?",
        a: "Engagements are structured based on scope and transaction requirements.\n\nWe operate through defined mandates to ensure clarity of role and accountability through execution."
      }
    ]
  },
  {
    title: "Real Estate & Process",
    items: [
      {
        q: "What transaction formats do you handle?",
        a: "We handle:\n\n• Retail leasing\n• Commercial asset acquisition\n• Developer-side positioning\n• Portfolio alignment\n\nThe focus remains on commercial, transaction-led assets."
      },
      {
        q: "What does your due diligence framework include?",
        a: "Our review includes:\n\n• Title and statutory position\n• Zoning and land-use validation\n• Lease structure and documentation\n• Commercial defensibility\n\nSpecialist inputs are integrated where required."
      },
      {
        q: "How do you approach risk in commercial real estate transactions?",
        a: "Risk is addressed through early evaluation of regulatory exposure, commercial terms, and structure.\n\nThe objective is stable, defensible transactions — not short-term closure."
      }
    ]
  }
];

export function QuestionsSection() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenKey(openKey === key ? null : key);
  };

  const formatAnswer = (text: string) => {
    const lines = text.split("\n");
    const elements: ReactNode[] = [];
    let bulletBuffer: string[] = [];

    lines.forEach((line, index) => {
      if (line.startsWith("• ")) {
        bulletBuffer.push(line.replace("• ", ""));
      } else {
        if (bulletBuffer.length > 0) {
          elements.push(
            <ul key={`ul-${index}`} className="qa-bullet-list">
              {bulletBuffer.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          );
          bulletBuffer = [];
        }

        if (line.trim() !== "") {
          elements.push(
            <p key={index} className="qa-paragraph">
              {line}
            </p>
          );
        } else {
          elements.push(<div key={index} style={{ height: "12px" }} />);
        }
      }
    });

    if (bulletBuffer.length > 0) {
      elements.push(
        <ul key="ul-last" className="qa-bullet-list">
          {bulletBuffer.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      );
    }

    return elements;
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
                      {formatAnswer(item.a)}
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