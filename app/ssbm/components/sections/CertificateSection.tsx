"use client";

import Image from "next/image";
import {
  ArrowRight,
  Globe2,
  Star,
  Trophy,
  Users,
} from "lucide-react";
import { useCallback, useEffect, useState, type ReactNode } from "react";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { SSBM_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type FormType = "enroll" | "degree" | null;

type FeatureItem = {
  id: number;
  title: string;
  image: string;
};

/*
|--------------------------------------------------------------------------
| Global Doctor Features
|--------------------------------------------------------------------------
*/

const globalDoctorFeatures: FeatureItem[] = [
  {
    id: 1,
    title: "Swiss Quality Education",
    image: "/ssbm/assets/img/quality.png",
  },
  {
    id: 2,
    title: "Session with on-campus students/alumni",
    image: "/ssbm/assets/img/graduated.png",
  },
  {
    id: 3,
    title: "Peer-to-peer networking",
    image: "/ssbm/assets/img/video-call.png",
  },
  {
    id: 4,
    title: "PwC Directorship & Board Advisory Certificate",
    image: "/ssbm/assets/img/certificate.png",
  },
  {
    id: 5,
    title: "Fortune 500 Perspectives",
    image: "/ssbm/assets/img/hrm.png",
  },
  {
    id: 6,
    title: "Pitch to Real Investors",
    image: "/ssbm/assets/img/stress.png",
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
          Alumni Achievement Band
      ============================================================== */}

      <section className="bg-black py-8 text-white">
        <Container className="p-0">
          <div className="mx-auto grid max-w-[1140px] grid-cols-2 gap-y-6 px-4 text-center md:grid-cols-4 md:gap-y-0 md:px-0">
            <div className="flex flex-col items-center gap-1">
              <Users size={36} className="text-[#c11f28] mb-1.5" />
              <h3 className="text-[28px] font-black leading-none">7700</h3>
              <p className="text-[13px] font-semibold text-gray-400 mt-1">Alumni</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <Globe2 size={36} className="text-[#c11f28] mb-1.5" />
              <h3 className="text-[28px] font-black leading-none">160+</h3>
              <p className="text-[13px] font-semibold text-gray-400 mt-1">Countries</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <Trophy size={36} className="text-[#c11f28] mb-1.5" />
              <h3 className="text-[28px] font-black leading-none">170+</h3>
              <p className="text-[13px] font-semibold text-gray-400 mt-1">Renowned Faculty</p>
            </div>

            <div className="flex flex-col items-center gap-1">
              <Star size={36} className="text-[#c11f28] mb-1.5" />
              <h3 className="text-[28px] font-black leading-none">5 Star</h3>
              <p className="text-[13px] font-semibold text-gray-400 mt-1">Online Learning</p>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="global-doctor"
        className="relative overflow-hidden bg-[#c11f28] py-12 lg:py-16"
      >
        {/* Background Image - Desktop (Left column overlay with fade-out) */}
        <div className="absolute inset-y-0 left-0 hidden w-[40%] lg:block z-0">
          <Image
            src={getAssetPath("/ssbm/assets/img/Global.webp")}
            alt="SSBM Global Doctor of Business Administration Advantages"
            fill
            priority={false}
            className="object-cover object-left"
          />
          {/* Blend image into the right red container background */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-r from-transparent to-[#c11f28]" />
        </div>

        {/* Background Image - Mobile (Full cover with high opacity mask) */}
        <div className="absolute inset-0 block lg:hidden z-0">
          <Image
            src={getAssetPath("/ssbm/assets/img/Global.webp")}
            alt="SSBM Global Doctor of Business Administration Advantages mobile"
            fill
            priority={false}
            className="object-cover object-center opacity-15"
          />
        </div>

        <Container className="relative z-10 p-0 md:mx-10 max-w-8xl">
          <div className="mx-auto grid w-full max-w-[1140px] grid-cols-1 gap-6 lg:grid-cols-10 px-4 md:px-0">
            {/* Left Blank Column on Desktop to show the background man */}
            <div className="hidden lg:block lg:col-span-3" />

            {/* Right Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Heading */}
              <div className="text-left">
                <h2 className="text-[32px] lg:text-[40px] font-extrabold uppercase leading-[1.05] tracking-tight text-white">
                  GLOBAL DOCTOR OF
                </h2>

                <p className="mt-2 text-[20px] font-medium leading-tight text-white">
                  Business Administration with SSBM
                </p>
              </div>

              {/* Feature Grid */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {globalDoctorFeatures.map((feature) => (
                  <GlobalFeatureCard key={feature.id} feature={feature} />
                ))}
              </div>

              {/* Enroll Button */}
              <div className="mt-7 flex justify-left">
                <button
                  type="button"
                  onClick={() => setActiveForm("enroll")}
                  className="inline-flex items-center justify-center gap-2 rounded-[5px] bg-black px-6 py-2.5 text-[14px] font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-neutral-900 hover:shadow-lg"
                >
                  Enroll &amp; Get Your DBA Degree
                  <span className="text-[#c11f28] font-black text-[18px] ml-0.5">➔</span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          PwC Certificate Section
      ============================================================== */}

      <section
        id="sample-certificate"
        className="bg-white py-12 sm:py-14 lg:py-16"
      >
        <Container className="p-0">
          <div className="mx-auto grid w-full max-w-[990px] grid-cols-1 items-center gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-[95px] px-4 md:px-0">
            {/* Certificate Image */}
            <div className="mx-auto w-full max-w-[395px]">
              <div className="relative aspect-[1.32/1] w-full bg-white p-3 shadow-[0_0_12px_rgba(0,0,0,0.18)] rounded-lg">
                <Image
                  src={getAssetPath("/ssbm/assets/img/deree-ssbm.png")}
                  alt="PwC Directorship and Board Advisory certificate"
                  fill
                  sizes="(max-width: 1024px) 90vw, 395px"
                  className="object-contain p-3"
                />
              </div>
            </div>

            {/* Certificate Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-[22px] font-black uppercase leading-[1.05] tracking-[-0.025em] text-[#c11f28] sm:text-[34px]">
                PwC Directorship &amp; Board Advisory Certificate
              </h2>

              <p className="mx-auto mt-5 max-w-[550px] text-[13px] font-medium leading-[1.6] text-gray-800 sm:text-[13px] lg:mx-0">
                The PwC Board Advisory certificate is a specialised global program made for a professional who aims to transform their role to board level. The student will get an SSBM DBA university qualification and this certificate after completing the online DBA course. With PwC India, this program cultivates strategic confidence through live sessions, real-world simulations, and expert-led masterclasses.
              </p>

              <button
                type="button"
                onClick={() => setActiveForm("degree")}
                className="mt-6 inline-flex items-center justify-center rounded-[5px] bg-[#c11f28] px-6 py-2.5 text-[15px] font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#a8141c] hover:shadow-lg"
              >
                Get Degree
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          Enroll Form Modal
      ============================================================== */}

      {activeForm === "enroll" && (
        <CustomFormModal title="Enroll for SSBM Online DBA" onClose={closeForm}>
          <FormWrapper
            title="Enroll Now"
            subtitle="Start your SSBM Online DBA admission journey"
            onClose={closeForm}
            courseOptions={SSBM_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="SSBM Advantages Enroll Form"
            sourceOverride="SSBM LP"
            utmSourceFallback="Organic"
            utmMediumFallback="SSBM_Organic"
            submitButtonText="Enroll Now"
            redirectUrl="/thank-you"
          />
        </CustomFormModal>
      )}

      {/* =============================================================
          Get Degree Form Modal
      ============================================================== */}

      {activeForm === "degree" && (
        <CustomFormModal title="Get SSBM DBA Degree" onClose={closeForm}>
          <FormWrapper
            title="Get Degree"
            subtitle="Share your details and our academic experts will guide you"
            onClose={closeForm}
            courseOptions={SSBM_COURSE_OPTIONS}
            defaultCourse=""
            formNameOverride="SSBM PwC Certificate Form"
            sourceOverride="SSBM LP"
            utmSourceFallback="Organic"
            utmMediumFallback="SSBM_Organic"
            submitButtonText="Get Degree"
            redirectUrl="/thank-you"
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
    <article className="flex flex-col md:flex-row min-h-[84px] items-center gap-4 rounded-[12px] bg-white px-5 py-4 text-black shadow-sm transition-all duration-300 ease-in-out hover:shadow-md hover:scale-[1.01] border border-white">
      <div className="relative flex h-[48px] w-[48px] shrink-0 items-center justify-center">
        <Image
          src={getAssetPath(feature.image)}
          alt={feature.title}
          fill
          sizes="48px"
          className="object-contain"
        />
      </div>

      <h3 className="text-[12px] font-bold leading-[1.25] text-black text-center md:text-left">
        {feature.title}
      </h3>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Form Modal Wrapper
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
        {children}
      </div>
    </div>
  );
}
