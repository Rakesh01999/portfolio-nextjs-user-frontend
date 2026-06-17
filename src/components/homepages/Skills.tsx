"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiCodeforces, SiCodechef, SiLeetcode } from "react-icons/si";
import { GoCodeReview } from "react-icons/go";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaCogs,
  FaHtml5,
  FaReact,
  FaJsSquare,
  FaRegFileCode,
} from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { TbCodeDots } from "react-icons/tb";
import Link from "next/link";
import {
  SiNextdotjs,
  SiRedux,
  SiAntdesign,
  SiTailwindcss,
  SiPrimereact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGooglechrome,
} from "react-icons/si";
import { RiBracesLine, RiFileEditLine } from "react-icons/ri";
import { MdCode } from "react-icons/md";

type SkillWithIcon = {
  icon: React.ReactNode;
  name: string;
  color: string;
};

type SoftSkill = {
  name: string;
};

type SkillsDataType = {
  languages: SkillWithIcon[];
  frontend: SkillWithIcon[];
  backend: SkillWithIcon[];
  database: SkillWithIcon[];
  tools: SkillWithIcon[];
  soft: SoftSkill[];
};

type TabId = keyof SkillsDataType;

const Skills = () => {
  const [activeTab, setActiveTab] = useState<TabId>("languages");

  const tabs = [
    { id: "languages" as TabId, label: "Languages", icon: <TbCodeDots /> },
    { id: "frontend" as TabId, label: "Frontend", icon: <FaCode /> },
    { id: "backend" as TabId, label: "Backend", icon: <FaCogs /> },
    { id: "database" as TabId, label: "Database", icon: <FaDatabase /> },
    { id: "tools" as TabId, label: "Tools", icon: <FaTools /> },
    { id: "soft" as TabId, label: "Soft Skills", icon: <GiSkills /> },
  ];

  const skillsData: SkillsDataType = {
    languages: [
      { icon: <MdCode />, name: "C", color: "text-blue-500" },
      { icon: <MdCode />, name: "C++", color: "text-blue-600" },
      { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-400" },
      { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-500" },
    ],
    frontend: [
      { icon: <SiNextdotjs />, name: "Next.js", color: "text-slate-800" },
      { icon: <FaReact />, name: "React", color: "text-cyan-400" },
      { icon: <SiRedux />, name: "Redux", color: "text-purple-500" },
      { icon: <SiAntdesign />, name: "Ant Design", color: "text-red-400" },
      { icon: <SiPrimereact />, name: "PrimeReact", color: "text-blue-400" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-teal-400" },
      { icon: <RiBracesLine />, name: "ShadCN", color: "text-slate-600" },
      { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
    ],
    backend: [
      { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-500" },
      { icon: <SiExpress />, name: "Express.js", color: "text-slate-500" },
      { icon: <FaRegFileCode />, name: "MVC pattern", color: "text-orange-400" },
      { icon: <RiFileEditLine />, name: "Validation", color: "text-blue-400" },
    ],
    database: [
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-500" },
      { icon: <SiPrisma />, name: "Prisma", color: "text-green-500" },
      { icon: <FaDatabase />, name: "MongoDB", color: "text-green-600" },
      { icon: <FaDatabase />, name: "Mongoose", color: "text-green-500" },
      { icon: <SiFirebase />, name: "Firebase", color: "text-orange-400" },
    ],
    tools: [
      { icon: <SiGit />, name: "Git", color: "text-orange-500" },
      { icon: <SiGithub />, name: "GitHub", color: "text-slate-800" },
      { icon: <SiGooglechrome />, name: "DevTools", color: "text-blue-400" },
    ],
    soft: [
      { name: "Problem Solving" },
      { name: "Team Collaboration" },
      { name: "Conversational English" },
      { name: "Adaptability" },
    ],
  };

  const codingPlatforms = [
    {
      name: "CodeForces",
      icon: <SiCodeforces className="text-3xl text-blue-500" />,
      href: "https://codeforces.com/profile/rk778",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "CodeChef",
      icon: <SiCodechef className="text-3xl text-red-500" />,
      href: "https://www.codechef.com/users/rk999",
      color: "from-red-500 to-orange-500",
    },
    {
      name: "AtCoder",
      icon: <GoCodeReview className="text-3xl text-slate-600" />,
      href: "https://atcoder.jp/users/Rakesh01",
      color: "from-slate-500 to-slate-600",
    },
    {
      name: "LightOJ",
      icon: (
        <span className="text-xl font-bold text-blue-600">LightOJ</span>
      ),
      href: "https://lightoj.com/user/rakeshbiswas",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="text-3xl text-yellow-500" />,
      href: "https://leetcode.com/u/rk778/",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Technical Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold gradient-text"
            >
              Technical Skills
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto"
            >
              Technologies and tools I work with to build modern, scalable applications
            </motion.p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20"
                    : "bg-[var(--card-bg)] border border-[var(--card-border)] text-[var(--text-secondary)] hover:border-cyan-500/50 hover:text-[var(--text-color)]"
                  }`}
              >
                <span className="text-base">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {activeTab !== "soft" ? (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                >
                  {skillsData[activeTab].map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{
                        y: -6,
                        boxShadow: "0 15px 30px -5px rgba(6, 182, 212, 0.2)",
                      }}
                      className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 flex flex-col items-center justify-center transition-all duration-300 hover:border-cyan-500/30 group"
                    >
                      {"icon" in skill && (
                        <div
                          className={`text-3xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                        >
                          {skill.icon}
                        </div>
                      )}
                      <span className="text-center font-medium text-[var(--text-color)] text-sm">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {skillsData.soft.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.02 }}
                      className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 flex items-center gap-4 transition-all duration-300 hover:border-cyan-500/30"
                    >
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg p-2.5">
                        <GiSkills className="text-xl text-white" />
                      </div>
                      <span className="font-medium text-[var(--text-color)]">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* Problem Solving Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-5xl font-bold gradient-text"
            >
              Problem Solving Skills
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-4 rounded-full"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mt-4"
            >
              I have solved over{" "}
              <span className="font-semibold gradient-text"> 400+ </span>
              problems on various competitive programming platforms.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
          >
            {codingPlatforms.map((platform, index) => (
              <Link
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-5 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </div>
                  <span className="text-sm font-medium text-[var(--text-color)]">
                    {platform.name}
                  </span>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Skills;
