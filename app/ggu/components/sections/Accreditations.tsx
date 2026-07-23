"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Check, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { GGU_COURSE_OPTIONS } from "../../constants";

type AccreditationItem = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

type DegreeFormType = "degree" | null;

const accreditationItems: AccreditationItem[] = [
  {
    id: 1,
    title: "WASC",
    image: "/ggu/assets/img/wasc.webp",
    imageAlt: "WASC Senior College and University Commission accreditation",
    imageWidth: 175,
    imageHeight: 105,
  },
  {
    id: 2,
    title: "AALS",
    image: "/ggu/assets/img/association-of-american.webp",
    imageAlt: "Association of American Law Schools",
    imageWidth: 150,
    imageHeight: 110,
  },
  {
    id: 3,
    title: "The State Bar of California",
    image: "/ggu/assets/img/state-bar-of-california.webp",
    imageAlt: "The State Bar of California",
    imageWidth: 105,
    imageHeight: 105,
  },
  {
    id: 4,
    title: "AACSB",
    image: "/ggu/assets/img/aacsb.webp",
    imageAlt: "AACSB Business Education Alliance member",
    imageWidth: 155,
    imageHeight: 80,
  },
];

const benefits = [
  "The student gets the same top-quality education as those on campus, without having to move.",
  "GGU has been trusted since 1959 with full accreditation from WASC.",
  "You join over 68,000 alumni worldwide, many in leadership positions.",
];

export function Accreditations() {
  const [activeForm, setActiveForm] = useState<DegreeFormType>(null);

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

  return (
    <>
      {/* Accreditations Section */}

      <section id="accreditations" className="pb-6 pt-10 sm:pt-12 lg:pt-11 bg-[#f3f3f3]">
        <Container>
          <div className="mx-auto w-full max-w-[1135px]">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-[27px] font-extrabold leading-[1.15] tracking-[-0.035em] text-[#003d78] sm:text-[31px]">
                Accreditations &amp; Associations
              </h2>
              <p className="mt-3 text-[17px] font-medium leading-[1.3] text-black sm:text-[16px]">
                of Golden Gate University, San Francisco
              </p>
            </div>
            {/* Accreditation Cards */}
            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-[35px] lg:grid-cols-4 lg:gap-[20px]">
              {accreditationItems.map((item) => (
                <AccreditationCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Degree Section */}

      <section
        id="degree"
        className="bg-[#f3f3f3] pb-10 pt-4 sm:pb-12 lg:pb-[44px] lg:pt-5"
      >
        <Container>
          <div className="mx-auto max-w-[1135px] rounded-[15px] bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-[82px] lg:py-[72px] shadow-sm">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[45%_55%] lg:gap-[50px]">
              {/* Left Degree Image */}

              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[545px]">
                  <div className="relative aspect-[1.3/1] w-full overflow-hidden bg-white shadow-[0_2px_10px_rgba(0,0,0,0.25)] rounded-[6px]">
                    <Image
                      src={getAssetPath(
                        "/ggu/assets/img/doctor_certificate.webp",
                      )}
                      alt="Golden Gate University Doctor of Business Administration degree"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 545px"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Right Content */}

              <div className="text-center lg:text-left">
                <h2 className="text-[24px] font-extrabold leading-[0.98] tracking-[-0.035em] text-[#003d78] sm:text-[30px]">
                  Advance Your Career with GGU Online Courses
                </h2>

                <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-[1.35] text-black sm:text-[14px]">
                  GGU makes it easy for students to get a management and
                  doctoral degree. Students can study whenever they are
                  comfortable and go at their own pace. GGU gives students
                  everything they need to succeed.
                </p>

                {/* Benefits */}

                <div className="mx-auto mt-5 max-w-[790px] space-y-3 text-left lg:mx-0">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-4">
                      <div className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-[4px] bg-[#ee5105] text-white">
                        <Check size={14} strokeWidth={3.4} />
                      </div>

                      <p className="text-[12px] font-semibold leading-[1.3] text-[#2c2c2c] sm:text-[14px]">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Get Degree Button */}

                <button
                  type="button"
                  onClick={() => setActiveForm("degree")}
                  className="mt-6 inline-flex items-center justify-center rounded-[7px] bg-[#ee5105] hover:bg-[#d94800] px-6 py-2 text-[20px] font-semibold text-white cursor-pointer sm:text-[16px]"
                >
                  Get Degree
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Degree Modal */}

      {activeForm === "degree" && (
        <DegreeFormModal title="Get Degree Info" onClose={closeForm}>
          <FormWrapper
            title="Admission Open"
            subtitle="Academic Experts will assist you!"
            onClose={closeForm}
            courseOptions={GGU_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="GGU Get Degree Form"
            sourceOverride="GGU LP"
            utmSourceFallback="Organic"
            utmMediumFallback="GGU_Organic"
            submitButtonText="Submit"
            redirectUrl="/thank-you"
          />
        </DegreeFormModal>
      )}
    </>
  );
}

type AccreditationCardProps = {
  item: AccreditationItem;
};

function AccreditationCard({ item }: AccreditationCardProps) {
  return (
    <article className="flex min-h-[178px] flex-col items-center justify-between border-b-[2px] border-[#e16a2c] bg-white px-5 py-6 text-center shadow-[0_12px_24px_rgba(0,0,0,0.04)]">
      {/* Logo */}

      <div className="relative flex flex-1 items-center justify-center">
        <Image
          src={getAssetPath(item.image)}
          alt={item.imageAlt}
          width={item.imageWidth}
          height={item.imageHeight}
          className="h-auto object-contain"
        />
      </div>

      {/* Title */}

      <h3 className="mt-4 text-[14px] font-bold tracking-[-0.01em] text-[#003d78]">
        {item.title}
      </h3>
    </article>
  );
}

type DegreeFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function DegreeFormModal({ title, children, onClose }: DegreeFormModalProps) {
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
