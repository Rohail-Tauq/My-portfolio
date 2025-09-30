import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiVercel,
  SiCanva,
  SiFirebase,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="portfolio"
      className="relative px-8 md:px-20 py-20 text-gray-100 bg-[#0F172A] overflow-hidden"
    >
      {/* Background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/5 w-1 h-1 bg-white rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-indigo-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-3/4 left-1/3 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-20 animate-pulse delay-700"></div>
        <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-indigo-300 rounded-full opacity-25 animate-ping delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-purple-400"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
            <div className="h-0.5 w-16 bg-gradient-to-r from-indigo-400 to-transparent"></div>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-800/20 border border-slate-600/20 rounded-2xl p-2 backdrop-blur-sm">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("projects")}
                className={`relative px-8 py-4 rounded-xl font-medium transition-all duration-500 ${
                  activeTab === "projects"
                    ? "bg-gradient-to-r from-purple-500/80 to-indigo-500/80 text-white shadow-lg shadow-purple-500/25"
                    : "text-gray-300 hover:text-white hover:bg-slate-700/30"
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  <span>Projects</span>
                </span>
              </button>

              <button
                onClick={() => setActiveTab("tech")}
                className={`relative px-8 py-4 rounded-xl font-medium transition-all duration-500 ${
                  activeTab === "tech"
                    ? "bg-gradient-to-r from-purple-500/80 to-indigo-500/80 text-white shadow-lg shadow-purple-500/25"
                    : "text-gray-300 hover:text-white hover:bg-slate-700/30"
                }`}
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  <span>Tech Stack</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        {activeTab === "projects" ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Only Project Card */}
            <div className="group relative bg-gradient-to-br from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  Weather App
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed text-base">
                  A responsive weather forecast application built with React.js
                  and CSS. Features real-time weather data, location search.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full text-xs font-medium border border-cyan-400/20">
                    React
                  </span>
                  <span className="px-3 py-1 bg-sky-400/10 text-sky-300 rounded-full text-xs font-medium border border-sky-400/20">
                    Tailwind
                  </span>
                  <span className="px-3 py-1 bg-yellow-400/10 text-yellow-300 rounded-full text-xs font-medium border border-yellow-400/20">
                    API
                  </span>
                </div>

                <a
                  href="https://rohailweatherforecast.vercel.app/"
                  className="group/link inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-all duration-300"
                >
                  <span>View Project</span>
                  <svg
                    className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-200">
                Technologies I Work With
              </h3>
              <p className="text-gray-400 max-w-3xl mx-auto">
                A comprehensive toolkit of modern technologies and tools that I
                use to create exceptional digital experiences
              </p>
            </div>

            {/* Tech Stack Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { icon: FaHtml5, color: "text-orange-500", name: "HTML5", category: "Markup" },
                { icon: FaCss3Alt, color: "text-blue-500", name: "CSS3", category: "Styling" },
                { icon: FaJs, color: "text-yellow-400", name: "JavaScript", category: "Programming" },
                { icon: FaReact, color: "text-cyan-400", name: "React.js", category: "Framework" },
                { icon: SiTailwindcss, color: "text-sky-400", name: "Tailwind CSS", category: "Framework" },
                { icon: SiBootstrap, color: "text-purple-500", name: "Bootstrap", category: "Framework" },
                { icon: FaNodeJs, color: "text-green-500", name: "Node.js", category: "Backend" },
                { icon: SiExpress, color: "text-gray-300", name: "Express.js", category: "Backend" },
                { icon: SiMongodb, color: "text-green-400", name: "MongoDB", category: "Database" },
                { icon: SiFirebase, color: "text-yellow-500", name: "Firebase", category: "Backend/Hosting" },
                { icon: SiVercel, color: "text-white", name: "Vercel", category: "Deployment" },
                { icon: SiCanva, color: "text-indigo-400", name: "Canva", category: "Design" },
                { icon: FaGitAlt, color: "text-red-500", name: "Git", category: "Version Control" },
                { icon: FaGithub, color: "text-gray-200", name: "GitHub", category: "Platform" },
              ].map(({ icon: Icon, color, name, category }, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                    <div className="p-3 bg-slate-700/30 rounded-xl group-hover:bg-slate-600/40 transition-colors duration-300">
                      <Icon
                        className={`${color} text-4xl group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                        {name}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1">{category}</p>
                    </div>
                  </div>

                  {/* Skill level indicator */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
