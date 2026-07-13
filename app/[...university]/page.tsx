import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getEnrichedUniversityData, universityIds } from "@/lib/universities-data";
import UniversityLandingPageClient from "./components/UniversityLandingPageClient";

interface PageProps {
  params: Promise<{ university: string[] }>;
}

export async function generateStaticParams() {
  return universityIds.map((id) => ({
    university: id.split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const universitySlug = resolvedParams.university.join("/");
  const data = getEnrichedUniversityData(universitySlug);

  if (!data) {
    return {};
  }

  return {
    metadataBase: new URL("https://sode.co.in"),
    title: data.metaTitle,
    description: data.metaDesc,
    alternates: {
      canonical: `https://sode.co.in/${universitySlug}`,
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
  const universitySlug = resolvedParams.university.join("/");
  const data = getEnrichedUniversityData(universitySlug);

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
      <UniversityLandingPageClient data={data} />
    </>
  );
}
