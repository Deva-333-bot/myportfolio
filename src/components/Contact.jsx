 import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white text-center px-6">
      <motion.h2
        className="text-3xl font-bold text-green-600 mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Contact Me
      </motion.h2>

      <p className="text-gray-700 mb-4">
        Let’s connect! Feel free to reach out for collaborations or projects.
      </p>

      <div className="flex justify-center gap-6 mt-4 text-green-600 text-2xl">
        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </section>
  );
}
