 import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 text-center px-6">
      <motion.h2
        className="text-3xl font-bold text-green-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-gray-700 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        I'm a passionate software engineer proficient in Python, Java, JavaScript, React, 
        MySQL, PostgreSQL, and FastAPI. I enjoy solving real-world problems using 
        technology — especially in machine learning and data science.
      </motion.p>
    </section>
  );
}
