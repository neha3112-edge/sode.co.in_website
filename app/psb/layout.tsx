import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Paris School of Business | Online MBA Program | PSB Paris",
  description:
    "Paris School of Business Online MBA program. Paris School of Business online with specializations in Business Analytics, Finance, Marketing, Leadership, HR, and Operations. Eligibility, duration, and admission details.",
  keywords: [
    "Paris School of Business Online MBA",
    "paris school of business mba program",
    "university of paris school of business online",
    "psb online mba",
  ],
};

type PSBLayoutProps = {
  children: ReactNode;
};

export default function PSBLayout({ children }: PSBLayoutProps) {
  return <>{children}</>;
}
