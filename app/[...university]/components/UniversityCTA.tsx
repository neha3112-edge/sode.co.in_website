"use client";

import { EnrichedUniversityData } from "@/lib/universities-data";

interface UniversityCTAProps {
  data: EnrichedUniversityData;
  onOpenEnquire: () => void;
}

export default function UniversityCTA({ data, onOpenEnquire }: UniversityCTAProps) {
  return (
    <section className="cta-strip">
      <div className="container">
        <div className="cta-container">
          <div className="cta-text">
            <h3>Need clarification?</h3>
            <p>Interact with experts, Get free consultation.</p>
          </div>
          <a className="cta-btn enquireNowBtn" onClick={onOpenEnquire}>
            <i className="fa fa-phone"></i> Talk to Experts
          </a>
        </div>
      </div>
    </section>
  );
}
