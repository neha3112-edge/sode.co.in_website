import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Anton, Italianno, Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const anton = Anton({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
  weight: "400",
});

const italianno = Italianno({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-italianno",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sode.co.in"),
  title: "IIT Kharagpur Generative AI & Agentic AI Course | SODE",
  description:
    "Explore the Executive Post Graduate Certificate in Generative AI and Agentic AI from IIT Kharagpur via upGrad.",
  alternates: {
    canonical: "/iit-kgp",
  },
  robots: {
    index: true,
    follow: true,
  },
};

type IITKGPLayoutProps = {
  children: ReactNode;
};

export default function IITKGPLayout({ children }: IITKGPLayoutProps) {
  return (
    <div
      className={`
        ${montserrat.className}
        ${montserrat.variable}
        ${anton.variable}
        ${italianno.variable}
        iit-kgp-layout
      `}
    >
      {children}
    </div>
  );
}
