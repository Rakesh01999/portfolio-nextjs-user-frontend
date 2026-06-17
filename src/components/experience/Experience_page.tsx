"use client";

import ExperienceFetch from "@/utils/actions/ExperienceFetch";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

type Experience = {
  subject: string;
  body: string;
  _id?: string;
};

const ExperiencePage = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await ExperienceFetch();
      setExperiences(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-5xl font-bold gradient-text">
            My Experiences
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
          />
          <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">
            Professional journey and learning experiences that shaped my career
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 md:-translate-x-0.5" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp._id || index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`relative flex items-start gap-6 ${index % 2 === 0
                    ? "md:flex-row md:text-left"
                    : "md:flex-row-reverse md:text-right"
                  } flex-row text-left`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 -translate-x-1.5 md:-translate-x-1.5 mt-8 shadow-md shadow-cyan-500/30 z-10" />

                {/* Content Card */}
                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}>
                  <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                        <FaBriefcase size={16} />
                      </div>
                      <h2 className="text-lg font-semibold text-[var(--text-color)] group-hover:text-cyan-500 transition-colors duration-300">
                        {exp.subject}
                      </h2>
                    </div>

                    {/* Body */}
                    <p className="text-[var(--text-secondary)] whitespace-pre-line leading-relaxed text-sm">
                      {exp.body}
                    </p>

                    {/* Date indicator */}
                    <div className="flex items-center gap-2 mt-4 text-xs text-[var(--text-secondary)]">
                      <FaCalendarAlt size={12} />
                      <span>Experience #{index + 1}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
