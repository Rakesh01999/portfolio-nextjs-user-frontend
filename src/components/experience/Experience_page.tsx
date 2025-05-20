"use client";

import ExperienceFetch from "@/utils/actions/ExperienceFetch";
import React, { useEffect, useState } from "react";

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
        <p className="text-lg md:text-2xl text-cyan-600 ">Loading experiences...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-6 flex justify-center items-center">
      <div className="w-full max-w-6xl mt-20">
        <h1 className="text-3xl font-bold text-center mb-10 text-cyan-600">
          My Experiences
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp._id || index}
              className="bg-white rounded-xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {exp.subject}
              </h2>
              <p className="text-gray-600 whitespace-pre-line leading-relaxed text-base">
                {exp.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
