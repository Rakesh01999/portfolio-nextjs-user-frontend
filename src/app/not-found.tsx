"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowLeft, HiHome } from "react-icons/hi";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-8xl md:text-9xl font-bold gradient-text">404</h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-color)] mb-3">
            Page Not Found
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <HiHome size={18} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-xl border border-[var(--card-border)] text-[var(--text-color)] font-medium hover:border-cyan-500 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <HiArrowLeft size={18} />
            Go Back
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
