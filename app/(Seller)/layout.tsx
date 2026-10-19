"use client";

import SellerNavbar from "@/components/Navbar/sellerNav";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/footer";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

export default function SellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isAuth = pathname?.startsWith("/auth");

  if (isAuth) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 dark:bg-DarkGray">{children}</main>
        <Toaster />
        <Footer />
      </div>
    );
  }

  return (
    <>
      <SellerNavbar />
      <div className="h-screen w-full dark:bg-DarkGray">{children}</div>
    </>
  );
}
