import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/sessionProvider";  // Verify path and existence
import 'leaflet/dist/leaflet.css';
import ScrollToTop from '@/components/ui/ScrollToTop';     // Verify path and component

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ezyshop",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-[your-integrity-hash]" // Replace with actual integrity hash
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={`${font.className} h-screen`}>
        <Providers>
          {children}
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
