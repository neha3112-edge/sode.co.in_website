import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "@/app/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/iim-udaipur.css"; // Reuse existing css structure or common styles

/* =========================================================
   GOLDEN GATE UNIVERSITY PAGE CONFIGURATION
========================================================= */

const SITE_NAME = "SODE";
const SITE_URL = "https://sode.co.in";
const PAGE_URL = `${SITE_URL}/ggu`;
const PAGE_TITLE =
  "Golden Gate University Online DBA | Golden Gate University Online MBA & Programs";
const PAGE_DESCRIPTION =
  "Golden Gate University Online DBA and Golden Gate University Online MBA programs. Golden Gate University online degrees with DBA specializations in Finance, Marketing, Leadership, Business Analytics, and Generative AI. Golden Gate University online DBA fees, MBA fees, eligibility, and admission details.";
const OG_TITLE = "Golden Gate University Online DBA | Golden Gate University Online MBA & Programs";
const OG_DESCRIPTION = PAGE_DESCRIPTION;
const OG_IMAGE = `${SITE_URL}/ggu/assets/img/university.webp`;
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
   GOLDEN GATE UNIVERSITY METADATA
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
        alt: "Golden Gate University Online Programs offered through SODE",
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
        alt: "Golden Gate University Online Programs offered through SODE",
      },
    ],
  },
  category: "education",
  other: {
    "content-language": "en-IN",
  },
};

type GGULayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function GGULayout({ children }: GGULayoutProps) {
  return (
    <div
      className={`
        ${montserrat.variable}
        ${montserrat.className}
        min-h-screen
      `}
    >
      {children}
    </div>
  );
}
