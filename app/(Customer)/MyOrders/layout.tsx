// app/(Customer)/MyOrders/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ezyshop - My Orders",
  description: "Track your orders and view your order history on Ezyshop.",
};

export default function MyOrdersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
