"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Check, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type AccreditationItem = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
};

type DegreeFormType = "degree" | null;

/*
|--------------------------------------------------------------------------
| Golden Gate University Accreditation Data
|--------------------------------------------------------------------------
*/

const accreditationItems: AccreditationItem[] = [
  {
    id: 1,
    title: "WASC",
    image: "/assets/images/ggu-wasc-logo.webp",
    imageAlt: "WASC Senior College and University Commission accreditation",
    imageWidth: 175,
    imageHeight: 105,
  },
  {
    id: 2,
    title: "AALS",
    image: "/assets/images/ggu-aals-logo.webp",
    imageAlt: "Association of American Law Schools",
    imageWidth: 150,
    imageHeight: 110,
  },
  {
    id: 3,
    title: "The State Bar of California",
    image: "/assets/images/ggu-california-bar-logo.webp",
    imageAlt: "The State Bar of California",
    imageWidth: 105,
    imageHeight: 105,
  },
  {
    id: 4,
    title: "AACSB",
    image: "/assets/images/ggu-aacsb-logo.webp",
    imageAlt: "AACSB Business Education Alliance member",
    imageWidth: 155,
    imageHeight: 80,
  },
];

/*
|--------------------------------------------------------------------------
| Course Options
|--------------------------------------------------------------------------
*/

const GGU_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "Doctor of Business Administration",
    label: "Doctor of Business Administration",
  },
  {
    value: "Master of Business Administration",
    label: "Master of Business Administration",
  },
  {
    value: "Online DBA in Leadership",
    label: "Online DBA in Leadership",
  },
  {
    value: "Online DBA in Business Analytics",
    label: "Online DBA in Business Analytics",
  },
  {
    value: "Online DBA in Marketing",
    label: "Online DBA in Marketing",
  },
  {
    value: "Online DBA in General Management",
    label: "Online DBA in General Management",
  },
];

/*
|--------------------------------------------------------------------------
| Degree Benefits
|--------------------------------------------------------------------------
*/

const benefits = [
  "The student gets the same top-quality education as those on campus, without having to move.",
  "GGU has been trusted since 1959 with full accreditation from WASC.",
  "You join over 68,000 alumni worldwide, many in leadership positions.",
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function Accreditations() {
  const [activeForm, setActiveForm] = useState<DegreeFormType>(null);

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
  | Body Scroll Lock
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
  | Escape Key Close
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
      {/* =============================================================
          Accreditations Section
      ============================================================== */}

      <section id="accreditations" className="pb-6 pt-10 sm:pt-12 lg:pt-11">
        <Container>
          <div className="mx-auto w-full max-w-283.75">
            {/* Heading */}
            <div className="text-center">
              <h2 className="text-[27px] font-black leading-[1.15] tracking-[-0.035em] text-black sm:text-[31px]">
                Accreditations &amp; Associations
              </h2>
              <p className="mt-1 text-[17px] font-medium leading-[1.3] text-black sm:text-[19px]">
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

      {/* =============================================================
          Degree Section
      ============================================================== */}

      <section
        id="degree"
        className="bg-[#f3f3f3] pb-10 pt-4 sm:pb-12 lg:pb-[44px] lg:pt-5"
      >
        <Container>
          <div className="mx-auto max-w-[1135px] rounded-[15px] bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-[82px] lg:py-[72px]">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[45%_55%] lg:gap-[70px]">
              {/* Left Degree Image */}

              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-[545px]">
                  <div className="relative aspect-[1.27/1] w-full overflow-hidden bg-white shadow-[0_2px_10px_rgba(0,0,0,0.35)]">
                    <Image
                      src={getAssetPath(
                        "/assets/images/golden-gate-degree-certificate.webp",
                      )}
                      alt="Golden Gate University Doctor of Business Administration degree"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 545px"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              </div>

              {/* Right Content */}

              <div className="text-center lg:text-left">
                <h2 className="text-[32px] font-black leading-[0.98] tracking-[-0.035em] text-[#003d78] sm:text-[40px] lg:text-[48px]">
                  Advance Your Career with GGU
                  <span className="block">Online Courses</span>
                </h2>

                <p className="mx-auto mt-7 max-w-[760px] text-[16px] font-semibold leading-[1.35] text-black sm:text-[18px] lg:mx-0 lg:text-[19px]">
                  GGU makes it easy for students to get a management and
                  doctoral degree. Students can study whenever they are
                  comfortable and go at their own pace. GGU gives students
                  everything they need to succeed.
                </p>

                {/* Benefits */}

                <div className="mx-auto mt-7 max-w-[790px] space-y-7 text-left lg:mx-0">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-4">
                      <div className="mt-[1px] flex h-6 w-6 shrink-0 items-center justify-center rounded-[4px] bg-[#e94b04] text-white">
                        <Check size={18} strokeWidth={3.4} />
                      </div>

                      <p className="text-[15px] font-semibold leading-[1.35] text-black sm:text-[17px] lg:text-[18px]">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Get Degree Button */}

                <button
                  type="button"
                  onClick={() => setActiveForm("degree")}
                  className="mt-10 inline-flex min-h-[56px] items-center justify-center rounded-[7px] bg-[#e94b04] px-8 py-3 text-[20px] font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ca4002] hover:shadow-lg sm:min-w-[175px] sm:text-[22px]"
                >
                  Get Degree
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          Degree Form Modal
      ============================================================== */}

      {activeForm === "degree" && (
        <DegreeFormModal title="Get GGU Degree" onClose={closeForm}>
          <FormWrapper
            title="Get Degree"
            subtitle="Share your details and our academic experts will guide you"
            onClose={closeForm}
            courseOptions={GGU_COURSE_OPTIONS}
            formNameOverride="GGU Get Degree Form"
            sourceOverride="GGU Degree Section"
            utmSourceFallback="GGU Organic"
            utmMediumFallback="GGU Get Degree Button"
            submitButtonText="Get Degree"
            submitButtonClassName="!bg-[#e94b04] hover:!bg-[#ca4002]"
          />
        </DegreeFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Accreditation Card
|--------------------------------------------------------------------------
*/

type AccreditationCardProps = {
  item: AccreditationItem;
};

function AccreditationCard({ item }: AccreditationCardProps) {
  return (
    <article className="group flex min-h-[200px] flex-col overflow-hidden bg-white shadow-[0_6px_18px_rgba(0,0,0,0.03)]">
      {/* Logo Area */}

      <div className="flex min-h-[156px] flex-1 items-center justify-center px-5 py-5">
        <Image
          src={getAssetPath(item.image)}
          alt={item.imageAlt}
          width={item.imageWidth}
          height={item.imageHeight}
          className="max-h-[110px] w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title Area */}

      <div className="flex min-h-[45px] items-center justify-center border-b-2 border-[#f04d0a] px-3 py-3">
        <h3 className="text-center text-[14px] font-extrabold leading-[1.2] text-[#003b70] sm:text-[15px]">
          {item.title}
        </h3>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Degree Form Modal
|--------------------------------------------------------------------------
*/

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
        <button
          type="button"
          aria-label="Close degree form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0e8] text-[#e94b04] transition-colors hover:bg-[#ffe0d0]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
