 import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-green-50 text-center px-6 border-t border-green-100"
    >
      <motion.h2
        className="text-4xl font-extrabold text-green-700 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-gray-700 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Let’s connect! Whether it’s a collaboration, a project idea, or a shared passion
        for AI and innovation, I’d love to hear from you.
      </motion.p>

      <motion.div
        className="flex justify-center gap-8 text-green-700 text-3xl"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-900 transition-colors duration-300"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-900 transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/YOUR_TWITTER"
          target="_blank"
          rel="noreferrer"
          className="hover:text-green-900 transition-colors duration-300"
          aria-label="Twitter Profile"
        >
          <FaTwitter />
        </a>
      </motion.div>

      <motion.p
        className="text-sm text-gray-500 mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        © {new Date().getFullYear()} Daivine Oluoch. All rights reserved.
      </motion.p>
    </section>
  );
}
