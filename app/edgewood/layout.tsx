import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edgewood College DBA upGrad | Edgewood University Online DBA & MBA Programs",
  description: "Edgewood College DBA upGrad program. Edgewood University online DBA and Edgewood College online MBA with specializations in Finance and Leadership. Explore Edgewood University upGrad, Edgewood and upGrad programs, eligibility, duration, and admission details.",
};

type EdgewoodLayoutProps = {
  children: ReactNode;
};

export default function EdgewoodLayout({ children }: EdgewoodLayoutProps) {
  return <div className="text-[13px] leading-relaxed antialiased">{children}</div>;
}
