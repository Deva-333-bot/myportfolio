 import React from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaReact, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiFastapi, SiPostgresql } from "react-icons/si";

const skills = [
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: FaReact },
  { name: "MySQL", icon: FaDatabase },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "FastAPI", icon: SiFastapi },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white to-green-50 text-center px-6"
    >
      <motion.h2
        className="text-4xl font-extrabold text-green-600 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Tech Stack
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-4xl mx-auto">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08, y: -5 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="flex flex-col items-center justify-center bg-white border border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-green-400 transition-all duration-300"
            >
              <Icon className="text-green-600 text-5xl mb-3" />
              <p className="text-gray-800 font-semibold text-lg">{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
