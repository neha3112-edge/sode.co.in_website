"use client";

import { useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { UniversityData } from "@/lib/universities-data";
import FormWrapper from "@/components/forms/FormWrapper";

export default function UniversityCourses({ data }: { data: UniversityData }) {
  const [activeModal, setActiveModal] = useState<"brochure" | "apply" | null>(null);
  const [selectedCourseTitle, setSelectedCourseTitle] = useState<string>("");

  const handleApplyClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    setSelectedCourseTitle(title);
    setActiveModal("apply");
  };

  const handleBrochureClick = (e: React.MouseEvent, title: string) => {
    e.preventDefault();
    setSelectedCourseTitle(title);
    setActiveModal("brochure");
  };

  if (!data.coursesOffer || data.coursesOffer.length === 0) return null;

  return (
    <section className="uni-courses-section py-16 px-6 bg-white" id="courses">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-800">Courses Offered</h2>
          <p className="text-slate-500 mt-2 text-lg">By {data.name}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.coursesOffer.map((course, idx) => (
            <div key={idx} className="flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Card Image */}
              <div className="h-48 w-full relative bg-slate-100">
                <Image
                  src={getAssetPath(course.image)}
                  alt={course.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-800 leading-snug mb-3 flex-grow">
                  {course.title}
                </h3>

                {/* Duration */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg w-max mb-4">
                  <span>⏱ Duration:</span>
                  <span className="text-slate-800">{course.duration}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  {course.desc}
                </p>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={(e) => handleBrochureClick(e, course.title)}
                    className="flex-1 text-center py-2.5 px-3 border border-slate-200 hover:border-slate-800 text-slate-700 hover:text-slate-900 text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Brochure</span>
                    <span>↓</span>
                  </button>
                  <button
                    onClick={(e) => handleApplyClick(e, course.title)}
                    className="flex-1 text-center py-2.5 px-3 bg-[#1C3569] hover:bg-opacity-90 text-white text-sm font-semibold rounded-lg transition-all"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="absolute inset-0 bg-transparent" onClick={() => setActiveModal(null)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10 text-slate-800">
            <FormWrapper
              title={activeModal === "brochure" ? "Download Brochure" : "Apply for Admission"}
              subtitle={selectedCourseTitle || "Please enter your details below"}
              courseOptions={data.coursesOptions}
              formNameOverride={activeModal === "brochure" ? `${data.name} Brochure Download` : `${data.name} Admissions Form`}
              utmSourceFallback={data.utmSourceFallback}
              utmMediumFallback={data.utmMediumFallback}
              sourceOverride={data.crmSource}
              onClose={() => setActiveModal(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
}
