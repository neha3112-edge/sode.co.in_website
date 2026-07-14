"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MessageSquare, PhoneCall } from "lucide-react";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

const IIMK_COURSES = [
  {
    value: "HRM Analytics Online Certification",
    label: "HRM Analytics Online Certification",
  },
];

export function FloatingWidgets() {
  const [couponOpen, setCouponOpen] = useState(false);
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (couponOpen || enquireOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [couponOpen, enquireOpen]);

  return (
    <>
      {/* Floating Gift/Coupon Button */}
      <button
        type="button"
        onClick={() => setCouponOpen(true)}
        className="fixed bottom-24 right-4 z-40 h-14 w-14 rounded-full bg-white shadow-xl hover:scale-105 transition-transform duration-200 border border-gray-100 flex items-center justify-center cursor-pointer animate-bounce"
        aria-label="Get Scholarship Coupon Code"
      >
        <Image
          src={getAssetPath("/iimk/assets/img/gift.gif")}
          alt="Gift Coupon"
          width={40}
          height={40}
          className="object-contain"
          unoptimized
        />
      </button>

      {/* Floating Call Button */}
      <a
        href="tel:07065777755"
        className="fixed bottom-40 right-4 z-40 h-14 w-14 rounded-full bg-white shadow-xl hover:scale-105 transition-transform duration-200 border border-gray-100 flex items-center justify-center"
        aria-label="Call Expert"
      >
        <Image
          src={getAssetPath("/iimk/assets/img/call_icon.gif")}
          alt="Call"
          width={40}
          height={40}
          className="object-contain rounded-full"
          unoptimized
        />
      </a>

      {/* Sticky Bottom Bar on Mobile/Tablet */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 py-3 px-4 shadow-[0_-8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 lg:hidden flex gap-3 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* WhatsApp Button */}
        <a
          href="https://api.whatsapp.com/send/?phone=+917065777755&text=I%20want%20to%20download%20the%20IIM%20Kozhikode%20Online%20Program%20brochure"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#25d366] text-white text-sm font-bold py-3 shadow-xs hover:bg-[#20ba5a] active:scale-98 transition-all"
        >
          <MessageSquare size={18} fill="currentColor" />
          <span>Get Brochure</span>
        </a>

        {/* Apply Now Button */}
        <button
          type="button"
          onClick={() => setEnquireOpen(true)}
          className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-[#1d3d82] text-white text-sm font-bold py-3 shadow-xs hover:bg-[#142b5c] active:scale-98 transition-all cursor-pointer"
        >
          <PhoneCall size={18} />
          <span>Apply Now</span>
        </button>
      </div>

      {/* Coupon Modal */}
      {couponOpen && (
        <div
          role="presentation"
          onClick={() => setCouponOpen(false)}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Get Scholarship Coupon Code"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          >
            <FormWrapper
              title="Get Scholarship Coupon Code"
              subtitle="Academic Experts will assist you!"
              onClose={() => setCouponOpen(false)}
              courseOptions={IIMK_COURSES}
              defaultCourse="HRM Analytics Online Certification"
              hideCourseField
              formNameOverride="IIMK Coupon Code Form"
              sourceOverride="IIMK Gift Float Button"
              utmSourceFallback="IIMK Organic"
              utmMediumFallback="IIMK Coupon Button"
              submitButtonText="Submit"
              submitButtonClassName="bg-[#1d3d82] hover:bg-[#142b5c]"
            />
          </div>
        </div>
      )}

      {/* Enquire Now Modal */}
      {enquireOpen && (
        <div
          role="presentation"
          onClick={() => setEnquireOpen(false)}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Admission Open"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          >
            <FormWrapper
              title="Admission Open"
              subtitle="Academic Experts will assist you!"
              onClose={() => setEnquireOpen(false)}
              courseOptions={IIMK_COURSES}
              defaultCourse="HRM Analytics Online Certification"
              hideCourseField
              formNameOverride="IIMK Sticky Apply Now Form"
              sourceOverride="IIMK Sticky Mobile Button"
              utmSourceFallback="IIMK Organic"
              utmMediumFallback="IIMK Sticky Mobile Bar"
              submitButtonText="Submit"
              submitButtonClassName="bg-[#1d3d82] hover:bg-[#142b5c]"
              showPhoneCallLink
            />
          </div>
        </div>
      )}
    </>
  );
}
