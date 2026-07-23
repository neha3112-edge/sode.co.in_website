"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Anton } from "next/font/google";

import { Container } from "@/components/ui/Container";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { GGU_COURSE_OPTIONS } from "../../constants";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  /* =========================================================
     BODY SCROLL LOCK FOR BROCHURE MODAL
  ========================================================= */

  useEffect(() => {
    if (downloadOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [downloadOpen]);

  /* =========================================================
     CLOSE MODAL ON ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDownloadOpen(false);
      }
    };

    if (downloadOpen) {
      window.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [downloadOpen]);

  const closeDownloadForm = () => {
    setDownloadOpen(false);
  };

  const desktopBg = getAssetPath(
    "/ggu/assets/img/ggu_desktop_new_bg.png",
  );
  const logoMain = getAssetPath(
    "/ggu/assets/img/new_ggu_logo_main.png",
  );
  const mobileBg = getAssetPath(
    "/ggu/assets/img/ggu_mobile_img.png",
  );

  return (
    <>
      <section
        id="home"
        className="relative min-h-[500px] overflow-hidden bg-[#eaf1ff] pt-18 lg:pt-20"
      >
        {/* =========================================================
            Desktop Background Image
        ========================================================== */}

        <div className="absolute inset-0 hidden lg:block">
          <Image
            src={desktopBg}
            alt="Golden Gate University campus"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* =========================================================
            Left Gradient Overlay
        ========================================================== */}

        <div className="absolute inset-0 hidden lg:block" />

        {/* =========================================================
            Mobile Background
        ========================================================== */}

        <div className="absolute inset-0 bg-[#edf3ff] lg:hidden" />

        <Container className="relative z-10 p-0">
          <div className="grid min-h-[457px] grid-cols-1 gap-8 py-9 lg:grid-cols-[minmax(0,1fr)_372px] lg:items-center lg:gap-12 lg:py-7">
            {/* =====================================================
                Left Content
            ====================================================== */}

            <div className="mx-auto w-full max-w-[570px] text-center lg:mx-0 lg:text-left">
              {/* University Logo */}

              <div className="mb-4 flex flex-wrap items-center justify-center gap-3 lg:justify-start hidden lg:block">
                <Image
                  src={logoMain}
                  alt="Golden Gate University"
                  width={180}
                  height={50}
                  priority
                  className="h-auto w-[250px] object-contain"
                />
              </div>

              {/* Small Heading */}

              <p className="text-[14px] font-bold leading-[1.5] text-black sm:text-[13px]">
                Leadership Advancement or a Doctoral Degree
              </p>

              {/* Main Heading */}

              <h1 className={`${anton.className} mt-3 max-w-[470px] leading-[0.9] tracking-[-0.035em] text-[#003d78]`}>
                <span className="block text-[38px] sm:text-[50px] lg:text-[42px]">
                  Golden Gate University
                </span>

                <span className="mt-2 block text-[38px] sm:text-[50px] lg:text-[42px]">
                  Online Courses
                </span>
              </h1>

              {/* Provider */}

              <p className="mt-5 text-[15px] leading-[1.4] text-black">
                By{" "}
                <span className="font-bold underline decoration-[1.5px] underline-offset-2">
                  Golden Gate University
                </span>{" "}
                via{" "}
                <span className="font-bold underline decoration-[1.5px] underline-offset-2">
                  upGrad
                </span>
              </p>

              {/* Course Badge */}

              <div className="mx-auto mt-5 w-fit lg:mx-0">
                <div className="rounded-[19px] border-2 border-[#ec4d0d] bg-white/60 px-6 py-2">
                  <p className="whitespace-nowrap text-[26px] font-extrabold italic leading-none tracking-[0.01em] text-[#003d78] sm:text-[30px]">
                    DBA / MBA
                  </p>
                </div>
              </div>

              {/* Course Features */}

              <div className="mx-auto mt-3 max-w-[440px] text-[13px] font-medium leading-[1.55] text-black lg:mx-0">
                <p>100% Online | U.S.-Accredited University |</p>
                <p>Working-Professional Focus | No Cost EMI |</p>
                <p>2500+ Global CXOs</p>
              </div>

              {/* Download Brochure Button */}
              <div className="hidden lg:block">
                <button
                  type="button"
                  onClick={() => setDownloadOpen(true)}
                  className="mt-4 inline-flex min-h-[39px] items-center justify-center gap-1.5 rounded-[5px] bg-[#ee5105] px-5 py-2.5 text-[14px] font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-[#d94800] hover:shadow-lg"
                >
                  Download Brochure
                  <Download size={15} strokeWidth={2.8} />
                </button>
              </div>
            </div>

            {/* =====================================================
                Mobile Banner Image (Middle in mobile flow)
            ====================================================== */}

            <div className="relative mx-auto aspect-[16/15] w-full max-w-[420px] lg:hidden">
              <Image
                src={mobileBg}
                alt="Golden Gate University mobile banner"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 30vw"
                className="object-cover object-center"
              />
            </div>

            {/* =====================================================
                Right Content (Form)
            ====================================================== */}

            <div className="px-4 -mt-[60px] md:px-0 md:mt-0">
              <div className="mx-auto w-full max-w-[372px] bg-white p-6 rounded-2xl font-semibold">
                <FormWrapper
                  title="Admission Open"
                  subtitle="Academic Experts will assist you!"
                  courseOptions={GGU_COURSE_OPTIONS}
                  defaultCourse=""
                  formNameOverride="GGU Hero Enquiry Form"
                  sourceOverride="GGU LP"
                  utmSourceFallback="Organic"
                  utmMediumFallback="GGU_Organic"
                  submitButtonText="Submit"
                  redirectUrl="/thank-you"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================
          DOWNLOAD BROCHURE POPUP MODAL
      ====================================================== */}

      {downloadOpen && (
        <div
          role="presentation"
          onClick={closeDownloadForm}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Download Program Brochure"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-sm overflow-y-auto rounded-xl bg-white p-6 shadow-2xl"
          >
            <FormWrapper
              title="Download Brochure"
              subtitle="Please enter your details to download the brochure:"
              onClose={closeDownloadForm}
              defaultCourse=""
              courseOptions={GGU_COURSE_OPTIONS}
              formNameOverride="GGU Download Brochure Form"
              sourceOverride="GGU LP"
              utmSourceFallback="Organic"
              utmMediumFallback="GGU_Organic"
              submitButtonText="Submit"
              isBrochureForm
              brochureUrl="/ggu/assets/brochures/main_brochure.pdf"
              redirectUrl="/thank-you"
            />
          </div>
        </div>
      )}
    </>
  );
}
