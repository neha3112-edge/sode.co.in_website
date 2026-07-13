"use client";

import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Globe2,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

type BenefitItem = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

type FormType = "enroll" | null;

const benefitItems: BenefitItem[] = [
  {
    id: 1,
    title: "Expertise in Business:",
    description:
      "Gain advanced research, analytical, and leadership skills for global business excellence.",
    icon: BriefcaseBusiness,
  },
  {
    id: 2,
    title: "Global Career Opportunity :",
    description:
      "International opportunities in senior leadership roles with higher salary growth in management.",
    icon: BadgeCheck,
  },
  {
    id: 3,
    title: "Learning Approach:",
    description:
      "Access live faculty sessions, real-world projects, and alumni benefits worldwide.",
    icon: Globe2,
  },
  {
    id: 4,
    title: "180 ECTS European Credits:",
    description:
      "Internationally recognized accreditation and global value with Earn 180 ECTS credits.",
    icon: BadgeCheck,
  },
];

const RUSHFORD_COURSE_OPTIONS = [
  {
    value: "Doctorate of Business Administration",
    label: "Doctorate of Business Administration",
  },
  {
    value: "DBA in International Business",
    label: "DBA in International Business",
  },
  {
    value: "DBA in Healthcare Management",
    label: "DBA in Healthcare Management",
  },
  {
    value: "DBA in Human Resource Management",
    label: "DBA in Human Resource Management",
  },
  {
    value: "DBA in Supply Chain Management",
    label: "DBA in Supply Chain Management",
  },
  {
    value: "DBA in Finance",
    label: "DBA in Finance",
  },
  {
    value: "DBA in Data Science",
    label: "DBA in Data Science",
  },
  {
    value: "DBA in Marketing",
    label: "DBA in Marketing",
  },
  {
    value: "DBA in Business Analytics",
    label: "DBA in Business Analytics",
  },
];

export function DBABenefits() {
  const [activeForm, setActiveForm] = useState<FormType>(null);

  /*
  |--------------------------------------------------------------------------
  | Close Form
  |--------------------------------------------------------------------------
  */

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Lock Body Scroll
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    document.body.style.overflow = activeForm ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeForm]);

  /*
  |--------------------------------------------------------------------------
  | Close With Escape Key
  |--------------------------------------------------------------------------
  */

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
      <section id="dba-benefits" className="overflow-hidden bg-[#eeeeee]">
        <Container>
          <div className="grid min-h-[440px] grid-cols-1 items-end gap-8 lg:grid-cols-[36%_64%] lg:gap-0">
            {/* =============================================================
                Left Person Image
            ============================================================== */}

            <div className="order-2 flex h-[360px] items-end justify-center lg:order-1 lg:h-[440px] lg:justify-start">
              <div className="relative h-full w-full max-w-[440px]">
                <Image
                  src={getAssetPath(
                    "/assets/img/rushford-dba-benefits-person.webp",
                  )}
                  alt="Rushford DBA professional holding laptop"
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* =============================================================
                Right Content
            ============================================================== */}

            <div className="order-1 py-10 sm:py-12 lg:order-2 lg:py-[34px] lg:pl-6">
              {/* Heading */}

              <div>
                <h2 className="text-[25px] font-normal leading-[1.05] tracking-[-0.02em] sm:text-[28px] lg:text-[29px]">
                  <span className="text-[#FF2A62]">
                    Endless Benefits of the online DBA program
                  </span>

                  <br />

                  <span className="text-[#111111]">
                    at Rushford Business School
                  </span>
                </h2>
              </div>

              {/* Benefits Grid */}

              <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-9 md:grid-cols-2">
                {benefitItems.map((benefit) => (
                  <BenefitCard key={benefit.id} benefit={benefit} />
                ))}
              </div>

              {/* CTA Button */}

              <button
                type="button"
                onClick={() => setActiveForm("enroll")}
                className="mt-6 inline-flex min-h-[39px] cursor-pointer items-center justify-center gap-1 rounded-[5px] bg-black px-5 py-2 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1c1c1c] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-black/15 sm:text-[15px]"
              >
                Enroll &amp; Get Your DBA Degree
                <ArrowRight size={17} strokeWidth={2.8} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          Enroll Form Modal
      ============================================================== */}

      {activeForm === "enroll" && (
        <BenefitsFormModal title="Enroll for Rushford DBA" onClose={closeForm}>
          <FormWrapper
            title="Enroll Now"
            subtitle="Fill your details and our academic experts will guide you"
            onClose={closeForm}
            courseOptions={RUSHFORD_COURSE_OPTIONS}
            formNameOverride="Rushford DBA Benefits Enroll Form"
            sourceOverride="Rushford DBA Benefits Section"
            utmSourceFallback="Rushford Organic"
            utmMediumFallback="Rushford Benefits Enroll Button"
            submitButtonText="Enroll Now"
          />
        </BenefitsFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Benefit Card
|--------------------------------------------------------------------------
*/

type BenefitCardProps = {
  benefit: BenefitItem;
};

function BenefitCard({ benefit }: BenefitCardProps) {
  const Icon = benefit.icon;

  return (
    <article className="flex items-start gap-4">
      {/* Circular Icon */}

      <div className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-[#0869B8] text-white">
        <Icon size={36} strokeWidth={1.8} aria-hidden="true" />
      </div>

      {/* Text */}

      <div className="min-w-0 pt-0.5">
        <h3 className="text-[17px] font-extrabold leading-[1.15] text-[#111111] sm:text-[19px]">
          {benefit.title}
        </h3>

        <p className="mt-1 text-[13px] font-normal leading-[1.2] text-[#171717] sm:text-[15px]">
          {benefit.description}
        </p>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Form Modal
|--------------------------------------------------------------------------
*/

type BenefitsFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function BenefitsFormModal({
  title,
  children,
  onClose,
}: BenefitsFormModalProps) {
  return (
    <div
      role="presentation"
      onMouseDown={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          aria-label="Close enrollment form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#EAF4FF] text-[#0869B8] transition-colors duration-200 hover:bg-[#D7EAFF]"
        >
          <X size={20} strokeWidth={2.3} />
        </button>

        {children}
      </div>
    </div>
  );
}
