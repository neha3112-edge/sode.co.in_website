import type { ReactNode } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

type IIITBLayoutProps = {
  children: ReactNode;
};

export default function IIITBLayout({ children }: IIITBLayoutProps) {
  return <div className={montserrat.className}>{children}</div>;
}
