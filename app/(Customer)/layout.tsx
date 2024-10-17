import Footer from "@/components/footer";
import Navbar from "@/components/Navbar/navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <body>
    <>
      <Navbar />
      {children}
      <Footer />
      </>
    // {/* </body> */}
  );
}
