"use client"; // Ensure it runs only in the browser

import React, { createContext, useContext, useState, ReactNode } from "react";

interface FlashAlertContextType {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const FlashAlertContext = createContext<FlashAlertContextType | undefined>(undefined);

export const FlashAlertProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <FlashAlertContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </FlashAlertContext.Provider>
  );
};

export const useFlashAlert = () => {
  const context = useContext(FlashAlertContext);
  if (!context) {
    throw new Error("useFlashAlert must be used within a FlashAlertProvider");
  }
  return context;
};
