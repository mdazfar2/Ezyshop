"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

export function MainNav({ className }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
//   const params = useParams();
  const routes = [
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
            "transition-colors hover:text-[#17a2b8] font-bold text-xl",
            route.active
              ? "text-[#17a2b8] "
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
    
  );
}
