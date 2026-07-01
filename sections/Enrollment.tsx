"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";
import FormWrapper from "@/components/ui/FormWrapper";
import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "SUBMIT QUERY FORM",
    desc: "Begin the journey by submitting your details. Then individuals can explore the right one year MBA programs suited to their career goals.",
    img: "/1-year-mba/assets/images/step-01-69c77e77ed4fd.webp",
  },
  {
    num: "02",
    title: "GET FREE COUNSELING",
    desc: " Connect with experts to understand the 1 year MBA programs and choose the right specialization of MBA degree in one year based on your profile.",
    img: "/1-year-mba/assets/images/step-02-69c77e785e629.webp",
  },
  {
    num: "03",
    title: "CHOOSE UNIVERSITY",
    desc: " Select from the top 1 year MBA schools offering flexible and industry-relevant MBA one year course options tailored to your specialization and interest.",
    img: "/1-year-mba/assets/images/step-03-69c77e77ecd47.webp",
  },
  {
    num: "04",
    title: "FEES PAYMENT",
    desc: " Secure your seat in a 1 year program MBA by completing the fee process. Get access to a flexible and career-focused learning experience.",
    img: "/1-year-mba/assets/images/step-04-69c77e7798970.webp",
  },
  {
    num: "05",
    title: "CONFIRMATION",
    desc: " Receive your admission confirmation and begin your one year executive MBA or chosen specialization with full academic support.",
    img: "/1-year-mba/assets/images/step-05-69c77e7797f53.webp",
  },
];

export function Enrollment() {
  const [proceedOpen, setProceedOpen] = useState(false);

  return (
    <>
      <section className="py-12 md:py-14 bg-[#f4f6f9]">
        <Container>

          {/* Heading */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-5xl font-bold text-gray-900 leading-snug">

              How to Enroll in a 1 Year Online MBA?            </h2>
            <p className="text-black text-base md:text-2xl">
              Admission Process
            </p>
          </div>

          {/* Steps */}
          <div className="relative">

            {/* Connector Line */}
            <div
              className="hidden lg:block absolute left-0 right-0 border-t-2 border-dashed border-[#00AEEF] z-0"
              style={{ top: "140px" }}
            />

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 items-stretch relative z-10">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col items-center h-full"
                >

                  {/* Hexagon */}
                  <div
                    className="w-10 h-9 md:w-12 md:h-10 bg-[#00AEEF] text-white font-bold flex items-center justify-center text-xs md:text-base shadow-md z-10 relative top-4"
                    style={{
                      clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                  >
                    {step.num}
                  </div>

                  {/* Card */}
                  <div className="w-full h-full bg-white shadow-md md:shadow-lg rounded-2xl pt-10 md:pt-12 pb-5 md:pb-6 px-3 md:px-5 flex flex-col text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Top */}
                    <div className="flex flex-col items-center grow">

                      {/* Image */}
                      <div className="mb-3 w-8 h-8 md:w-10 md:h-10 relative">
                        <Image
                          src={getAssetPath(step.img)}
                          alt={step.title}
                          fill
                          sizes="40px"
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <h4 className="text-[11px] md:text-[14px] font-bold text-gray-800 uppercase leading-tight min-h-8 flex items-center justify-center px-1">
                        {step.title}
                      </h4>

                    </div>

                    {/* Bottom Description */}
                    <div className="mt-3 w-full">
                      <div className="border border-dashed border-gray-400 rounded-md px-2 md:px-3 py-2 min-h-12 flex items-center justify-center">
                        <p className="text-[10px] md:text-[11px] text-gray-600 leading-relaxed text-center">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10 md:mt-12">
            <button
              onClick={() => setProceedOpen(true)}
              className="bg-[#00AEEF] hover:bg-[#0096C7] text-white font-bold px-6 md:px-10 py-3 rounded-lg inline-flex items-center gap-2 md:gap-3 uppercase tracking-wider transition-all hover:scale-105 shadow-lg cursor-pointer text-sm md:text-base"
            >
              Proceed For Step 1 Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="md:w-5 md:h-5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </button>
          </div>

        </Container>
      </section>

      {/* MODAL */}
      {proceedOpen && (
        <div
          onClick={() => setProceedOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-xl shadow-2xl relative p-6 animate-[scaleIn_0.2s_ease]"
          >
            <FormWrapper
              title="Proceed Form"
              subtitle="Fill the details to continue"
              onClose={() => setProceedOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}