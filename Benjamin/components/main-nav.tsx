"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Heart, ShoppingCart } from "lucide-react"; // Import any required icons
import { Menu, X } from "lucide-react"; // Icons for hamburger menu
import { ModeToggle } from "./ui/themeButton";
import AuthButtons from "./authButtons";

interface MainNavProps{
  className?:React.HTMLAttributes<HTMLElement>
  theme:string
}

export function MainNav({ className,theme }:MainNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu visibility

  const toggleMenu = () => setIsOpen(!isOpen); // Toggle function for menu

  const routes = [
    { href: `/`, label: "Home", active: pathname === `/` },
    { href: `/About`, label: "About", active: pathname.startsWith(`/About`) },
    {
      href: `/Categories`,
      label: "Categories",
      active: pathname.startsWith(`/Categories`),
    },
    { href: `/Teams`, label: "Teams", active: pathname.startsWith(`/Teams`) },
    { href: `/Blog`, label: "Blog", active: pathname.startsWith(`/Blog`) },
    {
      href: `/MyOrders`,
      label: "My Orders",
      active: pathname.startsWith(`/MyOrders`),
    },
    {
      href: `/WishList`,
      label: "Wish List",
      active: pathname.startsWith(`/WishList`),
      logo: <Heart className={`h-5 w-5 ${theme==="dark"?`text-Green`:`text-customTeal`}`} />,
    },
    {
      href: `/Cart`,
      label: "Cart",
      active: pathname.startsWith(`/Cart`),
      logo: <ShoppingCart className={`h-5 w-5 ${theme==="dark"?`text-Green`:`text-customTeal`}`} />,
    },
    {
      href: `/Contact`,
      label: "Contact",
      active: pathname.startsWith(`/Contact`),
    },
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
              route.active ?`${theme==='dark'?'text-gray-200':'text-customTeal'}`:`${theme==='dark'?'text-gray-200':'text-customBlue'}`,
              theme=='dark'? `${'hover:text-gray-500'}`:`${'hover:text-customTeal'}`
            )}
          >
            {route.logo && <span>{route.logo}</span>}
            {route.label}
          </Link>
        ))}
        
        <ModeToggle/>

        <AuthButtons />
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
            onClick={toggleMenu} // Close menu on link click
          >
            {route.logo && <span>{route.logo}</span>}
            {route.label}
          </Link>
        ))}

        <AuthButtons />
      </div>
    </nav>
  );
}
