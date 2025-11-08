import React from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  const variants = {
    light: { x: 0, backgroundColor: "#ffffff" },
    dark: { x: 26, backgroundColor: "#111827" }, // gray-900
  };

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=" top-6 right-6 z-50 relative w-14 h-8 rounded-full flex items-center
                 bg-gray-200 dark:bg-gray-700 shadow-inner border border-gray-300 dark:border-gray-600
                 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500
                 dark:focus:ring-yellow-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
    >
      {/* Sun Icon */}
      <motion.div
        className="absolute left-1 top-1/2 -translate-y-1/2 text-yellow-500"
        animate={{
          opacity: isDark ? 0 : 1,
          scale: isDark ? 0.5 : 1,
          rotate: isDark ? -180 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Sun size={16} />
      </motion.div>

      {/* Moon Icon */}
      <motion.div
        className="absolute right-1 top-1/2 -translate-y-1/2 text-blue-400"
        animate={{
          opacity: isDark ? 1 : 0,
          scale: isDark ? 1 : 0.5,
          rotate: isDark ? 0 : 180,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Moon size={16} />
      </motion.div>

      {/* Toggle Circle */}
      <motion.div
        className="absolute top-1 w-6 h-6 rounded-full shadow-md flex items-center justify-center"
        initial={false}
        animate={isDark ? "dark" : "light"}
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {/* Dynamic Glow */}
        <motion.div
          className="absolute inset-0 rounded-full blur-md"
          animate={{
            backgroundColor: isDark
              ? "rgba(59,130,246,0.35)" // blue-500 glow
              : "rgba(250,204,21,0.35)", // yellow-400 glow
            opacity: 1,
          }}
          transition={{ duration: 0.4 }}
        />
      </motion.div>

      {/* Screen Reader Text */}
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </motion.button>
  );
};
