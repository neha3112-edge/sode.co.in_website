"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

export function About() {
  const basePath = "/xlri/executive-development-programme-in-human-resource-management";
  const assetsBase = `${basePath}/assets/img`;

  return (
    <section id="about" className="bg-[#f8fafc] py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10316A] tracking-wide">
              About XLRI Jamshedpur
            </h2>
            <p className="mt-5 text-sm text-gray-800 leading-relaxed max-w-2xl">
              XLRI (Xavier Labour Relations Institute), Jamshedpur is one of India's oldest and most prestigious business schools. The institution was established in 1949; it has a strong reputation for academic excellence, offers a diverse portfolio of management programmes, and has built a global network of alumni who have demonstrated responsible business leadership across industries.
              <br /><br />
              XLRI has consistently earned recognition for its quality education and institutional excellence. Through the Executive Development Programme in Human Resource Management, XLRI combines academic rigour with practical industry insights to prepare professionals for strategic HR leadership roles.
            </p>

            {/* Accreditations Box */}
            <div className="mt-8 w-full max-w-xl">
              <h3 className="font-extrabold text-[#10316A] text-sm md:text-lg mb-3.5">
                Accreditations & Recognitions
              </h3>

              {/* Border Wrapped Logos Container */}
              <div className="border border-gray-400 rounded-2xl p-5 bg-white/20 flex flex-wrap items-center justify-center gap-4">
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 md:h-22 md:w-40 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/aacsb-iim.webp`)}
                    alt="AACSB Accredited"
                    width={130}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 md:h-22 md:w-40 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/amba-iim.webp`)}
                    alt="AMBA Accredited"
                    width={130}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Campus Image Column */}
          <div className="relative mx-auto w-full max-w-[400px] aspect-[1/1] overflow-hidden rounded-[40px] border-4 border-white shadow-xl lg:max-w-none">
            <Image
              src={getAssetPath(`${assetsBase}/Square Size.webp`)}
              alt="XLRI Jamshedpur Campus"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover object-left"
            />
          </div>
        </div>
      </Container >
    </section >
  );
}
