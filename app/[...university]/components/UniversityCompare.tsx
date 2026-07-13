"use client";

import { EnrichedUniversityData } from "@/lib/universities-data";

interface UniversityCompareProps {
  data: EnrichedUniversityData;
  onOpenCompare: () => void;
}

export default function UniversityCompare({ data, onOpenCompare }: UniversityCompareProps) {
  return (
    <div className="compare_Section">
      <div className="compare_box">
        <h2>Still Confused?</h2>
        <h4>Compare {data.name} with Top UGC-DEB Approved Universities</h4>
        <a
          href="javascript:void(0);"
          className="compare_btn"
          onClick={onOpenCompare}
        >
          <img src="/iiitb/assets/img/arrow.gif" alt="Arrow pointing to compare" />
        </a>
      </div>
    </div>
  );
}
