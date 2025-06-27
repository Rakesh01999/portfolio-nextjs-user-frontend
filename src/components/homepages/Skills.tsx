"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
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

// Define types for our skill data structure
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

// Define a type for our tab IDs that matches keys in skillsData
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
      { icon: <MdCode />, name: "C", color: "text-blue-600" },
      { icon: <MdCode />, name: "C++", color: "text-blue-600" },
      { icon: <FaJsSquare />, name: "JavaScript", color: "text-yellow-500" },
      { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
    ],
    frontend: [
      { icon: <SiNextdotjs />, name: "Next.js", color: "text-gray-900" },
      { icon: <FaReact />, name: "React", color: "text-blue-400" },
      { icon: <SiRedux />, name: "Redux", color: "text-purple-600" },
      { icon: <SiAntdesign />, name: "Ant Design", color: "text-red-500" },
      { icon: <SiPrimereact />, name: "PrimeReact", color: "text-blue-500" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "text-teal-400" },
      { icon: <RiBracesLine />, name: "ShadCN", color: "text-gray-800" },
      { icon: <FaHtml5 />, name: "HTML", color: "text-orange-500" },
    ],
    backend: [
      { icon: <SiNodedotjs />, name: "Node.js", color: "text-green-600" },
      { icon: <SiExpress />, name: "Express.js", color: "text-gray-700" },
      {
        icon: <FaRegFileCode />,
        name: "MVC pattern",
        color: "text-orange-500",
      },
      { icon: <RiFileEditLine />, name: "Validation", color: "text-blue-500" },
    ],
    database: [
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "text-blue-600" },
      { icon: <SiPrisma />, name: "Prisma", color: "text-green-600" },
      { icon: <FaDatabase />, name: "MongoDB", color: "text-green-700" },
      { icon: <FaDatabase />, name: "Mongoose", color: "text-green-600" },
      { icon: <SiFirebase />, name: "Firebase", color: "text-orange-500" },
    ],
    tools: [
      { icon: <SiGit />, name: "Git", color: "text-orange-600" },
      { icon: <SiGithub />, name: "GitHub", color: "text-gray-900" },
      { icon: <SiGooglechrome />, name: "DevTools", color: "text-blue-500" },
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
      icon: <SiCodeforces className="text-4xl text-blue-600" />,
      href: "https://codeforces.com/profile/rk778",
    },
    {
      name: "CodeChef",
      icon: <SiCodechef className="text-4xl text-red-600" />,
      href: "https://www.codechef.com/users/rk999",
    },
    {
      name: "AtCoder",
      icon: <GoCodeReview className="text-4xl text-gray-800" />,
      href: "https://atcoder.jp/users/Rakesh01",
    },
    {
      name: "LightOJ",
      icon: (
        <span className="text-2xl font-semibold text-blue-800">LightOJ</span>
      ),
      href: "https://lightoj.com/user/rakeshbiswas",
    },
    {
      name: "LeetCode",
      icon: <SiLeetcode className="text-4xl text-blue-800" />,
      href: "https://leetcode.com/u/rk778/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    // <div className="w-full bg-gradient-to-b from-white to-gray-50 py-20 px-4">
    <div className="w-full  py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Technical Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-cyan-500">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-cyan-500 mx-auto"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-5 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-gray-700 text-white shadow-lg shadow-cyan-400/30"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {activeTab !== "soft" ? (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {skillsData[activeTab].map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      // boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                      // backgroundColor: "#f3f4f6",
                      boxShadow: "0 10px 25px -5px rgba(6, 182, 212, 0.3)",
                    }}
                    className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-all h-32"
                  >
                    {"icon" in skill && (
                      <div className={`text-4xl mb-3 ${skill.color}`}>
                        {skill.icon}
                      </div>
                    )}
                    <span className="text-center font-medium text-gray-800">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {skillsData.soft.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-md p-6 flex items-center gap-4"
                  >
                    {/* <div className="bg-blue-100 rounded-full p-3"> */}
                    <div className="bg-gray-600 rounded-full p-3">
                      <GiSkills className="text-2xl text-cyan-300" />
                    </div>
                    <span className="font-medium text-gray-800">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.section>

        {/* Problem Solving Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center my-12">
            {/* <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-cyan-500">
              Problem Solving Skills
            </h2> */}
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-cyan-500">
                Problem Solving Skills
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-cyan-500 mx-auto"></div>
            </div>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              I have solved over
              <span className="font-semibold text-cyan-600"> 400+ </span>
              problems on various competitive programming platforms.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 md:max-w-4xl mx-auto"
          >
            {codingPlatforms.map((platform, index) => (
              <Link
                key={index}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center space-y-3"
              >
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white hover:shadow-lg hover:shadow-cyan-700 rounded-xl shadow-lg p-6 flex flex-col items-center justify-center transition-all"
                >
                  {platform.icon}
                  <span className="text-sm font-medium text-gray-800">
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
