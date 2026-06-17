"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
    { href: "/experience", label: "Experience" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/Rakesh01999",
      icon: <FaGithub size={18} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/rakeshbiswas0199/",
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
    },
    {
      href: "mailto:rbiswas01999@gmail.com",
      icon: <FaEnvelope size={18} />,
      label: "Email",
    },
    {
      href: "https://www.facebook.com/rakeshbiswas.biswas.9843/",
      icon: <FaFacebook size={18} />,
      label: "Facebook",
    },
  ];

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--card-border)] px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                RB
              </div>
              <h2 className="text-xl font-bold gradient-text">Rakesh Biswas</h2>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Full Stack Developer passionate about building modern, scalable web applications and solving complex problems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-[var(--text-color)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-cyan-500 transition-colors duration-300 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/50 group-hover:bg-cyan-500 transition-colors duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-[var(--text-color)] mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
              <li>
                <a
                  href="mailto:rbiswas01999@gmail.com"
                  className="hover:text-cyan-500 transition-colors duration-300"
                >
                  rbiswas01999@gmail.com
                </a>
              </li>
              <li>Khulna, Bangladesh</li>
            </ul>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-[var(--text-color)] mb-4">
              Follow Me
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-500 hover:border-cyan-500 transition-all duration-300 hover:scale-110"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 pt-6 border-t border-[var(--card-border)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-sm text-[var(--text-secondary)]">
              © {new Date().getFullYear()} Rakesh Biswas. All rights reserved.
            </p>
            <p className="text-sm text-[var(--text-secondary)] flex items-center gap-1">
              Made with <FaHeart size={12} className="text-cyan-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
