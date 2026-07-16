// app/rushford/layout.tsx

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "./rushford.css";
/* =========================================================
   RUSHFORD PAGE CONFIGURATION
========================================================= */

const SITE_NAME = "SODE";
const SITE_URL = "https://sode.co.in";
const PAGE_URL = `${SITE_URL}/rushford`;
const PAGE_TITLE =
  "Rushford Online Courses | SODE";
const PAGE_DESCRIPTION =
  "Rushford online courses. Explore Rushford online masters, certificate courses, online admission details.";
const OG_TITLE =
  "Rushford Online Courses | SODE";
const OG_DESCRIPTION =
  "Explore Rushford online courses. Check course details, eligibility, fees and online admission information.";
const OG_IMAGE = `${SITE_URL}/assets/images/sode-iiitb-og-card-image.png`;
const FAVICON = "/assets/img/sode_new_favicon.png";

/* =========================================================
   MONTSERRAT FONT
========================================================= */

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
  fallback: ["Arial", "sans-serif"],
});

/* =========================================================
   IIIT BANGALORE PAGE METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: FAVICON,
        type: "image/png",
      },
    ],
    shortcut: FAVICON,
    apple: [
      {
        url: FAVICON,
      },
    ],
  },

  openGraph: {
    type: "website",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: PAGE_URL,
    siteName: SITE_NAME,
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "IIIT Bangalore Online Courses offered through SODE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        alt: "IIIT Bangalore Online Courses offered through SODE",
      },
    ],
  },
  category: "education",
  other: {
    "content-language": "en-IN",
  },
};

/* =========================================================
   IIIT BANGALORE COURSES
========================================================= */

const iiitBangaloreCredentials = [
  {
    "@type": "EducationalOccupationalCredential",
    name: "Executive Programme in Generative AI for Leaders",
  },
  {
    "@type": "EducationalOccupationalCredential",
    name: "Executive Post Graduate Certificate Programme in Data Science & AI",
  },

  {
    "@type": "EducationalOccupationalCredential",
    name: "Professional Certificate Programme in Data Science with Generative AI",
  },

  {
    "@type": "EducationalOccupationalCredential",
    name: "Executive Post Graduate Programme in Applied AI and Agentic AI",
  },

  {
    "@type": "EducationalOccupationalCredential",
    name: "Executive Diploma in Machine Learning & Artificial Intelligence",
  },

  {
    "@type": "EducationalOccupationalCredential",

    name: "Chief Technology Officer & AI Leadership Programme",
  },

  {
    "@type": "EducationalOccupationalCredential",

    name: "Master of Science in Machine Learning & Artificial Intelligence",
  },

  {
    "@type": "EducationalOccupationalCredential",

    name: "Master of Science in Data Science with Generative AI",
  },
];

/* =========================================================
   WEB PAGE SCHEMA
========================================================= */

const webPageSchema = {
  "@context": "https://schema.org",

  "@type": "WebPage",

  "@id": `${PAGE_URL}#webpage`,

  url: PAGE_URL,

  name: PAGE_TITLE,

  headline: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  inLanguage: "en-IN",

  primaryImageOfPage: {
    "@type": "ImageObject",

    url: OG_IMAGE,

    width: 1200,

    height: 630,
  },

  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
  },

  about: {
    "@id": `${PAGE_URL}#educational-organization`,
  },
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },

  breadcrumb: {
    "@id": `${PAGE_URL}#breadcrumb`,
  },
};

/* =========================================================
   IIIT BANGALORE EDUCATIONAL ORGANIZATION SCHEMA
========================================================= */

const educationalOrganizationSchema = {
  "@context": "https://schema.org",

  "@type": "EducationalOrganization",

  "@id": `${PAGE_URL}#educational-organization`,

  name: "International Institute of Information Technology Bangalore",

  alternateName: ["IIIT Bangalore", "IIIT-B"],

  url: PAGE_URL,

  description: OG_DESCRIPTION,

  image: {
    "@type": "ImageObject",

    url: OG_IMAGE,

    width: 1200,

    height: 630,
  },

  areaServed: {
    "@type": "Country",

    name: "India",
  },

  hasCredential: iiitBangaloreCredentials,

  subjectOf: {
    "@id": `${PAGE_URL}#webpage`,
  },
};

/* =========================================================
   BREADCRUMB SCHEMA
========================================================= */

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id": `${PAGE_URL}#breadcrumb`,

  itemListElement: [
    {
      "@type": "ListItem",

      position: 1,

      name: "Home",

      item: `${SITE_URL}/`,
    },

    {
      "@type": "ListItem",

      position: 2,

      name: "IIIT Bangalore Online Courses",

      item: PAGE_URL,
    },
  ],
};

/* =========================================================
   FAQ SCHEMA
========================================================= */

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  "@id": `${PAGE_URL}#faq`,

  url: `${PAGE_URL}#faqs`,

  mainEntity: [
    {
      "@type": "Question",

      name: "What are the IIIT Bangalore online courses?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "They are industry-focused online programmes from IIIT Bangalore, designed for working professionals with flexible learning, projects, and recognised certification.",
      },
    },

    {
      "@type": "Question",

      name: "Do IIIT Bangalore certification courses help in career growth?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. These programmes are designed to strengthen practical skills, improve professional credibility, and help learners prepare for career advancement in emerging technology and leadership roles.",
      },
    },
    {
      "@type": "Question",
      name: "Is IIIT Bangalore artificial intelligence taught with practical training?",
      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. The artificial intelligence programmes include hands-on projects, assignments, case studies, tools, and real-world applications so learners can build practical experience.",
      },
    },
    {
      "@type": "Question",
      name: "Do IIIT Bangalore data science programmes include projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Data science programmes typically include practical projects, datasets, analytical exercises, machine learning applications, and capstone-based learning.",
      },
    },

    {
      "@type": "Question",
      name: "Is artificial intelligence included in the CTO programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The CTO and AI leadership programme includes technology leadership and artificial intelligence-focused learning. The exact curriculum, academic collaboration, tools, and modules may vary according to the selected programme structure.",
      },
    },
  ],
};

/* =========================================================
   COMPLETE JSON-LD GRAPH
========================================================= */

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    webPageSchema,

    educationalOrganizationSchema,

    breadcrumbSchema,

    faqSchema,
  ],
};

/* =========================================================
   LAYOUT PROPS TYPE
========================================================= */

type RushfordLayoutProps = Readonly<{
  children: ReactNode;
}>;

/* =========================================================
   RUSHFORD NESTED LAYOUT
========================================================= */

export default function RushfordLayout({ children }: RushfordLayoutProps) {
  return (
    <>
      {/* =====================================================
          RUSHFORD STRUCTURED DATA
      ====================================================== */}

      <script
        id="rushford-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

      {/* =====================================================
          RUSHFORD PAGE CONTENT
      ====================================================== */}

      <div
        className={`
          ${montserrat.variable}
          ${montserrat.className}
          min-h-screen
        `}
      >
        {children}
      </div>
    </>
  );
}
