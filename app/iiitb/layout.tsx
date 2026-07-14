// app/iiitb/layout.tsx

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";

/* =========================================================
   IIIT BANGALORE CONFIGURATION
========================================================= */

const SITE_URL = "https://sode.co.in";

const PAGE_URL = `${SITE_URL}/iiitb`;

const PAGE_TITLE =
  "IIIT Bangalore Online Courses | AI, Data Science & PG Programs";

const PAGE_DESCRIPTION =
  "Explore IIIT Bangalore online courses and PG programs in Artificial Intelligence, Data Science and Machine Learning. Check course details, eligibility, fees and online admission information.";

const OG_IMAGE = `${SITE_URL}/assets/images/iiitb-og-image.webp`;

/* =========================================================
   MONTSERRAT FONT
========================================================= */

const montserrat = Montserrat({
  subsets: ["latin"],

  /*
   * Old website also used Montserrat font.
   * 300 is included because some existing sections may use it.
   */
  weight: ["300", "400", "500", "600", "700", "800", "900"],

  display: "swap",

  variable: "--font-montserrat",

  fallback: ["Arial", "sans-serif"],
});

/* =========================================================
   IIIT BANGALORE PAGE METADATA
========================================================= */

export const metadata: Metadata = {
  /*
   * absolute prevents the root layout title template
   * from adding another "| SODE" automatically.
   */
  title: {
    absolute: PAGE_TITLE,
  },

  description: PAGE_DESCRIPTION,

  applicationName: "SODE",

  keywords: [
    "IIIT Bangalore Online Courses",
    "IIIT Bangalore Online AI Course",
    "IIIT Bangalore Data Science Course",
    "IIIT Bangalore Machine Learning Course",
    "IIIT Bangalore Online PG Courses",
    "IIIT Bangalore Certificate Courses",
    "IIIT Bangalore Online Masters",
    "IIIT Bangalore Online Admission",
    "IIIT Bangalore Course Fees",
    "IIITB Online Courses",
    "Online AI Course",
    "Online Data Science Course",
    "Online Machine Learning Course",
    "SODE",
  ],

  authors: [
    {
      name: "SODE",
      url: SITE_URL,
    },
  ],

  creator: "SODE",

  publisher: "SODE",

  alternates: {
    canonical: PAGE_URL,
  },

  robots: {
    index: true,
    follow: true,

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
        url: "/assets/img/sode_new_favicon.png",
        type: "image/png",
      },
    ],

    shortcut: "/assets/img/sode_new_favicon.png",

    apple: "/assets/img/sode_new_favicon.png",
  },

  openGraph: {
    title: PAGE_TITLE,

    description: PAGE_DESCRIPTION,

    url: PAGE_URL,

    siteName: "SODE",

    type: "website",

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

    title: PAGE_TITLE,

    description: PAGE_DESCRIPTION,

    images: [OG_IMAGE],
  },

  category: "education",
};

/* =========================================================
   STRUCTURED DATA
========================================================= */

const webPageSchema = {
  "@context": "https://schema.org",

  "@type": "WebPage",

  "@id": `${PAGE_URL}/#webpage`,

  url: PAGE_URL,

  name: PAGE_TITLE,

  description: PAGE_DESCRIPTION,

  inLanguage: "en-IN",

  isPartOf: {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "SODE",
    url: SITE_URL,
  },

  about: {
    "@type": "EducationalOrganization",
    name: "International Institute of Information Technology Bangalore",
    alternateName: "IIIT Bangalore",
  },

  publisher: {
    "@type": "EducationalOrganization",
    name: "SODE",
    url: SITE_URL,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE_URL,
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
   TYPES
========================================================= */

type IIITBLayoutProps = Readonly<{
  children: ReactNode;
}>;

/* =========================================================
   NESTED LAYOUT
========================================================= */

export default function IIITBLayout({ children }: IIITBLayoutProps) {
  return (
    <div
      className={`${montserrat.variable} ${montserrat.className} min-h-screen`}
    >
      {/* IIIT Bangalore WebPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Breadcrumb schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, "\\u003c"),
        }}
      />

      {children}
    </div>
  );
}
