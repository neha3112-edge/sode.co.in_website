"use client";

import { EnrichedUniversityData } from "@/lib/universities-data";

export default function UniversityWhyChoose({ data }: { data: EnrichedUniversityData }) {
  return (
    <section id="why_choose" className="why-section">
      <div className="why-header">
        <h2>{data.whyChooseTitle}</h2>
        <p>{data.whyChooseSubtitle}</p>
      </div>

      <div className="why-grid">
        {data.whyChooseItems.map((item, index) => (
          <div className={`why-card ${item.variant}`} key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
