"use client";

import Blogsfetch from "@/utils/actions/Blogsfetch";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import DOMPurify from "dompurify";
import { HiArrowRight } from "react-icons/hi";

interface ProjectData {
  _id: string;
  image: string;
  title: string;
  description: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const Allblogs = () => {
  const [blogs, setBlogs] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBlogs = async () => {
      setLoading(true);
      const data = await Blogsfetch();
      setBlogs(data);
      setLoading(false);
    };

    getBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold gradient-text">
          Blog Writings
        </h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
        />
        <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
          Thoughts, insights, and technical articles I've written
        </p>
      </motion.div>

      {/* Blog Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog._id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 group"
          >
            {/* Blog Image */}
            <div className="relative overflow-hidden h-48">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Blog Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-[var(--text-color)] mb-2 group-hover:text-cyan-500 transition-colors duration-300">
                {blog.title}
              </h3>
              <div
                className="text-sm text-[var(--text-secondary)] line-clamp-3 prose max-w-none"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.description),
                }}
              />

              <Link
                href={`/blogs/${blog._id}`}
                className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[var(--text-secondary)] hover:text-cyan-500 transition-colors duration-300 group/link"
              >
                Read Full Blog
                <HiArrowRight
                  size={14}
                  className="group-hover/link:translate-x-1 transition-transform duration-300"
                />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Allblogs;
