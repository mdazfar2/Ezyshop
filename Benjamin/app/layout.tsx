import type { Metadata } from "next";
import {Urbanist} from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const font=Urbanist({subsets:['latin']})
// console.log(font.className)
export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className},h-screen`}
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
