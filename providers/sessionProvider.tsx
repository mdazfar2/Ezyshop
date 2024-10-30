"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "context/themeProvider";
import { FlashAlertProvider } from "context/flashAlertContext";
import { GlobalStoreProvider } from "context/storeContext";
// import { ConstructionProvider } from "@/context/modalContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <FlashAlertProvider>
        <GlobalStoreProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </GlobalStoreProvider>
      </FlashAlertProvider>
    </SessionProvider>
  );
};
