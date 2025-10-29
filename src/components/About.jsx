 import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white text-center px-6 border-t border-green-100"
    >
      <motion.h2
        className="text-4xl font-extrabold text-green-700 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.div
        className="max-w-3xl mx-auto text-gray-800 leading-relaxed text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <p className="mb-4">
          Hi! I’m <span className="font-semibold text-green-700">Daivine Oluoch</span>,
          a passionate <strong>software engineer</strong> and{" "}
          <strong>AI enthusiast</strong> dedicated to building smart, impactful, and
          user-friendly solutions.
        </p>
        <p className="mb-4">
          I’m proficient in technologies such as{" "}
          <strong>Python</strong>, <strong>Java</strong>, <strong>JavaScript</strong>,{" "}
          <strong>React</strong>, <strong>FastAPI</strong>, <strong>SQL</strong>, and{" "}
          <strong>PostgreSQL</strong>. My main interests lie in{" "}
          <strong>Machine Learning</strong> and <strong>Artificial Intelligence</strong>,
          where I strive to create innovations that can transform the world.
        </p>
        <p>
          Beyond coding, I’m the <strong>CEO of a tech startup</strong> with a mission to{" "}
          <span className="text-green-700 font-semibold">
            revolutionize the world through AI
          </span>
          . My work blends faith, leadership, and innovation — guiding both people and
          technology toward meaningful impact.
        </p>
      </motion.div>
    </section>
  );
}
