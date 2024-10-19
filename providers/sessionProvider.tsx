"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "@/context/themeProvider";
import { ConstructionProvider } from "@/context/modalContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <ConstructionProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </ConstructionProvider>
    </SessionProvider>
  );
};
