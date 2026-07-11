import { ReactNode } from "react";
import UniversityHeader from "./components/UniversityHeader";
import UniversityFooter from "./components/UniversityFooter";
import { getUniversityData } from "@/lib/universities-data";
import { notFound } from "next/navigation";
import "./university.css";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ university: string }>;
}

export default async function UniversityLayout({ children, params }: LayoutProps) {
  const resolvedParams = await params;
  const data = getUniversityData(resolvedParams.university);

  if (!data) {
    notFound();
  }

  const themeStyles = {
    "--primary-color": data.theme.primary,
    "--secondary-color": data.theme.secondary,
    "--dark-bg": data.theme.darkBg,
  } as React.CSSProperties;

  return (
    <div className="uni-page" style={themeStyles}>
      <UniversityHeader data={data} />
      <main className="flex-1">{children}</main>
      <UniversityFooter data={data} />
    </div>
  );
}
