import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "./iim-udaipur.css";

/* =========================================================
   IIM UDAIPUR PAGE CONFIGURATION
========================================================= */

const SITE_NAME = "SODE";
const SITE_URL = "https://sode.co.in";
const PAGE_URL = `${SITE_URL}/iim-udaipur/chief-technology-officer-&-ai-leadership-programme`;
const PAGE_TITLE =
  "IIM Udaipur Chief Technology Officer & AI Leadership Programme | IIM Udaipur Online Courses & PG Programs";
const PAGE_DESCRIPTION =
  "IIM Udaipur Chief Technology Officer & AI Leadership Programme. Explore technology strategy, AI leadership, eligibility, admission, and course details.";
const OG_TITLE =
  "IIM Udaipur Chief Technology Officer & AI Leadership Programme";
const OG_DESCRIPTION =
  "Explore IIM Udaipur online courses and Chief Technology Officer & AI Leadership Programme. Check course details, eligibility, fees and online admission information.";
const OG_IMAGE = `${SITE_URL}/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/img/IIMU.png`;
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
   IIM UDAIPUR PAGE METADATA
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
        alt: "IIM Udaipur Online Courses offered through SODE",
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
        alt: "IIM Udaipur Online Courses offered through SODE",
      },
    ],
  },
  category: "education",
  other: {
    "content-language": "en-IN",
  },
};

/* =========================================================
   IIM UDAIPUR CREDENTIALS
========================================================= */

const iimUdaipurCredentials = [
  {
    "@type": "EducationalOccupationalCredential",
    name: "Chief Technology Officer & AI Leadership Programme",
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
   IIM UDAIPUR EDUCATIONAL ORGANIZATION SCHEMA
========================================================= */

const educationalOrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${PAGE_URL}#educational-organization`,
  name: "Indian Institute of Management Udaipur",
  alternateName: ["IIM Udaipur", "IIM-U"],
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
  hasCredential: iimUdaipurCredentials,
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
      name: "IIM Udaipur Online Courses",
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
      name: "What is the IIM Udaipur CTO & AI Leadership Programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is an industry-focused online programme from IIM Udaipur, designed for tech leaders to build AI transformation strategies, product innovation capabilities, and technical leadership skills.",
      },
    },
    {
      "@type": "Question",
      name: "Does this IIM Udaipur CTO programme include campus immersion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, it typically includes campus immersion opportunities where learners can network, interact with IIM Udaipur faculty, and participate in leadership workshops.",
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

type IIMULayoutProps = Readonly<{
  children: ReactNode;
}>;

/* =========================================================
   IIM UDAIPUR NESTED LAYOUT
========================================================= */

export default function IIMULayout({ children }: IIMULayoutProps) {
  return (
    <>
      <script
        id="iim-udaipur-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />

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
