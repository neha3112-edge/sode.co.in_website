"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Image from "next/image";
import { getAssetPath } from "@/lib/utils";
import FormWrapper from "@/components/forms/FormWrapper";

export function Hero() {
  const [downloadOpen, setDownloadOpen] = useState(false);

  const onClick = () => {
    setDownloadOpen(true);
  };

  return (
    <>
      <section
        id="home"
        className="relative w-full overflow-hidden bg-[#102441]"
      >
        {/* Desktop Widescreen Background Image Overlay */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image
            src={getAssetPath("/assets/images/desktop_banner.jpg")}
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <Container className="relative z-10 w-full pt-24 pb-12 lg:pt-28 lg:pb-16 lg:flex lg:items-center px-0">
          <div className="w-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text side content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 text-white max-w-2xl px-4 lg:py-4">
              {/* Badge Sub-header */}
              <p className="text-base md:text-lg lg:text-lg text-[#dbeafe] font-serif italic mb-3 font-semibold">
                <span className="font-medium text-[#f7ebc7] text-base md:text-lg lg:text-3xl">
                  #1
                </span>{" "}
                School of Online & Distance Education
              </p>

              {/* Main Heading */}
              <h1 className="text-[22px] md:text-4xl lg:text-3xl font-extrabold leading-tight text-white">
                Certifications & Online Degree Courses from{" "}
                <span className="text-[#f7ebc7]">IITs, IIMs &</span> Leading
                Global B-Schools
              </h1>

              {/* Subtitle */}
              <p className="text-sm md:text-sm text-white/90 max-w-md font-medium">
                Your Gateway to Strategic Leadership Program Learning from
                Leading Institutions.
              </p>

              {/* Pills/Tags Grid (Desktop Only) */}
              <div className="hidden lg:flex flex-col space-y-3 pt-2">
                {/* Row 1 */}
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 border border-white/30 rounded-md text-sm font-semibold bg-white/5">
                    Doctorate
                  </span>
                  <span className="px-4 py-2 border border-white/30 rounded-md text-sm font-semibold bg-white/5">
                    Certification
                  </span>
                  <span className="px-4 py-2 border border-white/30 rounded-md text-sm font-semibold bg-white/5">
                    Executive Programs
                  </span>
                </div>
                {/* Row 2 */}
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 border border-white/30 rounded-md text-sm font-semibold bg-white/5">
                    Banking
                  </span>
                  <span className="px-4 py-2 border border-white/30 rounded-md text-sm font-semibold bg-white/5">
                    Finance
                  </span>
                  <span className="px-4 py-2 border border-white/30 rounded-md text-sm font-semibold bg-white/5">
                    Leadership
                  </span>
                </div>
              </div>

              {/* Action Button (Desktop Only) */}
              <div className="hidden lg:block pt-4">
                <Button
                  size="lg"
                  onClick={onClick}
                  className="bg-linear-to-r from-[#EEC471] via-[#F3CD73] to-[#FADA9A] text-[#102441] rounded-md px-8 py-5 text-base font-bold shadow-lg transition-all transform hover:scale-[1.02] cursor-pointer duration-200"
                >
                  Book 1:1 Personalised Counselling
                </Button>
              </div>
            </div>

            {/* Mobile Content Block / Hidden on Desktop */}
            <div className="w-full flex flex-col items-center lg:hidden">
              {/* Man Image (Mobile only) */}
              <div className="relative w-full -mt-37.5 flex justify-center overflow-hidden">
                <Image
                  src={getAssetPath("/assets/images/mobile-banner-img.png")}
                  alt="Professional Counselor"
                  width={623}
                  height={773}
                  priority
                  className="max-w-full h-auto object-contain"
                />
              </div>

              {/* Form Card (Mobile only, overlaps bottom of the image) */}
              <div className="w-full max-w-md z-10 -mt-14 md:-mt-24 px-4">
                <Card className="bg-white shadow-2xl rounded-2xl border-0 overflow-hidden p-6 text-black">
                  <FormWrapper
                    title="Apply Now"
                    subtitle="Start your application journey today"
                  />
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Modal for Desktop Counselling Button */}
      {downloadOpen && (
        <div
          onClick={() => setDownloadOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-sm rounded-xl shadow-2xl relative p-6 animate-[scaleIn_0.2s_ease]"
          >
            <FormWrapper
              title="Book 1:1 Counselling"
              subtitle="Academic Experts Are Here to Assist!"
              onClose={() => setDownloadOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
