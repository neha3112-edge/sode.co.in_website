"use client";

import { useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { UniversityData } from "@/lib/universities-data";
import FormWrapper from "@/components/forms/FormWrapper";

export default function UniversityAbout({ data }: { data: UniversityData }) {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  if (!data.about) return null;

  return (
    <section className="uni-about-section py-16 px-6 bg-white" id="about-section">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column: Image */}
        <div className="lg:w-1/2 w-full">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <Image
              src={getAssetPath(data.about.image)}
              alt="About Campus"
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="lg:w-1/2 w-full flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
          <h2 className="text-3xl font-extrabold text-slate-800 leading-tight">
            {data.about.title}
          </h2>
          <div className="w-16 h-1 bg-yellow-400 rounded"></div>
          
          <p className="text-slate-500 text-sm leading-relaxed">
            {data.about.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <button
              onClick={() => setActiveModal(true)}
              className="py-3 px-6 bg-red-600 hover:bg-red-700 text-white text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>📞 Request Call Back</span>
            </button>
            <button
              onClick={() => setActiveModal(true)}
              className="py-3 px-6 border-2 border-slate-800 text-slate-800 hover:bg-slate-50 text-sm font-bold rounded-xl transition-all flex items-center justify-center"
            >
              Get 1:1 FREE Counseling
            </button>
          </div>
        </div>
      </div>

      {/* Modal Popup Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="absolute inset-0 bg-transparent" onClick={() => setActiveModal(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10 text-slate-800">
            <FormWrapper
              title="Request Free Counseling"
              subtitle="Speak directly with our academic advisor"
              courseOptions={data.coursesOptions}
              formNameOverride={`${data.name} Counseling Form`}
              utmSourceFallback={data.utmSourceFallback}
              utmMediumFallback={data.utmMediumFallback}
              sourceOverride={data.crmSource}
              onClose={() => setActiveModal(false)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
