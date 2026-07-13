"use client";

import { EnrichedUniversityData } from "@/lib/universities-data";

interface UniversityCertificateProps {
  data: EnrichedUniversityData;
  onOpenEnquire: () => void;
}

export default function UniversityCertificate({ data, onOpenEnquire }: UniversityCertificateProps) {
  return (
    <section id="sample-certificate" className="certificate-slider-section">
      <div className="certificate-display">
        <img src={data.certificateImage} alt="Certificate Sample" />
      </div>

      <div className="certificate-content">
        <h2 className="whitespace-pre-line">{data.certificateTitle}</h2>
        <p className="description">{data.certificateDesc}</p>
        <a className="get-degree-btn enquireNowBtn" onClick={onOpenEnquire}>
          Get Degree <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
