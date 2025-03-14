"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link"; // Import Link

const resources = [
  {
    title: "Web Development",
    description:
      "Learn the fundamentals of modern web development, including HTML, CSS, JavaScript, and frameworks like React and Vue.js. Gain hands-on experience in building responsive and dynamic websites.",
    link: "/resources/web-development",
  },
  {
    title: "Mobile App Development",
    description:
      "Master mobile development with Android (Kotlin), iOS (Swift), and cross-platform frameworks like Flutter and React Native. Build high-performance, user-friendly apps.",
    link: "/resources/mobile-development",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Explore artificial intelligence, deep learning, and neural networks. Learn how to build AI models for natural language processing, computer vision, and predictive analytics.",
    link: "/resources/ai-ml",
  },
  {
    title: "Data Science",
    description:
      "Understand data analysis, data visualization, and machine learning techniques. Learn how to work with large datasets, build predictive models, and make data-driven decisions.",
    link: "/resources/data-science",
  },
  {
    title: "Blockchain & Web3",
    description:
      "Dive into the world of decentralized applications, smart contracts, and blockchain technology. Learn how to develop secure and scalable Web3 solutions.",
    link: "/resources/blockchain",
  },
  {
    title: "Competitive Programming",
    description:
      "Improve your problem-solving skills and master algorithms & data structures. Solve challenges and enhance your coding abilities.",
    link: "/resources/competitive-programming",
  },
];

export default function ResourcesPage() {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative min-h-screen bg-white bg-[url('https://shorturl.at/BCG9U')] bg-cover bg-center bg-no-repeat flex flex-col items-center py-10 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-black text-center mb-8">
        Top Learning Resources
      </h1>

      <div className="w-full max-w-6xl">
        <div
          ref={scrollRef}
          className={`grid ${
            isMobile
              ? "grid-cols-1 gap-3" // Reduced gap for mobile view
              : "grid-cols-2 lg:grid-cols-3 gap-8"
          } pb-4`}
        >
          {resources.map((res, index) => (
            <Link key={index} href={res.link} passHref>
              <div
                className={`block p-6 bg-white border border-black shadow-none transition-all duration-200 cursor-pointer ${
                  isMobile
                    ? "h-16 flex items-center justify-center text-lg font-semibold text-black hover:bg-black hover:text-white transition-all"
                    : ""
                }`}
              >
                <h2
                  className={`text-1xl font-semibold ${
                    isMobile ? "text-center w-full" : "text-black mb-3"
                  }`}
                >
                  {res.title}
                </h2>
                {!isMobile && <p className="text-md text-gray-700">{res.description}</p>}
                {!isMobile && (
                  <button className="mt-4 px-4 py-2 border border-black text-black font-medium hover:bg-black hover:text-white">
                    Explore {res.title}
                  </button>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
