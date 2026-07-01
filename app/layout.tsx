import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/ui/Header";
import { Footer } from "@/sections/Footer";
import FloatingButton from "@/components/ui/FloatingButton";
import GlobalCTA from "@/components/ui/GlobalCTA";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Certifications & Online Degree Courses from IITs, IIMs | DBA MBA – SODE",
  description:
    "Certifications & Online Degree Courses from top IITs, IIMs & global universities via SODE. Enroll in our MBA, DBA & executive leadership programs.",
  keywords: [
    "Certifications and Online Degree Courses"
  ],
  openGraph: {
    title: "Certifications & Online Degree Courses from IITs, IIMs | DBA MBA – SODE",
    description:
      "Certifications & Online Degree Courses from top IITs, IIMs & global universities via SODE. Enroll in our MBA, DBA & executive leadership programs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className} suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="flex-1">
          {children}
        </main>

        {/* FLOAT BUTTON */}
        <div className="z-50">
          <FloatingButton />
        </div>
        {/* GLOBAL CTA */}
        {/* <div className="z-40">
          <GlobalCTA />
        </div> */}
        {/* ✅ FOOTER (FIXED POSITION) */}
        <Footer />
      </body>
    </html>
  );
}