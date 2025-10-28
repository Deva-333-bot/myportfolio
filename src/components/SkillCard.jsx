import React from "react";
import { motion } from "framer-motion";

export default function SkillCard({ skill }){
  const Icon = skill.icon || null;
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="skill-card">
      {Icon ? <Icon className="skill-icon" /> : <div className="skill-icon-placeholder" />}
      <div className="skill-name">{skill.name}</div>
    </motion.div>
  );
}
