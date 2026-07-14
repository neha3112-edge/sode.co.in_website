import type { ReactNode } from "react";

type IIITBLayoutProps = {
  children: ReactNode;
};

export default function IIITBLayout({ children }: IIITBLayoutProps) {
  return <div>{children}</div>;
}
