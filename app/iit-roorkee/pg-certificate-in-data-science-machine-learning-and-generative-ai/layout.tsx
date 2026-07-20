import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sode.co.in"),

  title:
    "PG Certificate in Data Science, Machine Learning & Generative AI | IIT Roorkee",

  description:
    "Master Data Science, Machine Learning & Generative AI with a PG Certificate from IIT Roorkee. 8-month online weekend learning program by CEC, IIT Roorkee. Admissions Open.",

  alternates: {
    canonical: "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai",
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
    url: "https://sode.co.in/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai",
    siteName: "SODE",
    locale: "en_IN",
    title:
      "PG Certificate in Data Science, Machine Learning & Generative AI | IIT Roorkee | SODE",
    description:
      "Master Data Science, Machine Learning & Generative AI with a PG Certificate from IIT Roorkee. 8-month online weekend learning program by CEC, IIT Roorkee.",
    images: [
      {
        url: "/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai/assets/img/Desktop banner.webp",
        width: 1200,
        height: 630,
        alt: "IIT Roorkee PG Certificate in Data Science, Machine Learning & Generative AI Course offered through SODE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "PG Certificate in Data Science, Machine Learning & Generative AI | IIT Roorkee | SODE",

    description:
      "Master Data Science, Machine Learning & Generative AI with a PG Certificate from IIT Roorkee. 8-month online weekend learning program by CEC, IIT Roorkee.",

    images: ["/iit-roorkee/pg-certificate-in-data-science-machine-learning-and-generative-ai/assets/img/Desktop banner.webp"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "PG Certificate in Data Science, Machine Learning & Generative AI",

  description:
    "Master in-demand AI technologies through this data science and machine learning course offered by CEC, IIT Roorkee. Gain practical expertise in Python, Machine Learning, Deep Learning, MLOps, and Generative AI.",

  provider: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Technology Roorkee (IIT Roorkee)",
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
      name: "What is the data science course duration and fees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The programme duration is 8 months. The total fee structure is around 2 lakhs (approx). The fee can be paid in installments as specified in the brochure.",
      },
    },
    {
      "@type": "Question",
      name: "Is this a PG diploma in data science and machine learning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It is a Post Graduate Certificate offered by IIT Roorkee. Learners who meet the programme requirements receive a Certificate of Completion from IIT Roorkee.",
      },
    },
    {
      "@type": "Question",
      name: "Is data science and machine learning same in this programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This programme covers both Data Science and Machine Learning as part of a comprehensive curriculum. Learners build foundations in Data Science before progressing to Machine Learning, Deep Learning, MLOps, and Generative AI, enabling them to develop end-to-end AI solutions.",
      },
    },
    {
      "@type": "Question",
      name: "What is the data scientist course duration at IIT Roorkee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The data scientist course duration for this programme is less than a year (8 months) and is delivered through live online sessions with an optional 5-day campus immersion.",
      },
    },
    {
      "@type": "Question",
      name: "What career roles can I pursue after completing this programme?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The programme prepares learners for roles such as Data Scientist, Machine Learning Engineer, AI Engineer, Data Engineer, and MLOps Engineer.",
      },
    },
  ],
};

export default function IITRLayout({ children }: { children: React.ReactNode }) {
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
