"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Heart, ShoppingCart } from "lucide-react"; // Import any required icons

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  // Define the routes, some with logos/icons
  const routes = [
    {
      href: `/`,
      label: "Home",
      active: pathname === `/`,
    },
    {
      href: `/About`,
      label: "About",
      active: pathname.startsWith(`/About`),
    },
    {
      href: `/Categories`,
      label: "Categories",
      active: pathname.startsWith(`/Categories`),
    },
    {
      href: `/Teams`,
      label: "Teams",
      active: pathname.startsWith(`/Teams`),
    },
    {
      href: `/Blog`,
      label: "Blog",
      active: pathname.startsWith(`/Blog`),
    },
    {
      href: `/MyOrders`,
      label: "My Orders",
      active: pathname.startsWith(`/MyOrders`),
    },
    {
      href: `/WishList`,
      label: "Wish List",
      active: pathname.startsWith(`/WishList`),
      logo: <Heart className="h-5 w-5 text-[#17a2b8]" />, // Add an icon
    },
    {
      href: `/Cart`,
      label: "Cart",
      active: pathname.startsWith(`/Cart`),
      logo: <ShoppingCart className="h-5 w-5 text-[#17a2b8]" />, // Add another icon
    },
    {
      href: `/Contact`,
      label: "Contact",
      active: pathname.startsWith(`/Contact`),
    },
  ];

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "flex items-center space-x-2 font-nunito hover:text-[#17a2b8] font-extrabold text-lg",
            route.active ? "text-[#17a2b8]" : "text-customBlue"
          )}
        >
          {/* Conditionally render the logo if it exists */}
          {route.logo && <span>{route.logo}</span>}
          <span>{route.label}</span>
        </Link>
      ))}
    </nav>
  );
}
