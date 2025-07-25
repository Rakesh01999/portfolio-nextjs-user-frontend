"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar1 = () => {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/experience", label: "Experience" },
  ];

  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Load theme from localStorage on first render
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const preferred = storedTheme ?? "light";

    setTheme(preferred);
    document.documentElement.setAttribute("data-theme", preferred);
  }, []);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTheme = e.target.checked ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const links = (
    <div className="space-x-3 gap-4 flex sm:flex-col lg:flex-row">
      {navLinks.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`${
            pathname === href ? "text-white font-bold text-lg" : "text-white text-lg"
          } ${label === "Home" ? "ml-3" : ""}`}
        >
          {label}
        </Link>
      ))}

      <section className="flex items-center">
        <label className="flex gap-2">
          {/* Sun Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>

          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "dark"}
            className="toggle theme-controller"
          />

          {/* Moon Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </label>
      </section>
    </div>
  );

  return (
    <div className="navbar fixed z-10 w-full bg-cyan-700 h-20 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-cyan-700 rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <a
          className="btn btn-neutral mr-3 text-white animate-pulse"
          href="https://drive.google.com/file/d/1gzi0cDSkVTIR-Ase9rAiCOtDzLzspZD7/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
        <a
          className="btn btn-neutral mr-3 text-white animate-pulse"
          href="https://drive.google.com/uc?export=download&id=1gzi0cDSkVTIR-Ase9rAiCOtDzLzspZD7"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar1;
