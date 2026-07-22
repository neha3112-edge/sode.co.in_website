import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import { Anton, Italianno, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
  weight: "400",
});

const italianno = Italianno({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-italianno",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sode.co.in"),

  title:
    "IIM Kozhikode HRM Course | IIM Kozhikode HR Analytics & Online HR Courses",

  description:
    "IIM Kozhikode HRM program and IIM Kozhikode HRM course in HR Analytics. Explore IIM Kozhikode online HR courses, IIM Kozhikode HR analytics fees, eligibility, certification details, and IIM Kozhikode HRM program admission process.",

  alternates: {
    canonical: "/iimk/ai-strategic-course",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://sode.co.in/iimk/ai-strategic-course",
    siteName: "SODE",
    locale: "en_IN",
    title:
      "IIM Kozhikode HRM Course | IIM Kozhikode HR Analytics & Online HR Courses | SODE",
    description:
      "IIM Kozhikode HRM program and IIM Kozhikode HRM course in HR Analytics. Explore IIM Kozhikode online HR courses, IIM Kozhikode HR analytics fees, eligibility, certification details, and IIM Kozhikode HRM program admission process.",
    images: [
      {
        url: "/assets/images/sode-iim-og-card-image.png",
        width: 1200,
        height: 630,
        alt: "IIM Kozhikode Online Courses offered through SODE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "IIM Kozhikode HRM Course | IIM Kozhikode HR Analytics & Online HR Courses | SODE",

    description:
      "IIM Kozhikode HRM program and IIM Kozhikode HRM course in HR Analytics. Explore IIM Kozhikode online HR courses, IIM Kozhikode HR analytics fees, eligibility, certification details, and IIM Kozhikode HRM program admission process.",

    images: ["/assets/images/sode-iim-og-card-image.png"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "HRM Analytics Online Certification",

  description:
    "IIM Kozhikode HRM program and IIM Kozhikode HRM course in HR Analytics. Explore IIM Kozhikode online HR courses, IIM Kozhikode HR analytics fees, eligibility, certification details, and IIM Kozhikode HRM program admission process.",

  provider: {
    "@type": "CollegeOrUniversity",
    name: "IIM Kozhikode",
  },

  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    duration: "P6M",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is the duration of the IIM Kozhikode HR Analytics Course?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "The IIM Kozhikode HR Analytics Course spans 6 months and comprises live classes, industry projects, and hands-on learning with tools such as Power BI, Tableau, and Excel.",
      },
    },

    {
      "@type": "Question",

      name: "Is the IIM Kozhikode HRM Online Course suitable for working professionals?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes, the IIM Kozhikode HRM Online Courses are designed for flexibility, making them ideal for professionals who want to balance work while upgrading their skills.",
      },
    },

    {
      "@type": "Question",
      name: "What certifications will I receive upon completing the program?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Learners receive a recognized certification from IIM Kozhikode, along with a Power BI certification, making it one of the most valuable certification courses offered by IIM Kozhikode.",
      },
    },

    {
      "@type": "Question",

      name: "What key skills are taught in HR Analytics IIM Kozhikode programs?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "The program covers strategic HR management, workforce planning, employee retention strategies, talent analytics, and people analytics, helping learners build practical expertise for career growth.",
      },
    },
  ],
};

type IIMKLayoutProps = {
  children: ReactNode;
};

export default function IIMKLayout({ children }: IIMKLayoutProps) {
  return (
    <>
      {/* Google Ads global tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17946162864"
        strategy="afterInteractive"
      />

      <Script id="google-ads-iimk" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];

          function gtag() {
            window.dataLayer.push(arguments);
          }

          gtag("js", new Date());
          gtag("config", "AW-17946162864");
        `}
      </Script>

      {/* Course structured data */}
      <Script
        id="iimk-course-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      {/* FAQ structured data */}
      <Script
        id="iimk-faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <div
        className={`
          ${montserrat.className}
          ${montserrat.variable}
          ${anton.variable}
          ${italianno.variable}
          iimk-layout
        `}
      >
        {children}
      </div>
    </>
  );
}
