"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

export function About() {
  return (
    <>
      {/* About IIM Bangalore Section */}
      <section id="about" className="w-full bg-[#eef4fd] py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f3b8c] tracking-wide text-center">
                About IIM Bangalore
              </h2>
              <p className="mt-5 text-sm sm:text-sm text-gray-800 text-center leading-relaxed max-w-2xl">
                Established in 1973, the Indian Institute of Management Bangalore (IIM Bangalore) is an Institute of National Importance under the IIM Act, 2017. This IIM Bangalore online course is delivered through IIMBx, the institute's digital learning foundation, combining academic excellence with flexible learning. Learners benefit from renowned faculty, a curriculum designed for practical business application, and access to affiliate alumni status upon successful completion. For professionals seeking IIM Bangalore online courses with certificates, this programme offers a strong foundation in management while connecting participants to the wider IIM Bangalore ecosystem through high-quality IIM Bangalore online programs.
              </p>

              {/* Accreditations Box */}
              <div className="mt-8 w-full max-w-xl">
                <h3 className="text-center font-extrabold text-[#0f3b8c] text-lg mb-3.5">
                  Accreditations and Recognitions of IIM Bangalore
                </h3>

                {/* Border Wrapped Logos Container */}
                <div className="border border-gray-400 rounded-2xl p-5 bg-white/20 flex flex-wrap justify-center items-center gap-4">
                  <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-25 w-50 shadow-xs border border-gray-100">
                    <Image
                      src={getAssetPath("/iimb/assets/img/amba-iim.webp")}
                      alt="AMBA Accredited"
                      width={150}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-25 w-50 shadow-xs border border-gray-100">
                    <Image
                      src={getAssetPath("/iimb/assets/img/equis-iim.webp")}
                      alt="EQUIS Accredited"
                      width={150}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  {/* <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-14 w-28 shadow-xs border border-gray-100">
                    <Image
                      src={getAssetPath("/iimb/assets/img/aacsb-iim.webp")}
                      alt="AACSB Accredited"
                      width={90}
                      height={45}
                      className="object-contain"
                    />
                  </div> */}
                  {/* <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-14 w-28 shadow-xs border border-gray-100">
                    <Image
                      src={getAssetPath(
                        "/iimb/assets/img/ministry-of-education.webp",
                      )}
                      alt="Ministry of Education"
                      width={95}
                      height={45}
                      className="object-contain"
                    />
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Campus Image Column */}
            <div className="w-full flex justify-center">
              <div className="relative h-[280px] sm:h-[350px] w-full max-w-[420px] rounded-[36px] overflow-hidden shadow-xl bg-white border-4 border-white">
                <Image
                  src={getAssetPath(
                    "/iimb/assets/img/Square size image.webp",
                  )}
                  alt="IIM Bangalore campus building"
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
