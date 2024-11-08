// app/(Customer)/Blog/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezyshop - Blog",
  description: "Stay updated with the latest shopping trends, tips, and insights on the Ezyshop blog.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}