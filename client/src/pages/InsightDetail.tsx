import { useLocation, useParams } from "wouter";
import { Footer } from "@/components/Footer";
import { getInsightBySlug } from "@/insights";
import { Link } from "wouter";
import { serviceTagMap } from "@/data/serviceTagMap";
import { insightRedirects } from "@/insights/redirect";

export default function InsightDetail() {
  const [, navigate] = useLocation();
  const { slug } = useParams<{ slug: string }>();

  /* ==========================================================
     SEO SAFE REDIRECT LAYER
     ========================================================== */

  if (slug && insightRedirects[slug]) {
    navigate(`/insights/${insightRedirects[slug]}`, { replace: true });
    return null;
  }

  const insight = slug ? getInsightBySlug(slug) : null;

  /* ==========================================================
     NOT FOUND STATE
     ========================================================== */

  if (!insight) {
    return (
      <>
        <section className="section-standard">
          <div className="container-polestar stack-32">

            <h1>Insight not found</h1>

            <p>
              The insight you’re looking for does not exist or may have
              been moved.
            </p>

            <Link href="/insights">
              <a className="cta-back">Back to insights</a>
            </Link>

          </div>
        </section>

        <Footer />
      </>
    );
  }

  const { meta, Component } = insight;

  return (
    <>
      {/* ==========================================================
          HEADER — IDENTICAL SPINE TO SERVICES
         ========================================================== */}

      <section className="section-standard">
        <div className="container-polestar stack-32">

          <span className="label">Insight</span>

          <h1>{meta.title}</h1>

          {/* Service Funnel Chip */}
          {meta.type === "service" &&
            meta.serviceTag &&
            serviceTagMap[meta.serviceTag] && (
              <Link href={serviceTagMap[meta.serviceTag].href}>
                <a className="insight-service-chip">
                  {serviceTagMap[meta.serviceTag].label}
                </a>
              </Link>
            )}

          <p>
            {meta.excerpt}
          </p>

          <p className="insight-meta">
            Published{" "}
            {new Date(meta.publishedAt).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <Link href="/insights">
            <a className="cta-back">Back to insights</a>
          </Link>

        </div>
      </section>

      {/* ==========================================================
          BODY — SAME GRID FLOW AS SERVICES
         ========================================================== */}

      <section className="section-standard">
        <div className="container-polestar stack-32">

          <div className="insight-prose">
            <Component />
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}