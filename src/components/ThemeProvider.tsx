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
  }, []);

  return (
    <body className={`${theme} min-h-screen`} suppressHydrationWarning>
      {children}
    </body>
  );
};

export default ThemeProvider;
