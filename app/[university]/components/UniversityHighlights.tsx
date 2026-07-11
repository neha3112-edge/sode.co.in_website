import { UniversityData } from "@/lib/universities-data";

export default function UniversityHighlights({ data }: { data: UniversityData }) {
  const isTimeline = data.highlightsVariant === "timeline";

  return (
    <section className="uni-highlights">
      <div className="uni-section-heading">
        <h2 className="uni-section-title">Why Choose {data.name}?</h2>
        <p className="uni-section-subtitle">
          Acquire cutting-edge credentials designed to accelerate career growth.
        </p>
      </div>

      {isTimeline ? (
        /* HORIZONTAL/VERTICAL TIMELINE LAYOUT */
        <div className="uni-timeline-wrapper">
          <div className="uni-timeline-line"></div>
          <div className="uni-timeline-steps">
            {data.highlights.map((highlight, idx) => (
              <div key={idx} className="uni-timeline-step">
                <div className="uni-timeline-icon-outer">
                  <div className="uni-timeline-icon-box">
                    <span>{highlight.icon}</span>
                  </div>
                  <div className="uni-timeline-badge-number">{idx + 1}</div>
                </div>
                <h3 className="uni-timeline-title">{highlight.title}</h3>
                <p className="uni-timeline-desc">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* STANDARD 4-COLUMN CARDS GRID LAYOUT */
        <div className="uni-highlights-grid">
          {data.highlights.map((highlight, idx) => (
            <div key={idx} className="uni-highlight-card">
              <div className="uni-highlight-icon-box">
                <span>{highlight.icon}</span>
              </div>
              <h3 className="uni-highlight-title">{highlight.title}</h3>
              <p className="uni-highlight-desc">{highlight.desc}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
