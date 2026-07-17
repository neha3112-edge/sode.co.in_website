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
    "IIT Madras Applied AI & Deep Learning Course | Advanced Certificate in Applied AI",

  description:
    "Join the 8-month Advanced Certificate in Applied Artificial Intelligence and Deep Learning by IITM Pravartak Technologies Foundation. Learn Python, Machine Learning, Generative AI, LLMs, and MLOps.",

  alternates: {
    canonical: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning",
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
    url: "https://sode.co.in/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning",
    siteName: "SODE",
    locale: "en_IN",
    title:
      "IIT Madras Applied AI & Deep Learning Course | Advanced Certificate in Applied AI | SODE",
    description:
      "Join the 8-month Advanced Certificate in Applied Artificial Intelligence and Deep Learning by IITM Pravartak Technologies Foundation. Learn Python, Machine Learning, Generative AI, LLMs, and MLOps.",
    images: [
      {
        url: "/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/iit madras pravartak Desktop.webp",
        width: 1200,
        height: 630,
        alt: "IIT Madras Pravartak Applied AI & Deep Learning Course offered through SODE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "IIT Madras Applied AI & Deep Learning Course | Advanced Certificate | SODE",

    description:
      "Join the 8-month Advanced Certificate in Applied Artificial Intelligence and Deep Learning by IITM Pravartak Technologies Foundation. Learn Python, Machine Learning, Generative AI, LLMs, and MLOps.",

    images: ["/iit-madras/advanced-certificate-in-applied-artificial-intelligence-and-deep-learning/assets/img/iit madras pravartak Desktop.webp"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Advanced Certificate in Applied Artificial Intelligence and Deep Learning",

  description:
    "A comprehensive 8-month professional certificate program in Applied Artificial Intelligence and Deep Learning from IITM Pravartak Technologies Foundation. Learn Machine Learning, Neural Networks, Generative AI, LLMs, and MLOps.",

  provider: {
    "@type": "CollegeOrUniversity",
    name: "IITM Pravartak Technologies Foundation",
  },

  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    duration: "P8M",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What is the duration of the IIT Madras Applied AI & Deep Learning Course?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "The Advanced Certificate in Applied Artificial Intelligence and Deep Learning spans 8 months and features live online classes, practical project work, and a capstone project.",
      },
    },

    {
      "@type": "Question",

      name: "Is the IIT Madras Applied AI Course suitable for working professionals?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Yes, the program is designed with live online sessions, making it highly flexible and suitable for working professionals looking to transition to or advance in AI and data science roles.",
      },
    },

    {
      "@type": "Question",
      name: "What certifications will I receive upon completing the program?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "Successful participants receive a prestigious Advanced Certificate of Completion from the IITM Pravartak Technologies Foundation.",
      },
    },

    {
      "@type": "Question",

      name: "What key skills are taught in the IIT Madras Applied AI & Deep Learning program?",

      acceptedAnswer: {
        "@type": "Answer",

        text: "The program covers Python, Probability and Statistics, Machine Learning, Deep Learning, Generative AI (LLMs & Prompt Engineering), MLOps, LLMOps, and Cybersecurity in AI.",
      },
    },
  ],
};

type IITMLayoutProps = {
  children: ReactNode;
};

export default function IITMLayout({ children }: IITMLayoutProps) {
  return (
    <>
      {/* Google Ads global tag */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17946162864"
        strategy="afterInteractive"
      />

      <Script id="google-ads-iitm" strategy="afterInteractive">
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
        id="iitm-course-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />

      {/* FAQ structured data */}
      <Script
        id="iitm-faq-schema"
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
          iitm-layout
        `}
      >
        {children}
      </div>
    </>
  );
}
