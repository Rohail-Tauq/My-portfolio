import React from 'react';
import { useNavigate } from "react-router-dom";
export default function Landing({ onEnter }) {
const navigate = useNavigate();
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#0a0118] via-[#160730] to-[#1f0a3c] text-white relative overflow-hidden">
      {/* Light effect from right */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-300 opacity-10 rounded-full blur-2xl"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-20 animate-bounce"></div>
      </div>

      {/* Social Icons */}
      <div className="relative z-10 flex gap-8 mb-12">
        {/* GitHub */}
        <a
          href="https://github.com/Rohail-Tauq"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 hover:from-indigo-500/30 hover:to-purple-500/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm border border-purple-400/20"
        >
          <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rohail-tauqeer/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-400/30 hover:to-blue-400/30 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 backdrop-blur-sm border border-cyan-400/20"
        >
          <svg className="w-6 h-6 group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>

        {/* Profile Button */}
        <button
        onClick={() => navigate("/main")}
        className="group p-3 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                   hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 
                   transform hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25 
                   backdrop-blur-sm border border-purple-400/20"
      >
        <svg
          className="w-6 h-6 group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </button>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-2">
            Welcome to My
          </h1>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio Website
          </h1>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 text-purple-300 opacity-30 animate-float">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      
      <div className="absolute top-10 left-1/4 text-purple-400 opacity-20 animate-float" style={{animationDelay: '1s'}}>
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
