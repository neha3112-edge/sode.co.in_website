"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import Image from "next/image";
import FormWrapper from "@/components/ui/FormWrapper";

export function Hero() {
  const [donwloadOpen, setDonwloadOpen] = useState(false);

  const onClick = () => {
    setDonwloadOpen(true);
  };


  return (
    <>
      <section id="home" className="relative w-full flex items-center pt-28 pb-16 lg:py-32 overflow-hidden min-h-162.5">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/1-year-mba/assets/images/desk-quality-img.webp"
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="hidden md:block object-cover object-center"
          />

          <Image
            src="/1-year-mba/assets/images/mobile-image-.webp"
            alt="Hero mobile background"
            fill
            priority
            sizes="100vw"
            className="block md:hidden object-cover object-center mt-17.5"
          />
          {/* Gradient overlay to ensure text readability */}
          <div className="absolute"></div>
        </div>
        <Container className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side content */}
            <div className="flex flex-col space-y-6 text-white max-w-2xl px-4 lg:px-0">
              <h2 className="text-sm md:text-2xl uppercase text-white/95">
                FAST TRACK YOUR CAREER WITH
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight -mt-6">
                <span className="font-extrabold bg-linear-to-r from-[#FFC107] to-[#FFF3A3] bg-clip-text text-transparent">
                  1-Year Online MBA*
                </span>
              </h1>

              <div>
                <div className="flex items-center">
                  {/* LEFT BLOCK */}
                  <div className="flex flex-col items-start">
                    {/* FROM */}
                    {/* 1 + brackets */}
                    <div className="relative">
                      {/* FROM */}
                      <span className="absolute left-1 text-[11px] tracking-wide text-white">
                        FROM
                      </span>

                      {/* 1 */}
                      <span className="text-9xl font-semibold leading-none bg-linear-to-l from-[#FFF3A3] to-[#FFC107] bg-clip-text text-transparent">
                        1
                      </span>

                      {/* LEFT */}
                      <div className="absolute bottom-2 left-1.5 flex flex-col justify-between h-8">
                        <div className="w-2 h-1/2 border-l border-t border-[#FFC107]"></div>
                        <div className="w-2 h-1/2 border-l border-b border-[#FFC107]"></div>
                      </div>

                      {/* RIGHT */}
                      <div className="absolute bottom-2 right-0 flex flex-col justify-between h-8">
                        <div className="w-2 h-1/2 border-r border-t border-[#FFC107]"></div>
                        <div className="w-2 h-1/2 border-r border-b border-[#FFC107]"></div>
                      </div>
                    </div>
                  </div>
                  {/* RIGHT TEXT */}
                  <div className="flex flex-col leading-tight">
                    <span className="text-[#FFC107] text-xl md:text-2xl font-semibold uppercase">
                      INDIA&apos;S <span className="text-white">MOST</span>
                    </span>

                    <span className="text-white text-xl  md:text-2xl uppercase font-medium">
                      TRUSTED UGC APPROVED
                    </span>

                    <span className="text-white text-xl md:text-2xl uppercase font-medium">
                      UNIVERSITIES
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-6">
                <Button
                  size="sm"
                  onClick={onClick}
                  className="
    bg-[#FFC107] hover:bg-[#e6a800] text-black rounded-full 
    px-3 py-3 text-sm
    md:px-14 md:py-6 md:text-md
    shadow-[0_15px_30px_rgba(255,193,7,0.3)] 
    transition-all flex items-center font-bold gap-2 md:gap-2 group cursor-pointer
  "
                >
                  DOWNLOAD BROCHURE
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    className="md:w-7 md:h-7 group-hover:translate-y-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" x2="12" y1="15" y2="3" />
                  </svg>
                </Button>
                <div className="italic font-medium text-white/95 ml-2 tracking-wide">
                  Admission Deadline:{" "}
                  <div className="text-[#FFC107] font-extrabold italic">
                    &quot;30th March 2026&quot;
                  </div>
                </div>
              </div>
            </div>
            {/* Right side form */}
            <div className="lg:ml-auto w-full max-w-sm mt-30 lg:mt-0">
              <Card className="bg-white shadow-2xl rounded-2xl border-0 relative overflow-hidden">
                {/* glow effect */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl z-0"></div>
                {/* FORM */}
                <div className="relative z-10 p-6">
                  <FormWrapper
                    title="

Fast Track Your MBA Journey"
                    subtitle="Academic Experts Are Here to Assist!"
                  />
                </div>

              </Card>
            </div>
          </div>
        </Container>
      </section>
      {donwloadOpen && (
        <div
          onClick={() => setDonwloadOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
        >
          {/* BOX */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-sm rounded-xl shadow-2xl relative p-6 animate-[scaleIn_0.2s_ease]"
          >

            <FormWrapper
              title="Download Brochure"
              subtitle="Get complete program details instantly"
              isBrochure={true} // ✅ IMPORTANT
              onClose={() => setDonwloadOpen(false)}
            />
          </div>
        </div>
      )}
    </>
  );
}
