"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Heart,
  ShoppingCart,
  Package,
  Menu,
  X,
  ChevronDown,
  Info,
  Mail,
  Home,
  Store,
  LayoutGrid,
} from "lucide-react";
import { ModeToggle } from "../ui/themeButton";
import AuthButtons from "./authButtons";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MainNavProps {
  className?: string;
  theme: string;
  isScrolled?: boolean;
}

export function MainNav({ className, isScrolled = false }: MainNavProps) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const handleShopsNavClick = (e: React.MouseEvent) => {
    if (session.status === "unauthenticated") {
      e.preventDefault();
      closeMenu();
      toast.error("Please log in as a customer first to explore shops near you.", {
        id: "customer-auth-required",
        duration: 4000,
      });
      router.push("/auth/customer?redirect=shops");
    }
  };

  // Core navigation links (Teams and Blog removed per instructions)
  const navLinks = [
    { href: "/", label: "Home", icon: Home, active: pathname === "/" },
    {
      href: "/shops",
      label: "Shops",
      icon: Store,
      active: pathname.startsWith("/shops"),
      onClick: handleShopsNavClick,
    },
    {
      href: "/Categories",
      label: "Categories",
      icon: LayoutGrid,
      active: pathname.startsWith("/Categories"),
    },
  ];

  const isMoreActive =
    pathname.startsWith("/About") || pathname.startsWith("/Contact");

  // Customer utility links
  const handleProtectedAction = (e: React.MouseEvent, targetHref: string) => {
    e.preventDefault();
    if (session.status === "unauthenticated") {
      toast.error("Please login as a Customer first");
    } else {
      router.push(targetHref);
    }
  };

  const utilityLinks = [
    {
      label: "Orders",
      href: "/MyOrders",
      icon: Package,
      active: pathname.startsWith("/MyOrders"),
      onClick: (e: React.MouseEvent) => handleProtectedAction(e, "/MyOrders"),
    },
    {
      label: "Wishlist",
      href: "/WishList",
      icon: Heart,
      active: pathname.startsWith("/WishList"),
      onClick: (e: React.MouseEvent) => handleProtectedAction(e, "/WishList"),
    },
    {
      label: "Cart",
      href: "/Cart",
      icon: ShoppingCart,
      active: pathname.startsWith("/Cart"),
      onClick: (e: React.MouseEvent) => handleProtectedAction(e, "/Cart"),
    },
  ];

  return (
    <nav className={cn("flex items-center", className)}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-1 xl:gap-2">
        {/* Main Links */}
        <div className="flex items-center gap-1 mr-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={link.onClick}
              className={cn(
                "cursor-pointer px-3 py-1.5 text-sm font-medium transition-all duration-200 relative",
                link.active
                  ? "text-customTeal dark:text-Green font-semibold after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-[2px] after:bg-customTeal dark:after:bg-Green after:rounded-full"
                  : isScrolled
                  ? "text-gray-600 dark:text-gray-300 hover:text-customTeal dark:hover:text-Green"
                  : "text-gray-800 dark:text-gray-100 hover:text-customTeal dark:hover:text-Green font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* More Dropdown (About Us & Contact Us) - opens on hover */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <DropdownMenu open={moreOpen} onOpenChange={setMoreOpen}>
              <DropdownMenuTrigger
                onClick={() => setMoreOpen((prev) => !prev)}
                className={cn(
                  "group flex items-center gap-1 px-3 py-1.5 text-sm font-medium transition-all duration-200 outline-none cursor-pointer relative",
                  isMoreActive
                    ? "text-customTeal dark:text-Green font-semibold after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-[2px] after:bg-customTeal dark:after:bg-Green after:rounded-full"
                    : isScrolled
                    ? "text-gray-600 dark:text-gray-300 hover:text-customTeal dark:hover:text-Green data-[state=open]:text-customTeal dark:data-[state=open]:text-Green"
                    : "text-gray-800 dark:text-gray-100 hover:text-customTeal dark:hover:text-Green data-[state=open]:text-customTeal dark:data-[state=open]:text-Green font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                )}
              >
                <span>More</span>
                <ChevronDown
                  className={cn(
                    "h-3.5 w-3.5 transition-transform duration-200",
                    moreOpen && "rotate-180"
                  )}
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={6}
                onMouseEnter={() => setMoreOpen(true)}
                onMouseLeave={() => setMoreOpen(false)}
                className="w-56 p-2 rounded-xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-xl animate-in fade-in-50 zoom-in-95 duration-150"
              >
                <DropdownMenuItem asChild>
                  <Link
                    href="/About"
                    onClick={() => setMoreOpen(false)}
                    className={cn(
                      "flex items-start gap-3 p-2.5 rounded-lg cursor-pointer transition-colors",
                      pathname.startsWith("/About")
                        ? "text-customTeal dark:text-Green font-semibold border-l-2 border-customTeal dark:border-Green pl-2 bg-gray-50/50 dark:bg-zinc-800/40"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"
                    )}
                  >
                    <Info className="h-4 w-4 mt-0.5 text-customTeal dark:text-Green" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">About Us</span>
                      <span className="text-xs text-gray-400">Our story and vision</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/Contact"
                    onClick={() => setMoreOpen(false)}
                    className={cn(
                      "flex items-start gap-3 p-2.5 rounded-lg cursor-pointer transition-colors",
                      pathname.startsWith("/Contact")
                        ? "text-customTeal dark:text-Green font-semibold border-l-2 border-customTeal dark:border-Green pl-2 bg-gray-50/50 dark:bg-zinc-800/40"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800"
                    )}
                  >
                    <Mail className="h-4 w-4 mt-0.5 text-customTeal dark:text-Green" />
                    <div className="flex flex-col">
                      <span className="text-sm font-medium">Contact Us</span>
                      <span className="text-xs text-gray-400">Get in touch with support</span>
                    </div>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Divider */}
        <div className={cn("h-5 w-px mx-1 transition-colors", isScrolled ? "bg-gray-200 dark:bg-zinc-800" : "bg-gray-300/80 dark:bg-zinc-600/80")} />

        {/* Utility / Customer Tools */}
        <div className="flex items-center gap-1">
          {utilityLinks.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                onClick={item.onClick}
                className={cn(
                  "cursor-pointer flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-all duration-200 relative",
                  item.active
                    ? "text-customTeal dark:text-Green font-semibold after:absolute after:bottom-0 after:left-2.5 after:right-2.5 after:h-[2px] after:bg-customTeal dark:after:bg-Green after:rounded-full"
                    : isScrolled
                    ? "text-gray-600 dark:text-gray-300 hover:text-customTeal dark:hover:text-Green"
                    : "text-gray-800 dark:text-gray-100 hover:text-customTeal dark:hover:text-Green font-medium drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] dark:drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                )}
                title={item.label}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Divider */}
        <div className={cn("h-5 w-px mx-1 transition-colors", isScrolled ? "bg-gray-200 dark:bg-zinc-800" : "bg-gray-300/80 dark:bg-zinc-600/80")} />

        {/* Actions: Theme Toggle & Auth */}
        <div className="flex items-center gap-2.5 pl-1">
          <ModeToggle />
          <AuthButtons toggleMenu={closeMenu} />
        </div>
      </div>

      {/* Mobile Controls & Hamburger Toggle */}
      <div className="lg:hidden flex items-center gap-2">
        <ModeToggle />
        <button
          onClick={toggleMenu}
          className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Sheet - Floating Card */}
      {isOpen && (
        <div
          className={cn(
            "lg:hidden fixed inset-x-3 sm:inset-x-6 mx-auto rounded-3xl backdrop-blur-2xl shadow-2xl py-5 px-6 z-50 animate-in slide-in-from-top-2 duration-200 max-h-[calc(100vh-85px)] overflow-y-auto transition-all",
            isScrolled
              ? "max-w-6xl top-[68px] sm:top-[76px] bg-[#e8f5e9]/95 dark:bg-[#0a1f0e]/95 border border-[#a5d6a7]/80 dark:border-emerald-500/35"
              : "max-w-7xl top-[70px] sm:top-[86px] bg-white/95 dark:bg-[#0C1A0E]/95 border border-gray-200 dark:border-zinc-800"
          )}
        >
          {/* Main Navigation */}
          <div className="flex flex-col gap-1 pb-3 border-b border-gray-100 dark:border-zinc-800">
            <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-1">
              Menu
            </span>
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    closeMenu();
                    if (link.onClick) link.onClick(e);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    link.active
                      ? "text-customTeal dark:text-Green font-semibold border-b-2 border-customTeal dark:border-Green"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-zinc-800/40"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <Link
              href="/About"
              onClick={closeMenu}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/About")
                  ? "text-customTeal dark:text-Green font-semibold border-b-2 border-customTeal dark:border-Green"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-zinc-800/40"
              )}
            >
              <Info className="h-4 w-4" />
              <span>About Us</span>
            </Link>
            <Link
              href="/Contact"
              onClick={closeMenu}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                pathname.startsWith("/Contact")
                  ? "text-customTeal dark:text-Green font-semibold border-b-2 border-customTeal dark:border-Green"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-zinc-800/40"
              )}
            >
              <Mail className="h-4 w-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Customer Utility Actions */}
          <div className="flex flex-col gap-1 py-3 border-b border-gray-100 dark:border-zinc-800">
            <span className="text-[11px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider px-3 mb-1">
              Account & Shopping
            </span>
            {utilityLinks.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={(e) => {
                    closeMenu();
                    item.onClick(e);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors w-full text-left",
                    item.active
                      ? "text-customTeal dark:text-Green font-semibold border-b-2 border-customTeal dark:border-Green"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-zinc-800/40"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Authentication */}
          <div className="pt-4 flex justify-center">
            <AuthButtons toggleMenu={closeMenu} />
          </div>
        </div>
      )}
    </nav>
  );
}
