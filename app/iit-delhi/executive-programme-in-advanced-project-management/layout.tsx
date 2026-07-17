import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sode.co.in"),

  title:
    "Project Management Professional Certificate From IIT Delhi | Executive Programme in Advanced Project Management",

  description:
    "Get admission in Project Management Professional Certificate (IIT Delhi). 7-month executive program in advanced project management (Online) details. PMP Project Management Course Online by IIT Delhi. EP in APM Course | QS And NIRF Ranked.",

  alternates: {
    canonical: "/iit-delhi/executive-programme-in-advanced-project-management",
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
    url: "https://sode.co.in/iit-delhi/executive-programme-in-advanced-project-management",
    siteName: "SODE",
    locale: "en_IN",
    title:
      "Project Management Professional Certificate From IIT Delhi | Executive Programme in Advanced Project Management | SODE",
    description:
      "Get admission in Project Management Professional Certificate (IIT Delhi). 7-month executive program in advanced project management (Online) details. PMP Project Management Course Online by IIT Delhi.",
    images: [
      {
        url: "/iit-delhi/executive-programme-in-advanced-project-management/assets/img/IIT Delhi Desktop.webp",
        width: 1200,
        height: 630,
        alt: "IIT Delhi Executive Programme in Advanced Project Management Course offered through SODE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Project Management Professional Certificate From IIT Delhi | SODE",

    description:
      "Get admission in Project Management Professional Certificate (IIT Delhi). 7-month executive program in advanced project management (Online) details.",

    images: ["/iit-delhi/executive-programme-in-advanced-project-management/assets/img/IIT Delhi Desktop.webp"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Executive Programme in Advanced Project Management",

  description:
    "A comprehensive 7-month professional certificate program in Advanced Project Management from CEP, IIT Delhi. Learn Strategic Project Management, Project Planning, Risk & Resource Management, Agile, and modern project tools.",

  provider: {
    "@type": "CollegeOrUniversity",
    name: "Continuing Education Programme (CEP), IIT Delhi",
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
      name: "Is this project management certificate PMP suitable for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It is designed for both aspiring and experienced project management professionals.",
      },
    },
    {
      "@type": "Question",
      name: "Why is this one of the best project management certificate online programmes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It offers live online classes, hands-on learning, Harvard case studies, and an IIT Delhi CEP certificate.",
      },
    },
    {
      "@type": "Question",
      name: "Is this useful before pursuing an associate in project management certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. It builds strong project management fundamentals and practical skills. Even 7 million project managers are required in India by 2027, so it holds value and relevance in today's job market.",
      },
    },
    {
      "@type": "Question",
      name: "Is this project management course conducted live online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The programme is delivered through live online sessions every Sunday, making it flexible for working professionals.",
      },
    },
    {
      "@type": "Question",
      name: "What will I gain from this project management course and certification?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Learners develop practical skills in planning, Agile, risk management, leadership, and project execution, along with an IIT Delhi CEP certificate.",
      },
    },
  ],
};

export default function IITDLayout({
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
