// import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { Button } from "./ui/button";
// // import MainNav from "@/components/main-nav";
// import getCategories from "@/actions/get-categories";
// import NavbarActions from "@/components/navbar-actions";

// export const revalidate=0;

const Navbar = async () => {
  // const categories = await getCategories();
  return (
    <div className="border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-25 justify-between items-center">
        <div className="flex items-center">
          <Image
            src={"/ezyshop.png"}
            width={80}
            height={80}
            alt="ezyshop logo"
          />
          <Link href="/" className="ml-4 flex lg:ml:0 gap-x-2">
            <p className="font-bold text-5xl text-[#17a2b8]">Ezyshop</p>
          </Link>
        </div>
        {/* all the navigation links */}
        <MainNav />

        <div className="flex items-center gap-2">
          <Link href={"/login"}>
            <Button size={"lg"} className="bg-[#17a2b8] rounded-xl">
              Login
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button size={"lg"} className="bg-[#17a2b8] rounded-xl">
              Signup
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
