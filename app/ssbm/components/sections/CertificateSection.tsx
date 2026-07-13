"use client";

import Image from "next/image";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  GraduationCap,
  Lightbulb,
  Network,
  Presentation,
  Users,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";

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

type FormType = "enroll" | "callback" | "degree" | null;

type FeatureItem = {
  id: number;
  title: string;
  icon: ReactNode;
};

/*
|--------------------------------------------------------------------------
| Course Options
|--------------------------------------------------------------------------
*/

const SSBM_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "SSBM Global Doctor of Business Administration",
    label: "SSBM Global Doctor of Business Administration",
  },
];

/*
|--------------------------------------------------------------------------
| Global Doctor Features
|--------------------------------------------------------------------------
*/

const globalDoctorFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Swiss Quality Education",
    icon: <BadgeCheck size={44} strokeWidth={2} />,
  },
  {
    id: 2,
    title: "Session with on-campus students/alumni",
    icon: <GraduationCap size={46} strokeWidth={1.8} />,
  },
  {
    id: 3,
    title: "Peer-to-peer networking",
    icon: <Network size={45} strokeWidth={1.8} />,
  },
  {
    id: 4,
    title: "PwC Directorship & Board Advisory Certificate",
    icon: <Award size={45} strokeWidth={1.8} />,
  },
  {
    id: 5,
    title: "Fortune 500 Perspectives",
    icon: <Users size={45} strokeWidth={1.8} />,
  },
  {
    id: 6,
    title: "Pitch to Real Investors",
    icon: <Lightbulb size={45} strokeWidth={1.8} />,
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
  | Escape Key
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
          Global Doctor Section
      ============================================================== */}

      <section
        id="global-doctor"
        className="relative overflow-hidden bg-[#bd2c2c]"
      >
        <div className="grid min-h-[438px] grid-cols-1 lg:grid-cols-[36%_64%]">
          {/* Left Image */}
          <div className="relative min-h-[350px] overflow-hidden lg:min-h-[438px]">
            <Image
              src={getAssetPath("/assets/images/ssbm-global-doctor-bg.webp")}
              alt="SSBM Global Doctor of Business Administration"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="object-cover object-center"
            />

            {/* Red blending overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-[#bd2c2c]/75" />

            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#bd2c2c]/35 to-transparent lg:hidden" />
          </div>

          {/* Right Content */}
          <div className="flex items-center bg-[#bd2c2c] px-5 py-10 sm:px-8 lg:px-10 lg:py-8 xl:px-14">
            <div className="w-full">
              {/* Heading */}
              <div className="text-center lg:text-left">
                <h2 className="text-[31px] font-black uppercase leading-[0.95] tracking-[-0.035em] text-white sm:text-[38px] lg:text-[39px]">
                  Global Doctor of
                </h2>

                <p className="mt-2 text-[20px] font-semibold leading-tight text-white sm:text-[24px]">
                  Business Administration with SSBM
                </p>
              </div>

              {/* Feature Grid */}
              <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {globalDoctorFeatures.map((feature) => (
                  <GlobalFeatureCard key={feature.id} feature={feature} />
                ))}
              </div>

              {/* Enroll Button */}
              <div className="mt-5 flex justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => setActiveForm("enroll")}
                  className="inline-flex min-h-[39px] items-center justify-center gap-2 rounded-[5px] bg-black px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#202020]"
                >
                  Enroll &amp; Get Your DBA Degree
                  <ArrowRight
                    size={18}
                    strokeWidth={3}
                    className="text-[#d3262f]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================================
          About Online SSBM
      ============================================================== */}

      <section
        id="about"
        className="relative min-h-[262px] overflow-hidden bg-black"
      >
        {/* Background Image */}
        <Image
          src={getAssetPath("/assets/images/ssbm-about-bg.webp")}
          alt="SSBM University campus"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Screenshot-style dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/20" />

        <Container className="relative z-10">
          <div className="flex min-h-[262px] items-center py-10 sm:py-12">
            <div className="w-full max-w-[1020px]">
              <h2 className="text-[31px] font-black uppercase leading-tight tracking-[-0.025em] text-white sm:text-[38px]">
                About Online SSBM
              </h2>

              <p className="mt-4 max-w-[1000px] text-[13px] font-semibold leading-[1.42] text-white sm:text-[14px]">
                SSBM University, located in Switzerland, offers modern
                industry-accredited management courses. The institution helps
                students get flexible higher education in online mode, which is
                specifically made for working professionals across the globe.
                Their digital learning curriculum offers interactive classes,
                real business case studies, international faculty access, and a
                properly structured research environment. Students looking to
                take admission in SSBM DBA can develop practical knowledge,
                apply research and leadership skills that match global business
                standards. As a globally known university offering executive and
                doctoral education, SSBM supports learners through personalised
                academic guidance, dedicated mentorship, and international
                networking opportunities.
              </p>

              <button
                type="button"
                onClick={() => setActiveForm("callback")}
                className="mt-5 inline-flex min-h-[39px] items-center justify-center rounded-[5px] bg-[#cf2630] px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ad1f28]"
              >
                Request Call Back
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          PwC Certificate Section
      ============================================================== */}

      <section
        id="sample-certificate"
        className="bg-white py-12 sm:py-14 lg:py-[48px]"
      >
        <Container>
          <div className="mx-auto grid w-full max-w-[990px] grid-cols-1 items-center gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-[95px]">
            {/* Certificate Image */}
            <div className="mx-auto w-full max-w-[395px]">
              <div className="relative aspect-[1.32/1] w-full bg-white p-3 shadow-[0_0_10px_rgba(0,0,0,0.28)]">
                <Image
                  src={getAssetPath(
                    "/assets/images/pwc-board-advisory-certificate.webp",
                  )}
                  alt="PwC Directorship and Board Advisory certificate"
                  fill
                  sizes="(max-width: 1024px) 90vw, 395px"
                  className="object-contain p-3"
                />
              </div>
            </div>

            {/* Certificate Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-[30px] font-black uppercase leading-[1.03] tracking-[-0.025em] text-[#c8242e] sm:text-[37px]">
                PwC Directorship &amp; Board
                <br className="hidden sm:block" /> Advisory Certificate
              </h2>

              <p className="mx-auto mt-5 max-w-[550px] text-[13px] font-medium leading-[1.45] text-black sm:text-[14px] lg:mx-0">
                The PwC Board Advisory certificate is a specialised global
                program made for a professional who aims to transform their role
                to board level. The student will get an SSBM DBA university
                qualification and this certificate after completing the online
                DBA course. With PwC India, this program cultivates strategic
                confidence through live sessions, real-world simulations, and
                expert-led masterclasses.
              </p>

              <button
                type="button"
                onClick={() => setActiveForm("degree")}
                className="mt-5 inline-flex min-h-[39px] items-center justify-center rounded-[5px] bg-[#cf2630] px-5 py-2.5 text-[15px] font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ad1f28]"
              >
                Get Degree
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          Enroll Form
      ============================================================== */}

      {activeForm === "enroll" && (
        <CustomFormModal title="Enroll for SSBM Online DBA" onClose={closeForm}>
          <FormWrapper
            title="Enroll Now"
            subtitle="Start your SSBM Online DBA admission journey"
            onClose={closeForm}
            defaultCourse="SSBM Global Doctor of Business Administration"
            hideCourseField
            formNameOverride="SSBM Global Doctor Enroll Form"
            sourceOverride="SSBM Global Doctor Section"
            utmSourceFallback="SSBM Organic"
            utmMediumFallback="SSBM Enroll Button"
            submitButtonText="Enroll Now"
            submitButtonClassName="!bg-[#c8242e] hover:!bg-[#a91f27]"
          />
        </CustomFormModal>
      )}

      {/* =============================================================
          Callback Form
      ============================================================== */}

      {activeForm === "callback" && (
        <CustomFormModal title="Request SSBM Call Back" onClose={closeForm}>
          <FormWrapper
            title="Request Call Back"
            subtitle="Our academic expert will connect with you shortly"
            onClose={closeForm}
            defaultCourse="SSBM Global Doctor of Business Administration"
            hideCourseField
            formNameOverride="SSBM About Section Callback Form"
            sourceOverride="SSBM About Section"
            utmSourceFallback="SSBM Organic"
            utmMediumFallback="SSBM Callback Button"
            submitButtonText="Request Call Back"
            submitButtonClassName="!bg-[#c8242e] hover:!bg-[#a91f27]"
          />
        </CustomFormModal>
      )}

      {/* =============================================================
          Get Degree Form
      ============================================================== */}

      {activeForm === "degree" && (
        <CustomFormModal title="Get SSBM DBA Degree" onClose={closeForm}>
          <FormWrapper
            title="Get Degree"
            subtitle="Share your details and our academic experts will guide you"
            onClose={closeForm}
            courseOptions={SSBM_COURSE_OPTIONS}
            formNameOverride="SSBM PwC Certificate Get Degree Form"
            sourceOverride="SSBM PwC Certificate Section"
            utmSourceFallback="SSBM Organic"
            utmMediumFallback="SSBM Get Degree Button"
            submitButtonText="Get Degree"
            submitButtonClassName="!bg-[#c8242e] hover:!bg-[#a91f27]"
          />
        </CustomFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Global Feature Card
|--------------------------------------------------------------------------
*/

type GlobalFeatureCardProps = {
  feature: FeatureItem;
};

function GlobalFeatureCard({ feature }: GlobalFeatureCardProps) {
  return (
    <article className="flex min-h-[82px] items-center gap-4 rounded-[10px] bg-white px-5 py-4 text-black">
      <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center text-black">
        {feature.icon}
      </div>

      <h3 className="text-[14px] font-extrabold leading-[1.22] text-black sm:text-[15px]">
        {feature.title}
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
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0ed] text-[#c8242e] transition hover:bg-[#ffe0dc]"
        >
          <X size={20} />
        </button>

        {children}
      </div>
    </div>
  );
}
