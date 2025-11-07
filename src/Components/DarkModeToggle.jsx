import React from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 border border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Toggle Track */}
      <div className="relative w-full h-full">
        {/* Sun Icon */}
        <motion.div
          className="absolute left-1 top-1/2 transform -translate-y-1/2 text-yellow-500"
          initial={false}
          animate={{
            opacity: theme === "light" ? 1 : 0,
            scale: theme === "light" ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun size={16} />
        </motion.div>

        {/* Moon Icon */}
        <motion.div
          className="absolute right-1 top-1/2 transform -translate-y-1/2 text-blue-400"
          initial={false}
          animate={{
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon size={16} />
        </motion.div>

        {/* Toggle Knob */}
        <motion.div
          className="absolute top-1 w-6 h-6 bg-white dark:bg-gray-900 rounded-full shadow-lg flex items-center justify-center"
          initial={false}
          animate={{
            x: theme === "light" ? 0 : 26,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {/* Subtle glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-blue-500/20"
            animate={{
              opacity: theme === "dark" ? 0.3 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default DarkModeToggle;
