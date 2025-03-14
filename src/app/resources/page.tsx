"use client";
import { useEffect, useRef, useState } from "react";

const resources = [
  {
    title: "Web Development",
    description:
      "Learn the fundamentals of modern web development, including HTML, CSS, JavaScript, and frameworks like React and Vue.js. Gain hands-on experience in building responsive and dynamic websites.",
    link: "/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Master mobile development with Android (Kotlin), iOS (Swift), and cross-platform frameworks like Flutter and React Native. Build high-performance, user-friendly apps.",
    link: "/mobile-development",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Explore artificial intelligence, deep learning, and neural networks. Learn how to build AI models for natural language processing, computer vision, and predictive analytics.",
    link: "/ai-ml",
  },
  {
    title: "Data Science",
    description:
      "Understand data analysis, data visualization, and machine learning techniques. Learn how to work with large datasets, build predictive models, and make data-driven decisions.",
    link: "/data-science",
  },
  {
    title: "Blockchain & Web3",
    description:
      "Dive into the world of decentralized applications, smart contracts, and blockchain technology. Learn how to develop secure and scalable Web3 solutions.",
    link: "/blockchain",
  },
];

export default function ResourcesPage() {
  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center py-12 px-6 md:px-16">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
        Top Learning Resources
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
        {resources.map((res, index) => (
          <a
            key={index}
            href={res.link}
            className="block p-6 bg-gray-100 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{res.title}</h2>
            <p className="text-md text-gray-700 leading-relaxed">{res.description}</p>
            <button className="mt-6 px-5 py-2 bg-blue-600 text-white font-medium rounded-md transition hover:bg-blue-500">
              Explore {res.title}
            </button>
          </a>
        ))}
      </div>

      {/* Competitive Programming Section */}
      <div className="mt-20 w-full max-w-5xl bg-gray-900 text-white text-center p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold">Competitive Programming</h2>
        <p className="mt-3 text-lg">
          Improve your problem-solving skills and master algorithms & data structures.
        </p>
        <button className="mt-5 px-6 py-3 bg-indigo-500 text-white font-medium rounded-lg shadow-md transition hover:bg-indigo-400">
          Start Solving Challenges
        </button>
      </div>

      {/* Contribute Section */}
      <div className="mt-16 w-full max-w-4xl bg-gray-800 text-white text-center p-10 rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold">Want to contribute?</h2>
        <p className="mt-3 text-lg">Help us make this resource better by contributing to our GitHub repository.</p>
        <a
          href="https://github.com"
          target="_blank"
          className="mt-5 inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
        >
          Contribute on GitHub
        </a>
      </div>
    </div>
  );
}