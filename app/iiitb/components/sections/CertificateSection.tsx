"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, GraduationCap } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import FormWrapper from "@/components/forms/FormWrapper";
import CertificateImage from "../../assets/img/iiitb_new_logo_main.png";

type StatItem = {
  value: string;
  label: string;
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

const IIITB_COURSE_OPTIONS = [
  {
    value: "Executive Programme in Generative AI for Leaders",
    label: "Executive Programme in Generative AI for Leaders",
  },
  {
    value: "Executive Post Graduate Certificate Programme in Data Science & AI",
    label: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },
  {
    value:
      "Professional Certificate Programme in Data Science with Generative AI",
    label:
      "Professional Certificate Programme in Data Science with Generative AI",
  },
  {
    value: "Executive Post Graduate Programme in Applied AI and Agentic AI",
    label: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },
  {
    value: "Executive Diploma in Machine Learning & Artificial Intelligence",
    label: "Executive Diploma in Machine Learning & Artificial Intelligence",
  },
  {
    value: "Chief Technology Officer & AI Leadership Programme",
    label: "Chief Technology Officer & AI Leadership Programme",
  },
  {
    value: "Master of Science in Machine Learning & Artificial Intelligence",
    label: "Master of Science in Machine Learning & Artificial Intelligence",
  },
  {
    value: "Master of Science in Data Science with Generative AI",
    label: "Master of Science in Data Science with Generative AI",
  },
];

export function CertificateSection() {
  const [formOpen, setFormOpen] = useState(false);

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

  const closeForm = () => {
    setFormOpen(false);
  };

  return (
    <>
      <section id="sample-certificate" className="w-full bg-grey-bg">
        {/* Stats Bar */}
        <div className="w-full bg-[#292929]">
          <Container>
            <div className="grid grid-cols-2 gap-x-5 gap-y-5 py-5 sm:grid-cols-4 sm:py-6">
              {stats.map((stat) => (
                <StatCard key={stat.label} stat={stat} />
              ))}
            </div>
          </Container>
        </div>

        {/* Certificate Content */}
        <div className="py-10 sm:py-12 lg:py-16">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
              {/* Left Certificate Image */}
              <div className="relative mx-auto w-full max-w-207.5">
                <div className="relative aspect-[1.36/1] w-full overflow-hidden">
                  <Image
                    src="../iiitb/img/sample-certificate.webp"
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

                <p className="mt-5 max-w-180 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                  Learners who successfully complete the IIIT Bangalore online
                  courses receive recognised course credentials. Depending on
                  the selected programme, students may also gain exposure to
                  industry tools, applied projects, case studies, and practical
                  assignments that strengthen their professional profile.
                </p>

                <p className="mt-3 max-w-180 text-sm leading-6 text-gray-700 sm:text-base sm:leading-7">
                  These credentials help learners demonstrate specialised
                  knowledge in data science, artificial intelligence, machine
                  learning, leadership, and other emerging technology domains.
                </p>

                <Button
                  size="lg"
                  type="button"
                  onClick={() => setFormOpen(true)}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#075b91] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[#064b79]"
                >
                  Get Degree
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Popup Form */}
      {formOpen && (
        <CertificateFormModal title="Get Degree" onClose={closeForm}>
          <FormWrapper
            title="Get Degree"
            subtitle="Share your details and our academic experts will guide you"
            onClose={closeForm}
            courseOptions={IIITB_COURSE_OPTIONS}
            formNameOverride="IIITB Sample Certificate Form"
            sourceOverride="IIITB Certificate Section"
            utmSourceFallback="IIITB Organic"
            utmMediumFallback="IIITB Certificate Get Degree Button"
            submitButtonText="Get Degree"
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
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#075b91]">
        <GraduationCap size={18} />
      </span>

      <div>
        <p className="text-lg md:text-4xl font-extrabold leading-none">
          {stat.value}
        </p>

        <p className="mt-1 text-[12px] leading-tight text-white/90 sm:text-[12px]">
          {stat.label}
        </p>
      </div>
    </div>
  );
}

type CertificateFormModalProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

function CertificateFormModal({
  title,
  children,
  onClose,
}: CertificateFormModalProps) {
  return (
    <div
      role="presentation"
      onClick={onClose}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
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
