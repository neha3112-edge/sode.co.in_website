"use client";

import { useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import { UniversityData } from "@/lib/universities-data";
import FormWrapper from "@/components/forms/FormWrapper";
import confetti from "canvas-confetti";

export default function UniversityStickyWidgets({ data }: { data: UniversityData }) {
  const [activeModal, setActiveModal] = useState<"coupon" | "apply" | null>(null);

  const handleOpenApply = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal("apply");
  };

  const handleOpenCoupon = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveModal("coupon");
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#003366", "#ffc107", "#25D366", "#ffffff"],
    });
  };

  const waText = encodeURIComponent(`I want to download the ${data.name} Online Program brochure`);
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=+917065777755&text=${waText}`;

  return (
    <>
      {/* MOBILE STICKY BOTTOM FOOTER BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[999] bg-white border-t border-slate-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] flex p-3 gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all"
        >
          {/* WhatsApp SVG Icon */}
          <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          <span>Get Brochure</span>
        </a>
        <button
          onClick={handleOpenApply}
          className="flex-1 bg-[#1C3569] hover:bg-opacity-95 text-white font-bold text-sm py-3 px-4 rounded-xl shadow-sm transition-all"
        >
          Apply Now
        </button>
      </div>

      {/* FLOATING GIFT/COUPON GIF WIDGET */}
      <button
        type="button"
        onClick={handleOpenCoupon}
        className="fixed bottom-24 right-6 z-[99] w-14 h-14 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 animate-bounce"
        style={{ animationDuration: "3s" }}
        title="Claim Scholarship Discount"
      >
        <Image
          src={getAssetPath("/assets/images/gift.gif")}
          alt="Gift Discount Coupon"
          width={44}
          height={44}
          style={{ width: "auto", height: "auto" }}
          unoptimized // GIFs must be unoptimized to preserve animation
        />
      </button>

      {/* Modal Popup Overlay */}
      {activeModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="absolute inset-0 bg-transparent" onClick={() => setActiveModal(null)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10 text-slate-800">
            <FormWrapper
              title={activeModal === "coupon" ? "Claim Scholarship Code" : "Apply for Admission"}
              subtitle={activeModal === "coupon" ? "Check eligibility for scholarship benefits up to 20%" : "Please enter your details below"}
              courseOptions={data.coursesOptions}
              formNameOverride={activeModal === "coupon" ? `${data.name} Scholarship Form` : `${data.name} Mobile Sticky Form`}
              utmSourceFallback={data.utmSourceFallback}
              utmMediumFallback={data.utmMediumFallback}
              sourceOverride={data.crmSource}
              onClose={() => setActiveModal(null)}
            />
          </div>
        </div>
      )}
    </>
  );
}
