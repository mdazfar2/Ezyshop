"use client"
import {  useSession } from "next-auth/react";

export default function SellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {status} = useSession()
  if (status === "loading") return <p>Loading...</p>;
  if (status!=="authenticated") {
    window.location.href=(`/auth/seller`);
  }
  return (

    // <body>
    <>
      {children}
      {/* <Footer /> */}
    </>
    // {/* </body> */}
  );
}
