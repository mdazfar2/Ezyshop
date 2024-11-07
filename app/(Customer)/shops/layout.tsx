// app/(Customer)/shops/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezyshop - Shops",
  description: "Explore various shops available on Ezyshop to find the best deals.",
};

export default function ShopsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
