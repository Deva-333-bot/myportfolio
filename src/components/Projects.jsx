 import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    desc: "A modern and responsive personal portfolio built with React, Tailwind CSS, and Framer Motion — showcasing my journey and projects.",
    link: "#",
  },
  {
    name: "Machine Learning Model",
    desc: "A Python-based ML project that leverages predictive analytics to deliver data-driven insights for real-world decision-making.",
    link: "#",
  },
  {
    name: "FastAPI Backend",
    desc: "A RESTful API built with FastAPI and PostgreSQL, designed for scalability, speed, and efficient data handling.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white to-green-50 text-center px-6 border-t border-green-100"
    >
      <motion.h2
        className="text-4xl font-extrabold text-green-700 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-3 sm:grid-cols-2 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-white border border-green-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            whileHover={{ y: -5 }}
          >
            <motion.h3
              className="text-2xl font-bold text-green-700 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              {proj.name}
            </motion.h3>

            <p className="text-gray-700 mb-5 leading-relaxed">
              {proj.desc}
            </p>

            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-green-700 font-semibold hover:underline transition-all"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
