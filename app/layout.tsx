import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/sessionProvider";
import 'leaflet/dist/leaflet.css';
import ScrollToTop from '@/components/ui/ScrollToTop';  // Added import

const font = Urbanist({ subsets: ["latin"] });
// console.log(font.className)

export const metadata: Metadata = {
  title: "Ezyshop - Home",
  description: "Discover the best deals and shop from a wide range of products on Ezyshop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Instant Theme Restoration Script: prevents flash of wrong theme on reload */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('ezyshop-theme');
                  if (t === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (t === 'light') {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
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
          <ScrollToTop />  {/* Added ScrollToTop component */}
        </Providers>
      </body>
    </html>
  );
}