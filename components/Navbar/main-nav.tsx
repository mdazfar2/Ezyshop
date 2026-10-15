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
          className={`h-5 w-5 ${
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
          className={`h-5 w-5 ${
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
    <nav className={cn("w-full z-50", className)}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-between items-center px-6 py-3 shadow-md bg-white dark:bg-black">
        <div className="flex items-center gap-6">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              onClick={route.onClick}
              className={cn(
                "flex items-center gap-2 text-lg font-semibold",
                route.active
                  ? `${theme === "dark" ? "text-gray-300" : "text-customTeal"}`
                  : `${theme === "dark" ? "text-gray-400" : "text-customBlue"}`,
                theme === "dark"
                  ? "hover:text-white"
                  : "hover:text-customTeal"
              )}
            >
              {route.logo && <span>{route.logo}</span>}
              {route.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <AuthButtons toggleMenu={toggleMenu} />
        </div>
      </div>

      {/* Mobile Nav - Toggle & Drawer */}
      <div className="lg:hidden flex justify-between items-center px-4 py-3 shadow-md bg-white dark:bg-black">
        <ModeToggle />
        <button onClick={toggleMenu} className="text-black dark:text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "lg:hidden fixed top-16 left-0 w-full bg-white dark:bg-black shadow-md transition-all duration-300 overflow-hidden z-40",
          isOpen ? "max-h-[600px] opacity-100 py-4 px-6" : "max-h-0 opacity-0"
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
              {route.label}
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
