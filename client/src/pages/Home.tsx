import { Hero } from "@/components/Hero";
import { ServicesOverview } from "@/components/ServicesOverview";
import Philosophy from "@/components/Philosophy";
import { CapabilitiesSnapshot } from "@/components/CapabilitiesSnapshot";
import { InsightsGateway } from "@/components/InsightsGateway";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main id="main-content" className="page-content">

        {/* HERO — full bleed, snapped to spine offset */}
        <Hero />

        {/* SERVICES OVERVIEW */}
        <section className="section-standard">
          <div className="container-polestar">
            <ServicesOverview />
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="section-standard">
          <div className="container-polestar">
            <Philosophy />
          </div>
        </section>

        {/* CAPABILITIES SNAPSHOT */}
        <section className="section-standard">
          <div className="container-polestar">
            <CapabilitiesSnapshot />
          </div>
        </section>

        {/* INSIGHTS GATEWAY */}
        <section className="section-standard">
          <div className="container-polestar">
            <InsightsGateway />
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="section-standard">
          <div className="container-polestar">
            <ContactSection />
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}