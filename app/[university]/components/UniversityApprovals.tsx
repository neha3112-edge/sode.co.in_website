import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { UniversityData } from "@/lib/universities-data";

export default function UniversityApprovals({ data }: { data: UniversityData }) {
  if (!data.approvals || data.approvals.length === 0) return null;

  return (
    <section className="uni-approvals-section py-16 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left header */}
        <div className="md:w-1/3 text-center md:text-left flex flex-col items-center md:items-start gap-4">
          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-white text-3xl shadow-md">
            🏆
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800 leading-tight">
            Approvals &amp;<br />Accreditation
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded"></div>
        </div>

        {/* Right logos grid */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {data.approvals.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src={getAssetPath(item.image)}
                  alt={item.title}
                  fill
                  sizes="64px"
                  style={{ objectFit: "contain" }}
                  className="rounded"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
