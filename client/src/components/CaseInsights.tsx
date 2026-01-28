export function CaseInsights() {
  return (
    <div className="case-insights stack-32">

      {/* Section Title */}
      <div className="case-insights-header stack-12">
        <h2>Insights</h2>
        <p className="content-narrow">
          Selected mandates demonstrating how structure, sequencing, and
          statutory discipline were applied before irreversible decisions
          were taken.
        </p>
      </div>

      {/* Case Grid */}
      <div className="case-insights-grid stack-32">

        <div className="case-insight-card stack-24">
          <h3>Industrial expansion across regulated zones</h3>
          <p>
            Site selection, access logic, and statutory screening were completed
            prior to commitment, enabling multi-zone expansion without
            post-acquisition regulatory exposure.
          </p>
        </div>

        <div className="case-insight-card stack-24">
          <h3>Capital deployment with defined exit conditions</h3>
          <p>
            Valuation discipline and regulatory sequencing directed capital
            allocation into logistics assets where compliance timelines and
            exit visibility were established in advance.
          </p>
        </div>

        <div className="case-insight-card stack-24">
          <h3>Retail footprint growth under controlled economics</h3>
          <p>
            Expansion criteria were established upfront to align site
            feasibility, development risk, and operating thresholds before
            footprint commitments were approved.
          </p>
        </div>

      </div>
    </div>
  );
}