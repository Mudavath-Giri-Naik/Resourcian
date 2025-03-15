"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiBook, FiSmartphone, FiCpu, FiDatabase, FiBox, FiCode } from "react-icons/fi";

const resources = [
  {
    title: "Web Development",
    icon: <FiCode className="w-6 h-6" />,
    category: "Development",
    duration: "6 Learning Paths",
    description: "Master modern web technologies including HTML5, CSS3, JavaScript (ES6+), React, and Node.js. Explore advanced concepts like PWAs and WebAssembly.",
    link: "/resources/web-development",
  },
  {
    title: "Mobile Development",
    icon: <FiSmartphone className="w-6 h-6" />,
    category: "Development",
    duration: "4 Specializations",
    description: "Build native iOS/Android apps with Swift/Kotlin or cross-platform solutions using Flutter/React Native. Includes performance optimization techniques.",
    link: "/resources/mobile-development",
  },
  {
    title: "AI & ML",
    icon: <FiCpu className="w-6 h-6" />,
    category: "Data Science",
    duration: "8 Course Series",
    description: "Deep dive into neural networks, NLP, computer vision, and reinforcement learning using TensorFlow and PyTorch frameworks.",
    link: "/resources/ai-ml",
  },
  {
    title: "Data Science",
    icon: <FiDatabase className="w-6 h-6" />,
    category: "Analytics",
    duration: "5 Learning Tracks",
    description: "Complete training in data analysis, visualization, and machine learning with Python/R. Includes big data tools like Spark and Hadoop.",
    link: "/resources/data-science",
  },
  {
    title: "Blockchain",
    icon: <FiBox className="w-6 h-6" />,
    category: "Emerging Tech",
    duration: "3 Certification Paths",
    description: "Comprehensive guide to Ethereum, Solidity, smart contracts, and decentralized application development with hands-on projects.",
    link: "/resources/blockchain",
  },
  {
    title: "Competitive Programming",
    icon: <FiBook className="w-6 h-6" />,
    category: "Algorithms",
    duration: "7 Skill Levels",
    description: "Systematic approach to mastering data structures, algorithms, and problem-solving techniques for technical interviews.",
    link: "/resources/competitive-programming",
  },
];

export default function ResourcesPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Development Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated learning paths for technology professionals
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Link key={index} href={resource.link} passHref>
              <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 ease-out p-8 h-full cursor-pointer border border-gray-100 hover:border-blue-100">
                {/* Card Header */}
                <div className="flex items-start mb-6">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    {resource.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">
                      {resource.title}
                    </h2>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-blue-600">
                        {resource.category}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-500">
                        {resource.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop Content */}
                {!isMobile && (
                  <>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                        <span>Explore Path</span>
                        <svg 
                          className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M9 5l7 7-7 7" 
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                )}

                {/* Mobile Indicator */}
                {isMobile && (
                  <div className="absolute top-6 right-6 text-gray-400">
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        {!isMobile && (
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for?
            </p>
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Request New Resource
            </button>
          </div>
        )}
      </div>
    </div>
  );
}