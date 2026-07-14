"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

const IIMK_COURSES = [
  {
    value: "HRM Analytics Online Certification",
    label: "HRM Analytics Online Certification",
  },
];

const partners = [
  { name: "Capco", src: "/iimk/assets/img/capco.webp" },
  { name: "Cognizant", src: "/iimk/assets/img/Cognizant.webp" },
  { name: "Delhivery", src: "/iimk/assets/img/Delhivery.webp" },
  { name: "Capita", src: "/iimk/assets/img/capita.webp" },
  { name: "Disney", src: "/iimk/assets/img/disnep.webp" },
  { name: "Codeyoung", src: "/iimk/assets/img/codeyoung.webp" },
  { name: "CBSPL", src: "/iimk/assets/img/cbspl.webp" },
];

export function CertificateSection() {
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    if (formOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [formOpen]);

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      <section id="sample-degree" className="w-full bg-[#f8fafc] py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Certificate Image */}
            <div className="relative mx-auto w-full max-w-[500px]">
              <div className="relative aspect-[1.414/1] w-full overflow-hidden rounded-lg shadow-xl border border-gray-200 bg-white p-2">
                <Image
                  src={getAssetPath("/iimk/assets/img/sample-certificate.webp")}
                  alt="IIM Kozhikode Sample Degree Certificate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold leading-tight text-[#0f3b8c] sm:text-4xl">
                IIM Kozhikode
                <br />
                Sample Degree
              </h2>
              <h3 className="mt-2 text-xl font-bold text-gray-700">
                HR Analytics Certification Course
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-gray-600 sm:text-base">
                Complete all course modules and earn a professional HR Management and Analytics certification from IIM Kozhikode. This course will help you develop important skills for the HR field. It will also boost your career and make you more competitive in the job market.
              </p>

              <Button
                size="lg"
                type="button"
                onClick={() => setFormOpen(true)}
                className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#0f3b8c] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#0c2e6f] cursor-pointer"
              >
                Get Degree
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Placement Partners Section */}
      <section id="placement" className="bg-white py-8 sm:py-12">
        <Container>
          <div className="bg-[#f2f2f2] px-6 py-10 sm:py-12 rounded-[32px] border border-gray-100 shadow-xs">
            <h2 className="text-2xl sm:text-[26px] font-extrabold text-[#0f3b8c] text-center tracking-wide uppercase">
              PLACEMENTS PARTNERS
            </h2>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="bg-white px-5 py-3 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-gray-200/60 flex items-center justify-center h-14 sm:h-16 w-32 sm:w-36 shrink-0 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  <div className="relative h-10 w-full">
                    <Image
                      src={getAssetPath(partner.src)}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 640px) 112px, 144px"
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Popup Form */}
      {formOpen && (
        <div
          role="presentation"
          onClick={closeForm}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Get Degree"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
          >
            <FormWrapper
              title="Get Degree"
              subtitle="Share your details and our academic experts will guide you"
              onClose={closeForm}
              courseOptions={IIMK_COURSES}
              defaultCourse="HRM Analytics Online Certification"
              hideCourseField
              formNameOverride="IIMK Sample Certificate Form"
              sourceOverride="IIMK Certificate Section"
              utmSourceFallback="IIMK Organic"
              utmMediumFallback="IIMK Certificate Get Degree Button"
              submitButtonText="Get Degree"
              submitButtonClassName="bg-[#1d3d82] hover:bg-[#142b5c]"
            />
          </div>
        </div>
      )}
    </>
  );
}
