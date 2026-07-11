import { ReactNode } from "react";
import IIITBHeader from "./components/IIITBHeader";
import IIITBFooter from "./components/IIITBFooter"; // Wait, check path! Let's import from "./components/IIITBFooter"
import "./iiitb.css";

export default function IIITBLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="iiitb-page">
      <IIITBHeader />
      <main className="flex-1">{children}</main>
      <IIITBFooter />
    </div>
  );
}
