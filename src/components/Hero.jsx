 import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import profile from "../assets/IMG-20250208-WA0052.jpg";
 // <-- add your image here

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4"
    >
      <motion.img
        src={profile}
        alt="ODUOR DAIVINE OLUOCH"
        className="w-40 h-40 rounded-full border-4 border-green-500 shadow-md mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-3xl md:text-5xl font-bold text-green-600 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        ODUOR DAIVINE OLUOCH
      </motion.h1>

      <h2 className="text-xl text-gray-700 mb-4">
        <Typewriter
          options={{
            strings: [
              "Software Engineer",
              "Full-Stack Developer",
              "Machine Learning Enthusiast",
              "Data Scientist",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      <div className="flex gap-6 mt-4">
        <Link
          to="projects"
          smooth={true}
          className="bg-green-600 text-white px-6 py-2 rounded-full cursor-pointer hover:bg-green-700 transition"
        >
          View Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          className="border border-green-600 text-green-600 px-6 py-2 rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
