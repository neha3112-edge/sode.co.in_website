"use client";

import { EnrichedUniversityData } from "@/lib/universities-data";

export default function UniversityStats({ data }: { data: EnrichedUniversityData }) {
  if (!data.stats || data.stats.length === 0) return null;

  return (
    <div className="HighLights">
      <div className="container">
        <div className="ach">
          {data.stats.map((stat, idx) => (
            <div className="ac1" key={idx}>
              <i className="fa fa-graduation-cap"></i>
              <div className="inner_arc1_grid">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
