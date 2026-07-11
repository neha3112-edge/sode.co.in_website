import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUniversityData, universityIds } from "@/lib/universities-data";
import UniversityHero from "./components/UniversityHero";
import UniversityLeadForm from "./components/UniversityLeadForm";
import UniversityStats from "./components/UniversityStats";
import UniversityHighlights from "./components/UniversityHighlights";
import UniversityFaq from "./components/UniversityFaq";

interface PageProps {
  params: Promise<{ university: string }>;
}

export async function generateStaticParams() {
  return universityIds.map((id) => ({
    university: id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const data = getUniversityData(resolvedParams.university);

  if (!data) {
    return {};
  }

  return {
    metadataBase: new URL("https://sode.co.in"),
    title: data.metaTitle,
    description: data.metaDesc,
    alternates: {
      canonical: `https://sode.co.in/${resolvedParams.university}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDesc,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.metaTitle,
      description: data.metaDesc,
      images: [data.image],
    },
  };
}

export default async function UniversityPage({ params }: PageProps) {
  const resolvedParams = await params;
  const data = getUniversityData(resolvedParams.university);

  if (!data) {
    notFound();
  }

  // Course structured schema for search snippet enhancement
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${data.name} Online Programs`,
    "description": data.metaDesc,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "SODE",
      "sameAs": "https://sode.co.in"
    },
    "hasCourseInstance": data.coursesBullets.map((courseName) => ({
      "@type": "CourseInstance",
      "courseMode": "Online",
      "name": courseName
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {data.layoutOrder.map((section) => {
        switch (section) {
          case "hero":
            return <UniversityHero key="hero" data={data} />;
          case "stats":
            return <UniversityStats key="stats" data={data} />;
          case "highlights":
            return <UniversityHighlights key="highlights" data={data} />;
          case "lead-form":
            return <UniversityLeadForm key="lead-form" data={data} />;
          case "faq":
            return <UniversityFaq key="faq" data={data} />;
          default:
            return null;
        }
      })}
    </>
  );
}
