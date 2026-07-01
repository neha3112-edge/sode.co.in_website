"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getAssetPath } from "@/lib/utils";
import FormWrapper from "@/components/ui/FormWrapper";
import { useState } from "react";

const highlights = [
  {
    icon: "/1-year-mba/assets/images/Fast-Track Your Career Growth.webp",
    title: "Fast-Track Your Career Growth",
    description:
      "Accelerate career growth quickly through a flexible 1 year online MBA ",
  },
  {
    icon: "/1-year-mba/assets/images/Specialise Smartly with In-Demand Career Options.webp",
    title: "Specialise with In-Demand Career Options",
    description:
      "Choose industry-relevant domains aligned with top one year MBA programs online",
  },
  {
    icon: "/1-year-mba/assets/images/Learn from Experts Who Bring Real Industry Insights.webp",
    title: "Learn from  Real Industry Experts.",
    description:
      " Gain practical insights from mentors in a one year online MBA",
  },
  {
    icon: "/1-year-mba/assets/images/highlight-01-69c2866fc695f.webp",
    title: "Upskill with Certifications While Studying",
    description:
      "Earn while learning and gain valuable additional certifications simultaneously.",
  },
  {
    icon: "/1-year-mba/assets/images/Flexible Learning Designed for Working Professionals (1).webp",
    title: "Flexible Learning for Working Professionals",
    description:
      "Study anytime, anywhere with a convenient 1 year online MBA",
  },
  {
    icon: "/1-year-mba/assets/images/highligh-02-69c2866f323d1.webp",
    title: "Turn knowledge into real-world projects",
    description:
      " Gain practical exposure through hands-on learning in 1 year MBA programs online",
  },
];

export function KeyHighlights() {
  const [counsellingOpen, setCounsellingOpen] = useState(false);

  return (
    <>
      <section id="why" className="relative w-full py-16 md:py-24 overflow-hidden text-white mt-8">

        {/* Background */}
        <Image
          src={getAssetPath("/assets/images/key-highlights-bg-image-69c28585775f9.webp")}
          alt="Key Highlights Person"
          fill
          priority
          className="hidden md:block object-cover object-center"
        />

        <Image
          src={getAssetPath("/assets/images/oooo-69c7b5034fa79 (1).webp")}
          alt="Hero mobile background"
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover object-center"
        />

        {/* Overlay (only helps mobile readability, desktop unaffected visually) */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center">

            {/* Desktop spacing same */}
            <div className="hidden lg:block lg:w-5/12"></div>

            <div className="w-full lg:w-7/12 flex flex-col items-center px-6 mr-0 md:mr-20 mt-30 md:mt-0">
              {/* Header (desktop same size) */}
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-[#00AEEF]">
                  Key Highlights
                </h2>
                <p className="text-xl md:text-3xl lg:text-4xl font-bold mt-1 text-white">
                  Online 1 Year MBA
                </p>
              </div>

              {/* Grid (desktop untouched) */}
              <div className="w-full max-w-3xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  {highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className={`
                        flex flex-col items-center justify-center text-center
                        px-4 md:px-6 py-5 md:py-6 min-h-50
                        ${[0, 2, 4].includes(idx) ? "border border-white/30" : ""}
                      `}
                    >
                      <div className="w-14 h-14 flex items-center justify-center rounded-full mb-3">
                        <Image
                          src={getAssetPath(item.icon)}
                          alt={item.title}
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-sm md:text-base font-bold text-white leading-snug">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-white/70 max-w-xs mx-auto leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button (desktop same, mobile smaller) */}
              <div className="mt-12 w-full flex justify-center">
                <Button
                  onClick={() => setCounsellingOpen(true)}
                  className="
                    bg-[#FFD700] hover:bg-[#FFC700] text-black rounded-full
                    px-6 py-3 text-sm
                    md:px-10 md:py-6 md:text-lg
                    font-bold shadow-lg hover:scale-105
                    transition-all duration-300 cursor-pointer
                  "
                >
                  Get 100% FREE 1:1 Counseling
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {counsellingOpen && (
        <div
          onClick={() => setCounsellingOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md mx-4 rounded-xl shadow-2xl relative p-6 animate-[scaleIn_0.2s_ease]"
          >

            {/* FORM */}
            <FormWrapper
              title="Get Free Counselling"
              subtitle="Our experts will guide you step by step"
              onClose={() => setCounsellingOpen(false)}
            />

          </div>
        </div>
      )}
    </>
  );
}