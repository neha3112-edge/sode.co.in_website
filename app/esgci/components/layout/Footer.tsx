"use client";

import Image from "next/image";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { X } from "lucide-react";

import ArrowGif from "../../assets/img/arrow.gif";
import DesLogo from "../../assets/img/new-des-logo.webp";

type ModalType = "disclaimer" | "terms" | "privacy" | null;

const COMPARE_PAGE_URL =
  "https://distanceeducationschool.com/compare-university/";

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  /*
  |--------------------------------------------------------------------------
  | Close modal
  |--------------------------------------------------------------------------
  */

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Open university comparison page
  |--------------------------------------------------------------------------
  */

  const openComparePage = () => {
    window.open(COMPARE_PAGE_URL, "_blank", "noopener,noreferrer");
  };

  /*
  |--------------------------------------------------------------------------
  | Lock body scroll while popup is open
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  /*
  |--------------------------------------------------------------------------
  | Close popup with Escape key
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!activeModal) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeModal, closeModal]);

  return (
    <>
      <footer className="overflow-hidden bg-[#f4f7fa] pt-10 sm:pt-12 lg:pt-[60px]">
        {/* ==========================================================
            Compare University Banner
        ========================================================== */}

        <section className="px-4 sm:px-8 lg:px-[60px]">
          <div className="relative mx-auto max-w-[1800px] rounded-[20px] bg-[#00ad4e] px-5 pb-[88px] pt-12 text-center text-white sm:px-8 sm:pb-[92px] sm:pt-14 lg:min-h-[218px] lg:px-10 lg:pb-[82px] lg:pt-[48px]">
            <h2 className="text-[26px] font-black leading-tight tracking-[-0.03em] sm:text-[30px] lg:text-[36px]">
              Still Confused?
            </h2>

            <p className="mx-auto mt-4 max-w-[900px] text-[13px] font-extrabold leading-6 sm:text-[15px] lg:text-[16px]">
              Compare ESGCI Online University with Top World Renowned
              Universities
            </p>

            {/* Circular Arrow Button */}
            <button
              type="button"
              onClick={openComparePage}
              aria-label="Compare universities"
              className="absolute -bottom-[38px] left-1/2 flex h-[76px] w-[76px] -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border-[8px] border-white bg-white shadow-[0_3px_12px_rgba(0,0,0,0.12)] transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#00ad4e]/30 sm:-bottom-[40px] sm:h-[80px] sm:w-[80px]"
            >
              <Image
                src={ArrowGif}
                alt="Open university comparison"
                width={58}
                height={58}
                unoptimized
                className="h-[58px] w-[58px] object-contain sm:h-[62px] sm:w-[62px]"
              />
            </button>
          </div>
        </section>

        {/* ==========================================================
            Distance Education School Logo
        ========================================================== */}

        <section className="px-4 pb-5 pt-[74px] sm:px-8 sm:pb-6 sm:pt-[86px] lg:pb-7 lg:pt-[74px]">
          <button
            type="button"
            onClick={openComparePage}
            aria-label="Open university comparison page"
            className="mx-auto block w-full max-w-[980px] cursor-pointer transition-transform duration-300 hover:scale-[1.01]"
          >
            <Image
              src={DesLogo}
              alt="Distance Education School"
              width={980}
              height={270}
              className="mx-auto h-auto w-full object-contain"
            />
          </button>
        </section>

        {/* ==========================================================
            Disclaimer Text and Legal Links
        ========================================================== */}

        <section className="px-4 pb-4 sm:px-8 sm:pb-5 lg:px-[42px]">
          <div className="mx-auto max-w-[1800px] text-center">
            <p className="text-[11px] font-medium leading-[1.65] text-[#111111] sm:text-[12px] lg:text-[14px]">
              SODE Counselling Services LLP act as a marketing agency. All
              university names, logos, and trademarks mentioned are used for
              informational purposes only. We are not a university or an
              admission authority. Users are encouraged to verify information on
              the official website of the University before making decisions.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-1 gap-y-2 text-[12px] font-extrabold text-black sm:text-[13px] lg:text-[14px]">
              <button
                type="button"
                onClick={() => setActiveModal("disclaimer")}
                className="cursor-pointer transition-colors duration-200 hover:text-[#00ad4e]"
              >
                Disclaimer
              </button>

              <span aria-hidden="true">|</span>

              <button
                type="button"
                onClick={() => setActiveModal("terms")}
                className="cursor-pointer transition-colors duration-200 hover:text-[#00ad4e]"
              >
                Terms &amp; Conditions
              </button>

              <span aria-hidden="true">|</span>

              <button
                type="button"
                onClick={() => setActiveModal("privacy")}
                className="cursor-pointer transition-colors duration-200 hover:text-[#00ad4e]"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </section>

        {/* ==========================================================
            Copyright Bar
        ========================================================== */}

        <div className="bg-[#073f68] px-4 py-[10px] text-center text-[11px] font-semibold text-white sm:text-[12px] lg:text-[13px]">
          © 2026 SODE Counseling Services LLP
        </div>
      </footer>

      {/* ==========================================================
          Disclaimer Modal
      ========================================================== */}

      {activeModal === "disclaimer" && (
        <FooterModal title="Disclaimer" onClose={closeModal}>
          <p>
            This information is provided by DistanceEducationSchool.com,
            operated under the legal entity SODE Counselling Services LLP,
            registered with the Ministry of Corporate Affairs. Our objective is
            to provide educational information, guidance, and counselling
            services. We do not act as a university or admission authority.
          </p>

          <h3 className="mt-6 text-lg font-extrabold text-[#00ad4e]">
            Essential Points
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              All university names, logos, and trademarks are used only for
              informational purposes.
            </li>

            <li>
              Our role is to provide information and counselling about online
              and distance education programmes.
            </li>

            <li>
              We do not charge students any university tuition or admission
              fees.
            </li>

            <li>
              We do not issue degrees, mark sheets, certificates, or admission
              letters in the name of any university.
            </li>

            <li>
              Users should verify programme information through the official
              university website before making any decision.
            </li>

            <li>
              Our services are intended to support students transparently and
              lawfully.
            </li>
          </ul>
        </FooterModal>
      )}

      {/* ==========================================================
          Terms and Conditions Modal
      ========================================================== */}

      {activeModal === "terms" && (
        <FooterModal title="Terms and Conditions" onClose={closeModal}>
          <p>
            These terms and conditions apply when you access or use the
            educational information and counselling services provided through
            this platform by SODE Counselling Services LLP.
          </p>

          <ModalHeading>1. Our Role</ModalHeading>

          <p className="mt-2">
            We provide information, programme comparisons, and counselling
            support. We are not a university and do not award academic degrees
            or certifications.
          </p>

          <ModalHeading>2. Programme Information</ModalHeading>

          <p className="mt-2">
            Programme details, fees, eligibility, duration, and accreditation
            may be updated by the respective university. Users should confirm
            all details from official university sources.
          </p>

          <ModalHeading>3. Payments</ModalHeading>

          <p className="mt-2">
            University tuition and academic fees should be paid only through
            authorised university payment channels. SODE Counselling Services
            LLP does not collect university fees as an academic institution.
          </p>

          <ModalHeading>4. External Services</ModalHeading>

          <p className="mt-2">
            The website may link to university websites or third-party
            platforms. Their services, policies, and content are governed by
            their respective terms.
          </p>

          <ModalHeading>5. Updates to These Terms</ModalHeading>

          <p className="mt-2">
            These terms may be updated as our services evolve. Continued use of
            this website means you accept the latest version.
          </p>

          <ModalHeading>6. Contact Us</ModalHeading>

          <p className="mt-2">
            For support, email us at{" "}
            <a
              href="mailto:support@distanceeducationschool.com"
              className="font-semibold text-[#00ad4e] underline underline-offset-2"
            >
              support@distanceeducationschool.com
            </a>
          </p>
        </FooterModal>
      )}

      {/* ==========================================================
          Privacy Policy Modal
      ========================================================== */}

      {activeModal === "privacy" && (
        <FooterModal title="Privacy Policy" onClose={closeModal}>
          <p>
            This privacy policy explains how SODE Counselling Services LLP
            handles information submitted through forms, counselling requests,
            and other interactions on this platform.
          </p>

          <ModalHeading>1. Information We Collect</ModalHeading>

          <p className="mt-2">
            We may collect your name, email address, phone number, selected
            course, state, and information you voluntarily provide when filling
            out a form.
          </p>

          <ModalHeading>2. How We Use Your Information</ModalHeading>

          <p className="mt-2">Your information may be used to:</p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Provide course and university counselling</li>
            <li>Respond to brochure and callback requests</li>
            <li>Share admission-related information and updates</li>
            <li>Help you compare appropriate academic programmes</li>
            <li>Improve our services and website experience</li>
          </ul>

          <ModalHeading>3. Communication</ModalHeading>

          <p className="mt-2">
            We may contact you through phone calls, email, SMS, or WhatsApp
            regarding your enquiry. You may request to stop promotional
            communication at any time.
          </p>

          <ModalHeading>4. Data Sharing</ModalHeading>

          <p className="mt-2">
            Information may be shared with relevant university partners or
            authorised service providers only when required to support your
            counselling or admission enquiry. We do not sell personal
            information to advertisers.
          </p>

          <ModalHeading>5. External Links</ModalHeading>

          <p className="mt-2">
            Our website may contain links to official university websites. We
            are not responsible for the content or privacy practices of those
            external websites.
          </p>

          <ModalHeading>6. Cookies and Analytics</ModalHeading>

          <p className="mt-2">
            We may use cookies and analytics tools to understand website usage,
            improve performance, and enhance the user experience.
          </p>
        </FooterModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Modal Heading
|--------------------------------------------------------------------------
*/

type ModalHeadingProps = {
  children: ReactNode;
};

function ModalHeading({ children }: ModalHeadingProps) {
  return (
    <h3 className="mt-6 text-lg font-extrabold text-[#00ad4e]">{children}</h3>
  );
}

/*
|--------------------------------------------------------------------------
| Footer Modal
|--------------------------------------------------------------------------
*/

type FooterModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function FooterModal({ title, children, onClose }: FooterModalProps) {
  return (
    <div
      role="presentation"
      onMouseDown={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="footer-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#e9fff2] text-[#00ad4e] transition-colors hover:bg-[#d3ffe4]"
        >
          <X size={22} />
        </button>

        <h2
          id="footer-modal-title"
          className="pr-12 text-center text-2xl font-black text-[#00ad4e] sm:text-3xl"
        >
          {title}
        </h2>

        <div className="my-5 h-px bg-gray-200" />

        <div className="text-sm leading-7 text-gray-700 sm:text-base">
          {children}
        </div>
      </div>
    </div>
  );
}
