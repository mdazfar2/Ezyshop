"use client"; // Ensure it runs only in the browser

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ConstructionContextType {
  isOpen: boolean;
  openDialog: () => void;
  closeDialog: () => void;
}

const ConstructionContext = createContext<ConstructionContextType | undefined>(undefined);

export const ConstructionProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);

  return (
    <ConstructionContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </ConstructionContext.Provider>
  );
};

export const useConstruction = () => {
  const context = useContext(ConstructionContext);
  if (!context) {
    throw new Error("useConstruction must be used within a ConstructionProvider");
  }
  return context;
};
