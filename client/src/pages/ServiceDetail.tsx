import { Link, useRoute } from "wouter";
import { Footer } from "@/components/Footer";
import { services } from "@/data/services";
import { getInsightsByService } from "@/insights";

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:id");
  const service = services.find((s) => s.id === params?.id);

  if (!service) {
    return (
      <>
        <main className="section-standard">
          <div className="container-polestar stack-32">
            <p>Advisory not found.</p>

            <Link href="/services">
              <a className="cta-back">Back to advisory</a>
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  /* Fetch related insights for this service */
  const relatedInsights = getInsightsByService(service.id as any);

  return (
    <>
      {/* HEADER */}
      <section className="section-standard">
        <div className="container-polestar stack-32">

          <span className="label">Advisory</span>

          <h1>{service.name}</h1>

          <p className="reading-column">
            {service.short}
          </p>

          <Link href="/services">
            <a className="cta-back">Back to advisory</a>
          </Link>

        </div>
      </section>

      {/* CONTEXT */}
      <section className="section-standard">
        <div className="container-polestar stack-32">

          <h2>Context</h2>

          <p>{service.context}</p>
          <p>{service.misalignment}</p>

        </div>
      </section>

      {/* RESOLUTION */}
      <section className="section-standard">
        <div className="container-polestar stack-32">

          <h2>Resolution</h2>

          <p>{service.resolves}</p>
          <p>{service.advisory}</p>

        </div>
      </section>

      {/* WORKSTREAMS */}
      {Array.isArray((service as any).workstreams) && (
        <section className="section-standard">
          <div className="container-polestar stack-32">

            <h2>Typical workstreams</h2>

            <ul className="stack-16">
              {(service as any).workstreams.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>
        </section>
      )}

      {/* CAPABILITIES */}
      <section className="section-standard">
        <div className="container-polestar stack-48">

          <h2>What this enables</h2>

          <div className="service-detail-capabilities">
            {service.capabilities.map((capability, index) => (
              <div className="capability-block" key={index}>

                <div className="capability-index">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <div className="capability-content">
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* OUTCOME */}
      <section className="section-standard">
        <div className="container-polestar stack-32">

          <h2>Outcome</h2>
          <p>{service.outcome}</p>

        </div>
      </section>

      {/* RELATED INSIGHTS — FUNNEL BRIDGE */}
      {relatedInsights.length > 0 && (
        <section className="section-standard">
          <div className="container-polestar stack-24">

            <h2>Related insights</h2>

            <div className="stack-16">
              {relatedInsights.map((insight) => (
                <Link
                  key={insight.meta.slug}
                  href={`/insights/${insight.meta.slug}`}
                >
                  <a className="cta service-detail-related-link">
                    {insight.meta.title}
                  </a>
                </Link>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* RELATED SERVICES */}
      <section className="section-standard">
        <div className="container-polestar stack-24">

          <h2>Related work</h2>

          <div className="stack-16">
            {services
              .filter((s) => s.id !== service.id)
              .map((s) => (
                <Link key={s.id} href={`/services/${s.id}`}>
                  <a className="service-detail-related-link cta">
                    {s.name}
                  </a>
                </Link>
              ))}
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}