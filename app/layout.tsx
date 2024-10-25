import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/sessionProvider";
import 'leaflet/dist/leaflet.css';

const font = Urbanist({ subsets: ["latin"] });
// console.log(font.className)
export const metadata: Metadata = {
  title: "Ezyshop",
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
      <body className={`${font.className},h-screen `}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
