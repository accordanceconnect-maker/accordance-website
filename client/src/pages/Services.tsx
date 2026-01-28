import { Footer } from "@/components/Footer";
import ServiceRow from "@/components/ServiceRow";
import { services } from "@/data/services";

export default function Services() {
  return (
    <div className="services-page">
      <main className="page-content">

        {/* HEADER */}
        <section className="section-standard">
          <div className="container-polestar stack-32">

            <span className="label">Services</span>

            <h1>What we do</h1>

            <p className="reading-column">
              Advisory that reduces ambiguity and creates repeatable outcomes.
              We focus on practical clarity — on what moves value and removes
              friction.
            </p>

          </div>
        </section>

        {/* SERVICES LEDGER */}
        <section className="section-standard">
          <div className="container-polestar stack-32">

            <div
              className="services-ledger"
              role="list"
              aria-label="Service advisory areas"
            >
              {services.map((service) => (
                <ServiceRow key={service.id} service={service} />
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}