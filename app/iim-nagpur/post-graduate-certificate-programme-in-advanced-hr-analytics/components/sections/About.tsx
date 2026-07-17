"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { getAssetPath } from "@/lib/utils";

export function About() {
  const basePath = "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics";
  const assetsBase = `${basePath}/assets/img`;

  return (
    <section id="about" className="bg-[#f8fafc] py-14 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#231069] tracking-wide">
              About Indian Institute of Management Nagpur (IIM Nagpur)
            </h2>
            <p className="mt-5 text-sm text-gray-800 leading-relaxed max-w-2xl">
              <strong>IIM Nagpur</strong> was established in 2015 by the Ministry of Education, Government of India. It is the first of the third-generation IIMs and is committed to advancing excellence in management education, research, and industry engagement. Through its Executive Education programmes, IIM Nagpur equips working professionals with specialised skills required for leadership in a rapidly evolving business environment. Guided by its vision of creating meaningful impact and its focus on lifelong learning, the institute prepares professionals to excel in business, policymaking, and organisational leadership. The HRM post graduate programme reflects this commitment by helping professionals understand the benefits of HR analytics through an industry-driven curriculum and applied learning approach.
            </p>

            {/* Accreditations Box */}
            <div className="mt-8 w-full max-w-xl">
              <h3 className="font-extrabold text-[#231069] text-sm md:text-lg mb-3.5">
                Accreditations & Recognitions
              </h3>

              {/* Border Wrapped Logos Container */}
              <div className="border border-gray-400 rounded-2xl p-5 bg-white/20 flex flex-wrap items-center justify-center gap-4">
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/aacsb.webp`)}
                    alt="AACSB Member"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/iirf.webp`)}
                    alt="IIRF Ranked"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/nirf.webp`)}
                    alt="NIRF Ranked"
                    width={100}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white px-2 py-1 rounded-lg flex items-center justify-center h-15 w-30 shadow-xs border border-gray-100">
                  <Image
                    src={getAssetPath(`${assetsBase}/outlook.webp`)}
                    alt="Outlook Ranked"
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
              src={getAssetPath(`${assetsBase}/square_img.webp`)}
              alt="IIM Nagpur Campus"
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
