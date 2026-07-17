"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

export function About() {
  const assetsBase = "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img";

  return (
    <>
      {/* About IIT Madras Pravartak Section */}
      <section id="about" className="w-full bg-[#eef4fd] py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2C5E7C] tracking-wide">
                ABOUT IITM - Pravartak
              </h2>
              <p className="mt-5 text-sm text-gray-800 leading-relaxed max-w-2xl">
                <strong>IITM Pravartak Technologies Foundation</strong> is a Section 8 company that serves as the Technology Innovation Hub for Sensors, Networking, Actuators, and Control Systems (SNACS). Established at the <strong>Indian Institute of Technology Madras</strong>, IITM Pravartak is dedicated to fostering cutting-edge research, innovation, entrepreneurship, and industry-ready talent in emerging technologies.<br /><br />
                <strong>Through this artificial intelligence course</strong>, IITM Pravartak extends its mission by equipping learners with industry-relevant expertise in applied artificial intelligence and deep learning, empowering them to build successful careers in the rapidly evolving AI landscape.
              </p>

              {/* Accreditations Box */}
              <div className="mt-8 w-full max-w-xl">
                <h3 className="font-extrabold text-[#2C5E7C] text-sm md:text-lg mb-3.5">
                  Accreditations & Recognitions of IIT Madras
                </h3>

                {/* Border Wrapped Logos Container */}
                <div className="border border-gray-400 rounded-2xl p-5 bg-white/20 flex flex-wrap items-center justify-center gap-4">
                  <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-33 md:h-20 md:w-44 shadow-xs border border-gray-100">
                    <Image
                      src={getAssetPath(`${assetsBase}/QS World.webp`)}
                      alt="QS World Ranking"
                      width={140}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-33 md:h-20 md:w-44 shadow-xs border border-gray-100">
                    <Image
                      src={getAssetPath(`${assetsBase}/NIRF.webp`)}
                      alt="NIRF Ranked #1"
                      width={140}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Campus Image Column */}
            <div className="w-full flex justify-center">
              <div className="relative h-[280px] sm:h-[350px] w-full max-w-[420px] rounded-[36px] overflow-hidden shadow-xl bg-white border-4 border-white">
                <Image
                  src={getAssetPath(`${assetsBase}/Square Size.webp`)}
                  alt="IIT Madras Pravartak Campus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center rounded-[30px]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
