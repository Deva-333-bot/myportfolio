 import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects"; // ← import your project data file

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 text-center px-6">
      <motion.h2
        className="text-4xl font-bold text-green-600 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md border border-green-100 p-6 text-left hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              {proj.title}
            </h3>
            <p className="text-gray-700 mb-4">{proj.description}</p>

            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.techStack?.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* View Project Button */}
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-green-600 font-semibold hover:text-green-800 hover:underline transition"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
