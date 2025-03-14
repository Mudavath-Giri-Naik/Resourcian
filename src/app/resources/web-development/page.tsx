import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiExpress, SiTailwindcss } from "react-icons/si";

const techStacks = [
  { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black text-4xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-700 text-4xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 text-4xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400 text-4xl" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "SQL Databases", icon: <FaDatabase className="text-gray-500 text-4xl" /> },
];

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Web Development Tech Stack</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {techStacks.map((tech, index) => (
          <Card key={index} className="flex flex-col items-center p-4 shadow-lg bg-white rounded-2xl">
            <CardContent className="flex flex-col items-center space-y-4">
              {tech.icon}
              <p className="text-lg font-medium text-gray-700">{tech.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
