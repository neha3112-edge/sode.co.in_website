"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { ESGCI_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type FormType = "enroll" | "degree" | null;

type AdvantageItem = {
  id: number;
  title: string;
  image: string;
};

/*
|--------------------------------------------------------------------------
| Professional Advantages
|--------------------------------------------------------------------------
*/

const professionalAdvantages: AdvantageItem[] = [
  {
    id: 1,
    title: "PwC Board Advisory",
    image: "/esgci/assets/img/obtain-a-pwc-board-advisory.webp",
  },
  {
    id: 2,
    title: "Publish Your Dissertation",
    image: "/esgci/assets/img/publish-your-dissertation.webp",
  },
  {
    id: 3,
    title: "Teach at UGC Colleges",
    image: "/esgci/assets/img/teach-at-ugc-colleges.webp",
  },
  {
    id: 4,
    title: "No-Code Prototyping",
    image: "/esgci/assets/img/no-code-prototyping.webp",
  },
  {
    id: 5,
    title: "Secure Intellectual Property Globally",
    image: "/esgci/assets/img/global-ip-protection.webp",
  },
  {
    id: 6,
    title: "Pitch to Real Investors",
    image: "/esgci/assets/img/pitch-to-vcs.webp",
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
          src={getAssetPath("/esgci/assets/img/benifits.webp")}
          alt="Professional advantages background"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Green Overlay */}
        <div className="absolute inset-0" />

        {/* Left Dark Gradient */}
        <div className="absolute inset-0" />

        <Container className="relative z-10">
          <div className="grid min-h-[430px] grid-cols-1 items-center gap-8 py-10 lg:grid-cols-[35%_65%] lg:py-12">
            {/* Empty left space for background subject */}
            <div className="hidden lg:block" />

            {/* Right Content */}
            <div className="w-full">
              <div className="text-center lg:text-left">
                <h2 className="text-[27px] font-black uppercase leading-[1.05] tracking-[-0.025em] text-white sm:text-[32px] lg:text-[34px]">
                  Professional Advantages Of
                </h2>

                <p className="mt-2 text-[20px] font-medium leading-tight text-white sm:text-[24px] lg:text-[22px]">
                  Completing the ESGCI Online DBA
                </p>
              </div>

              {/* Advantages Grid */}
              <div className="mt-9 grid grid-cols-2 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {professionalAdvantages.map((item) => (
                  <AdvantageCard key={item.id} item={item} />
                ))}
              </div>

              {/* CTA */}
              <div className="mt-5 text-center lg:text-left">
                <button
                  type="button"
                  onClick={() => setActiveForm("enroll")}
                  className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-black px-5 py-2.5 text-[15px] font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#121212] hover:shadow-lg"
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
              <div className="relative aspect-[1.25/1] w-full overflow-hidden bg-white shadow-[0_3px_12px_rgba(0,0,0,0.24)] rounded-[4px]">
                <Image
                  src={getAssetPath("/esgci/assets/img/degree-ESGCI.webp")}
                  alt="ESGCI Online DBA degree sample"
                  fill
                  sizes="(max-width: 1024px) 100vw, 390px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Degree Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-[29px] font-extrabold leading-tight tracking-[-0.025em] text-[#009844] sm:text-[34px] lg:text-[34px]">
                ESGCI Online DBA Degree
              </h2>

              <p className="mx-auto mt-5 max-w-[530px] text-[14px] font-medium leading-[1.45] text-black sm:text-[14px] lg:mx-0">
                The ESGCI Online DBA offers the same prestigious doctorate as
                on-campus programs, providing global recognition and world-class
                education without relocation. It is a nationally accredited
                European degree with QUALIOPI certification and RNCP
                qualifications recognized by the French State.
              </p>

              <button
                type="button"
                onClick={() => setActiveForm("degree")}
                className="mt-6 inline-flex items-center justify-center rounded-[5px] bg-[#009844] px-7 py-2.5 text-[15px] font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#007f39] hover:shadow-lg"
              >
                Get Degree
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          Enroll/Apply Modal overlay
      ============================================================ */}

      {activeForm === "enroll" && (
        <AdvantageFormModal title="Enroll Now" onClose={closeForm}>
          <FormWrapper
            title="Admission Open"
            subtitle="Academic Experts will assist you!"
            onClose={closeForm}
            courseOptions={ESGCI_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="ESGCI Advantages Enroll Form"
            sourceOverride="ESGCI LP"
            utmSourceFallback="Organic"
            utmMediumFallback="ESGCI_Organic"
            submitButtonText="Submit"
            redirectUrl="/thank-you"
          />
        </AdvantageFormModal>
      )}

      {/* ============================================================
          Degree Modal overlay
      ============================================================ */}

      {activeForm === "degree" && (
        <AdvantageFormModal title="Get Degree Details" onClose={closeForm}>
          <FormWrapper
            title="Admission Open"
            subtitle="Academic Experts will assist you!"
            onClose={closeForm}
            courseOptions={ESGCI_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="ESGCI Advantages Degree Form"
            sourceOverride="ESGCI LP"
            utmSourceFallback="Organic"
            utmMediumFallback="ESGCI_Organic"
            submitButtonText="Submit"
            redirectUrl="/thank-you"
          />
        </AdvantageFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Advantage Card Component
|--------------------------------------------------------------------------
*/

type AdvantageCardProps = {
  item: AdvantageItem;
};

function AdvantageCard({ item }: AdvantageCardProps) {
  return (
    <article className="flex flex-col md:flex-row  items-center gap-4 rounded-xl bg-white px-5 py-4 backdrop-blur-md">
      {/* Icon Image */}
      <div className="relative h-12 w-12 shrink-0">
        <Image
          src={getAssetPath(item.image)}
          alt={item.title}
          fill
          sizes="48px"
          className="object-contain"
        />
      </div>

      <h3 className="text-[14px] font-bold leading-tight text-black sm:text-[13px] text-center md:text-left">
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

type AdvantageFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function AdvantageFormModal({
  title,
  children,
  onClose,
}: AdvantageFormModalProps) {
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
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {children}
      </div>
    </div>
  );
}
