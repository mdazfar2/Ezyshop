// app/(Customer)/contributors/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezyshop - Contributors",
  description: "Meet the amazing contributors of Ezyshop who make it a success!",
};

export default function ContributorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
