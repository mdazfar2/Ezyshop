"use client"; // Ensure it runs only in the browser

import { createContext, useContext, useState, ReactNode } from "react";

// Define the type for the Theme Context
interface ThemeContextType {
  theme: string; // Current theme: 'light' or 'dark'
  toggleTheme: () => void; // Function to toggle the theme
}

// Create the context with a default value of undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to provide theme state to its children
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light"); // Default to light theme

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>{children}</div> {/* Theme applied at root level */}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider"); // Error if not used within provider
  }
  return context; // Return the context
};
