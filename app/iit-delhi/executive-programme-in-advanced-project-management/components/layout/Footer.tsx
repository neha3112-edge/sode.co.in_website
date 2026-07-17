"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getAssetPath } from "@/lib/utils";

type ModalType = "disclaimer" | "terms" | "privacy" | null;

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const assetsBase = "/iit-delhi/executive-programme-in-advanced-project-management/assets/img";

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModal]);

  const closeModal = () => {
    setActiveModal(null);
  };

  const openComparePage = () => {
    window.open(
      "https://distanceeducationschool.com/compare-university/",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <footer className="bg-[#f4f7fa] pt-8 sm:pt-10 lg:pt-12">
        {/* Compare Section */}
        <section id="compare-university" className="px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-446.25 rounded-[20px] bg-[#C21717] px-5 py-12 text-center text-white sm:py-14 lg:py-12 shadow-xl">
            <h2 className="text-xl font-bold sm:text-2xl lg:text-[25px]">
              Still Confused?
            </h2>

            <p className="mx-auto mt-4 max-w-4xl text-sm font-semibold leading-6 sm:text-base lg:text-lg">
              Compare IIT Delhi with Top World Renowned Universities
            </p>

            {/* Arrow GIF Button */}
            <button
              type="button"
              onClick={openComparePage}
              aria-label="Compare universities"
              className="absolute -bottom-10 left-1/2 flex h-20 w-20 -translate-x-1/2 items-center justify-center rounded-full bg-white transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={getAssetPath(`${assetsBase}/arrow.gif`)}
                alt="Scroll down"
                width={48}
                height={48}
                className="h-18 w-18 rounded-full object-contain"
                unoptimized
              />
            </button>
          </div>
        </section>

        {/* Logo Section */}
        <section className="px-4 pb-5 pt-20 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={openComparePage}
            className="mx-auto block cursor-pointer"
            aria-label="Open university comparison page"
          >
            <Image
              src={getAssetPath(`${assetsBase}/new-des-logo.webp`)}
              alt="Distance Education School"
              width={950}
              height={260}
              className="mx-auto h-auto w-full max-w-220 object-contain"
            />
          </button>
        </section>

        {/* Disclaimer Text */}
        <section className="px-4 pb-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-normal leading-6 text-gray-700 sm:text-sm">
              SODE Counselling Services LLP act as a marketing agency. All
              university names, logos, and trademarks mentioned are used for
              informational purposes only. We are not a university or an
              admission authority. Users are encouraged to verify information on
              the official website of the University before making decisions.
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm text-gray-900 sm:text-sm">
              <button
                type="button"
                onClick={() => setActiveModal("disclaimer")}
                className="transition-colors hover:text-[#C21717] cursor-pointer"
              >
                Disclaimer
              </button>

              <span>|</span>

              <button
                type="button"
                onClick={() => setActiveModal("terms")}
                className="transition-colors hover:text-[#C21717] cursor-pointer"
              >
                Terms &amp; Conditions
              </button>

              <span>|</span>

              <button
                type="button"
                onClick={() => setActiveModal("privacy")}
                className="transition-colors hover:text-[#C21717] cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Bar */}
        <div className="bg-[#C21717] px-4 py-3 text-center text-sm text-white font-medium">
          © 2026 SODE Counseling Services LLP
        </div>
      </footer>

      {/* Disclaimer Modal */}
      {activeModal === "disclaimer" && (
        <FooterModal title="Disclaimer" onClose={closeModal}>
          <p>
            This information is provided by DistanceEducationSchool.com, under
            the legal entity of SODE Counselling Services LLP, registered with
            the Ministry of Corporate Affairs, with the main objective of
            providing information, guidance, and counselling services about
            UGC-DEB-approved universities. We do not act as a university or an
            admission authority.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#C21717]">
            Essential Points
          </h3>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              All university names, logos, and trademarks used are for
              informational purposes only.
            </li>
            <li>
              Our role is to provide updates, information, and guidance on
              universities regarding their distance or online education
              programs.
            </li>
            <li>
              We do not charge students any fees for counselling or guidance on
              university applications.
            </li>
            <li>
              We do not issue degrees, mark sheets, or certificates in the name
              of any university.
            </li>
            <li>
              Our aim is to offer free and unbiased counselling to help students
              choose the right path.
            </li>
            <li>
              We respect the integrity and reputation of all listed universities
              and do not engage in any activity that damages their credibility.
            </li>
            <li>
              Users are encouraged to verify information from official
              university portals before making decisions.
            </li>
            <li>
              Our services are transparent, legal, and purely for student
              support.
            </li>
          </ul>
        </FooterModal>
      )}

      {/* Terms Modal */}
      {activeModal === "terms" && (
        <FooterModal title="Terms and Conditions" onClose={closeModal}>
          <p>
            This page outlines the terms and conditions that apply when you
            access or use services provided on this platform, operated by SODE
            Counselling Services LLP under DistanceEducationSchool.com.
          </p>

          <p className="mt-4">
            We help students and working professionals explore distance and
            online education options offered by UGC-DEB-approved universities.
            These terms outline how we support the process, particularly when
            payments and third-party tools are involved.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#C21717]">
            1. Our Role
          </h3>

          <p className="mt-2">
            We provide information and counselling services only. We are not a
            university and do not collect any university fees directly. All
            academic or admission-related payments must be made to the
            respective university.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#C21717]">
            2. Unauthorised Use or Fraud
          </h3>

          <p className="mt-2">
            If you suspect any unauthorised transaction linked to a service on
            our platform, report it immediately. We will coordinate with the
            respective payment partner for further action.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#C21717]">
            3. Updates to These Terms
          </h3>

          <p className="mt-2">
            These terms may be updated as services evolve. Continued use of this
            platform implies your agreement to the latest version of these
            terms.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#C21717]">
            4. Contact Us
          </h3>

          <p className="mt-2">
            For support, email us at:{" "}
            <a
              href="mailto:support@distanceeducationschool.com"
              className="font-medium text-[#C21717] underline"
            >
              support@distanceeducationschool.com
            </a>
          </p>
        </FooterModal>
      )}

      {/* Privacy Modal */}
      {activeModal === "privacy" && (
        <FooterModal title="Privacy Policy" onClose={closeModal}>
          <p>
            All information on this platform is provided by
            DistanceEducationSchool.com, under the legal name of SODE
            Counselling Services LLP. We are an educational counselling platform
            that helps students find trusted distance and online courses from
            UGC-DEB-approved universities.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#C21717]">
            1. No Personal Data Collected by Default
          </h3>

          <p className="mt-2">
            You can freely browse our website without sharing any personal
            information. We do not collect your name, phone number, or email
            address unless you choose to fill out a form or contact us directly.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#C21717]">
            2. How We Use It
          </h3>

          <p className="mt-2">Your information is used to:</p>

          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Guide you in choosing the right university or course</li>
            <li>Provide counselling support</li>
            <li>Share admission-related updates</li>
          </ul>

          <p className="mt-4">
            We may send you important updates, such as admission deadlines or
            university alerts, via WhatsApp and email. You can opt out anytime.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#C21717]">
            3. Scope
          </h3>

          <p className="mt-2">
            This privacy policy applies to visitors who access this specific
            platform operated under DistanceEducationSchool.com by SODE
            Counselling Services LLP.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#C21717]">
            4. Data Sharing
          </h3>

          <p className="mt-2">
            We share your details only with trusted university partners and only
            for counselling or admission purposes. We do not sell or share data
            with third-party advertisers.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#C21717]">
            5. External Links
          </h3>

          <p className="mt-2">
            Our website may include links to official university portals. We are
            not responsible for the content or privacy policies of those
            external sites.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-[#C21717]">
            6. Cookies and Analytics
          </h3>

          <p className="mt-2">
            Our website uses cookies to improve the user experience. These
            cookies help us understand how visitors use the site and do not
            identify you personally.
          </p>
        </FooterModal>
      )}
    </>
  );
}

type FooterModalProps = {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

function FooterModal({ title, children, onClose }: FooterModalProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="footer-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-4 top-3 flex h-10 w-10 items-center justify-center rounded-full text-3xl leading-none text-gray-600 transition-colors hover:bg-gray-100 hover:text-red-600"
        >
          ×
        </button>

        <h2
          id="footer-modal-title"
          className="pr-10 text-center text-2xl font-bold text-[#C21717] sm:text-3xl"
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
