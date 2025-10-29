 import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Add scroll listener for subtle background & shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-green-100"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 leading-none">
        {/* Brand / Logo */}
        <h1 className="text-2xl md:text-3xl font-extrabold text-green-700 tracking-tight">
          Daivine Oluoch
        </h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={600}
                offset={-70}
                className="cursor-pointer hover:text-green-700 transition-colors duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden text-green-700 cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden flex flex-col items-center bg-white shadow-md border-t border-green-100 py-6 space-y-6 text-green-700 font-medium transform transition-all duration-500 ease-in-out ${
          menuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={600}
            offset={-70}
            className="cursor-pointer hover:text-green-900 transition-colors duration-300"
            onClick={toggleMenu}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
