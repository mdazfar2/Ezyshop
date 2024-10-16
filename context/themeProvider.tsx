"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// Create the context with a default value of undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light"); // Default to light theme

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
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setLoading(false);
  },[])

  if(loading) return null;

  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
