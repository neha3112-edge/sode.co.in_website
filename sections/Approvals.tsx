"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

const recognitions = [
  {
    name: "AACSB",
    src: "/assets/images/aacsb-69c2858098c79.webp",
    description: "Association to Advance Collegiate Schools of Business.",
  },
  {
    name: "UGC Entitled",
    src: "/assets/images/ugc-69c2857f70d9f.webp",
    description:
      "Recognised by the University Grants Commission of India (UGC).",
  },
  {
    name: "NIRF Ranked",
    src: "/assets/images/nirf-69c2857f23104.webp",
    description: "Ranked by National Institutional Ranking Framework.",
  },
  {
    name: "QS Ranking",
    src: "/assets/images/qs-69c2857ff0fb7.webp",
    description: "Globally ranked by QS World University Rankings.",
  },
  {
    name: "THE Ranking",
    src: "/assets/images/the-69c2857fee8ce.webp",
    description:
      "Ranked by the Times Higher Education Asia University Rankings.",
  },
  {
    name: "IoE Recognised",
    src: "/assets/images/institute.webp",
    description:
      "Institute of Eminence recognised by the Ministry of Education for excellence.",
  },
];

export function Approvals() {
  return (
    <section id="approvals" className="bg-primary py-12">
      <Container>
        {/* ================= HEADING ================= */}
        <div className="text-center mb-10">
          <p className="text-white/90 text-sm font-semibold tracking-widest uppercase mb-1">
            INDIA&apos;S TOP LEADING UNIVERSITY
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide uppercase">
            APPROVALS & RECOGNITIONS
          </h2>
        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {recognitions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 flex flex-col items-center text-center shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 h-full"
            >
              {/* ===== IMAGE ===== */}
              <div className="h-17.5 flex items-center justify-center">
                <Image
                  src={getAssetPath(item.src)}
                  alt={item.name}
                  width={1250}
                  height={60}
                  className="object-contain max-h-full"
                />
              </div>

              {/* ===== TITLE ===== */}
              <p className="text-[12px] md:text-[15px] font-bold text-black uppercase tracking-wide leading-tight flex items-center justify-center">
                {item.name}
              </p>

              {/* ===== DESCRIPTION ===== */}
              <p className="text-[11px] text-gray-800 leading-relaxed mt-1 min-h-12.5">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
