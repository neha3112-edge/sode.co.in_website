// app/layout.tsx

import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { Newsreader, Playfair_Display, Poppins } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

/* =========================================================
   WEBSITE CONFIGURATION
========================================================= */

const SITE_NAME = "SODE";
const SITE_URL = "https://sode.co.in";

const SITE_TITLE =
  "SODE: Certifications & Online Degree Courses from IITs, IIMs | DBA MBA";

const SITE_DESCRIPTION =
  "Learn from global and India's most prestigious institutions. SODE offers flexible and accessible MBA, DBA, certification and executive leadership programs for working professionals preparing for C-suite roles.";

const OG_IMAGE = "https://sode.co.in/wp-content/uploads/logo_1200x630.png";

const GTM_ID = "GTM-567GP8S9";

const GOOGLE_ADS_IDS = ["AW-17917271919", "AW-17946162864"];

/* =========================================================
   GOOGLE FONTS
========================================================= */

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-newsreader",
  display: "swap",
});

/* =========================================================
   NEXT.JS SEO METADATA
========================================================= */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  authors: [
    {
      name: "SODE",
      url: SITE_URL,
    },
  ],

  creator: "SODE",
  publisher: "SODE",

  keywords: [
    "Certifications and Online Degree Courses",
    "Online MBA",
    "Online DBA",
    "Executive MBA",
    "Executive DBA",
    "Online Degree Courses",
    "IIT Online Courses",
    "IIM Online Courses",
    "Doctor of Business Administration",
    "MBA for Working Professionals",
    "DBA for Working Professionals",
    "Executive Leadership Programs",
    "Online Certification Courses",
    "SODE",
    "SODE Counseling Services",
  ],

  alternates: {
    canonical: "/",
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
        url: "/assets/img/favicon.ico",
        type: "image/x-icon",
      },
    ],
    shortcut: "/assets/img/favicon.ico",
  },

  openGraph: {
    title: "SODE: Certifications & Online Degree Courses from IITs, IIMs",
    description:
      "Learn from global and India's most prestigious institutions. Explore flexible MBA, DBA, certification and executive leadership programs for working professionals.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "SODE Certifications and Online Degree Courses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SODE: Certifications & Online Degree Courses from IITs, IIMs",
    description:
      "Learn from global and India's most prestigious institutions. Explore flexible MBA, DBA and executive leadership programs.",
    images: [OG_IMAGE],
  },

  category: "education",
};

/* =========================================================
   VIEWPORT CONFIGURATION
========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* =========================================================
   SCHEMA.ORG STRUCTURED DATA
========================================================= */

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: "SODE Counseling Services",
  url: `${SITE_URL}/`,
  description: SITE_DESCRIPTION,
  inLanguage: "en-IN",
  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "@id": `${SITE_URL}/#organization`,
  name: "SODE",
  alternateName: "SODE Counseling Services",
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    url: OG_IMAGE,
    width: 1200,
    height: 630,
  },
  description: SITE_DESCRIPTION,
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  provider: [
    {
      "@type": "EducationalOrganization",
      name: "Rushford Business School",
    },
    {
      "@type": "EducationalOrganization",
      name: "Golden Gate University",
    },
    {
      "@type": "EducationalOrganization",
      name: "SSBM Geneva",
    },
    {
      "@type": "EducationalOrganization",
      name: "ESGCI",
    },
  ],
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`
        ${poppins.variable}
        ${playfairDisplay.variable}
        ${newsreader.variable}
      `}
    >
      <head>
        {/* Schema.org Website JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* Schema.org Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* Optional external libraries */}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/css/intlTelInput.css"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>

      <body
        className="
          min-h-screen
          flex
          flex-col
          font-(family-name:--font-poppins)
        "
        suppressHydrationWarning
      >
        {/* Google Tag Manager noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
            title="Google Tag Manager"
          />
        </noscript>

        {children}

        {/* =====================================================
            GOOGLE TAG MANAGER
        ====================================================== */}

        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event: 'gtm.js'
                });

                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';

                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* =====================================================
            GOOGLE ADS / GTAG
            Only one gtag.js loader is needed.
        ====================================================== */}

        <Script
          id="google-gtag-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_IDS[0]}`}
          strategy="afterInteractive"
        />

        <Script
          id="google-ads-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];

              function gtag() {
                dataLayer.push(arguments);
              }

              gtag('js', new Date());

              ${GOOGLE_ADS_IDS.map(
                (googleAdsId) => `gtag('config', '${googleAdsId}');`,
              ).join("\n")}
            `,
          }}
        />

        {/* =====================================================
            OPTIONAL EXTERNAL JAVASCRIPT
        ====================================================== */}

        <Script
          id="jquery"
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
          strategy="afterInteractive"
        />

        <Script
          id="intl-tel-input"
          src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/intlTelInput.min.js"
          strategy="afterInteractive"
        />

        <Script
          id="swiper-js"
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        {/* Vercel monitoring */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
