"use client";

import Link from "next/link";
import { Rocket, Briefcase, Trophy, Users } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Startups", path: "startups", icon: <Rocket size={32} className="text-blue-600" /> },
  { name: "MAANG", path: "maang", icon: <Briefcase size={32} className="text-purple-600" /> },
  { name: "Internships", path: "internships", icon: <Users size={32} className="text-green-600" /> },
  { name: "Hackathons", path: "hackathons", icon: <Trophy size={32} className="text-red-600" /> },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header Section */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold text-gray-900"
        >
          Unlock Your Tech Career 🚀
        </motion.h1>
        <p className="mt-4 text-xl text-gray-700">
          Choose a roadmap and start your journey today.
        </p>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <motion.div
            key={category.path}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <Link href={`/roadmaps/${category.path}`} className="block group">
              <div className="border-2 border-gray-200 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-500">
                <div className="flex flex-col items-center justify-center gap-4">
                  {category.icon}
                  <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h2>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}