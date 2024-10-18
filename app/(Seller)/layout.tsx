
import SellerNavbar from "@/components/Navbar/sellerNav";

export default function SellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <body>
    <>
      <SellerNavbar />
      {children}
      {/* <Footer /> */}
      </>
    // {/* </body> */}
  );
}
