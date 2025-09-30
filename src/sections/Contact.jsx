// src/sections/Contact.jsx
import React, { useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "1a4cc572-ec21-4218-ac67-e249857fe00d"); // 🔑 replace with your Web3Forms key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      event.target.reset();
    } else {
      setResult(data.message || "Something went wrong ❌");
    }
  };

  return (
    <section
      id="contact"
      className="relative px-8 md:px-20 py-20 text-gray-100 bg-[#0F172A] overflow-hidden"
    >
      {/* Enhanced background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/5 w-2 h-2 bg-purple-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white rounded-full opacity-30 animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-indigo-400 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute top-3/4 left-1/4 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-25 animate-pulse delay-500"></div>
      </div>

      {/* Enhanced Title */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-300 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
            Contact Me
          </span>
        </h2>
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-purple-400"></div>
          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
          <div className="h-0.5 w-16 bg-gradient-to-r from-indigo-400 to-transparent"></div>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Let's connect and discuss your next project or just say hello
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto relative z-10">
        {/* Contact Form */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-3xl p-10 shadow-2xl">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <p className="text-gray-400">
              Send me a message and I'll get back to you soon
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-slate-600/50 
                         text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400/50
                         transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-slate-600/50 
                         text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400/50
                         transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 block">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Tell me about your project or just say hi..."
                rows="5"
                className="w-full px-5 py-4 rounded-2xl bg-slate-900/60 border border-slate-600/50 
                         text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400/50 focus:border-indigo-400/50
                         transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 
                         text-white font-semibold shadow-lg hover:from-purple-600 hover:to-indigo-700 
                         hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
          {result && (
            <p className="text-center mt-4 text-sm text-gray-300">{result}</p>
          )}

          {/* Social Links */}
          <div className="mt-10 space-y-4">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold text-gray-300 mb-2">
                Connect with me
              </h4>
              <div className="h-0.5 w-16 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto"></div>
            </div>

            <a
              href="https://www.linkedin.com/in/rohail-tauqeer/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-blue-500/20 
                         border border-blue-500/30 text-blue-300 hover:from-blue-600/30 hover:to-blue-500/30 hover:border-blue-400/50
                         hover:text-blue-200 transition-all duration-300 group"
            >
              <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium">Connect on LinkedIn</span>
            </a>

            <div className="grid grid-cols-2 gap-4">
              <a
                href="https://github.com/Rohail-Tauq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-4 rounded-2xl bg-gradient-to-r from-gray-700/20 to-gray-600/20 
                           border border-gray-500/30 text-gray-300 hover:from-gray-700/30 hover:to-gray-600/30 hover:border-gray-400/50
                           hover:text-gray-200 transition-all duration-300 group"
              >
                <FaGithub className="text-xl group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">GitHub</span>
              </a>

              <a
                href="https://instagram.com/yourinstagram"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 py-4 rounded-2xl bg-gradient-to-r from-pink-600/20 to-purple-500/20 
                           border border-pink-500/30 text-pink-300 hover:from-pink-600/30 hover:to-purple-500/30 hover:border-pink-400/50
                           hover:text-pink-200 transition-all duration-300 group"
              >
                <FaInstagram className="text-xl group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">Instagram</span>
              </a>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/30 border border-slate-600/30 rounded-3xl p-10 shadow-2xl">
          {/* Services & Availability */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Services & Availability
            </h3>
          </div>
          {/* Standard Package */}
          <div className="p-5 bg-gradient-to-r from-indigo-800/40 to-indigo-700/30 rounded-2xl border border-indigo-600/30 relative mb-6">
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-400 to-purple-400 text-white text-xs px-3 py-1 rounded-full">
              Popular
            </div>
            <div className="flex justify-between items-start mb-3">
              <div>
                <h5 className="font-bold text-indigo-300 text-lg">
                  Basic Web Development
                </h5>
                <p className="text-gray-400 text-sm">
                  Perfect for small businesses
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-indigo-400">
                  $70+
                </div>
                <div className="text-xs text-gray-400">Starting from</div>
              </div>
            </div>
            <div className="space-y-1 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                <span>Responsive Landing Page</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                <span>Mobile Optimized</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                <span>Good UI</span>
              </div>
            </div>
          </div>

          {/* Premium Package */}
          <div className="p-5 bg-gradient-to-r from-pink-800/40 to-purple-700/30 rounded-2xl border border-pink-600/30 mb-8">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h5 className="font-bold text-pink-300 text-lg">
                  Full-Stack Application
                </h5>
                <p className="text-gray-400 text-sm">Complete web solution</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-pink-400">$120</div>
                <div className="text-xs text-gray-400">Starting from</div>
              </div>
            </div>
            <div className="space-y-1 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                <span>Frontend + Backend</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                <span>Database Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                <span>User Authentication</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h4 className="text-lg font-semibold text-gray-300 mb-2">
                Project Timeline
              </h4>
              <div className="h-0.5 w-16 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto"></div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-600/20">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-full flex items-center justify-center">
                  <FaClock className="text-purple-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-200">Typical Timeline</h5>
                  <p className="text-sm text-gray-400">
                    2-8 weeks depending on complexity
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-600/20">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-green-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-200">Location</h5>
                  <p className="text-sm text-gray-400">
                    Kamra Attock, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-slate-800/30 rounded-2xl border border-slate-600/20">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-blue-400" />
                </div>
                <div>
                  <h5 className="font-medium text-gray-200">Email</h5>
                  <p className="text-sm text-gray-400">mrohail9932@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-800/20 to-purple-800/20 rounded-2xl border border-indigo-600/20">
              <h5 className="font-medium text-indigo-300 mb-2">
                Preferred Project Types
              </h5>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 bg-indigo-400/10 text-indigo-300 rounded-full border border-indigo-400/20">
                  Dashboard
                </span>
                <span className="px-3 py-1 bg-purple-400/10 text-purple-300 rounded-full border border-purple-400/20">
                  SaaS Apps
                </span>
                <span className="px-3 py-1 bg-pink-400/10 text-pink-300 rounded-full border border-pink-400/20">
                  Portfolios
                </span>
                <span className="px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full border border-cyan-400/20">
                  API integrated Apps
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
