"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Heart, ShoppingCart } from "lucide-react"; // Import any required icons
import { Menu, X } from "lucide-react"; // Icons for hamburger menu
import { Button } from "./ui/button";

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
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
      logo: <Heart className="h-5 w-5 text-[#17a2b8]" />,
    },
    {
      href: `/Cart`,
      label: "Cart",
      active: pathname.startsWith(`/Cart`),
      logo: <ShoppingCart className="h-5 w-5 text-[#17a2b8]" />,
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
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="text-customBlue focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation links (shown on larger screens, hidden on mobile) */}
      <div className={cn("hidden lg:flex items-center space-x-4 lg:space-x-6")}>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "font-nunito flex items-center gap-2 justify-center hover:text-[#17a2b8] font-extrabold text-lg",
              route.active ? "text-[#17a2b8]" : "text-customBlue"
            )}
          >
            {route.logo && <span>{route.logo}</span>}
            {route.label}
          </Link>
        ))}

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

      {/* Mobile menu with slow opening animation */}
      <div
        className={cn(
          "lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center justify-center space-y-2 py-4 px-6 transition-all duration-500 ease-in-out", // Add transition for smooth animation
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
              "font-nunito flex items-center gap-2 justify-center text-xl font-bold  text-customBlue py-2",
              route.active ? "text-[#17a2b8]" : "text-customBlue"
            )}
            onClick={toggleMenu} // Close menu on link click
          >
            {route.logo && <span>{route.logo}</span>}
            {route.label}
          </Link>
        ))}

        <div className="flex items-center gap-2 mt-4">
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
    </nav>
  );
}
