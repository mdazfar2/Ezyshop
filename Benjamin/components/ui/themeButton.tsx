"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/context/themeProvider"

export function ModeToggle() {
  const { toggleTheme } = useTheme() || { toggleTheme: () => {} };


  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
        <Button onClick={ toggleTheme} variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      // </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem >
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={ toggleTheme}>
    //       Dark
    //     </DropdownMenuItem>
    //     {/* <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem> */}
    //   </DropdownMenuContent>
    // </DropdownMenu>
  )
}
