"use client";

import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { UniversityData } from "@/lib/universities-data";

export default function UniversityWhyChoose({ data }: { data: UniversityData }) {
  if (!data.whyChoose) return null;

  return (
    <section className="uni-why-choose py-16 px-6 bg-slate-50" id="why_choose">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 flex flex-col items-center gap-2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
            {data.whyChoose.title}
          </h2>
          <div className="w-12 h-1 bg-yellow-400 rounded mb-2"></div>
          <p className="text-slate-500 text-sm font-medium">
            {data.whyChoose.subtitle}
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.whyChoose.items.map((item, index) => {
            const isDark = item.variant === "dark";
            return (
              <div
                key={index}
                className={`p-8 rounded-3xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col gap-4 border ${
                  isDark
                    ? "bg-[#0b1b3d] border-[#162a54] text-white"
                    : "bg-white border-slate-100 text-slate-800"
                }`}
              >
                {/* Icon Image */}
                <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-opacity-10 bg-slate-500 overflow-hidden">
                  <Image
                    src={getAssetPath(item.image)}
                    alt={item.title}
                    fill
                    sizes="48px"
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-800"}`}>
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-500"}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
