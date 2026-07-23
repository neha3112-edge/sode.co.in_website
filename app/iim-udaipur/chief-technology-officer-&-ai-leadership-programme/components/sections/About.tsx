"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { Phone } from "lucide-react";

import FormWrapper from "@/components/forms/FormWrapper";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";
import { IIMU_COURSE_OPTIONS } from "../../constants";

type AboutFormType = "callback" | "counselling" | null;

type AboutFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

export function About() {
  const [activeForm, setActiveForm] = useState<AboutFormType>(null);

  /* =========================================================
     LOCK BODY SCROLL WHEN MODAL IS OPEN
  ========================================================= */

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

  /* =========================================================
     CLOSE MODAL ON ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveForm(null);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const closeForm = () => {
    setActiveForm(null);
  };

  const logoIIITB = getAssetPath(
    "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/IITB.png",
  );
  const logoIIMU = getAssetPath(
    "/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/IIMU.png",
  );

  return (
    <>
      <section id="about" className="w-full bg-[#056493] py-14 sm:py-16 lg:py-20 text-white">
        <Container className="max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
            {/* Left Card - IIIT Bangalore */}
            <div className="flex flex-col items-center bg-transparent border border-white rounded-[20px] overflow-hidden text-center">
              <div className="relative h-[170px] md:h-[220px] w-full shrink-0">
                <Image
                  src={logoIIITB}
                  alt="About IIIT Bangalore"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl text-center">
                  About IIIT Bangalore
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/90 text-center">
                  International Institute of Information Technology Bangalore is a leading AI and technology institute recognised with NAAC A+ Accreditation. With 5000+ research papers and 100+ patents, IIIT Bangalore provides advanced learning in AI, platform architecture, cloud systems, and emerging technologies for professionals pursuing a Chief Technology Officer certification and AI leadership roles.
                </p>
              </div>
            </div>

            {/* Right Card - IIM Udaipur */}
            <div className="flex flex-col items-center bg-transparent border border-white rounded-[20px] overflow-hidden text-center">
              <div className="relative h-[170px] md:h-[220px] w-full shrink-0">
                <Image
                  src={logoIIMU}
                  alt="About IIM Udaipur"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h2 className="text-2xl font-extrabold text-white sm:text-3xl text-center">
                  About IIM Udaipur
                </h2>

                <p className="mt-4 text-sm leading-6 text-white/90 text-center">
                  Indian Institute of Management Udaipur is a globally recognised business school with AACSB Accreditation, placing it among the top 6% of business schools worldwide. Featured in FT and QS rankings, IIM Udaipur develops strategic leadership, P&L management, executive communication, and business skills essential for a Chief technology officer course and C-suite technology role.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Common CTA Action Row */}
          <div className="mt-8 md:mt-12 flex flex-row items-center justify-center gap-2 md:gap-4">
            <Button
              size="lg"
              type="button"
              onClick={() => setActiveForm("callback")}
              className="inline-flex min-h-10 md:min-h-12 items-center justify-center gap-2 rounded-xl bg-[#d9250b] px-4 md:px-8 py-3 text-xs md:text-sm font-bold text-white cursor-pointer transition-colors duration-200 hover:bg-[#bd1f08] sm:w-auto"
            >
              <Phone
                size={16}
                fill="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              />
              <span>Request Call Back</span>
            </Button>

            <Button
              size="lg"
              type="button"
              onClick={() => setActiveForm("counselling")}
              className="inline-flex cursor-pointer min-h-10 md:min-h-12 items-center justify-center rounded-xl border-2 border-white bg-transparent px-4 md:px-8 py-3 text-xs md:text-sm font-bold text-white transition-colors duration-200 hover:bg-white hover:text-[#076493] sm:w-auto"
            >
              Get 1:1 FREE Counselling
            </Button>
          </div>
        </Container>
      </section>

      {/* =====================================================
          REQUEST CALL BACK POPUP
      ====================================================== */}

      {activeForm === "callback" && (
        <AboutFormModal title="Request Call Back" onClose={closeForm}>
          <FormWrapper
            title="Request Call Back"
            subtitle="Share your details and our academic expert will contact you"
            onClose={closeForm}
            courseOptions={IIMU_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="IIMU About Request Call Back Form"
            sourceOverride="IIMU LP"
            utmSourceFallback="Organic"
            utmMediumFallback="IIMU_Organic"
            submitButtonText="Request Call Back"
            showPhoneCallLink
            redirectUrl="/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/thank-you"
          />
        </AboutFormModal>
      )}

      {/* =====================================================
          FREE COUNSELLING POPUP
      ====================================================== */}

      {activeForm === "counselling" && (
        <AboutFormModal title="Get Free Counselling" onClose={closeForm}>
          <FormWrapper
            title="Get 1:1 FREE Counselling"
            subtitle="Our academic experts will guide you step by step"
            onClose={closeForm}
            courseOptions={IIMU_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="IIMU About Free Counselling Form"
            sourceOverride="IIMU LP"
            utmSourceFallback="Organic"
            utmMediumFallback="IIMU_Organic"
            submitButtonText="Get Free Counselling"
            redirectUrl="/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/thank-you"
          />
        </AboutFormModal>
      )}
    </>
  );
}

function AboutFormModal({ title, children, onClose }: AboutFormModalProps) {
  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {children}
      </div>
    </div>
  );
}
