"use client";

import { EnrichedUniversityData } from "@/lib/universities-data";
import FormWrapper from "@/components/forms/FormWrapper";

interface UniversityHeroProps {
  data: EnrichedUniversityData;
  onOpenBrochure: (pdfPath: string) => void;
}

export default function UniversityHero({ data, onOpenBrochure }: UniversityHeroProps) {
  return (
    <div
      id="hero-section"
      style={{
        "--hero-bg-desktop": `url(${data.heroBgDesktop})`,
        "--hero-bg-mobile": `url(${data.heroBgMobile})`,
      } as React.CSSProperties}
    >
      <div className="container">
        <div className="banner">
          <div className="banner-info">
            <div className="un_image_container">
              <a href={`/${data.id}`}>
                <img src={data.logo} alt={`${data.name} Logo`} style={{ maxHeight: "65px", width: "auto" }} />
              </a>
            </div>
            <h2 className="whitespace-pre-line">{data.bannerTitle}</h2>
            {data.heroTitleHtml ? (
              <div dangerouslySetInnerHTML={{ __html: data.heroTitleHtml }}></div>
            ) : (
              <h1>{data.name} <br />Online Programs</h1>
            )}
            {data.bannerPartner ? (
              <div className="new_banner_heading" dangerouslySetInnerHTML={{ __html: data.bannerPartner }}></div>
            ) : (
              <div className="new_banner_heading">
                Online Programs via <span className="underline_text">SODE</span>
              </div>
            )}
            <div className="banner_lists">
              <ul>
                {(data.heroBullets || data.coursesBullets).slice(0, 4).map((bullet, idx) => (
                  <li key={idx}>
                    <i className="fa fa-check-square-o"></i> {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="btn brochure downloadBrochureBtn"
              onClick={() => onOpenBrochure(data.coursesList[0]?.pdf || `/${data.id}/assets/img/main_brochure.pdf`)}
            >
              Download Brochure <i className="fa fa-download"></i>
            </button>
          </div>

          <div className="col-md-3 custom_img_section" style={{ padding: 0 }}>
            <img src={data.image} alt={`${data.name} Student Graphic`} />
          </div>

          {/* Banner lead form */}
          <div className="banner-form">
            <div id="form" className="w-full max-w-sm md:max-w-md bg-white p-6 rounded-2xl shadow-xl border border-gray-100 text-slate-800">
              <FormWrapper
                title="Enquire Now"
                subtitle="Academic Experts will assist you!"
                courseOptions={data.coursesOptions.map(c => c.label)}
                formNameOverride={data.formName}
                utmSourceFallback={data.utmSourceFallback}
                utmMediumFallback={data.utmMediumFallback}
                sourceOverride={data.crmSource}
                showPhoneCallLink={data.id === "edgewood"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
