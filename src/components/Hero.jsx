 import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import profile from "../assets/IMG-20250208-WA0052.jpg"; // Replace with your actual image path

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4 pt-28"
    >
      {/* Profile Image */}
      <motion.img
        src={profile}
        alt="Oduor Daivine Oluoch"
        className="w-40 h-40 rounded-full border-4 border-green-500 shadow-md mb-6 object-cover"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Name */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold text-green-700 mb-4 tracking-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        ODUOR DAIVINE OLUOCH
      </motion.h1>

      {/* Typewriter Roles */}
      <h2 className="text-lg md:text-2xl text-gray-700 mb-6 font-medium">
        <Typewriter
          options={{
            strings: [
              "Software Engineer",
              "Full-Stack Developer",
              "Machine Learning Enthusiast",
              "AI Innovator",
              "Tech Startup CEO",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      {/* Buttons */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          to="projects"
          smooth={true}
          duration={600}
          offset={-70}
          className="bg-green-600 text-white px-8 py-3 rounded-full cursor-pointer font-medium hover:bg-green-700 shadow-md hover:shadow-lg transition-all duration-300"
        >
          View Projects
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={600}
          offset={-70}
          className="border border-green-600 text-green-700 px-8 py-3 rounded-full cursor-pointer font-medium hover:bg-green-700 hover:text-white shadow-md hover:shadow-lg transition-all duration-300"
        >
          Contact Me
        </Link>
      </motion.div>
    </section>
  );
}
