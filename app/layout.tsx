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
  "Certifications & Online Degree Courses from top IITs, IIMs & global universities via SODE. Enroll in our MBA, DBA & executive leadership programs.";

const OG_IMAGE = `${SITE_URL}/assets/img/sode_header_logo.png`;

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
    "School of Online and Distance Education",
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
    type: "website",

    title:
      "Certifications & Online Degree Courses from IITs, IIMs | DBA MBA – SODE",

    description:
      "Certifications & Online Degree Courses from top IITs, IIMs & global universities via SODE. Enroll in our MBA, DBA & executive leadership programs.",

    url: `${SITE_URL}/`,

    siteName: SITE_NAME,

    locale: "en_IN",

    images: [
      {
        url: OG_IMAGE,
        alt: "SODE Certifications and Online Degree Courses",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Certifications & Online Degree Courses from IITs, IIMs | DBA MBA – SODE",

    description:
      "Certifications & Online Degree Courses from top IITs, IIMs & global universities via SODE. Enroll in our MBA, DBA & executive leadership programs.",

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
    url: `${SITE_URL}/assets/img/sode_header_logo.png`,
  },

  image: `${SITE_URL}/assets/img/sode_header_logo.png`,

  description:
    "Certifications & Online Degree Courses from top IITs, IIMs & global universities via SODE. Enroll in our MBA, DBA & executive leadership programs.",

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
    "https://www.youtube.com/channel/UCw9KLsERm_EzL2js_s7GbLQ/",
    "https://in.pinterest.com/distanceeducationschoolportal/",
  ],

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

        text: "Yes. All programs of Top International Global Universities that are offered through SODE are from accredited institutions such as WES-recognised, AACSB-accredited, or approved by British, Swiss, or US agencies, ensuring global validity.",
      },
    },

    {
      "@type": "Question",

      name: "What documents are typically required during the application process?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Professionals are required to have a structured document set of 10th and 12th marksheets, Bachelor's degree certificate or marksheets, and Master's degree certificate or marksheets. They also need valid identity proofs such as an Aadhaar Card and PAN Card for verification. Candidates applying for programmes with work experience criteria must also provide an experience letter. A recent passport-size photograph is required to complete the application and enrollment process.",
      },
    },

    {
      "@type": "Question",

      name: "Is there an entrance exam required to enrol in any executive educational programs?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "No, there is no entrance exam required for executive educational programs. Applicants can enrol with bachelor's and master's degrees, and some programs may require prior work experience.",
      },
    },

    {
      "@type": "Question",

      name: "Are there any scholarships available for programs listed on SODE?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes, SODE offers flexible financing options where aspirants can enrol with no-cost EMI. Depending on the course duration, candidates can divide the program fee into manageable monthly payments.",
      },
    },

    {
      "@type": "Question",

      name: "Are these degrees valid in India and internationally?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes. University partners listed on SODE include international universities such as Golden Gate University, which is WES and AACSB accredited, Rushford Business School, which is QS 5-star rated, and Edgewood, which holds ACBSP accreditation. Indian institutions such as IIMs and IITs are government-recognised under applicable UGC norms.",
      },
    },

    {
      "@type": "Question",

      name: "What is the minimum work experience required to enrol in Executive Management Programs & Certification Courses?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "SODE offers a diverse portfolio of executive management programmes and certifications designed to equip professionals with technological skills powered by Data Science, AI, and Machine Learning. Most Executive Management Programs and Certification Courses require candidates to have a minimum of 3 years of professional work experience, although eligibility criteria may vary depending on the programme and partnering university.",
      },
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
        {/* Website schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* Educational Organization schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* FAQ schema */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
          }}
        />

        {/* Font Awesome */}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />

        {/* International telephone input CSS */}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/css/intlTelInput.css"
        />

        {/* Swiper CSS */}

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

        {/* Application content */}

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
            GOOGLE ADS
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
            SWIPER
        ====================================================== */}

        <Script
          id="swiper-js"
          src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"
          strategy="afterInteractive"
        />

        {/* =====================================================
            VERCEL MONITORING
        ====================================================== */}

        <Analytics />

        <SpeedInsights />
      </body>
    </html>
  );
}
