"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

export function About() {
  const basePath = "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai";
  const assetsBase = `${basePath}/assets/img`;

  return (
    <section id="about" className="bg-[#f8fafc] py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3585C1] tracking-wide">
              ABOUT IIT - Roorkee
            </h2>
            <p className="mt-5 text-sm text-gray-800 leading-relaxed max-w-2xl">
              The Indian Institute of Technology Roorkee (IIT Roorkee) is one of India's premier institutions for higher technological education, research, and innovation. Established in 1847 as the Thomason College of Engineering, it became the first Technical University of India in 1949 and was designated as an IIT in 2001. Through its Continuing Education Centre (CEC), established in 1955, IIT Roorkee delivers executive education and professional development programmes for working professionals and aspiring learners.
              <br /><br />
              The PG Certificate in Data Science, Machine Learning & Generative AI is offered through the Continuing Education Centre, enabling learners to gain industry-relevant skills from one of India's most respected technical institutions.
            </p>

            {/* Accreditations Box */}
            <div className="mt-8 w-full max-w-xl">
              <h3 className="font-extrabold text-[#3585C1] text-sm md:text-lg mb-3.5">
                Accreditations and Recognitions of IIT Roorkee
              </h3>

              {/* Border Wrapped Logos Container */}
              <div className="border border-gray-400 rounded-2xl p-5 bg-white/20 flex flex-wrap items-center justify-center gap-4">
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 md:h-22 md:w-40 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/Department of Architecture and panning IIR roorkee.webp`)}
                    alt="Department of Architecture and planning IIT Roorkee"
                    width={130}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 md:h-22 md:w-40 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/NIRF.webp`)}
                    alt="NIRF Ranked"
                    width={130}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 md:h-22 md:w-40 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/QS world university rankings.webp`)}
                    alt="QS World University Rankings"
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
              src={getAssetPath(`${assetsBase}/Square size image.webp`)}
              alt="IIT Roorkee Campus"
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
