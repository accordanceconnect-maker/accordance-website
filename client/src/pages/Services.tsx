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

            <h1>Engagement scope</h1>

            <p className="reading-column">
              We work across retail leasing and land transactions with brands, developers, and investors.
            </p>

          </div>
        </section>

        {/* SERVICES LEDGER */}
        <section className="section-standard">
          <div className="container-polestar stack-32">

            <div
              className="services-ledger"
              role="list"
              aria-label="Service engagement areas"
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