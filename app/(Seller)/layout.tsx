
import SellerNavbar from "@/components/Navbar/sellerNav";

export default function SellerLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <>
      <SellerNavbar />
      <div className="h-screen w-full dark:bg-DarkGray">{children}</div>
    </>
  );
}
