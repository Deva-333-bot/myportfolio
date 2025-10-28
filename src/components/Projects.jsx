 import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    desc: "A responsive personal portfolio built with React and Framer Motion.",
    link: "#",
  },
  {
    name: "Machine Learning Model",
    desc: "Python-based ML project for predictive analytics.",
    link: "#",
  },
  {
    name: "FastAPI Backend",
    desc: "A RESTful API built with FastAPI and PostgreSQL.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 text-center px-6">
      <motion.h2
        className="text-3xl font-bold text-green-600 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-green-100 p-6 rounded-lg shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-green-700 mb-2">{proj.name}</h3>
            <p className="text-gray-700 mb-4">{proj.desc}</p>
            <a
              href={proj.link}
              target="_blank"
              className="text-green-600 font-semibold hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
