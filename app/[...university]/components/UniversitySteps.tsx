"use client";

import { EnrichedUniversityData } from "@/lib/universities-data";

export default function UniversitySteps({ data }: { data: EnrichedUniversityData }) {
  return (
    <section className="apply-section">
      <h2>How to Apply for {data.name} Online Courses</h2>
      <p className="section-desc">
        Students can easily enrol in {data.name} Online courses. Candidates can conveniently apply by selecting their desired program. Follow these steps to secure admission in the university.
      </p>

      <div className="steps-wrapper">
        {data.applyStepsList.map((step) => (
          <div className={`step-card ${step.colorClass}`} key={step.number}>
            <div className="step-number">{step.number}</div>
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
