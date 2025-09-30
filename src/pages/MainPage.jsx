import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";
import page1img from "../imgs/page1.png";
import Intro from "../sections/intro";
import Contact from "../sections/Contact";
import Portfolio from "../sections/Portfolio";
import { useState } from "react";

export default function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.div
      className="min-h-screen bg-[#0F172A] text-gray-100 font-sans"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-300 opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-400 opacity-5 rounded-full blur-3xl"></div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-20 animate-bounce"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-4xl">
        <div className="backdrop-blur-lg bg-slate-800/40 border border-slate-600/30 rounded-2xl px-6 py-4 shadow-2xl">
          <div className="flex justify-between items-center">
            {/* Name */}
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Rohail Tauqeer
            </h1>

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#intro" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Contact", href: "#contact" },
              ].map((item, index) => (
                <li
                  key={index}
                  className="relative cursor-pointer px-3 py-2 transition-all duration-300 
                             hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-indigo-500/20
                             hover:text-white hover:shadow-lg hover:shadow-purple-500/25
                             after:content-[''] after:block after:w-0 after:h-[2px] 
                             after:bg-gradient-to-r after:from-purple-400 after:to-indigo-400 
                             after:transition-all after:duration-300 hover:after:w-full after:rounded-full"
                >
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-3xl text-gray-200 focus:outline-none"
              onClick={() => setMenuOpen(true)}
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar (mobile) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1E293B] shadow-lg z-[60] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-600/30">
          <h2 className="text-lg font-bold bg-gradient-to-r from-purple-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Menu
          </h2>
          <button
            className="text-2xl text-gray-200"
            onClick={() => setMenuOpen(false)}
          >
            <FiX />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 text-gray-200 font-medium">
          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#intro" },
            { label: "Portfolio", href: "#portfolio" },
            { label: "Contact", href: "#contact" },
          ].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-indigo-500/20"
              onClick={() => setMenuOpen(false)}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Dark overlay behind sidebar */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-center px-6 md:px-20 min-h-screen pt-32"
      >
        <div className="relative max-w-7xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <img
                  src={page1img}
                  alt="Technical Illustration"
                  className="w-[250px] md:w-[450px] relative z-10"
                />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-70 animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60 animate-pulse"></div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 order-2 md:order-1 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
                Full Stack <br />
                <span className="bg-gradient-to-r from-purple-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
                  Developer
                </span>
              </h2>

              <div className="h-1 w-24 bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 rounded-full mx-auto md:mx-0"></div>

              {/* Tech stack */}
              <div className="space-y-4">
                <p className="text-gray-300 text-lg font-medium">Tech Stack</p>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { icon: SiMongodb, color: "text-green-400", name: "MongoDB" },
                    { icon: SiExpress, color: "text-gray-300", name: "Express" },
                    { icon: FaReact, color: "text-cyan-400", name: "React" },
                    { icon: FaNodeJs, color: "text-green-500", name: "Node.js" },
                  ].map(({ icon: Icon, color, name }, index) => (
                    <div
                      key={index}
                      className="group relative p-4 rounded-xl bg-slate-700/30 border border-slate-500/20 hover:scale-110 transition-all duration-300"
                    >
                      <Icon className={`${color} text-3xl mx-auto`} />
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs text-gray-300 bg-slate-800 px-2 py-1 rounded">
                          {name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Button */}
              <a
  href="#portfolio"
  className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 rounded-xl text-white font-medium hover:scale-105 transition-all duration-300"
>
  View My Work
</a>

            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center">
        <Intro />
      </section>

      {/* Portfolio Section Placeholder */}
      <section id="portfolio" className="min-h-screen flex items-center justify-center">
        <Portfolio />
      </section>

      {/* Contact Section Placeholder */}
      <section id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>
    </motion.div>
  );
}
