import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { insightsByDate } from "@/insights";

export default function Insights() {
  return (
    <>
      <main className="page-content">

        {/* PAGE HEADER */}
        <section className="section-standard">
          <div className="container-polestar stack-32">

            <span className="label">Insights</span>

            <h1>Observations from experience</h1>

            <div className="reading-column">
              <p>
                Observations drawn from mandate execution, regulatory interpretation,
                and capital deployment across complex real estate decisions.
              </p>
            </div>

          </div>
        </section>

        {/* INSIGHTS LIST */}
        <section className="section-standard">
          <div className="container-polestar stack-64">

            {Array.isArray(insightsByDate) && insightsByDate.length > 0 ? (
              insightsByDate.map((insight) => (
                <article key={insight.meta.slug} className="stack-24">

                  {/* META */}
                  <span className="insight-date">
                    {new Date(insight.meta.publishedAt).toLocaleDateString(
                      "en-IN",
                      {
                        year: "numeric",
                        month: "long",
                      }
                    )}
                  </span>

                  {/* CONTENT */}
                  <div className="reading-column stack-16">

                    <h2 className="no-underline">
                      <Link href={`/insights/${insight.meta.slug}`}>
                        {insight.meta.title}
                      </Link>
                    </h2>

                    <p>{insight.meta.excerpt}</p>

                    <Link
                      href={`/insights/${insight.meta.slug}`}
                      className="cta"
                    >
                      Read insight
                    </Link>

                  </div>

                </article>
              ))
            ) : (
              <div className="reading-column stack-16">
                <p>No insights published yet.</p>
              </div>
            )}

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}