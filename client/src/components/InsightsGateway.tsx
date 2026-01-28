import { Link } from "wouter";

export function InsightsGateway() {
  return (
    <div className="insights-gateway">

      <div className="insights-row">

        {/* LEFT — ARROW + HEADING */}
        <div className="insights-heading-lockup">
          <span className="insights-arrow" aria-hidden="true">↗</span>
          <h2 className="insights-heading no-underline">Insights</h2>
        </div>

        {/* RIGHT — COPY + CTA */}
        <div className="insights-content stack-16">
          <p>
            Observations shaped by mandate execution, regulatory interpretation,
            and capital allocation across real estate decisions.
          </p>

          <Link href="/insights" className="cta">
            View all insights
          </Link>
        </div>

      </div>

    </div>
  );
}