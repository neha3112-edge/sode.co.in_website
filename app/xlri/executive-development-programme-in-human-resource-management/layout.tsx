import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sode.co.in"),

  title:
    "XLRI Executive Development Programme in Human Resource Management",

  description:
    "XLRI executive development programme in human resource management. 7-month online HRM post graduate course. Eligibility, fees, syllabus & brochure. XLRI Admissions Open.",

  alternates: {
    canonical: "/xlri/executive-development-programme-in-human-resource-management",
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
    url: "https://sode.co.in/xlri/executive-development-programme-in-human-resource-management",
    siteName: "SODE",
    locale: "en_IN",
    title:
      "XLRI Executive Development Programme in Human Resource Management | SODE",
    description:
      "XLRI executive development programme in human resource management. 7-month online HRM post graduate course.",
    images: [
      {
        url: "/xlri/executive-development-programme-in-human-resource-management/assets/img/xlri jamshedpur Desktop .webp",
        width: 1200,
        height: 630,
        alt: "XLRI Jamshedpur Executive Development Programme in Human Resource Management Course offered through SODE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "XLRI Executive Development Programme in Human Resource Management | SODE",

    description:
      "XLRI executive development programme in human resource management. 7-month online HRM post graduate course.",

    images: ["/xlri/executive-development-programme-in-human-resource-management/assets/img/xlri jamshedpur Desktop .webp"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Executive Development Programme in Human Resource Management",

  description:
    "Advance your HR expertise with executive management programs from XLRI Jamshedpur. Jointly offered with XLEAD in collaboration with SHRM India, aligned with the SHRM Global Competency Framework.",

  provider: {
    "@type": "CollegeOrUniversity",
    name: "XLRI Jamshedpur",
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
      name: "How are participants evaluated during the programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Participants are evaluated through quizzes, assignments, projects, case studies, and a final online assessment. Successful completion of the assessments and attendance requirements is necessary to earn the Certificate of Completion.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I do not pass the final assessment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Participants who do not clear the final assessment can reappear in the next programme batch by paying the prescribed re-examination fee. Those who meet the attendance requirement but do not pass the assessments receive a Certificate of Participation.",
      },
    },
    {
      "@type": "Question",
      name: "Does the programme include any AI learning components?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Along with the HR curriculum, participants receive complimentary access to asynchronous Generative AI modules, helping them understand emerging technologies relevant to the modern workplace.",
      },
    },
    {
      "@type": "Question",
      name: "Does the programme prepare learners for global HR certifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The curriculum is aligned with the SHRM Global Competency Framework and prepares participants for globally recognised SHRM-CP and SHRM-SCP certifications. Learners can also earn up to 20 SHRM Professional Development Credits (PDCs) upon successful completion.",
      },
    },
    {
      "@type": "Question",
      name: "What learning outcomes can participants expect after completing the programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Participants will learn to align HR strategies with business goals, manage recruitment and performance systems, interpret labour laws, leverage HR analytics for data-driven decision-making, and lead employee engagement and organisational change initiatives.",
      },
    },
  ],
};

export default function XLRIStoreLayout({
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
