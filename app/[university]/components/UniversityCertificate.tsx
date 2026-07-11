import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { UniversityData } from "@/lib/universities-data";

export default function UniversityCertificate({ data }: { data: UniversityData }) {
  if (!data.certificate) return null;

  return (
    <section className="uni-certificate-section py-16 px-6 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Mockup Display */}
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] bg-white p-4 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
            <div className="w-full h-full relative">
              <Image
                src={getAssetPath(data.certificate.image)}
                alt={`${data.name} Sample Certificate`}
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>

        {/* Right Info Content */}
        <div className="md:w-1/2 w-full flex flex-col gap-4 text-center md:text-left items-center md:items-start">
          <div className="text-xs font-bold uppercase tracking-wider text-yellow-500 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100 w-max">
            Global Recognition
          </div>
          <h2 className="text-3xl font-extrabold text-slate-800 leading-tight">
            {data.certificate.title}
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded"></div>
          <p className="text-slate-500 text-sm leading-relaxed">
            {data.certificate.desc}
          </p>
          <a
            href="#lead-form"
            className="mt-2 inline-flex items-center gap-2 py-3 px-6 bg-[#1C3569] hover:bg-opacity-95 text-white text-sm font-bold rounded-xl shadow-md transition-all hover:translate-x-1"
          >
            <span>Get Degree Path</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
