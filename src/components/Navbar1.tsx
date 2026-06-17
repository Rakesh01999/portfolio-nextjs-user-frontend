"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar1 = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/experience", label: "Experience" },
  ];

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const preferred = storedTheme ?? "light";
    setTheme(preferred);
    document.documentElement.setAttribute("data-theme", preferred);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);

    // Dispatch custom event so ThemeProvider can react
    window.dispatchEvent(new Event("themeChanged"));

    // Also toggle dark class for Tailwind
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "glass-strong shadow-lg shadow-[var(--shadow-color)]"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-cyan-500/30 transition-shadow duration-300">
              RB
            </div>
            <span className="text-lg font-semibold gradient-text hidden sm:block">
              Rakesh Biswas
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${pathname === href
                  ? "text-white"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-color)]"
                  }`}
              >
                {pathname === href && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </Link>
            ))}
          </div>

          {/* Right Section: Theme Toggle + Resume */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={handleToggle}
              className="relative w-10 h-10 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] flex items-center justify-center hover:border-[var(--accent-color)] transition-all duration-300 group"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-yellow-400"
                  >
                    <FaSun size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-slate-600"
                  >
                    <FaMoon size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1gzi0cDSkVTIR-Ase9rAiCOtDzLzspZD7/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={handleToggle}
              className="w-9 h-9 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] flex items-center justify-center"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <FaSun size={16} className="text-yellow-400" />
              ) : (
                <FaMoon size={16} className="text-slate-600" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <HiX size={20} className="text-[var(--text-color)]" />
              ) : (
                <HiMenuAlt3 size={20} className="text-[var(--text-color)]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map(({ href, label }, index) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${pathname === href
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                      : "text-[var(--text-secondary)] hover:bg-[var(--input-bg)] hover:text-[var(--text-color)]"
                      }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <a
                  href="https://drive.google.com/file/d/1gzi0cDSkVTIR-Ase9rAiCOtDzLzspZD7/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium text-center"
                >
                  View Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar1;
