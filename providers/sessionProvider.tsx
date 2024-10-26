"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/context/themeProvider";
import { FlashAlertProvider } from "@/context/flashAlertContext";
// import { ConstructionProvider } from "@/context/modalContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <FlashAlertProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </FlashAlertProvider>
    </SessionProvider>
  );
};
