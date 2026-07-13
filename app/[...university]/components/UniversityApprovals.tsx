"use client";

import { EnrichedUniversityData } from "@/lib/universities-data";

export default function UniversityApprovals({ data }: { data: EnrichedUniversityData }) {
  if (!data.approvalsList || data.approvalsList.length === 0) return null;

  return (
    <section id="approvals" className="accreditation-section">
      <div className="accreditation-container">
        <div className="accreditation-left">
          <img src="/iiitb/assets/img/award-icon.webp" alt="Accreditation Icon" className="trophy" />
          <h2>
            Approvals &amp;<br />
            Accreditation
          </h2>
        </div>

        <div className="divider"></div>

        <div className="accreditation-grid">
          {data.approvalsList.map((app, idx) => (
            <div className="accreditation-item" key={idx}>
              <img src={app.image} alt={app.title} />
              <div className="accreditation-item-content">
                <h4>{app.title}</h4>
                <p>{app.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
