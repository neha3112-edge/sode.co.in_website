import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sode.co.in"),

  title:
    "IIM Nagpur HRM Post Graduate Certificate | Advanced HR Analytics Course",

  description:
    "IIM Nagpur Advanced HR analytics with HRM post graduate program. 7-month online course. HRM Postgraduate Course Eligibility, Fees, & brochure. HR Advanced Analytics - IIM Nagpur Admissions Open.",

  alternates: {
    canonical: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics",
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
    url: "https://sode.co.in/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics",
    siteName: "SODE",
    locale: "en_IN",
    title:
      "IIM Nagpur HRM Post Graduate Certificate | Advanced HR Analytics Course | SODE",
    description:
      "IIM Nagpur Advanced HR analytics with HRM post graduate program. 7-month online course.",
    images: [
      {
        url: "/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/desktop_banner.webp",
        width: 1200,
        height: 630,
        alt: "IIM Nagpur Post Graduate Certificate Programme in Advanced HR Analytics Course offered through SODE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "IIM Nagpur HRM Post Graduate Certificate | Advanced HR Analytics Course | SODE",

    description:
      "IIM Nagpur Advanced HR analytics with HRM post graduate program. 7-month online course.",

    images: ["/iim-nagpur/post-graduate-certificate-programme-in-advanced-hr-analytics/assets/img/desktop_banner.webp"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Post Graduate Certificate Programme in Advanced HR Analytics",

  description:
    "A comprehensive 7-month professional post graduate certificate program in Advanced HR Analytics from IIM Nagpur. Learn Strategic HR Analytics, Workforce Planning, Talent Analytics, Performance and Attrition Analytics, and modern data visualisation tools like Tableau and R.",

  provider: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Management Nagpur (IIM Nagpur)",
  },

  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    duration: "P7M",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "What are the stages of HR analytics covered in this programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The programme introduces learners to the stages of HR analytics, beginning with HR data collection and preparation, followed by descriptive, predictive, and prescriptive analytics. Participants also learn workforce planning, talent analytics, engagement analysis, attrition prediction, AI-driven HR insights, and business impact measurement through hands-on projects and a capstone.",
      },
    },
    {
      "@type": "Question",
      name: "Is this HRM post graduate certificate program suitable for professionals looking for an HR post graduate diploma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Professionals exploring an HR post graduate diploma or other HRM postgraduate courses can consider this HRM post graduate certificate program if they want specialised expertise in HR analytics.",
      },
    },
    {
      "@type": "Question",
      name: "Does this programme include HR advanced analytics and AI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The curriculum covers HR advanced analytics, including predictive analytics, AI applications in HR, Generative AI tools, workforce planning, ethical AI practices, and advanced strategic insights to help professionals solve complex people management challenges.",
      },
    },
    {
      "@type": "Question",
      name: "What are the learning outcomes of HR analytics course from IIM Nagpur?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The advantages and disadvantages of HR analytics depend on how organisations use workforce data. HR analytics helps improve hiring, employee retention, workforce planning, and performance management through data-driven decisions. However, it also requires quality data, analytical skills, and ethical data usage. This programme equips professionals with AI, predictive analytics, Tableau, and Excel to overcome these challenges and make strategic HR decisions.",
      },
    },
  ],
};

export default function IIMNLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
