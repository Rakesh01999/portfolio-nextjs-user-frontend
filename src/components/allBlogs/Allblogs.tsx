"use client";

import Blogsfetch from "@/utils/actions/Blogsfetch";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Zoom } from "react-awesome-reveal";
import Link from "next/link";
import DOMPurify from "dompurify";

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

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg md:text-2xl font-medium text-cyan-600">Loading blogs...</p>
      </div>
    );

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mt-10 mb-10 text-cyan-600">
        Featured Blogs
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Zoom key={blog._id}>
            <div className="bg-white dark:bg-gray-900 shadow-xl rounded-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex flex-col justify-between h-full">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {blog.title}
                </h3>
                <div
                  className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 prose max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blog.description),
                  }}
                ></div>
                <Link
                  href={`/blogs/${blog._id}`}
                  className="inline-block mt-4 text-cyan-600 hover:text-cyan-600 font-medium"
                >
                  Read Full Blog →
                </Link>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </section>
  );
};

export default Allblogs;
