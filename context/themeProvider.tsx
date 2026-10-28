"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedTheme = localStorage.getItem("ezyshop-theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        setTheme(savedTheme);
        const root = document.documentElement;
        if (savedTheme === "dark") {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      } else {
        // Fallback to checking existing class on html element or system preference
        const isDark = document.documentElement.classList.contains("dark") || 
          window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = isDark ? "dark" : "light";
        setTheme(initialTheme);
        if (isDark) {
          document.documentElement.classList.add("dark");
        }
      }
    } catch (e) {
      console.error("Theme initialization error:", e);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "light" ? "dark" : "light";
      try {
        localStorage.setItem("ezyshop-theme", nextTheme);
      } catch (e) {
        console.error("Failed to persist theme in localStorage:", e);
      }

      const root = document.documentElement;
      if (nextTheme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }

      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`${theme} min-h-screen bg-background text-foreground transition-colors duration-200`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    return { theme: "light", toggleTheme: () => {} };
  }
  return context;
};
