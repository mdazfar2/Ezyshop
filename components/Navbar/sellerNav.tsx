"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/context/themeProvider";
import { SellerMainNav } from "./seller-main-nav";
import { useSession } from "next-auth/react";
import FlashAlert from "../modals/flashAlert";
import { Construction } from "lucide-react";

const SellerNavbar = () => {
  const session=useSession(); 
  const { theme } = useTheme() || { theme: "light" }; // Get the current theme and toggle function

  return (
    <div
      className={`border-b dark:border-Green/40 w-full border-gray-900 ${
        theme === "dark" ? "bg-DarkGray" : "bg-white"
      } sticky top-0 z-50`}  // <-- Added `sticky`, `top-0`, and `z-50` for sticky effect
    >
      <div
        className={`relative px-4 sm:px-6 lg:px-8 flex h-25 justify-between items-center ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <div className="flex items-center">
          <Link
            href={`/${session.data?.user?.id || ""}`}
            className="flex flex-col items-center justify-center group focus:outline-none flex-shrink-0 transition-transform duration-200 hover:scale-[1.02] py-0.5"
          >
            <Image
              src="/logo-nav.png"
              alt="Ezyshop"
              width={160}
              height={38}
              priority
              className="w-auto h-8 sm:h-9 object-contain"
            />
            <div className="flex items-center justify-center transition-all duration-300 select-none mt-0.5">
              <span className="font-nunito font-extrabold uppercase tracking-[0.2em] pl-[0.2em] text-[9.5px] sm:text-[10.5px] text-amber-600 dark:text-amber-400 drop-shadow-[0_1px_2px_rgba(245,158,11,0.25)] dark:drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]">
                S E L L E R
              </span>
            </div>
          </Link>
        </div>
        {/* all the navigation links */}
        <SellerMainNav theme={theme} />

        <FlashAlert modalLogo={<Construction className={`h-16 w-16 ${theme==='light'? 'text-customTeal':'text-Green'} mx-auto`} />} modalTitle={"This page is under development"} modalDescription={"We apologize for the inconvenience. Please check back soon."}/>

      </div>
    </div>
  );
};

export default SellerNavbar;
