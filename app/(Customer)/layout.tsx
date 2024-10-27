"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar/navbar";
import { Spinner } from "@/components/ui/spinner";
import { CartProvider } from "@/context/cartContext";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "loading") return; // Don't do anything while loading

    if (status === "authenticated") {
      if (session.user.role === "seller") {
        window.location.href = `/${session.user.id}/dashboard`;
      }
    }
    // Set loading to false when authenticated or unauthenticated
    setLoading(false);
  }, [session, status]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <CartProvider>
        <Navbar />
        {children}
        <Footer />
      </CartProvider>
    </>
  );
}
