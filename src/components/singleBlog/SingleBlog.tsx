"use client";

import Blogsfetch from "@/utils/actions/Blogsfetch";
import { useEffect, useState } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";

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

  if (loading)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-lg md:text-2xl text-cyan-600">Loading blog...</p>
      </div>
    );

  if (!blog)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-lg text-red-500 font-medium">Blog not found.</p>
      </div>
    );

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden mt-10">
        <div className="relative h-64 sm:h-96 w-full">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover w-full h-full"
          />
        </div>

        <div className="p-6 sm:p-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            {blog.title}
          </h1>

          <div
            className="prose max-w-none text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog.description),
            }}
          ></div>

          <p className="mt-8 text-sm text-gray-500 dark:text-gray-400 italic">
            Last updated on{" "}
            {new Date(blog.updatedAt).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
