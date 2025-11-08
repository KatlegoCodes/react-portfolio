import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Start with light as default
  const [mounted, setMounted] = useState(false); // Track when component is mounted

  useEffect(() => {
    // This runs only on client side after mount
    setMounted(true);

    // Get theme from localStorage or system preference
    const savedTheme = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";

    const initialTheme = savedTheme || systemPreference;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (!mounted) return; // Don't run until component is mounted

    const root = document.documentElement;

    // Remove both classes first
    root.classList.remove("light", "dark");

    // Add the current theme
    root.classList.add(theme);

    // Save to localStorage
    localStorage.setItem("theme", theme);

    console.log("Theme applied:", theme); // Debug log
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Prevent flash of wrong theme by not rendering until mounted
  if (!mounted) {
    return <div className="min-h-screen bg-white"></div>; // Or a loading skeleton
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
