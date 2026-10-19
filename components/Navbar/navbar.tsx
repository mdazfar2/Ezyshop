"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { useTheme } from "@/context/themeProvider";
import FlashAlert from "../modals/flashAlert";
import { Construction } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const { theme } = useTheme() || { theme: "light" };
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky z-50 w-full transition-all duration-300",
        isScrolled
          ? "top-2.5 sm:top-3.5 px-3 sm:px-6 lg:px-8 pointer-events-none"
          : "top-0 px-0 bg-white/95 dark:bg-[#111318]/95 border-b border-gray-200/80 dark:border-zinc-800/80 backdrop-blur-md"
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-300",
          isScrolled
            ? "pointer-events-auto max-w-6xl h-14 sm:h-16 px-5 sm:px-7 gap-3 sm:gap-4 rounded-full bg-[#dff6f8]/85 dark:bg-gradient-to-r dark:from-[#09222c]/85 dark:via-[#0e2f3b]/85 dark:to-[#09222c]/85 backdrop-blur-xl border border-[#b4ebf2]/80 dark:border-teal-500/35 shadow-lg shadow-teal-900/5 dark:shadow-[0_8px_30px_rgba(13,148,136,0.15)]"
            : "max-w-7xl h-16 sm:h-20 px-4 sm:px-6 lg:px-8 gap-4"
        )}
      >
        {/* Brand Logo - using logo-nav.png */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none flex-shrink-0 transition-transform duration-200 hover:scale-[1.02]"
        >
          <Image
            src="/logo-nav.png"
            alt="Ezyshop"
            width={160}
            height={38}
            priority
            className={cn(
              "w-auto object-contain transition-all duration-300",
              isScrolled ? "h-7.5 sm:h-8.5 drop-shadow-sm" : "h-8 sm:h-9"
            )}
          />
        </Link>

        {/* Navigation & Controls */}
        <MainNav theme={theme} isScrolled={isScrolled} />

        {/* Global Alert Modal (available for construction states) */}
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
    </header>
  );
};

export default Navbar;
