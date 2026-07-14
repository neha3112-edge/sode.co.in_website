"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

type FormType = "degree" | null;

type StatisticItem = {
  id: number;
  value: string;
  description: string;
  icon: LucideIcon;
};

const IIT_KGP_COURSES: FormCourseOption[] = [
  {
    value: "Executive Post Graduate Certificate in Generative AI & Agentic AI",
    label: "Executive Post Graduate Certificate in Generative AI & Agentic AI",
  },
];

const statistics: StatisticItem[] = [
  {
    id: 1,
    value: "3000+",
    description: "Students from India Abroad",
    icon: BookOpen,
  },
  {
    id: 2,
    value: "100%",
    description: "Live Online, Faculty-Led Sessions",
    icon: UserRound,
  },
  {
    id: 3,
    value: "6000+",
    description: "Succeed Alumni Trust Base",
    icon: GraduationCap,
  },
];

export function CertificateSection() {
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow = activeForm ? "hidden" : "";

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
      <section
        id="sample-certificate"
        className="scroll-mt-21 bg-[#f8f8f8]"
      >
        <Container>
          <div className="grid min-h-136.25 grid-cols-1 items-center gap-10 py-12 lg:grid-cols-[1.03fr_1fr] lg:gap-16.25 lg:py-11.25">
            {/* Certificate Image */}
            <div className="relative mx-auto w-full max-w-150">
              <div className="relative aspect-[1.33/1] w-full overflow-hidden">
                <Image
                  src={getAssetPath(
                    "iitkgp/assets/img/samle-certificate-kharagpur-6969d7446e685.webp",
                  )}
                  alt="IIT Kharagpur sample postgraduate certificate"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-contain object-center"
                />
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-[34px] font-black leading-[1.20] tracking-[-0.035em] text-[#342184] sm:text-[40px] lg:text-[40px]">
                Sample Post
                <br />
                Graduate Certificate
              </h2>

              <p className="mx-auto mt-5 max-w-152.5 text-[13px] font-normal leading-[1.30] text-[#222222] sm:text-[14px] lg:mx-0">
                You will receive an Executive Postgraduate Certificate from IIT
                Kharagpur, a well-known and trusted qualification. If you
                perform really well, you can also get a Certificate with
                Distinction. This is given to the top 10% students in each batch
                and is clearly mentioned on the certificate. Overall, this IIT
                certificate shows strong learning and also proves you are ready
                for advanced AI jobs.
              </p>

              <button
                type="button"
                onClick={() => setActiveForm("degree")}
                className="mt-6 inline-flex min-h-10.75 items-center justify-center gap-4 rounded-full bg-[#ff5318] px-7 py-3 text-[14px] font-extrabold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e8460e] hover:shadow-lg"
              >
                Get Degree
                <ArrowRight size={17} strokeWidth={2.7} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* Statistics */}
      <section className="bg-white py-11 sm:py-12">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {statistics.map((item) => (
              <StatisticCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* Degree Modal */}
      {activeForm === "degree" && (
        <CustomFormModal
          title="Get IIT Kharagpur Certificate"
          onClose={closeForm}
        >
          <FormWrapper
            title="Get Degree"
            subtitle="Share your details and our academic experts will guide you"
            onClose={closeForm}
            courseOptions={IIT_KGP_COURSES}
            formNameOverride="IIT Kharagpur Sample Certificate Degree Form"
            sourceOverride="IIT Kharagpur Certificate Section"
            utmSourceFallback="IIT Kharagpur Organic"
            utmMediumFallback="IIT Kharagpur Get Degree Button"
            submitButtonText="Get Degree"
          />
        </CustomFormModal>
      )}
    </>
  );
}

type StatisticCardProps = {
  item: StatisticItem;
};

function StatisticCard({ item }: StatisticCardProps) {
  const Icon = item.icon;

  return (
    <article className="relative pt-4">
      <div className="relative flex min-h-15.25 flex-col items-center justify-center rounded-[10px] border border-[#b8b8b8] bg-white px-5 pb-6 pt-6 text-center">
        {/* Floating value */}
        <div className="absolute -top-5 left-1/2 flex -translate-x-1/2 items-center gap-2 bg-white px-3">
          <Icon
            size={25}
            strokeWidth={2.7}
            className="shrink-0 text-[#ff5318]"
          />

          <p className="whitespace-nowrap text-[25px] font-black leading-none text-[#342184] sm:text-[30px]">
            {item.value}
          </p>
        </div>

        <p className="mt-2 text-[12px] font-extrabold leading-tight text-black sm:text-[13px]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

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
      className="fixed inset-0 z-9999 flex items-center justify-center overflow-y-auto bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        className="relative max-h-[92vh] w-full max-w-105 overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          aria-label="Close degree form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[#fff0eb] text-[#ff5318] transition-colors duration-200 hover:bg-[#ffe1d7]"
        >
          <X size={20} strokeWidth={2.4} />
        </button>

        {children}
      </div>
    </div>
  );
}
