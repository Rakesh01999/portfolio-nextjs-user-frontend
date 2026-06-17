"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Banner = () => {
  const socialLinks = [
    {
      href: "https://github.com/Rakesh01999",
      icon: <FaGithub size={20} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/rakeshbiswas0199/",
      icon: <FaLinkedinIn size={20} />,
      label: "LinkedIn",
    },
    {
      href: "mailto:rbiswas01999@gmail.com",
      icon: <FaEnvelope size={20} />,
      label: "Email",
    },
  ];

  return (
    <div className="w-full min-h-[85vh] flex items-center relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-animation" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-animation" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-1 text-center md:text-left space-y-6"
          >
            {/* Greeting Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-sm font-medium text-[var(--text-secondary)]">
                Available for opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Rakesh</span>
              <br />
              <span className="gradient-text">Biswas</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-medium text-[var(--text-secondary)]"
            >
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "Backend Developer",
                  "Frontend Developer",
                  "MERN Stack Developer",
                ]}
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </motion.div>

            {/* Competitive Programmer Badge */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-[var(--text-secondary)]"
            >
              🏆 Competitive Programmer | 400+ Problems Solved
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start pt-2"
            >
              <Link
                href="/projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.02]"
              >
                View Projects
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl border border-[var(--card-border)] text-[var(--text-color)] font-medium hover:border-cyan-500 hover:text-cyan-500 transition-all duration-300 hover:scale-[1.02]"
              >
                Get In Touch
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-3 justify-center md:justify-start pt-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="w-10 h-10 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-cyan-500 hover:border-cyan-500 transition-all duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-20 blur-md scale-110" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <Image
                  src="/rakesh2.png"
                  width={300}
                  height={300}
                  alt="Rakesh Biswas"
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium shadow-lg"
              >
                MERN Stack
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
