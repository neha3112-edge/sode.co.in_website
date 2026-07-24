import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";
import "@/app/iim-udaipur/chief-technology-officer-&-ai-leadership-programme/iim-udaipur.css";

const SITE_NAME = "SODE";
const SITE_URL = "https://sode.co.in";
const PAGE_URL = `${SITE_URL}/ssbm`;
const PAGE_TITLE =
  "SSBM Online DBA | SSBM DBA | SSBM Geneva Online DBA Program";
const PAGE_DESCRIPTION =
  "SSBM Online DBA program from SSBM Geneva. SSBM DBA online with 20+ specializations including Finance, Marketing, Data Science, HR, International Business, etc. SSBM Geneva online DBA eligibility, duration, and admission details.";
const OG_TITLE = PAGE_TITLE;
const OG_DESCRIPTION = PAGE_DESCRIPTION;
const OG_IMAGE = `${SITE_URL}/ssbm/assets/img/university.webp`;
const FAVICON = "/ssbm/assets/img/ssbm_favicon.png";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
  fallback: ["Arial", "sans-serif"],
});

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
        alt: "SSBM Online DBA offered through SODE",
      },
    ],
  },
};

type SSBMLayoutProps = {
  children: ReactNode;
};

export default function SSBMLayout({ children }: SSBMLayoutProps) {
  return (
    <div className={`${montserrat.variable} font-sans antialiased`}>
      {children}
    </div>
  );
}
