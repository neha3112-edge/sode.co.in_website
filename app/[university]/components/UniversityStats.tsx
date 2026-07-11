import { UniversityData } from "@/lib/universities-data";

export default function UniversityStats({ data }: { data: UniversityData }) {
  if (!data.stats || data.stats.length === 0) return null;

  return (
    <section className="uni-stats">
      <div className="uni-stats-container">
        {data.stats.map((stat, idx) => (
          <div key={idx} className="uni-stat-item">
            <span className="uni-stat-value">{stat.value}</span>
            <span className="uni-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
