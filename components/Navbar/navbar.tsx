"use client";
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { useTheme } from "@/context/themeProvider";
import FlashAlert from "../modals/flashAlert";
import { Construction } from "lucide-react";

const Navbar = () => {
  const { theme } = useTheme() || { theme: "light" }; // Get the current theme and toggle function

  return (
    <div
      className={`border-b dark:border-Green w-full border-gray-900 ${
        theme === "dark" ? "bg-DarkGray" : "bg-white"
      } sticky top-0 z-50`} // <-- Added `sticky`, `top-0`, and `z-50` for sticky effect
    >
      <div
        className={`relative px-4 sm:px-6 lg:px-6 xl:px-8 flex h-20 justify-between items-center ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <div className="flex items-center flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={"/ezyshop.png"}
              width={60}
              height={60}
              alt="ezyshop logo"
              className="w-9 h-9 sm:w-10 sm:h-10 xl:w-12 xl:h-12 object-contain"
            />
            <p className="font-extrabold text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-nunito bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow inline-block text-transparent bg-clip-text leading-none">
              Ezyshop
            </p>
          </Link>
        </div>
        {/* all the navigation links */}
        <MainNav theme={theme} />

        <FlashAlert
          modalLogo={
            <Construction
              className={`h-16 w-16 ${
                theme === "light" ? "text-customTeal" : "text-Green"
              } mx-auto`}
            />
          }
          modalTitle={"This page is under development"}
          modalDescription={
            "We apologize for the inconvenience. Please check back soon."
          }
        />
      </div>
    </div>
  );
};

export default Navbar;
