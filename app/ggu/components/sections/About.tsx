"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { GGU_COURSE_OPTIONS } from "../../constants";

type AboutFormType = "callback" | null;

export function About() {
  const [activeForm, setActiveForm] = useState<AboutFormType>(null);

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  useEffect(() => {
    if (activeForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeForm]);

  useEffect(() => {
    if (!activeForm) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeForm();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeForm, closeForm]);

  const campusImage = getAssetPath(
    "/ggu/assets/img/about-ggu.webp",
  );

  return (
    <>
      <section
        id="about"
        className="relative overflow-hidden bg-[#063c70] text-white"
      >
        <div className="grid min-h-[300px] grid-cols-1 lg:grid-cols-[66%_34%]">
          {/* Left Content */}

          <div className="relative flex items-center bg-[#063c70] py-12 sm:py-14">
            <Container className="w-full">
              <div className="max-w-[1080px] pr-0 lg:pr-12 xl:pr-16">
                {/* Heading */}

                <h2 className="text-[37px] font-bold uppercase leading-none tracking-[-0.025em] text-white sm:text-[30px]">
                  About Us
                </h2>

                <h3 className="mt-3 text-[18px] font-medium leading-[1.2] tracking-[-0.02em] text-white sm:text-[20px]">
                  Golden Gate University San Francisco
                </h3>

                {/* Description */}

                <div className="mt-6 max-w-[1090px] space-y-7 text-[14px] leading-[1.35] text-white sm:text-[18px] lg:text-[14px]">
                  <p>
                    Founded in 1901, Golden Gate University (GGU) in San
                    Francisco is a pioneer in practice-based education for
                    adults. We focus exclusively on professional programs in
                    business, law, and technology, designed for working students
                    seeking to advance their careers. Flexible, accessible
                    courses are taught by expert faculty who are industry
                    leaders. GGU&apos;s mission is to empower a diverse student
                    body through an education that is immediately applicable in
                    the workplace, fostering success from day one.
                  </p>

                  <p>
                    With a strong emphasis on real-world experience, GGU also
                    offers networking opportunities, career support, and
                    specialized programs to help students achieve leadership
                    roles and professional growth in their chosen fields.
                  </p>
                </div>

                {/* Request Callback Button */}

                <button
                  type="button"
                  onClick={() => setActiveForm("callback")}
                  className="mt-6 inline-flex items-center justify-center rounded-[7px] bg-[#e94b04] px-6 py-2 text-[16px] font-medium text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#cc4002] hover:shadow-lg"
                >
                  Request Call Back
                </button>
              </div>
            </Container>
          </div>

          {/* Right Campus Image */}

          <div className="relative min-h-[360px] lg:min-h-[300px]">
            <Image
              src={campusImage}
              alt="Golden Gate University San Francisco campus"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 34vw"
              className="object-cover object-center"
            />

            {/* Mobile image overlay */}

            <div className="absolute inset-0 bg-[#063c70]/10 lg:hidden" />
          </div>
        </div>
      </section>

      {/* Request Callback Modal */}

      {activeForm === "callback" && (
        <AboutFormModal title="Request Call Back" onClose={closeForm}>
          <FormWrapper
            title="Request Call Back"
            subtitle="Our academic experts will contact you shortly"
            onClose={closeForm}
            courseOptions={GGU_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="GGU About Request Callback Form"
            sourceOverride="GGU LP"
            utmSourceFallback="Organic"
            utmMediumFallback="GGU_Organic"
            submitButtonText="Request Call Back"
            submitButtonClassName="!bg-[#e94b04] hover:!bg-[#cc4002]"
            redirectUrl="/thank-you"
          />
        </AboutFormModal>
      )}
    </>
  );
}

type AboutFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function AboutFormModal({ title, children, onClose }: AboutFormModalProps) {
  return (
    <div
      role="presentation"
      onMouseDown={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >

        {children}
      </div>
    </div>
  );
}
