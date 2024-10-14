import type { Metadata } from "next";
import {Urbanist} from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const font=Urbanist({subsets:['latin']})
// console.log(font.className)
export const metadata: Metadata = {
  title: "Ezyshopz",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* font awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-<your-integrity-hash>"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

      </head>
      <body
        className={`${font.className},h-screen bg-DarkGray`}
      >
        {/* <ModalProvider/> */}
        {/* <ToasterProvider/> */}
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
