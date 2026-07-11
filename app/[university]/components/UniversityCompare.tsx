"use client";

import { useState } from "react";
import { UniversityData } from "@/lib/universities-data";
import FormWrapper from "@/components/forms/FormWrapper";

export default function UniversityCompare({ data }: { data: UniversityData }) {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setActiveModal(true);
  };

  const handleFormSuccess = () => {
    // Open comparative portal in a new tab upon successful lead submission
    window.open("https://distanceeducationschool.com/compare-university/", "_blank");
    setActiveModal(false);
  };

  return (
    <section className="uni-compare-section py-16 px-6 bg-slate-100 border-t border-b border-slate-200" id="compare-section">
      <div className="max-w-6xl mx-auto text-center flex flex-col items-center gap-5">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight">
          Still Confused?
        </h2>
        <p className="text-slate-600 text-sm md:text-base font-semibold max-w-xl">
          Compare {data.name} with Top UGC-DEB Approved Universities
        </p>

        <button
          onClick={handleOpenModal}
          className="mt-4 flex items-center justify-center w-16 h-16 rounded-full bg-[#17479E] text-white hover:bg-blue-800 transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 group"
          title="Compare Universities Now"
        >
          <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* Compare Modal Popup Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="absolute inset-0 bg-transparent" onClick={() => setActiveModal(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10 text-slate-800">
            <FormWrapper
              title="Compare Universities"
              subtitle="Get expert help to choose the best fit program"
              courseOptions={data.coursesOptions}
              formNameOverride={`${data.name} Compare Form`}
              utmSourceFallback={data.utmSourceFallback}
              utmMediumFallback={data.utmMediumFallback}
              sourceOverride={data.crmSource}
              onClose={() => setActiveModal(false)}
              onSuccess={handleFormSuccess}
            />
          </div>
        </div>
      )}
    </section>
  );
}
