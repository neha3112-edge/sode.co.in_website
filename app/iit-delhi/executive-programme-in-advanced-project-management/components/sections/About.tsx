"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

export function About() {
  const basePath = "/iit-delhi/executive-programme-in-advanced-project-management";
  const assetsBase = `${basePath}/assets/img`;

  return (
    <section id="about" className="bg-[#f8fafc] py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#C21717] tracking-wide">
              ABOUT IIT - Delhi
            </h2>
            <p className="mt-5 text-sm text-gray-800 leading-relaxed max-w-2xl">
              The <strong>Indian Institute of Technology Delhi (IIT Delhi)</strong> is one of India's most prestigious institutions, renowned for excellence in engineering, management, research, and innovation. Established in 1961, IIT Delhi has consistently nurtured future-ready professionals and industry leaders through its world-class academic ecosystem.<br /><br />
              The <strong>Executive Programme in Advanced Project Management</strong> is offered through the Continuing Education Programme (CEP), IIT Delhi, enabling working professionals to gain industry-relevant skills from distinguished faculty while continuing their careers.
            </p>

            {/* Accreditations Box */}
            <div className="mt-8 w-full max-w-xl">
              <h3 className="font-extrabold text-[#C21717] text-sm md:text-lg mb-3.5">
                Accreditations & Recognitions of IIT Delhi
              </h3>

              {/* Border Wrapped Logos Container */}
              <div className="border border-gray-400 rounded-2xl p-5 bg-white/20 flex flex-wrap items-center justify-center gap-4">
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-33 md:h-20 md:w-44 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/QS World.webp`)}
                    alt="QS World Ranking"
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-33 md:h-20 md:w-44 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/NIRF.webp`)}
                    alt="NIRF Ranked"
                    width={150}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Campus Image Column */}
          <div className="relative mx-auto w-full max-w-[380px] aspect-[1/1] overflow-hidden rounded-2xl border-4 border-white shadow-xl lg:max-w-none">
            <Image
              src={getAssetPath(`${assetsBase}/Square Image iit Delhi.webp`)}
              alt="IIT Delhi Campus"
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover object-center"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
