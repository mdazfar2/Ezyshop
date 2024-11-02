"use client"; // Ensure it runs only in the browser

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the Flash Alert Context
interface FlashAlertContextType {
  isOpen: boolean; // State to track if the alert is open
  openDialog: () => void; // Function to open the alert dialog
  closeDialog: () => void; // Function to close the alert dialog
}

// Create the Flash Alert Context with an undefined initial value
const FlashAlertContext = createContext<FlashAlertContextType | undefined>(undefined);

// FlashAlertProvider component to wrap parts of the app needing access to the context
export const FlashAlertProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the open/close status of the alert

  const openDialog = () => setIsOpen(true); // Function to set the alert to open
  const closeDialog = () => setIsOpen(false); // Function to set the alert to closed

  return (
    <FlashAlertContext.Provider value={{ isOpen, openDialog, closeDialog }}>
      {children}
    </FlashAlertContext.Provider>
  );
};

// Custom hook to use the FlashAlertContext in components
export const useFlashAlert = () => {
  const context = useContext(FlashAlertContext);
  if (!context) {
    throw new Error("useFlashAlert must be used within a FlashAlertProvider. Please ensure that you wrap your components with FlashAlertProvider.");
  }
  return context;
};
