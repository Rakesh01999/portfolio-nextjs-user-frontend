"use client";

import Blogsfetch from "@/utils/actions/Blogsfetch";
import { useEffect, useState } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

interface Blog {
  _id: string;
  image: string;
  title: string;
  description: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

const SingleBlog = ({ blogId }: { blogId: string }) => {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBlog = async () => {
      setLoading(true);
      try {
        const data = await Blogsfetch();
        const singleBlog = data.find((da: Blog) => da._id === blogId) || null;
        setBlog(singleBlog);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
      setLoading(false);
    };

    getBlog();
  }, [blogId]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <p className="text-lg text-red-400 font-medium mb-4">Blog not found.</p>
          <Link
            href="/blogs"
            className="text-cyan-500 hover:text-cyan-400 font-medium transition-colors duration-300"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Back Link */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-cyan-500 transition-colors duration-300"
        >
          <HiArrowLeft size={18} />
          <span className="font-medium">Back to Blogs</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden"
      >
        {/* Blog Image */}
        <div className="relative h-64 sm:h-80 md:h-96 w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent" />
        </div>

        {/* Blog Content */}
        <div className="p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-6">
            {blog.title}
          </h1>

          <div
            className="prose max-w-none text-[var(--text-secondary)] leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog.description),
            }}
          ></div>

          <div className="mt-8 pt-6 border-t border-[var(--card-border)] flex items-center justify-between">
            <p className="text-sm text-[var(--text-secondary)] italic">
              Last updated on{" "}
              {new Date(blog.updatedAt).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SingleBlog;
