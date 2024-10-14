// import Container from "@/components/ui/container";
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "./main-nav";

const Navbar = async () => {
  return (
    <div className="border-b border-gray-900">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-25 justify-between items-center  bg-DarkGray">
        <div className="flex items-center">
          <Image
            src={"/ezyshop.png"}
            width={80}
            height={80}
            alt="ezyshop logo"
          />
          <Link href="/" className="ml-4 flex lg:ml:0 gap-x-2">
            <p className="font-extrabold text-5xl font-nunito  bg-gradient-to-r from-Green to-Yellow inline-block text-transparent bg-clip-text" >Ezyshop</p>
          </Link>
        </div>
        {/* all the navigation links */}
        <MainNav />

        
      </div>
    </div>
  );
};

export default Navbar;
