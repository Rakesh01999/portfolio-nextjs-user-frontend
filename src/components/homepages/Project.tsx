/* eslint-disable react/jsx-key */
"use client";

import projectUser from "@/utils/actions/projectUser";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

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

const Project = () => {
  const [project, setProject] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getProject = async () => {
      setLoading(true);
      const data = await projectUser();
      setProject(data);
      setLoading(false);
    };

    getProject();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">
            Featured Projects
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
          />
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project?.slice(0, 4).map((proj, index) => (
            <motion.div
              key={proj._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick Links Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={proj.project_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/90 text-slate-800 text-xs font-medium hover:bg-white transition-colors flex items-center gap-1"
                  >
                    <FaExternalLinkAlt size={12} /> Live
                  </a>
                  <a
                    href={proj.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/90 text-slate-800 text-xs font-medium hover:bg-white transition-colors flex items-center gap-1"
                  >
                    <FaGithub size={12} /> Code
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-5">
                <h4 className="text-lg font-bold text-[var(--text-color)] mb-2 group-hover:text-cyan-500 transition-colors duration-300">
                  {proj.title}
                </h4>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-600 text-xs font-medium border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {proj.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md bg-[var(--input-bg)] text-[var(--text-secondary)] text-xs font-medium">
                      +{proj.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Detail Link */}
                <Link
                  href={`projects/${proj._id}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] hover:text-cyan-500 transition-colors duration-300 group/link"
                >
                  View Details
                  <HiArrowRight className="group-hover/link:translate-x-1 transition-transform duration-300" size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        {project.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-10"
          >
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 flex items-center gap-2"
              >
                <span>See All Projects</span>
                <HiArrowRight size={18} />
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Project;
