"use client"
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { useTheme } from "@/context/themeProvider";
// import { useTheme } from "@/context/ThemeContext"; // Import your theme context

const Navbar = () => {
 
  
  const { theme} = useTheme() || {theme:"light"} // Get the current theme and toggle function
  
  return (
    <div className={`border-b dark:border-Green w-full border-gray-900 ${theme === 'dark' ? 'bg-DarkGray' : 'bg-white'}`}>
      <div className={`relative px-4 sm:px-6 lg:px-8 flex h-25 justify-between items-center ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <div className="flex items-center">
          <Image
            src={"/ezyshop.png"}
            width={80}
            height={80}
            alt="ezyshop logo"
          />
          <Link href="/" className="ml-4 flex lg:ml:0 gap-x-2">
            <p className="font-extrabold text-5xl font-nunito bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow inline-block text-transparent bg-clip-text">
              Ezyshop
            </p>
          </Link>
        </div>
        {/* all the navigation links */}
        <MainNav theme={theme}/>

       
      </div>
    </div>
  );
};

export default Navbar;
