"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative inline-flex items-center justify-center rounded-full w-10 h-10 
        bg-white dark:bg-gray-800 
        hover:bg-gray-100 dark:hover:bg-gray-700
        border border-gray-200 dark:border-gray-700
        text-gray-500 dark:text-gray-400
        hover:text-gray-700 dark:hover:text-gray-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        transition-all duration-200 ease-in-out
        shadow-sm"
      aria-label="Toggle theme"
    >
      <span className="sr-only">Toggle theme</span>
      <span className="absolute transform transition-transform duration-300 ease-in-out">
        {theme === "light" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </span>
    </button>
  );
};
