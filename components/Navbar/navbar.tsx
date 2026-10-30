"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { MainNav } from "./main-nav";
import { useTheme } from "@/context/themeProvider";
import FlashAlert from "../modals/flashAlert";
import { Construction } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  role: "CUSTOMER" | "SELLER" | null;
  isScrolled: boolean;
}

const BrandLogo = ({ role, isScrolled }: BrandLogoProps) => (
  <Link
    href="/"
    className="flex flex-col items-center justify-center group focus:outline-none flex-shrink-0 transition-transform duration-200 hover:scale-[1.02] py-0.5 cursor-pointer"
  >
    <Image
      src="/logo-nav.png"
      alt="Ezyshop"
      width={160}
      height={38}
      priority
      className={cn(
        "w-auto object-contain transition-all duration-300",
        role
          ? isScrolled
            ? "h-6 sm:h-7 drop-shadow-sm"
            : "h-7 sm:h-8"
          : isScrolled
          ? "h-7.5 sm:h-8.5 drop-shadow-sm"
          : "h-8 sm:h-9"
      )}
    />

    {role && (
      <div
        className={cn(
          "flex items-center justify-center transition-all duration-300 select-none",
          isScrolled ? "-mt-0.5" : "mt-0"
        )}
      >
        <span
          className={cn(
            "font-nunito font-extrabold uppercase transition-all duration-300",
            role === "CUSTOMER"
              ? "tracking-[0.16em] pl-[0.16em] text-[9.5px] sm:text-[10.5px] text-emerald-600 dark:text-Green drop-shadow-[0_1px_2px_rgba(27,138,44,0.25)] dark:drop-shadow-[0_0_8px_rgba(109,187,58,0.35)]"
              : "tracking-[0.2em] pl-[0.2em] text-[9.5px] sm:text-[10.5px] text-amber-600 dark:text-Yellow drop-shadow-[0_1px_2px_rgba(245,158,11,0.25)] dark:drop-shadow-[0_0_8px_rgba(232,200,32,0.35)]"
          )}
        >
          {role === "CUSTOMER" ? "C U S T O M E R" : "S E L L E R"}
        </span>
      </div>
    )}
  </Link>
);

const Navbar = () => {
  const { theme } = useTheme() || { theme: "light" };
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  // Determine active role from auth routes
  let role: "CUSTOMER" | "SELLER" | null = null;
  if (pathname?.startsWith("/auth/customer") || pathname === "/auth/customer") {
    role = "CUSTOMER";
  } else if (pathname?.startsWith("/auth/seller") || pathname === "/auth/seller") {
    role = "SELLER";
  }

  useEffect(() => {
    let ticking = false;

    const checkScroll = () => {
      let scrolled = false;

      if (isHomePage) {
        const hero = document.getElementById("hero-section");
        if (hero) {
          const rect = hero.getBoundingClientRect();
          // The sticky navbar activates ONLY once the user leaves the hero section and enters the next section
          scrolled = rect.bottom <= 60;
        } else {
          scrolled = window.scrollY > 450;
        }
      } else {
        // Non-homepage routes
        scrolled = window.scrollY > 20;
      }

      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isHomePage]);

  return (
    <>
      {/* 1. HERO NAVBAR (Non-sticky): Sits naturally at the top of the hero section and scrolls away upward */}
      {isHomePage && (
        <div className="absolute top-0 inset-x-0 z-50 w-full pointer-events-auto">
          <div className="max-w-7xl mx-auto h-16 sm:h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 bg-transparent border-transparent">
            <BrandLogo role={role} isScrolled={false} />
            <MainNav theme={theme} isScrolled={false} />
          </div>
        </div>
      )}

      {/* 2. STICKY FLOATING NAVBAR: Appears smoothly ONLY when leaving the hero section into the next section */}
      <header
        className={cn(
          "w-full transition-all duration-400 ease-out",
          isHomePage
            ? cn(
                "fixed top-2.5 sm:top-3.5 inset-x-0 px-3 sm:px-5 lg:px-6 xl:px-8 transform-gpu",
                isScrolled
                  ? "opacity-100 translate-y-0 pointer-events-auto visible z-50"
                  : "opacity-0 -translate-y-8 pointer-events-none invisible z-[-1]"
              )
            : cn(
                "sticky transition-all duration-300 z-50",
                isScrolled
                  ? "top-2.5 sm:top-3.5 px-3 sm:px-5 lg:px-6 xl:px-8 pointer-events-none bg-transparent border-transparent"
                  : "top-0 px-0 bg-white/95 dark:bg-[#0C1A0E]/95 border-b border-gray-200/80 dark:border-zinc-800/80 backdrop-blur-md pointer-events-auto"
              )
        )}
      >
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-400 ease-out transform-gpu will-change-[transform,background-color,border-color,height,max-width,padding,border-radius,box-shadow]",
            (!isHomePage && !isScrolled)
              ? "max-w-7xl h-16 sm:h-20 px-4 sm:px-6 lg:px-8 gap-4 bg-transparent border-transparent shadow-none rounded-none pointer-events-auto"
              : isScrolled
              ? cn(
                  "pointer-events-auto h-14 sm:h-16 gap-3 sm:gap-4 rounded-full bg-[#e8f5e9]/90 dark:bg-gradient-to-r dark:from-[#0a1f0e]/90 dark:via-[#0e2a12]/90 dark:to-[#0a1f0e]/90 backdrop-blur-xl border border-[#a5d6a7]/80 dark:border-emerald-500/35 shadow-lg shadow-emerald-900/10 dark:shadow-[0_8px_30px_rgba(27,138,44,0.2)]",
                  isAuthenticated
                    ? "max-w-7xl xl:max-w-[1360px] 2xl:max-w-[1400px] px-6 sm:px-8"
                    : "max-w-6xl xl:max-w-7xl px-5 sm:px-7"
                )
              : "pointer-events-none invisible"
          )}
        >
          <BrandLogo role={role} isScrolled={isHomePage ? true : isScrolled} />
          <MainNav theme={theme} isScrolled={isHomePage ? true : isScrolled} />
        </div>
      </header>

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
    </>
  );
};

export default Navbar;
