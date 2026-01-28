declare module "*.mdx" {
  import type { ComponentType } from "react";

  /* =========================================================
     INSIGHT CLASSIFICATION — SPINE SAFE
     ========================================================= */

  export type InsightType = "service" | "market";

  /* Service taxonomy — advisory spine aligned */
  export type ServiceTag =
    | "expansion-asset-deployment"
    | "regulatory-statutory-tax"
    | "capital-perspective"
    | "market-entry-advisory"
    | "international-residential-advisory"
    | "market-insights"; // informational layer, not an execution service

  /* =========================================================
     META CONTRACT — DISCRIMINATED UNION (ENFORCED)
     ========================================================= */

  export type InsightMeta =
    | {
        /* Common fields */
        title: string;
        excerpt: string;
        slug: string;
        publishedAt: string;

        /* Classification */
        type: "service";

        /* Mandatory routing anchor */
        serviceTag: ServiceTag;

        /* Optional enrichment */
        readingTime?: string;
      }
    | {
        /* Common fields */
        title: string;
        excerpt: string;
        slug: string;
        publishedAt: string;

        /* Classification */
        type: "market";

        /* Optional enrichment */
        readingTime?: string;
      };

  /* =========================================================
     MDX EXPORT CONTRACT
     ========================================================= */

  const MDXComponent: ComponentType;
  export default MDXComponent;

  export const meta: InsightMeta;
}