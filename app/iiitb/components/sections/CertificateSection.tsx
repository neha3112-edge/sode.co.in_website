"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, GraduationCap } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FormWrapper, {
  type FormCourseOption,
} from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";

type StatItem = {
  value: string;
  label: string;
};

type CertificateFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

const stats: StatItem[] = [
  {
    value: "10+",
    label: "Years of Experience",
  },
  {
    value: "30k+",
    label: "Learners",
  },
  {
    value: "15+",
    label: "Assignments & Case Studies",
  },
  {
    value: "30+",
    label: "Tools",
  },
];

/* =========================================================
   IIIT BANGALORE COURSE OPTIONS

   label:
   User ko dropdown me full course name dikhega.

   value:
   API payload me CERTIFICATE ya MSC jayega.
========================================================= */

const IIITB_COURSE_OPTIONS: FormCourseOption[] = [
  {
    value: "CERTIFICATE",
    label: "Executive Programme in Generative AI for Leaders",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },
  {
    value: "CERTIFICATE",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },
  {
    value: "CERTIFICATE",
    label: "Executive Diploma in Machine Learning & Artificial Intelligence",
  },
  {
    value: "CERTIFICATE",
    label: "Chief Technology Officer & AI Leadership Programme",
  },
  {
    value: "MSC",
    label: "Master of Science in Machine Learning & Artificial Intelligence",
  },
  {
    value: "MSC",
    label:
      "Master of Science in Data Science Now integrated with Generative AI",
  },
];

export function CertificateSection() {
  const [formOpen, setFormOpen] = useState(false);

  /* =========================================================
     LOCK BODY SCROLL WHEN MODAL IS OPEN
  ========================================================= */

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

  /* =========================================================
     CLOSE MODAL ON ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setFormOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      <section id="sample-certificate" className="w-full bg-grey-bg">
        {/* =================================================
            STATS BAR
        ================================================== */}

        <div className="w-full bg-[#292929] pl-3">
          <Container>
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 py-5 sm:grid-cols-4 sm:py-6">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>
          </Container>
        </div>

        {/* =================================================
            CERTIFICATE CONTENT
        ================================================== */}

        <div className="py-10 sm:py-12 lg:py-16">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
              {/* Left Certificate Image */}

              <div className="relative mx-auto w-full max-w-207.5">
                <div className="relative aspect-[1.36/1] w-full overflow-hidden">
                  <Image
                    src={getAssetPath("/iiitb/img/sample-certificate.webp")}
                    alt="IIIT Bangalore sample certificate"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Right Content */}

              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold leading-tight text-[#075b91] sm:text-4xl">
                  Sample Post
                  <br />
                  Graduate Certificate
                </h2>

                <p className="mt-5 max-w-180 text-sm leading-5.5 text-gray-700 sm:text-base sm:leading-7">
                  Learners who successfully complete the IIIT Bangalore online
                  courses receive recognised course credentials. Depending on
                  the selected programme, students may also gain exposure to
                  industry tools, applied projects, case studies, and practical
                  assignments that strengthen their professional profile.
                </p>

                <p className="mt-3 max-w-180 text-sm leading-5.5 text-gray-700 sm:text-base sm:leading-7">
                  These credentials help learners demonstrate specialised
                  knowledge in data science, artificial intelligence, machine
                  learning, leadership, and other emerging technology domains.
                </p>

                <Button
                  size="lg"
                  type="button"
                  onClick={() => setFormOpen(true)}
                  className="mt-6 cursor-pointer inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#075b91] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#064b79]"
                >
                  Get Certificate
                  <ArrowRight size={16} aria-hidden="true" />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* =====================================================
          GET DEGREE POPUP FORM
      ====================================================== */}

      {formOpen && (
        <CertificateFormModal title="Get Degree" onClose={closeForm}>
          <FormWrapper
            title="Get 1:1 Free Counselling"
            subtitle="Our academic experts will guide you step by step"
            onClose={closeForm}
            defaultCourse=""
            courseOptions={IIITB_COURSE_OPTIONS}
            formNameOverride="IIITB Sample Certificate Form"
            sourceOverride="IIITB LP"
            utmSourceFallback="Organic"
            utmMediumFallback="IIITB_Organic"
            submitButtonText="Get Degree"
            redirectUrl="/iiitb/thank-you"
          />
        </CertificateFormModal>
      )}
    </>
  );
}

type StatCardProps = {
  stat: StatItem;
};

function StatCard({ stat }: StatCardProps) {
  return (
    <div className="flex items-center justify-center gap-3 text-white">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#075b91]">
        <GraduationCap size={28} aria-hidden="true" />
      </span>

      <div>
        <p className="text-lg font-extrabold leading-none md:text-4xl">
          {stat.value}
        </p>

        <p className="mt-1 text-sm leading-tight text-white/90 sm:text-sm">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

function CertificateFormModal({
  title,
  children,
  onClose,
}: CertificateFormModalProps) {
  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        {children}
      </div>
    </div>
  );
}
