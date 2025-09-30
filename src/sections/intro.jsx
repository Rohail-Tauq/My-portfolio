// src/sections/Intro.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import myImage from "../imgs/profile.webp"; // replace with your image
import cvFile from "../files/Rohail_CV.pdf"; // put your CV inside src/files/

export default function Intro() {
  return (
    <section
      id="intro"
      className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 
                 mt-24 md:mt-32"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 bg-indigo-300 rounded-full opacity-25 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-pink-300 rounded-full opacity-20 animate-ping delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="bg-gradient-to-r from-purple-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
            About me
          </span>
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-purple-400"></div>
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
          <div className="h-0.5 w-16 bg-gradient-to-r from-indigo-400 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content (text) */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-purple-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Rohail Tauqeer
              </span>
            </h1>

            <div className="flex items-center justify-center md:justify-start space-x-3">
              <div className="h-0.5 w-12 bg-gradient-to-r from-purple-400 to-indigo-400"></div>
              <p className="text-indigo-300 font-medium text-lg">
                Full-Stack Developer & Designer
              </p>
              <div className="hidden md:block h-0.5 w-12 bg-gradient-to-r from-indigo-400 to-purple-400"></div>
            </div>

            <div className="space-y-4 text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
              <p className="text-lg">
                A passionate Full-Stack Web Developer and Designer dedicated to
                crafting clean, responsive, and visually engaging web
                applications.
              </p>
              <p className="text-base opacity-90">
                My approach combines technical skills with thoughtful UI/UX
                design principles to create impactful digital experiences.
              </p>
              <p className="text-base opacity-80">
                Whether building functional systems or designing intuitive
                interfaces, I'm committed to delivering solutions that are both
                technically sound and aesthetically pleasing.
              </p>
            </div>

            {/* Download CV button */}
            <div className="pt-6">
              <a
                href={cvFile}
                download
                className="px-6 py-3 bg-gradient-to-r from-purple-400 to-indigo-500 text-white rounded-lg shadow-lg 
                           hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300 inline-block"
              >
                Download CV
              </a>
            </div>

            {/* Social icons */}
            <div className="flex justify-center md:justify-start space-x-6 pt-4">
              <a
                href="https://github.com/Rohail-Tauq"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-700/50 border border-slate-500/30 text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/rohail-tauqeer/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-700/50 border border-slate-500/30 text-gray-300 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center order-first md:order-last">
            <div className="w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-indigo-400 shadow-2xl">
              <img
                src={myImage}
                alt="Rohail Tauqeer - Full-Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
