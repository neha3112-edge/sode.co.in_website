"use client";

import { EnrichedUniversityData } from "@/lib/universities-data";

interface UniversityAboutProps {
  data: EnrichedUniversityData;
  onOpenBrochure: (pdfPath: string) => void;
  onOpenEnquire: () => void;
}

export default function UniversityAbout({ data, onOpenBrochure, onOpenEnquire }: UniversityAboutProps) {
  return (
    <section id="about-section" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={data.aboutImage} alt={`${data.name} Campus`} />
        </div>
        <div className="about-content">
          <h2 className="whitespace-pre-line">{data.aboutTitle}</h2>
          <span className="underline"></span>
          <p>{data.aboutDesc}</p>
          <div className="about-actions">
            <button className="btn red enquireNowBtn" onClick={onOpenEnquire}>
              <i className="fa fa-phone"></i> Request Call Back
            </button>
            <button className="btn outline enquireNowBtn" onClick={onOpenEnquire}>
              Get 1:1 FREE Counseling
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
