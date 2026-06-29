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
  title: "1 Year Online MBA | Advance Your Career",
  description:
    "Accelerate your career with a 1-year online MBA. Fast-track your path to success with our recognized program.",
  openGraph: {
    title: "1 Year Online MBA | Advance Your Career",
    description:
      "Accelerate your career with a 1-year online MBA. Fast-track your path to success with our recognized program.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-full flex flex-col">

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
        <div className="z-40">
          <GlobalCTA />
        </div>
        {/* ✅ FOOTER (FIXED POSITION) */}
        <Footer />
      </body>
    </html>
  );
}