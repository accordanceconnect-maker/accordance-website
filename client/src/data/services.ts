// client/src/data/services.ts

export type Service = {
  id: string;
  name: string;
  short: string;
  image: string;

  stance?: string;

  context: string;
  resolves: string;
  misalignment: string;
  advisory: string;
  outcome: string;

  capabilities: {
    title: string;
    description: string;
  }[];
};

export const services: Service[] = [
  {
    id: "expansion-asset-deployment",
    name: "Expansion & Asset Deployment",
    short:
      "Leasing, acquisition, and portfolio structuring aligned to growth.",
    image:
      "https://images.unsplash.com/photo-1529429617124-3f7866f5f6bd?auto=format&fit=crop&w=1200&q=60",

    context:
      "Expansion through real estate is rarely constrained by opportunity. It is constrained by sequencing, access, format, and long-term operating fit. Across India, expansion initiatives often lose coherence when real estate decisions are taken independently of how the business operates at scale.",

    resolves:
      "This advisory aligns growth intent with deployable real estate, integrating acquisition, leasing, hybrid structures, and supply-side creation where scale requires deliberate build-out rather than passive sourcing.",

    misalignment:
      "Misalignment occurs when expansion is driven by availability rather than suitability, when lease economics override operational constraints, or when access, logistics, and future scalability are treated as secondary considerations.",

    advisory:
      "We advise on expansion decisions where real estate defines the pace, format, and durability of growth. Structure and sequencing are established before commitments are formed.",

    outcome:
      "Expansion decisions that remain operationally viable, scalable, and economically coherent as the footprint grows.",

    capabilities: [
      {
        title: "Expansion structuring",
        description:
          "Align acquisition, leasing, and hybrid models with business format, supply movement, and long-term operating logic before commitments are formed."
      },
      {
        title: "Deployment sequencing",
        description:
          "Sequence access, zoning, development readiness, and handover timelines to prevent scale from being constrained by real estate execution."
      },
      {
        title: "Operating fit validation",
        description:
          "Test sites and assets against current and future operational requirements to ensure durability as scale increases."
      }
    ]
  },

  {
    id: "regulatory-statutory-tax",
    name: "Regulatory, Statutory & Tax Clarity",
    short:
      "Title, compliance, and statutory alignment before commitments.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60",

    context:
      "Real estate outcomes are shaped well before negotiations begin. Ownership history, zoning interpretation, statutory exposure, and tax positioning determine feasibility long before commercial terms are discussed.",

    resolves:
      "This advisory establishes legal, statutory, and tax clarity before capital, timelines, or structures are fixed, enabling informed decision-making rather than procedural compliance.",

    misalignment:
      "Misalignment arises when legal review is treated as a formality, zoning is assumed rather than interpreted, or tax implications are considered after commercial structures are finalised.",

    advisory:
      "We treat regulatory and tax clarity as strategic inputs to decision-making, positioning advisory upstream where it meaningfully alters exposure and optionality.",

    outcome:
      "Decisions structured to remain sound under regulatory scrutiny, ownership complexity, and jurisdictional exposure.",

    capabilities: [
      {
        title: "Title & ownership clarity",
        description:
          "Verify ownership history, encumbrances, and transferability to eliminate latent exposure before negotiations begin."
      },
      {
        title: "Zoning & statutory interpretation",
        description:
          "Interpret land use, zoning permissions, and regulatory constraints as decision inputs rather than post-fact checks."
      },
      {
        title: "Tax & structuring alignment",
        description:
          "Assess transaction and holding structures through a tax and compliance lens, including considerations for non-resident stakeholders."
      }
    ]
  },

  {
    id: "capital-perspective",
    name: "Capital Perspective",
    short:
      "Valuation and pricing alignment across entry and exit decisions.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=60",

    context:
      "Capital behaves differently across markets, holding periods, and asset categories. Real estate decisions made without capital context distort valuation logic, negotiation posture, and exit visibility.",

    resolves:
      "This advisory provides capital-aligned judgment across entry, positioning, and exit, ensuring coherence across the full decision horizon.",

    misalignment:
      "Misalignment occurs when valuation is treated as static, when entry decisions are disconnected from exit visibility, or when negotiations ignore long-term capital intent.",

    advisory:
      "We advise on real estate decisions where capital logic must remain intact across cycles, negotiations, and holding periods.",

    outcome:
      "Decisions that align pricing, structure, and capital intent without reliance on assumptions or market narratives.",

    capabilities: [
      {
        title: "Valuation-led judgment",
        description:
          "Anchor pricing and negotiation decisions to capital intent, holding horizon, and downside visibility."
      },
      {
        title: "Capital-aligned structuring",
        description:
          "Structure transactions to preserve coherence between entry assumptions, operating performance, and exit conditions."
      },
      {
        title: "Exit visibility assessment",
        description:
          "Evaluate liquidity, transferability, and market depth early to avoid capital lock-in driven by structural blind spots."
      }
    ]
  },

  {
    id: "market-entry-advisory",
    name: "Market Entry Advisory",
    short:
      "Micro-market intelligence for expansion across North India.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60",

    context:
      "Market entry through real estate is rarely a location issue. It is a localisation issue shaped by regulatory layering, ownership patterns, operating formats, and timing.",

    resolves:
      "This advisory structures market entry decisions around local context and operating alignment rather than template-driven expansion.",

    misalignment:
      "Misalignment arises when standardised models are applied locally, partnerships are formed before structure is clear, or timing is driven by availability rather than readiness.",

    advisory:
      "We advise organisations on market entry decisions where real estate underpins sustained presence without diluting strategic intent.",

    outcome:
      "Market entry decisions that are structurally aligned, locally grounded, and sustainable over time.",

    capabilities: [
      {
        title: "Local market structuring",
        description:
          "Translate strategic intent into locally viable acquisition and operating models across Indian jurisdictions."
      },
      {
        title: "Regulatory & ownership navigation",
        description:
          "Navigate layered ownership structures, regulatory interpretation, and approval sequencing unique to each market."
      },
      {
        title: "Timing & readiness alignment",
        description:
          "Align entry timing with organisational readiness rather than availability-driven opportunity pressure."
      }
    ]
  },

  {
    id: "international-residential-advisory",
    name: "International Residential Advisory",
    short:
      "Structured execution for institutional and international real estate capital.",
    image:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=60",

    context:
      "International residential investment outcomes depend on execution certainty, regulatory clarity, and alignment with investor profile rather than promotion-driven selection.",

    resolves:
      "This advisory provides residential investment clarity through aligned execution partners and disciplined advisory frameworks.",

    misalignment:
      "Misalignment occurs when decisions are driven by promotion, execution responsibility is fragmented, or suitability is secondary to availability.",

    advisory:
      "We operate as an advisory layer, not a sales intermediary, with execution delivered through trusted, locked partnerships.",

    outcome:
      "Residential investment decisions aligned to investor profile, jurisdictional exposure, and long-term intent.",

    capabilities: [
      {
        title: "Investor profile alignment",
        description:
          "Assess suitability based on holding intent, risk tolerance, jurisdictional exposure, and execution expectations."
      },
      {
        title: "Jurisdiction & execution clarity",
        description:
          "Provide regulatory and delivery clarity through structured advisory rather than promotional sales models."
      },
      {
        title: "Controlled partner execution",
        description:
          "Deliver outcomes through locked execution partners, preserving accountability and delivery discipline."
      }
    ]
  }
];