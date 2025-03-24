"use client";

import React from "react";
import { FaCode, FaRocket, FaBrain, FaUsers, FaLaptopCode, FaMicrophone } from "react-icons/fa";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Master the Right Skills",
    icon: <FaBrain className="text-blue-500 text-3xl" />,
    content:
      "Many companies don’t prioritize DSA for internships. Instead, they want real-world development skills. Learn Web Dev, App Dev, AI/ML & Cybersecurity.",
  },
  {
    title: "Find Internship Opportunities",
    icon: <FaUsers className="text-green-500 text-3xl" />,
    content:
      "Use LinkedIn, AngelList, Internshala & Twitter/X Advanced Search to discover hidden internship opportunities. Network smartly!",
  },
  {
    title: "Crack the Internship Interview",
    icon: <FaMicrophone className="text-red-500 text-3xl" />,
    content:
      "Prepare for common questions, showcase your projects, and use AI-generated mock interviews to practice.",
  },
  {
    title: "Winning Hackathons Like a Pro",
    icon: <FaRocket className="text-purple-500 text-3xl" />,
    content:
      "Build a strong team, pick a high-impact idea, and leverage AI tools to speed up development. Judges love live demos!",
  },
  {
    title: "Smart Execution & AI Shortcuts",
    icon: <FaLaptopCode className="text-yellow-500 text-3xl" />,
    content:
      "Use GitHub Copilot, OpenAI APIs, Firebase, and Tailwind CSS to build projects in record time. AI can do half the work for you!",
  },
];

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        🚀 Ultimate Roadmap for Internships & Hackathons
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-4 mb-4">
              {section.icon}
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>
            <p className="text-gray-400">{section.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
