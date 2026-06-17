"use client";

import { useEffect, useState } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme =
      typeof window !== "undefined"
        ? localStorage.getItem("theme") || "light"
        : "light";

    setTheme(savedTheme as "light" | "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);

    // Also apply dark class for Tailwind dark mode support
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Listen for theme changes from navbar
  useEffect(() => {
    const handleStorageChange = () => {
      const newTheme = localStorage.getItem("theme") || "light";
      setTheme(newTheme as "light" | "dark");
      document.documentElement.setAttribute("data-theme", newTheme);

      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    // Custom event listener for theme changes within the same tab
    const handleThemeChange = () => {
      const newTheme = localStorage.getItem("theme") || "light";
      setTheme(newTheme as "light" | "dark");
      document.documentElement.setAttribute("data-theme", newTheme);

      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("themeChanged", handleThemeChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("themeChanged", handleThemeChange);
    };
  }, []);

  return (
    <body className={`${theme} min-h-screen`} suppressHydrationWarning>
      {children}
    </body>
  );
};

export default ThemeProvider;
