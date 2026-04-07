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
    id: "retail-leasing",
    name: "Retail Leasing",
    short: "Site identification, alignment, and transaction support.",
    image:
      "https://images.unsplash.com/photo-1529429617124-3f7866f5f6bd?auto=format&fit=crop&w=1200&q=60",

    context:
      "We work with brands on retail expansion across active commercial corridors, aligning site selection with format, catchment, and commercial viability.",

    resolves:
      "Engagement covers site identification, evaluation, and alignment with business requirements before commercial commitments are made.",

    misalignment:
      "Issues arise when sites are selected based on availability rather than suitability, or when commercial terms are agreed without operational alignment.",

    advisory:
      "We identify, evaluate, and align sites with expansion requirements, supporting negotiation and transaction movement through to closure.",

    outcome:
      "Retail locations that are commercially viable, operationally aligned, and executable without friction.",

    capabilities: [
      {
        title: "Site identification & evaluation",
        description:
          "Identify and assess sites based on format fit, catchment strength, and commercial viability."
      },
      {
        title: "Commercial alignment",
        description:
          "Align lease terms, pricing, and structure with operational and financial requirements."
      },
      {
        title: "Transaction support",
        description:
          "Coordinate negotiations and documentation through to execution and closure."
      }
    ]
  },

  {
    id: "land-transactions",
    name: "Land Transactions",
    short: "Acquisition, positioning, and transaction execution.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=60",

    context:
      "We work with developers and investors on land opportunities across active corridors, aligning acquisition decisions with use, pricing logic, and execution clarity.",

    resolves:
      "Engagement includes evaluation of land, positioning of opportunity, and alignment of commercial and structural terms before transaction movement.",

    misalignment:
      "Misalignment occurs when pricing is disconnected from use potential, or when transactions proceed without clarity on structure, approvals, or execution pathway.",

    advisory:
      "We evaluate, structure, and support land transactions across acquisition and positioning, ensuring clarity before commitments are made.",

    outcome:
      "Land transactions that are aligned on use, pricing, and execution, reducing downstream risk.",

    capabilities: [
      {
        title: "Land evaluation",
        description:
          "Assess land based on use potential, regulatory position, and commercial viability."
      },
      {
        title: "Deal structuring",
        description:
          "Align pricing, structure, and stakeholder expectations before transaction movement."
      },
      {
        title: "Execution coordination",
        description:
          "Support negotiations, documentation, and closure across all involved parties."
      }
    ]
  },

  {
    id: "structuring",
    name: "Structuring",
    short: "Legal, statutory, and commercial alignment.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=60",

    context:
      "Transactions require alignment across legal, statutory, and commercial dimensions before execution to avoid delays and exposure.",

    resolves:
      "Engagement integrates documentation, compliance, and structural alignment into the transaction process rather than treating them as post-fact steps.",

    misalignment:
      "Issues arise when documentation, compliance, and structure are addressed after commercial terms are agreed, leading to delays and renegotiation.",

    advisory:
      "We align legal, statutory, and commercial structure alongside transactions, ensuring readiness before execution begins.",

    outcome:
      "Transactions that are structurally sound, compliant, and executable without disruption.",

    capabilities: [
      {
        title: "Title & compliance alignment",
        description:
          "Establish ownership clarity and statutory position before transaction movement."
      },
      {
        title: "Documentation structuring",
        description:
          "Align agreements and deal terms with transaction intent and regulatory requirements."
      },
      {
        title: "Execution readiness",
        description:
          "Ensure all structural elements are resolved prior to negotiation and closure."
      }
    ]
  }
];