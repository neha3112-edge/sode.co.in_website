import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sode.co.in"),

  title:
    "Sales and Marketing Course | IIM Indore Executive Program in Sales & Marketing - EPSM Online Certificate",

  description:
    "Executive Program in Sales and Marketing Course from IIM Indore. Best Sales and Marketing Course Online in 12 Months - EPSM Certificate. Get info. Eligibility, Fees, Syllabus, & brochure. Certificate for sales and marketing professionals.",

  alternates: {
    canonical: "/iim-indore/executive-programme-in-sales-and-marketing",
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
    url: "https://sode.co.in/iim-indore/executive-programme-in-sales-and-marketing",
    siteName: "SODE",
    locale: "en_IN",
    title:
      "Sales and Marketing Course | IIM Indore Executive Program in Sales & Marketing | SODE",
    description:
      "Executive Program in Sales and Marketing Course from IIM Indore. Best Sales and Marketing Course Online in 12 Months - EPSM Certificate.",
    images: [
      {
        url: "/iim-indore/executive-programme-in-sales-and-marketing/assets/img/IIM Indore Desktop.png",
        width: 1200,
        height: 630,
        alt: "IIM Indore Executive Programme in Sales and Marketing Course offered through SODE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Sales and Marketing Course | IIM Indore Executive Program in Sales & Marketing | SODE",

    description:
      "Executive Program in Sales and Marketing Course from IIM Indore. Best Sales and Marketing Course Online in 12 Months.",

    images: ["/iim-indore/executive-programme-in-sales-and-marketing/assets/img/IIM Indore Desktop.png"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Executive Programme in Sales and Marketing",

  description:
    "A comprehensive 12-month professional certificate program in Sales and Marketing from IIM Indore. Learn Sales & Marketing Strategy, Customer Behaviour, Digital Marketing & AI, and modern marketing analytics tools.",

  provider: {
    "@type": "CollegeOrUniversity",
    name: "Indian Institute of Management Indore (IIM Indore)",
  },

  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    duration: "P12M",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",

  mainEntity: [
    {
      "@type": "Question",
      name: "Is this programme suitable for professionals looking to enhance their sales and marketing degree or professional qualifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The programme is designed for working professionals in sales and marketing roles, as well as sales professionals looking to strengthen their marketing expertise and marketing professionals seeking a better understanding of sales.",
      },
    },
    {
      "@type": "Question",
      name: "What are the key highlights of this sales and marketing course from IIM Indore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The programme is delivered over 12 months through live online sessions and includes a mandatory 3-day on-campus module, making it suitable for experienced professionals.",
      },
    },
    {
      "@type": "Question",
      name: "In which sectors or industries is this certificate for sales and marketing program relevant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The certificate for sales and marketing equips learners with practical knowledge in sales strategy, customer engagement, market analysis, and business growth, making it valuable in sectors such as Information Technology, Pharmaceuticals, Sales & Marketing, Banking & Financial Services, Food & Beverages, Healthcare, Chemicals, Automotive, Business Development, and Electrical & Electronics.",
      },
    },
    {
      "@type": "Question",
      name: "Which course is best for sales and marketing professionals looking to upskill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you're looking to build expertise in modern sales, digital marketing, business analytics, AI-enabled marketing, and customer-centric strategies, the Executive Programme in Sales and Marketing (EPSM) offers a comprehensive executive learning experience.",
      },
    },
    {
      "@type": "Question",
      name: "Is EPSM a sales and marketing diploma?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. This is not a sales and marketing diploma. It is an Executive Programme in Sales and Marketing by IIM Indore. Upon successful completion, participants receive a Certificate of Completion from IIM Indore and become eligible for Executive Education Alumni Status.",
      },
    },
  ],
};

export default function IIMILayout({
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
