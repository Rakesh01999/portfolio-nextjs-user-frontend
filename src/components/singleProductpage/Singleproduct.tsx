"use client";

import projectUser from "@/utils/actions/projectUser";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";

type ProjectData = {
  _id: string;
  image: string;
  title: string;
  description: string[];
  github_link: string;
  project_link: string;
  isDeleted: boolean;
  technologies: string[];
  createdAt: string;
  updatedAt: string;
};

const Singleproduct = ({ projectId }: { projectId: string }) => {
  const [project, setProject] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      const data = await projectUser();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const singleData = data.filter((da: any) => da._id === projectId);
      setProject(singleData);
      setLoading(false);
    };

    getProject();
  }, [projectId]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-cyan-500 transition-colors duration-300"
          >
            <HiArrowLeft size={18} />
            <span className="font-medium">Back to Projects</span>
          </Link>
        </motion.div>

        {project?.map((proj, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden"
          >
            {/* Project Image & Title */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 sm:p-8">
              <div className="relative overflow-hidden rounded-lg md:w-1/2">
                <Image
                  src={proj?.image}
                  alt={proj?.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-64 md:h-80 rounded-lg"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h1 className="text-2xl sm:text-3xl font-bold gradient-text">
                  {proj?.title}
                </h1>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {proj.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-600 text-sm font-medium border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={proj?.project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaExternalLinkAlt size={14} /> Live Demo
                  </a>
                  <a
                    href={proj?.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-color)] text-sm font-medium hover:border-cyan-500 transition-all duration-300 flex items-center gap-2"
                  >
                    <FaGithub size={14} /> Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="p-6 sm:p-8 border-t border-[var(--card-border)]">
              <h2 className="text-xl font-semibold text-[var(--text-color)] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                Features
              </h2>
              <ul className="space-y-3">
                {proj?.description?.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                    <span className="leading-relaxed">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Singleproduct;
