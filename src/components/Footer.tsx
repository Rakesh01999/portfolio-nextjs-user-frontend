"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-3 text-cyan-400">Rakesh Biswas</h2>
          <p className="text-sm text-gray-400">Full Stack Developer | Tech Innovator</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-cyan-400">Home</Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-cyan-400">Projects</Link>
            </li>
            <li>
              <Link href="/blogs" className="hover:text-cyan-400">Blogs</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Contact</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:rbiswas01999@gmail.com"
                className="hover:text-cyan-400"
              >
                rbiswas01999@gmail.com
              </a>
            </li>
            <li>Location: Khulna, Bangladesh</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-cyan-300">Follow Me</h3>
          <div className="flex space-x-5 text-xl text-gray-400">
            <a
              href="https://github.com/Rakesh01999"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rakeshbiswas0199/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:rbiswas01999@gmail.com"
              className="hover:text-cyan-400"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.facebook.com/rakeshbiswas.biswas.9843/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-700 pt-6 text-cyan-500 text-sm">
        © {new Date().getFullYear()} Rakesh Biswas. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
