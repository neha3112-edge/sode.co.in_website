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
  "SODE | Certifications & Online Degree Courses from IITs, IIMs | DBA & MBA";

const SITE_DESCRIPTION =
  "Certifications & Online Degree Courses from top IITs, IIMs & global universities via SODE. Enroll in our MBA, DBA & executive leadership programs.";

const OG_IMAGE = `${SITE_URL}/assets/images/sode-homepage-og-card-image.png`;

const ORGANIZATION_LOGO = `${SITE_URL}/assets/img/sode_header_logo.png`;

const FAVICON_PATH = "/assets/img/favicon.ico";

/*
  Existing GTM ko preserve kiya gaya hai.
*/
const GTM_ID = "GTM-567GP8S9";

/*
  Existing dono Google Ads IDs preserve kiye hain.
  User ke provided code ka AW-17946162864 bhi included hai.
*/
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
  generator: "Next.js",
  alternates: {
    canonical: "/",
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
        url: FAVICON_PATH,
        type: "image/x-icon",
      },
    ],
    shortcut: FAVICON_PATH,
    apple: [
      {
        url: FAVICON_PATH,
      },
    ],
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title:
      "Certifications & Online Degree Courses from IITs, IIMs | DBA MBA – SODE",
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,

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
      "Learn from Global & India's Most Prestigious Institutions. This institution offers flexible and accessible executive leadership education for working professionals.",

    images: [OG_IMAGE],
  },

  category: "education",

  other: {
    "content-language": "en-IN",
  },
};

/* =========================================================
   VIEWPORT CONFIGURATION
========================================================= */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

/* =========================================================
   WEBSITE SCHEMA
========================================================= */

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${SITE_URL}/#website`,

  name: SITE_NAME,

  alternateName: [
    "SODE Counseling Services",
    "School of Online & Distance Education",
  ],

  url: `${SITE_URL}/`,

  description: SITE_DESCRIPTION,

  inLanguage: "en-IN",

  publisher: {
    "@id": `${SITE_URL}/#organization`,
  },
};

/* =========================================================
   EDUCATIONAL ORGANIZATION SCHEMA
========================================================= */

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "EducationalOrganization",

  "@id": `${SITE_URL}/#organization`,

  name: "SODE",

  alternateName: "School of Online & Distance Education",

  url: `${SITE_URL}/`,

  logo: {
    "@type": "ImageObject",
    url: ORGANIZATION_LOGO,
  },

  image: OG_IMAGE,

  description: SITE_DESCRIPTION,

  address: {
    "@type": "PostalAddress",

    streetAddress: "Unit No. 1, 3rd Floor Vardhman Trade Centre, Nehru Place",

    addressLocality: "New Delhi",

    postalCode: "110019",

    addressCountry: "IN",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },

  sameAs: [
    "https://www.facebook.com/distanceeducationschool/",
    "https://x.com/distance_school",
    "https://www.instagram.com/distanceeducationschool/",
    "https://in.linkedin.com/company/distanceeducationschool",
    "https://www.youtube.com/@distanceeducationschool",
    "https://in.pinterest.com/distanceeducationschoolportal/",
  ],
};

/* =========================================================
   FAQ SCHEMA
========================================================= */

const faqSchema = {
  "@context": "https://schema.org",

  "@type": "FAQPage",

  "@id": `${SITE_URL}/#faq`,

  mainEntity: [
    {
      "@type": "Question",

      name: "Are the degrees and certificates from these programs globally recognised?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. All programs of Top International Global Universities that are offered through SODE are from accredited institutions such as WES-recognised, AACSB-accredited, or approved by British/Swiss/US agencies, ensuring global validity.",
      },
    },

    {
      "@type": "Question",

      name: "What documents are typically required during the application process?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Professionals are required to have a structured document set of 10th and 12th marksheets, Bachelors degree certificate/marksheets, and Master's degree certificate/marksheets. Also, they need to have valid identity proofs, such as an Aadhaar Card and a PAN Card, for verification purposes. Candidates applying for programmes with work experience criteria must also provide an experience letter. A recent passport-size photograph is required to complete the application and enrollment process.",
      },
    },

    {
      "@type": "Question",

      name: "Is there an entrance exam required to enrol in any executive educational programs?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "No, there is no entrance exam required for executive educational programs. Applicants can enrol easily having bachelors and masters degree, and some programs require prior work experience.",
      },
    },

    {
      "@type": "Question",

      name: "Are there any scholarships available for programs listed on SODE?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes, SODE offers flexible financing options where aspirants can enrol with NO cost EMI. As per the course duration, they can easily balance and divide it per month.",
      },
    },

    {
      "@type": "Question",

      name: "Are these degrees valid in India and internationally?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. All university partners listed on SODE include international universities like Golden Gate University, which is WES & AACSB accredited, Rushford Business School is QS 5-star rated, and Edgewood, which holds ACBSP accreditation, making them globally excellent. Indian institutions like IIMs and IITs are government-recognised under UGC norms.",
      },
    },

    {
      "@type": "Question",

      name: "What is the minimum work experience required to enrol in Executive Management Programs & Certification Courses?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "SODE offers a diverse portfolio of executive management programmes and certifications designed to equip professionals with technological skills powered by Data science, AI, and ML needed for upskilling. Most Executive Management Programs and Certification Courses require candidates to have a minimum of 3 years of professional work experience, although eligibility criteria may vary depending on the programme and partnering university.",
      },
    },
  ],
};

/* =========================================================
   ROOT LAYOUT PROPS
========================================================= */

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({ children }: RootLayoutProps) {
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
        {/* =====================================================
            WEBSITE SCHEMA
        ====================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* =====================================================
            EDUCATIONAL ORGANIZATION SCHEMA
        ====================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* =====================================================
            FAQ SCHEMA
        ====================================================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* =====================================================
            FONT AWESOME
        ====================================================== */}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />

        {/* =====================================================
            INTERNATIONAL TELEPHONE INPUT CSS
        ====================================================== */}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/css/intlTelInput.css"
        />

        {/* =====================================================
            SWIPER CSS
        ====================================================== */}

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
          font-[family-name:var(--font-poppins)]
        "
        suppressHydrationWarning
      >
        {/* =====================================================
            GOOGLE TAG MANAGER NOSCRIPT
        ====================================================== */}

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

        {/* =====================================================
            APPLICATION CONTENT
        ====================================================== */}

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

                j.src=
                  'https://www.googletagmanager.com/gtm.js?id='
                  +i+dl;

                f.parentNode.insertBefore(j,f);

              })(window,document,'script','dataLayer','${GTM_ID}');
            `,
          }}
        />

        {/* =====================================================
            GOOGLE TAG / GOOGLE ADS LOADER
        ====================================================== */}

        <Script
          id="google-gtag-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_IDS[1]}`}
          strategy="afterInteractive"
        />

        {/* =====================================================
            GOOGLE ADS CONFIGURATION
        ====================================================== */}

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
            JQUERY
        ====================================================== */}

        <Script
          id="jquery"
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
          strategy="afterInteractive"
        />

        {/* =====================================================
            INTERNATIONAL TELEPHONE INPUT
        ====================================================== */}

        <Script
          id="intl-tel-input"
          src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/intlTelInput.min.js"
          strategy="afterInteractive"
        />

        {/* =====================================================
            INTERNATIONAL TELEPHONE INPUT UTILS
        ====================================================== */}

        <Script
          id="intl-tel-input-utils"
          src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js"
          strategy="afterInteractive"
        />

        {/* =====================================================
            SWIPER
        ====================================================== */}

        <Script
          id="swiper-js"
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        {/* =====================================================
            VERCEL ANALYTICS
        ====================================================== */}

        <Analytics />

        {/* =====================================================
            VERCEL SPEED INSIGHTS
        ====================================================== */}

        <SpeedInsights />
      </body>
    </html>
  );
}
