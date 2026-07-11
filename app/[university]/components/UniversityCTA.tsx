"use client";

import { useState } from "react";
import { UniversityData } from "@/lib/universities-data";
import FormWrapper from "@/components/forms/FormWrapper";

export default function UniversityCTA({ data }: { data: UniversityData }) {
  const [activeModal, setActiveModal] = useState<boolean>(false);

  return (
    <section className="uni-cta-strip py-12 px-6 bg-[#002B5C] text-white" id="cta-strip">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left flex flex-col gap-2">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#f1dfa0]">
            Need clarification?
          </h3>
          <p className="text-white text-sm md:text-base font-medium opacity-90">
            Interact with experts, Get free consultation.
          </p>
        </div>

        <button
          onClick={() => setActiveModal(true)}
          className="flex items-center gap-2 px-8 py-3.5 rounded-full text-[#1d3557] font-extrabold text-base transition-all duration-300 shadow-md hover:scale-105 active:scale-95"
          style={{ background: "linear-gradient(90deg, #EEC471 0%, #F1E2A3 100%)" }}
        >
          {/* Phone icon */}
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.149 15.149 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.27 1.11l-2.2 2.2z" />
          </svg>
          Talk to Experts
        </button>
      </div>

      {/* Modal Popup Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="absolute inset-0 bg-transparent" onClick={() => setActiveModal(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10 text-slate-800">
            <FormWrapper
              title="Speak with Admissions Desk"
              subtitle="Get professional guidance for your program selections"
              courseOptions={data.coursesOptions}
              formNameOverride={`${data.name} Talk to Experts Form`}
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
