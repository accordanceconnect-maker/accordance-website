import type { ComponentType } from "react";

import Tier2ExpansionFramework, {
  meta as Tier2ExpansionFrameworkMeta,
} from "./tier2-expansion-framework.mdx";

import GSTRealEstateTaxStructuring, {
  meta as GSTRealEstateTaxStructuringMeta,
} from "./gst-real-estate-tax-structuring.mdx";

import CapitalPerspectiveMarketMultiples, {
  meta as CapitalPerspectiveMarketMultiplesMeta,
} from "./capital-perspective-market-multiples.mdx";

import MarketEntryBrokerRetailExpansion, {
  meta as MarketEntryBrokerRetailExpansionMeta,
} from "./market-entry-broker-retail-expansion.mdx";

/*
==========================================================
CANONICAL INSIGHTS REGISTRY — SPINE CONTROLLED
==========================================================

Every MDX file MUST export:

meta: {
  title: string
  excerpt: string
  slug: string
  publishedAt: string (ISO)

  type: "service" | "market"

  serviceTag?: ServiceTag (required if type === "service")

  readingTime?: string
}

default: MDX component
*/

/* ==========================================================
   SPINE TYPES — MUST MIRROR mdx.d.ts
   ========================================================== */

export type InsightType = "service" | "market";

export type ServiceTag =
  | "expansion-asset-deployment"
  | "regulatory-statutory-tax"
  | "capital-perspective"
  | "market-entry-advisory"
  | "international-residential-advisory"
  | "market-insights";

/* Discriminated union — compile-time enforcement */
export type InsightMeta =
  | {
      title: string;
      excerpt: string;
      slug: string;
      publishedAt: string;

      type: "service";
      serviceTag: ServiceTag;

      readingTime?: string;
    }
  | {
      title: string;
      excerpt: string;
      slug: string;
      publishedAt: string;

      type: "market";

      readingTime?: string;
    };

export type InsightEntry = {
  meta: InsightMeta;
  Component: ComponentType<Record<string, never>>;
};

/*
==========================================================
META VALIDATION — DEV SAFETY RAIL
==========================================================
*/

function assertInsightMeta(meta: InsightMeta): boolean {
  const baseValid =
    Boolean(meta.title) &&
    Boolean(meta.slug) &&
    Boolean(meta.publishedAt) &&
    Boolean(meta.type);

  const serviceValid =
    meta.type === "service" ? Boolean(meta.serviceTag) : true;

  const valid = baseValid && serviceValid;

  if (!valid && import.meta.env.DEV) {
    console.error("[Insights Spine Error]", {
      required: ["title", "slug", "publishedAt", "type"],
      conditional: "serviceTag required when type === 'service'",
      received: meta,
    });
  }

  return valid;
}

/*
==========================================================
REGISTRY — SINGLE SOURCE OF TRUTH
==========================================================
*/

export const insights: InsightEntry[] = [
  {
    meta: Tier2ExpansionFrameworkMeta as InsightMeta,
    Component: Tier2ExpansionFramework,
  },

  {
    meta: GSTRealEstateTaxStructuringMeta as InsightMeta,
    Component: GSTRealEstateTaxStructuring,
  },

  {
    meta: CapitalPerspectiveMarketMultiplesMeta as InsightMeta,
    Component: CapitalPerspectiveMarketMultiples,
  },

  {
    meta: MarketEntryBrokerRetailExpansionMeta as InsightMeta,
    Component: MarketEntryBrokerRetailExpansion,
  },
];

/*
==========================================================
IMMUTABLE VALIDATED DATASET
==========================================================
*/

export const validatedInsights = Object.freeze(
  insights.filter((entry) => assertInsightMeta(entry.meta))
);

/*
==========================================================
UTILITIES — SPINE CONSUMERS
==========================================================
*/

/* Newest first */
export const insightsByDate = [...validatedInsights].sort((a, b) => {
  return Date.parse(b.meta.publishedAt) - Date.parse(a.meta.publishedAt);
});

/* Lookup by slug */
export function getInsightBySlug(slug: string): InsightEntry | undefined {
  return validatedInsights.find(
    (insight) => insight.meta.slug === slug
  );
}

/* Filter by service vertical */
export function getInsightsByService(serviceTag: ServiceTag) {
  return validatedInsights.filter(
    (insight) =>
      insight.meta.type === "service" &&
      insight.meta.serviceTag === serviceTag
  );
}

/* Market layer only */
export function getMarketInsights() {
  return validatedInsights.filter(
    (insight) => insight.meta.type === "market"
  );
}

/* Slug index — routing + prefetch */
export const insightSlugs = validatedInsights.map(
  (entry) => entry.meta.slug
);