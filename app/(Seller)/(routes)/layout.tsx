"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function SellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading

    if (status === "unauthenticated") {
      window.location.href = `/auth/seller`; // Redirect unauthenticated users
    } else if (status === "authenticated") {
      if (session.user.role === "user") {
        window.location.href = `/`; // Redirect users with role "user"
      } else if (session.user.role === "seller") {
        setLoading(false); // Set loading to false for sellers
      }
    }
  }, [session, status]);

  if (loading) return <p>Loading...</p>; // Show loading message until loading is false

  return (
    <>
      {children} {/* Render children only if role is seller */}
      {/* <Footer /> */}
    </>
  );
}
