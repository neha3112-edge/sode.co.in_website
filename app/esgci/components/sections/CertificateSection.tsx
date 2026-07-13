"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpenCheck,
  FileBadge,
  GraduationCap,
  Lightbulb,
  Presentation,
  ShieldCheck,
  X,
} from "lucide-react";

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

type FormType = "enroll" | "degree" | null;

type AdvantageItem = {
  id: number;
  title: string;
  icon: ReactNode;
};

/*
|--------------------------------------------------------------------------
| ESGCI Course Options
|--------------------------------------------------------------------------
*/

const ESGCI_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "ESGCI Online Doctor of Business Administration",
    label: "ESGCI Online Doctor of Business Administration",
  },
];

/*
|--------------------------------------------------------------------------
| Professional Advantages
|--------------------------------------------------------------------------
*/

const professionalAdvantages: AdvantageItem[] = [
  {
    id: 1,
    title: "PwC Board Advisory",
    icon: <FileBadge size={30} strokeWidth={1.9} />,
  },
  {
    id: 2,
    title: "Publish Your Dissertation",
    icon: <GraduationCap size={31} strokeWidth={1.9} />,
  },
  {
    id: 3,
    title: "Teach at UGC Colleges",
    icon: <BookOpenCheck size={30} strokeWidth={1.9} />,
  },
  {
    id: 4,
    title: "No-Code Prototyping",
    icon: <Lightbulb size={30} strokeWidth={1.9} />,
  },
  {
    id: 5,
    title: "Secure Intellectual Property Globally",
    icon: <ShieldCheck size={30} strokeWidth={1.9} />,
  },
  {
    id: 6,
    title: "Pitch to Real Investors",
    icon: <Presentation size={30} strokeWidth={1.9} />,
  },
];

/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function CertificateSection() {
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
          PROFESSIONAL ADVANTAGES
      ============================================================== */}

      <section
        id="professional-advantages"
        className="relative overflow-hidden bg-[#00aa4b] text-white"
      >
        {/* Background Image */}
        <Image
          src={getAssetPath(
            "/assets/img/esgci-professional-advantages-bg.webp",
          )}
          alt="Professional working on laptop"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Green Overlay */}
        <div className="absolute inset-0 bg-[#00aa4b]/82" />

        {/* Left Dark Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent" />

        <Container className="relative z-10">
          <div className="grid min-h-[430px] grid-cols-1 items-center gap-8 py-10 lg:grid-cols-[38%_62%] lg:py-12">
            {/* Empty left space for background subject */}
            <div className="hidden lg:block" />

            {/* Right Content */}
            <div className="w-full">
              <div className="text-center lg:text-left">
                <h2 className="text-[27px] font-black uppercase leading-[1.05] tracking-[-0.025em] text-white sm:text-[32px] lg:text-[38px]">
                  Professional Advantages Of
                </h2>

                <p className="mt-1 text-[20px] font-medium leading-tight text-white sm:text-[24px] lg:text-[27px]">
                  Completing the ESGCI Online DBA
                </p>
              </div>

              {/* Advantages Grid */}
              <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {professionalAdvantages.map((item) => (
                  <AdvantageCard key={item.id} item={item} />
                ))}
              </div>

              {/* CTA */}
              <div className="mt-5 text-center lg:text-left">
                <button
                  type="button"
                  onClick={() => setActiveForm("enroll")}
                  className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-[5px] bg-black px-5 py-2.5 text-[15px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#121212] hover:shadow-lg"
                >
                  Enroll &amp; Get Your DBA Degree
                  <ArrowRight
                    size={20}
                    strokeWidth={3}
                    className="text-[#ffe500]"
                  />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          ESGCI ONLINE DBA DEGREE
      ============================================================== */}

      <section id="degree" className="bg-white py-12 sm:py-14 lg:py-[48px]">
        <Container>
          <div className="mx-auto grid max-w-[1060px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            {/* Degree Image */}
            <div className="relative mx-auto w-full max-w-[390px]">
              <div className="relative aspect-[1.25/1] w-full overflow-hidden bg-white shadow-[0_3px_12px_rgba(0,0,0,0.24)]">
                <Image
                  src={getAssetPath("/assets/img/esgci-online-dba-degree.webp")}
                  alt="ESGCI Online DBA degree sample"
                  fill
                  sizes="(max-width: 1024px) 100vw, 390px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Degree Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-[29px] font-black leading-tight tracking-[-0.025em] text-[#009844] sm:text-[34px] lg:text-[38px]">
                ESGCI Online DBA Degree
              </h2>

              <p className="mx-auto mt-5 max-w-[530px] text-[14px] font-medium leading-[1.45] text-black sm:text-[15px] lg:mx-0">
                The ESGCI Online DBA offers the same prestigious doctorate as
                on-campus programs, providing global recognition and world-class
                education without relocation. It is a nationally accredited
                European degree with QUALIOPI certification and RNCP
                qualifications recognized by the French State.
              </p>

              <button
                type="button"
                onClick={() => setActiveForm("degree")}
                className="mt-5 inline-flex min-h-[39px] items-center justify-center rounded-[5px] bg-[#ffe500] px-5 py-2.5 text-[15px] font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f1d900] hover:shadow-md"
              >
                Get Degree
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          ENROLL FORM
      ============================================================== */}

      {activeForm === "enroll" && (
        <CustomFormModal title="Enroll in ESGCI Online DBA" onClose={closeForm}>
          <FormWrapper
            title="Enroll Now"
            subtitle="Start your ESGCI Online DBA journey today"
            onClose={closeForm}
            courseOptions={ESGCI_COURSE_OPTIONS}
            defaultCourse="ESGCI Online Doctor of Business Administration"
            hideCourseField
            formNameOverride="ESGCI Professional Advantages Enroll Form"
            sourceOverride="ESGCI Professional Advantages"
            utmSourceFallback="ESGCI Organic"
            utmMediumFallback="ESGCI Enroll Button"
            submitButtonText="Enroll Now"
          />
        </CustomFormModal>
      )}

      {/* =============================================================
          GET DEGREE FORM
      ============================================================== */}

      {activeForm === "degree" && (
        <CustomFormModal
          title="Get ESGCI Online DBA Degree"
          onClose={closeForm}
        >
          <FormWrapper
            title="Get Degree"
            subtitle="Share your details and our academic experts will guide you"
            onClose={closeForm}
            courseOptions={ESGCI_COURSE_OPTIONS}
            defaultCourse="ESGCI Online Doctor of Business Administration"
            hideCourseField
            formNameOverride="ESGCI Degree Request Form"
            sourceOverride="ESGCI Degree Section"
            utmSourceFallback="ESGCI Organic"
            utmMediumFallback="ESGCI Get Degree Button"
            submitButtonText="Get Degree"
          />
        </CustomFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Advantage Card
|--------------------------------------------------------------------------
*/

type AdvantageCardProps = {
  item: AdvantageItem;
};

function AdvantageCard({ item }: AdvantageCardProps) {
  return (
    <article className="flex min-h-[70px] items-center gap-3 rounded-[10px] bg-white px-5 py-3 text-black">
      <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full border-2 border-[#00aa4b] text-[#00aa4b]">
        {item.icon}
      </div>

      <h3 className="text-[14px] font-black leading-[1.25] sm:text-[15px]">
        {item.title}
      </h3>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Form Modal
|--------------------------------------------------------------------------
*/

type CustomFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function CustomFormModal({ title, children, onClose }: CustomFormModalProps) {
  return (
    <div
      role="presentation"
      onMouseDown={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          aria-label="Close form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#e9f8ef] text-[#009844] transition-colors hover:bg-[#d4f0df]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
