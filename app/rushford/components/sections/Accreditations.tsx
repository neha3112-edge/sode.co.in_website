"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { Container } from "@/components/ui/Container";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import FormWrapper from "@/components/forms/FormWrapper";
import { getAssetPath } from "@/lib/utils";
import { RUSHFORD_COURSE_OPTIONS } from "../../constants";

/*
|--------------------------------------------------------------------------
| Types
|--------------------------------------------------------------------------
*/

type AccreditationItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
};

type CertificateItem = {
  id: number;
  image: string;
  imageAlt: string;
};

type FormType = "degree" | null;

/*
|--------------------------------------------------------------------------
| Accreditation Data
|--------------------------------------------------------------------------
*/

const accreditationItems: AccreditationItem[] = [
  {
    id: 1,
    title: "5 Star QS Rating",
    description:
      "It holds 4 stars for overall and 5 stars for online learning and teaching in the QS rating system.",
    image: "/assets/img/qs-stars-rating-logo.webp",
    imageAlt: "QS Stars Rating System",
    imageWidth: 140,
    imageHeight: 70,
  },
  {
    id: 2,
    title: "EDUQUA Certified",
    description:
      "Rushford is certified by EduQua, ensuring the quality education standards in Switzerland.",
    image: "/assets/img/eduqua-logo.webp",
    imageAlt: "EduQua certification",
    imageWidth: 145,
    imageHeight: 75,
  },
  {
    id: 3,
    title: "ACBSP Member",
    description:
      "Rushford is a member of the Accreditation Council for Business Schools & Programs.",
    image: "/assets/img/acbsp-logo.webp",
    imageAlt: "ACBSP accreditation",
    imageWidth: 105,
    imageHeight: 80,
  },
  {
    id: 4,
    title: "BGA MP",
    description:
      "It is a member of the Business Graduates Association, which provides global recognition.",
    image: "/assets/img/bga-member-logo.webp",
    imageAlt: "Business Graduates Association member",
    imageWidth: 105,
    imageHeight: 80,
  },
  {
    id: 5,
    title: "IACBE Educational",
    description:
      "Rushford is an IACBE-accredited institution that proves accountability of its programs.",
    image: "/assets/img/iacbe-logo.webp",
    imageAlt: "IACBE accreditation",
    imageWidth: 155,
    imageHeight: 72,
  },
  {
    id: 6,
    title: "AACSB Member",
    description:
      "Rushford is a member of AACSB, advancing global quality in business education.",
    image: "/assets/img/aacsb-member-logo.webp",
    imageAlt: "AACSB member",
    imageWidth: 145,
    imageHeight: 72,
  },
];

/*
|--------------------------------------------------------------------------
| Certificate Slider Data
|--------------------------------------------------------------------------
|
| Apne actual certificate image names yahan set kar dena.
|
*/

const certificateItems: CertificateItem[] = [
  {
    id: 1,
    image: "/assets/img/rushford-dba-certificate.webp",
    imageAlt: "Rushford Business School DBA certificate",
  },
  {
    id: 2,
    image: "/assets/img/rushford-pwc-certificate.webp",
    imageAlt: "Rushford PwC Board Advisory certificate",
  },
];



/*
|--------------------------------------------------------------------------
| Main Component
|--------------------------------------------------------------------------
*/

export function Accreditations() {
  const [activeForm, setActiveForm] = useState<FormType>(null);

  const [certificateApi, setCertificateApi] = useState<CarouselApi>();

  const [selectedCertificateIndex, setSelectedCertificateIndex] = useState(0);

  const [certificateSlideCount, setCertificateSlideCount] = useState(0);

  /*
  |--------------------------------------------------------------------------
  | Certificate Autoplay
  |--------------------------------------------------------------------------
  */

  const certificateAutoplayPlugin = useRef(
    Autoplay({
      delay: 2600,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  );

  /*
  |--------------------------------------------------------------------------
  | Form Actions
  |--------------------------------------------------------------------------
  */

  const openDegreeForm = () => {
    setActiveForm("degree");
  };

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  /*
  |--------------------------------------------------------------------------
  | Certificate Carousel State
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!certificateApi) return;

    const updateCertificateCarousel = () => {
      setSelectedCertificateIndex(certificateApi.selectedScrollSnap());

      setCertificateSlideCount(certificateApi.scrollSnapList().length);
    };

    updateCertificateCarousel();

    certificateApi.on("select", updateCertificateCarousel);
    certificateApi.on("reInit", updateCertificateCarousel);

    return () => {
      certificateApi.off("select", updateCertificateCarousel);
      certificateApi.off("reInit", updateCertificateCarousel);
    };
  }, [certificateApi]);

  /*
  |--------------------------------------------------------------------------
  | Lock Body Scroll
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    document.body.style.overflow = activeForm ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [activeForm]);

  /*
  |--------------------------------------------------------------------------
  | Close Form With Escape Key
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    if (!activeForm) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeForm();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [activeForm, closeForm]);

  return (
    <>
      {/* =============================================================
          Accreditation Section
      ============================================================== */}

      <section
        id="accreditations"
        className="bg-white py-10 sm:py-12 lg:py-[38px]"
      >
        <Container>
          {/* Heading */}

          <div className="text-center">
            <h2 className="text-[25px] font-normal leading-tight tracking-[-0.02em] text-[#111111] sm:text-[28px] lg:text-[29px]">
              Accreditation &amp; Collaboration
            </h2>

            <p className="mt-2 text-[14px] font-normal leading-tight text-[#1d1d1d] sm:text-[15px]">
              Rushford Business School, Switzerland
            </p>
          </div>

          {/* Accreditation Cards */}

          <div className="mx-auto mt-8 grid max-w-[1135px] grid-cols-1 gap-x-[30px] gap-y-[30px] lg:grid-cols-2">
            {accreditationItems.map((item) => (
              <AccreditationCard key={item.id} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* =============================================================
          Automatic Certificate Slider Section
      ============================================================== */}

      <section
        id="certificate"
        className="border-b-[8px] border-[#073D5C] bg-white py-12 sm:py-14 lg:py-[52px]"
      >
        <Container>
          <div className="mx-auto grid max-w-[1135px] grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-[72px]">
            {/* Certificate Slider */}

            <div className="mx-auto w-full max-w-[560px]">
              <div
                className="relative w-full"
                onMouseEnter={() => {
                  certificateAutoplayPlugin.current.stop();
                }}
                onMouseLeave={() => {
                  certificateAutoplayPlugin.current.play();
                }}
              >
                <Carousel
                  setApi={setCertificateApi}
                  plugins={[certificateAutoplayPlugin.current]}
                  opts={{
                    align: "start",
                    loop: true,
                    skipSnaps: false,
                    dragFree: false,
                  }}
                  className="w-full"
                >
                  <CarouselContent className="ml-0">
                    {certificateItems.map((certificate) => (
                      <CarouselItem key={certificate.id} className="pl-0">
                        <div className="flex min-h-[260px] w-full items-center justify-center bg-white sm:min-h-[300px]">
                          <div className="relative aspect-[1.4/1] w-full overflow-hidden bg-white">
                            <Image
                              src={getAssetPath(certificate.image)}
                              alt={certificate.imageAlt}
                              fill
                              priority={certificate.id === 1}
                              sizes="(max-width: 1024px) 100vw, 560px"
                              className="object-contain object-center"
                            />
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>

              {/* Certificate Slider Dots */}

              {certificateSlideCount > 1 && (
                <div className="mt-4 flex items-center justify-center gap-2">
                  {Array.from({
                    length: certificateSlideCount,
                  }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={`View certificate ${index + 1}`}
                      onClick={() => {
                        certificateApi?.scrollTo(index);
                      }}
                      className={`rounded-full transition-all duration-300 ${
                        selectedCertificateIndex === index
                          ? "h-[9px] w-[25px] bg-[#FF2A62]"
                          : "h-[9px] w-[9px] bg-[#C8C8C8] hover:bg-[#999999]"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Certificate Text Content */}

            <div className="text-center lg:text-left">
              <h2 className="text-[31px] font-bold leading-[0.95] tracking-[-0.025em] text-[#17469B] sm:text-[37px] lg:text-[39px]">
                Get a DBA Completion
                <br className="hidden sm:block" /> Certificate with PwC Board
                <br className="hidden sm:block" /> Advisory
              </h2>

              <p className="mx-auto mt-6 max-w-[575px] text-[14px] font-normal leading-[1.3] text-[#171717] sm:text-[15px] lg:mx-0">
                Rushford offers a PwC Directorship &amp; Board Advisory
                Certificate that helps professionals prepare for top board-level
                roles. In partnership with PwC India, it teaches strategic
                thinking, handling stakeholders, governance, and compliance
                through live classes, real-world practice, and expert guidance,
                building confidence to succeed in a business career.
              </p>

              <button
                type="button"
                onClick={openDegreeForm}
                className="mt-5 inline-flex min-h-[39px] cursor-pointer items-center justify-center gap-1 rounded-[5px] bg-[#FF2A62] px-5 py-2 text-[14px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E82058] hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#FF2A62]/25 sm:text-[15px]"
              >
                Get Degree
                <ArrowRight size={17} strokeWidth={2.8} />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* =============================================================
          Get Degree Form Modal
      ============================================================== */}

      {activeForm === "degree" && (
        <CustomFormModal title="Get Rushford DBA Degree" onClose={closeForm}>
          <FormWrapper
            title="Get Degree"
            subtitle="Share your details and our academic experts will guide you"
            onClose={closeForm}
            courseOptions={RUSHFORD_COURSE_OPTIONS}
            formNameOverride="Rushford Certificate Get Degree Form"
            sourceOverride="Rushford Certificate Section"
            utmSourceFallback="Rushford Organic"
            utmMediumFallback="Rushford Certificate Get Degree Button"
            submitButtonText="Get Degree"
          />
        </CustomFormModal>
      )}
    </>
  );
}

/*
|--------------------------------------------------------------------------
| Accreditation Card
|--------------------------------------------------------------------------
*/

type AccreditationCardProps = {
  item: AccreditationItem;
};

function AccreditationCard({ item }: AccreditationCardProps) {
  return (
    <article className="flex min-h-[112px] items-center rounded-[11px] border-2 border-[#d1d1d1] bg-white px-4 py-4 sm:px-6">
      {/* Logo */}

      <div className="flex w-[115px] shrink-0 items-center justify-center sm:w-[155px]">
        <Image
          src={getAssetPath(item.image)}
          alt={item.imageAlt}
          width={item.imageWidth ?? 145}
          height={item.imageHeight ?? 75}
          className="max-h-[78px] w-auto max-w-full object-contain"
        />
      </div>

      {/* Text Content */}

      <div className="min-w-0 flex-1 pl-3 sm:pl-5">
        <h3 className="text-[16px] font-extrabold leading-[1.2] text-[#17469B] sm:text-[19px]">
          {item.title}
        </h3>

        <p className="mt-1.5 text-[12px] font-normal leading-[1.25] text-[#3e3e3e] sm:text-[14px]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

/*
|--------------------------------------------------------------------------
| Form Modal
|--------------------------------------------------------------------------
*/

type CustomFormModalProps = {
  title: string;
  children: ReactNode;
  onClose: () => void;
};

function CustomFormModal({ title, children, onClose }: CustomFormModalProps) {
  return (
    <div
      role="presentation"
      onMouseDown={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/65 px-4 py-6 backdrop-blur-sm"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        className="relative max-h-[92vh] w-full max-w-[420px] overflow-y-auto rounded-2xl bg-white p-5 shadow-2xl sm:p-7"
      >
        <button
          type="button"
          aria-label="Close form"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#EAF4FF] text-[#17469B] transition-colors duration-200 hover:bg-[#D7EAFF]"
        >
          <X size={20} strokeWidth={2.3} />
        </button>

        {children}
      </div>
    </div>
  );
}
