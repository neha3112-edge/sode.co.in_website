import { UniversityData } from "@/lib/universities-data";

export default function UniversityHighlights({ data }: { data: UniversityData }) {
  return (
    <section className="uni-highlights">
      <div className="uni-section-heading">
        <h2 className="uni-section-title">Why Choose {data.name}?</h2>
        <p className="uni-section-subtitle">
          Acquire cutting-edge credentials designed to accelerate career growth.
        </p>
      </div>

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
    </section>
  );
}
