"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

export function About() {
  return (
    <>
      {/* About IIM Kozhikode Section */}
      <section id="about" className="w-full bg-[#eef4fd] py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f3b8c] tracking-wide text-center">
                ABOUT IIM - KOZHIKODE
              </h2>
              <p className="mt-5 text-sm sm:text-sm text-gray-800 text-center leading-relaxed max-w-2xl">
                IIM Kozhikode is recognized as one of India’s leading business
                schools, known for its innovative teaching, global outlook, and
                strong industry partnerships. The institute offers a broad
                portfolio of programs, including executive and online learning
                opportunities tailored for professionals. With prestigious
                accreditations such as the Ministry of Education, EQUIS, and
                AACSB, IIM Kozhikode stands among globally benchmarked
                institutions. Through its specialized programs, such as IIM
                Kozhikode&apos;s HRM, and advanced certification options, the
                institute ensures that learners gain both academic depth and
                practical business insights. These certification courses in IIM
                Kozhikode are designed to prepare graduates, working executives,
                and managers to succeed in leadership and analytics-driven roles
                worldwide.
              </p>

              {/* Accreditations Box */}
              <div className="mt-8 w-full max-w-xl">
                <h3 className="text-center font-extrabold text-[#0f3b8c] text-lg mb-3.5">
                  Accreditations and Recognitions of IIM Kozhikode
                </h3>

                {/* Border Wrapped Logos Container */}
                <div className="border border-gray-400 rounded-2xl p-5 bg-white/20 flex flex-wrap justify-center items-center gap-4">
                  <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-25 w-50 shadow-xs border border-gray-100">
                    <Image
                      src={getAssetPath("/iimk/assets/img/amba-iim.webp")}
                      alt="AMBA Accredited"
                      width={150}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-25 w-50 shadow-xs border border-gray-100">
                    <Image
                      src={getAssetPath("/iimk/assets/img/equis-iim.webp")}
                      alt="EQUIS Accredited"
                      width={150}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                  {/* <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-14 w-28 shadow-xs border border-gray-100">
                    <Image
                      src={getAssetPath("/iimk/assets/img/aacsb-iim.webp")}
                      alt="AACSB Accredited"
                      width={90}
                      height={45}
                      className="object-contain"
                    />
                  </div> */}
                  {/* <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-14 w-28 shadow-xs border border-gray-100">
                    <Image
                      src={getAssetPath(
                        "/iimk/assets/img/ministry-of-education.webp",
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
                    "/iimk/assets/img/iim-university-image.webp",
                  )}
                  alt="IIM Kozhikode campus building"
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
