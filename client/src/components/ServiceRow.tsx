// client/src/components/ServiceRow.tsx
import { Link } from "wouter";
import type { Service } from "@/data/services";

type Props = {
  service: Service;
};

export default function ServiceRow({ service }: Props) {
  const titleId = `${service.id}-title`;
  const descId = `${service.id}-desc`;

  return (
    <article
      className="service-row"
      role="listitem"
      aria-labelledby={titleId}
      aria-describedby={descId}
    >
      {/* LEFT — Title + Description */}
      <div className="service-row-text">
        <h3 id={titleId} className="service-row-title">
          {service.name}
        </h3>

        <p id={descId} className="service-row-description">
          {service.short}
        </p>
      </div>

      {/* RIGHT — CTA owns navigation */}
      <Link href={`/services/${service.id}`}>
        <a
          className="service-row-link cta"
          aria-label={`View advisory for ${service.name}`}
        >
          View advisory
        </a>
      </Link>
    </article>
  );
}