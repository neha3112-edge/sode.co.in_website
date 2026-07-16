"use client";

import Image from "next/image";
import {
  ArrowRight,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { RUSHFORD_COURSE_OPTIONS } from "../../constants";

type BenefitItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

type FormType = "enroll" | null;

const benefitItems: BenefitItem[] = [
  {
    id: 1,
    title: "Global Context:",
    description:
      "A doctoral degree provides a deep understanding of business operations on a global scale.",
    image: "/rushford/assets/img/expertise.webp",
  },
  {
    id: 2,
    title: "Flexible Format:",
    description:
      "Complete the programme fully online while maintaining your professional commitments.",
    image: "/rushford/assets/img/growth.webp",
  },
  {
    id: 3,
    title: "Learning Approach:",
    description:
      "Access live faculty sessions, real-world projects, and alumni benefits worldwide.",
    image: "/rushford/assets/img/modern-learning.webp",
  },
  {
    id: 4,
    title: "180 ECTS European Credits:",
    description:
      "Internationally recognized accreditation and global value with Earn 180 ECTS credits.",
    image: "/rushford/assets/img/credit.webp",
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
      <section id="dba-benefits" className="overflow-hidden bg-[#eeeeee] px-2 md:px-0">
        <Container>
          <div className="grid min-h-[440px] grid-cols-1 items-end gap-8 lg:grid-cols-[36%_64%] lg:gap-0">
            {/* =============================================================
                Left Person Image
            ============================================================== */}

            <div className="order-2 flex h-[360px] items-end justify-center lg:order-1 lg:h-[440px] lg:justify-start">
              <div className="relative h-full w-full max-w-[440px]">
                <Image
                  src={getAssetPath(
                    "/rushford/assets/img/whychosse.webp",
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

            <div className="order-1 pt-10 sm:py-12 lg:order-2 lg:py-[34px] lg:pl-6">
              {/* Heading */}

              <div>
                <h2 className="text-[22px] font-medium leading-[1.1] tracking-[-0.02em] sm:text-[28px] lg:text-[24px]">
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
                className="mt-4 inline-flex min-h-[39px] cursor-pointer items-center justify-center gap-1 rounded-[5px] bg-black px-5 py-2 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1c1c1c] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-black/15 sm:text-[13px]"
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
  return (
    <article className="flex items-start gap-4">
      {/* Benefit Image */}

      <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden">
        <Image
          src={getAssetPath(benefit.image)}
          alt={benefit.title}
          fill
          sizes="68px"
          className="object-contain"
        />
      </div>

      {/* Text */}

      <div className="min-w-0 pt-0.5">
        <h3 className="text-[17px] font-bold leading-[1.15] text-[#111111] sm:text-[18px]">
          {benefit.title}
        </h3>

        <p className="mt-1 text-[13px] font-normal leading-[1.2] text-[#171717] sm:text-[13px]">
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
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => {
          event.stopPropagation();
        }}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {children}
      </div>
    </div>
  );
}
