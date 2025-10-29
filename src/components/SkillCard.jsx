 import React from "react";
import { motion } from "framer-motion";

export default function SkillCard({ skill }) {
  const Icon = skill.icon || null;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex flex-col items-center justify-center p-6 bg-white border border-green-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {Icon ? (
        <Icon className="text-green-600 text-5xl mb-3" aria-hidden="true" />
      ) : (
        <div className="w-12 h-12 bg-green-100 rounded-full mb-3" />
      )}
      <div className="text-lg font-semibold text-gray-800">{skill.name}</div>
    </motion.div>
  );
}
