 import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiFastapi, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "FastAPI", icon: <SiFastapi /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white text-center px-6">
      <motion.h2
        className="text-3xl font-bold text-green-600 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="p-6 border border-green-200 rounded-lg shadow-sm hover:shadow-lg text-green-600 text-3xl"
          >
            {skill.icon}
            <p className="mt-2 text-gray-800 text-sm">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
