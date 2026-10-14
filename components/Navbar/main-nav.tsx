"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";
import { ModeToggle } from "../ui/themeButton";
import AuthButtons from "./authButtons";
import { useFlashAlert } from "@/context/flashAlertContext";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

interface MainNavProps {
  className?: React.HTMLAttributes<HTMLElement>;
  theme: string;
}

export function MainNav({ className, theme }: MainNavProps) {
  const [loading, setLoading] = useState(true);
  const { openDialog } = useFlashAlert();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;

  const toggleMenu = () => setIsOpen(!isOpen);

  const routes = [
    { href: `/`, label: "Home", active: pathname === `/` },
    { href: `/shops`, label: "Shops", active: pathname === `/shops` },
    { href: `/About`, label: "About", active: pathname.startsWith(`/About`) },
    {
      href: `/Categories`,
      label: "Categories",
      active: pathname.startsWith(`/Categories`),
    },
    {
      href: `#`,
      label: "Teams",
      active: pathname.startsWith(`/Teams`),
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        openDialog();
      },
    },
    { href: `/Blog`, label: "Blog", active: pathname.startsWith(`/Blog`) },
    {
      href: session.status == "unauthenticated" ? "#" : `/MyOrders`,
      label: "Orders",
      active: pathname.startsWith(`/MyOrders`),
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        if (session.status == "unauthenticated") {
          toast.error("Please login as a Customer first");
        } else {
          router.push("/MyOrders");
        }
      },
    },
    {
      href: session.status == "unauthenticated" ? "#" : `/WishList`,
      label: "Wishlist",
      active: pathname.startsWith(`/WishList`),
      logo: (
        <Heart
          className={`h-4 w-4 xl:h-5 xl:w-5 ${
            theme === "dark" ? `text-Green` : `text-customTeal`
          }`}
        />
      ),
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        if (session.status == "unauthenticated") {
          toast.error("Please login as a Customer first");
        } else {
          router.push("/WishList");
        }
      },
    },
    {
      href: session.status == "unauthenticated" ? "#" : `/Cart`,
      label: "Cart",
      active: pathname.startsWith(`/Cart`),
      logo: (
        <ShoppingCart
          className={`h-4 w-4 xl:h-5 xl:w-5 ${
            theme === "dark" ? `text-Green` : `text-customTeal`
          }`}
        />
      ),
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        if (session.status == "unauthenticated") {
          toast.error("Please login as a Customer first");
        } else {
          router.push("/Cart");
        }
      },
    },
    {
      href: `/Contact`,
      label: "Contact",
      active: pathname.startsWith(`/Contact`),
    },
  ];

  return (
    <nav className={cn("flex items-center justify-end flex-1 ml-3 xl:ml-6", className)}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-between flex-1 gap-4 xl:gap-6">
        <div className="flex items-center gap-2 xl:gap-3.5 2xl:gap-5">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={route.onClick}
              className={cn(
                "flex items-center gap-1 xl:gap-1.5 text-xs xl:text-sm 2xl:text-base font-semibold whitespace-nowrap transition-colors",
                route.active
                  ? `${theme === "dark" ? "text-gray-300" : "text-customTeal"}`
                  : `${theme === "dark" ? "text-gray-400" : "text-customBlue"}`,
                theme === "dark"
                  ? "hover:text-white"
                  : "hover:text-customTeal"
              )}
            >
              {route.logo && <span className="flex-shrink-0">{route.logo}</span>}
              <span>{route.label}</span>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
          <ModeToggle />
          <AuthButtons toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Mobile Nav - Toggle & Drawer */}
      <div className="lg:hidden flex items-center gap-2 sm:gap-3">
        <ModeToggle />
        <button
          onClick={toggleMenu}
          className="text-black dark:text-white p-1 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 w-full bg-white dark:bg-DarkGray border-b border-gray-200 dark:border-Green shadow-lg transition-all duration-300 overflow-hidden z-40",
          isOpen ? "max-h-[calc(100vh-5rem)] opacity-100 py-6 px-6 overflow-y-auto" : "max-h-0 opacity-0 py-0 px-6 pointer-events-none"
        )}
      >
        <div className="flex flex-col gap-4 text-center">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={(e) => {
                toggleMenu();
                route.onClick?.(e);
              }}
              className={cn(
                "flex justify-center items-center gap-2 text-lg font-bold",
                route.active
                  ? `${theme === "dark" ? "text-gray-300" : "text-customTeal"}`
                  : `${theme === "dark" ? "text-gray-400" : "text-customBlue"}`,
                theme === "dark"
                  ? "hover:text-white"
                  : "hover:text-customTeal"
              )}
            >
              {route.logo && <span>{route.logo}</span>}
              <span>{route.label}</span>
            </Link>
          ))}

          <div className="mt-4">
            <AuthButtons toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
}
