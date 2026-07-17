"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

export function About() {
  const basePath = "/iim-indore/executive-programme-in-sales-and-marketing";
  const assetsBase = `${basePath}/assets/img`;

  return (
    <section id="about" className="bg-[#f8fafc] py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#231069] tracking-wide">
              ABOUT IIM - Indore
            </h2>
            <p className="mt-5 text-sm text-gray-800 leading-relaxed max-w-2xl">
              Indian Institute of Management Indore (IIM Indore) is one of India's premier management institutions, renowned for academic excellence, innovation, and leadership development. Established in 1996, it has earned the prestigious Triple Crown Accreditation (AACSB, AMBA, and EQUIS), placing it among an elite group of business schools worldwide. The institute offers industry-focused programs designed to develop strategic thinking, managerial expertise, and practical business skills.
            </p>

            {/* Accreditations Box */}
            <div className="mt-8 w-full max-w-xl">
              <h3 className="font-extrabold text-[#231069] text-sm md:text-lg mb-3.5">
                Accreditations and Recognitions of IIM Indore
              </h3>

              {/* Border Wrapped Logos Container */}
              <div className="border border-gray-400 rounded-2xl p-5 bg-white/20 flex flex-wrap items-center justify-center gap-4">
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 md:h-20 md:w-36 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/amba-iim.webp`)}
                    alt="AMBA Accredited"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 md:h-20 md:w-36 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/equis-iim.webp`)}
                    alt="EQUIS Accredited"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 md:h-20 md:w-36 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/aacsb-iim.webp`)}
                    alt="AACSB Accredited"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Campus Image Column */}
          <div className="relative mx-auto w-full max-w-[400px] aspect-[1/1] overflow-hidden rounded-[40px] border-4 border-white shadow-xl lg:max-w-none">
            <Image
              src={getAssetPath(`${assetsBase}/IIM Indore 2 (1).png`)}
              alt="IIM Indore Campus"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover object-left"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
