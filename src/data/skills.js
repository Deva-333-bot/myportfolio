 import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data/skills"; // ✅ Import your centralized skills data
import SkillCard from "./SkillCard"; // ✅ Import your reusable SkillCard component

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white text-center px-6">
      {/* Section Heading */}
      <motion.h2
        className="text-4xl font-bold text-green-600 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
