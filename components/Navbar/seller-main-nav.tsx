"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu
import AuthButtons from "./authButtons";
import { ModeToggle } from "../ui/themeButton";
import { useSession } from "next-auth/react";

interface SellerMainNavProps{
  className?:React.HTMLAttributes<HTMLElement>
  theme:string
}


export function SellerMainNav({ className,theme }:SellerMainNavProps) {

  const session = useSession()

  const [loading,setLoading]=useState(true);
//   const {openDialog}=useConstruction();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu visibility

  useEffect(()=>{
    setLoading(false);
  },[])

  if(loading) return null;

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle function for menu

  const routes = [
    { href: `/${session.data?.user.id}/dashboard`, label: "Home", active: pathname === `/${session.data?.user.id}/dashboard` },
    { href: `/${session.data?.user.id}/billboards`, label: "Billboards", active: pathname.startsWith(`/${session.data?.user.id}/billboards`) },
    { href: `/${session.data?.user.id}/categories`, label: "Categories", active: pathname.startsWith(`/${session.data?.user.id}/categories`) },
    { href: `/${session.data?.user.id}/products`, label: "Products", active: pathname.startsWith(`/${session.data?.user.id}/products`) },
  ];

  return (
    <nav className={cn("flex items-center justify-between", className)}>
      {/* Hamburger icon for mobile */}
      <div className="lg:hidden flex items-center justify-center gap-2">
        <ModeToggle/>
        <button
          onClick={toggleMenu}
          className="text-White focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation links (shown on larger screens, hidden on mobile) */}
      <div className={cn("hidden lg:flex items-center justify-centerx space-x-4 lg:space-x-6")}>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "font-nunito flex items-center gap-2 justify-center font-extrabold text-lg",
              route.active ?`${theme==='dark'?'text-gray-500':'text-customTeal'}`:`${theme==='dark'?'text-gray-200':'text-customBlue'}`,
              theme=='dark'? `${'hover:text-gray-500'}`:`${'hover:text-customTeal'}`
            )}
            // onClick={route.onClick}
          >
            {/* {route.logo && <span>{route.logo}</span>} */}
            {route.label}
          </Link>
        ))}
        
        <ModeToggle/>

        <AuthButtons toggleMenu={toggleMenu}/>
      </div>

      {/* Mobile menu with slow opening animation */}
      <div
        className={cn(
          "lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-DarkGray shadow-lg flex flex-col items-center justify-center space-y-2 py-4 px-6 transition-all duration-500 ease-in-out", // Add transition for smooth animation
          isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "font-nunito flex items-center gap-2 justify-center font-extrabold text-lg",
              route.active ?`${theme==='dark'?'text-gray-200':'text-customTeal'}`:`${theme==='dark'?'text-gray-200':'text-customBlue'}`,
              theme=='dark'? `${'hover:text-gray-500'}`:`${'hover:text-customTeal'}`
            )}
            // onClick={(e) => {
            //   toggleMenu(); // Close menu on link click
            // //   if (route.onClick) route.onClick(e); // Call route's onClick if it exists
            // }}// Close menu on link click
          >
            {/* {route.logo && <span>{route.logo}</span>} */}
            {route.label}
          </Link>
        ))}

        <AuthButtons toggleMenu={toggleMenu}/>
      </div>
    </nav>
  );
}
