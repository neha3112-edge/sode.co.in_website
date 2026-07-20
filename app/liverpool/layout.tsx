import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "UpGrad Liverpool MBA | Liverpool University MBA Online | Liverpool Business School MBA",
  description:
    "UpGrad Liverpool MBA program from Liverpool Business School. Liverpool University MBA online with specializations in Business Analytics, Finance, Marketing, Leadership, HR, and Operations. Liverpool MBA eligibility, duration, and admission details.",
  keywords: [
    "Liverpool John Moores University Online MBA",
    "liverpool business school mba program",
    "university of liverpool mba online",
    "liverpool business school online mba",
  ],
};

type LiverpoolLayoutProps = {
  children: ReactNode;
};

export default function LiverpoolLayout({ children }: LiverpoolLayoutProps) {
  return <>{children}</>;
}
