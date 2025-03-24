"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Rocket, Code, BookOpen, Users, FileText, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const colors = [
  "text-blue-600", "text-green-600", "text-purple-600", "text-orange-600", "text-pink-600"
];

const numberColors = [
  "bg-blue-500 text-white", "bg-green-500 text-white", "bg-purple-500 text-white",
  "bg-orange-500 text-white", "bg-pink-500 text-white", "bg-red-500 text-white"
];

const roadmap = [
  {
    title: "Development",
    icon: <Code size={32} className="text-blue-500" />,
    description: "Startups mainly look for development skills. Master one stack and choose a role.",
    points: ["Frontend (React, Next.js, etc.)", "Backend (Node.js, Express, etc.)", "Full Stack (MERN, MEVN, etc.)", "Mobile Dev (Flutter, React Native, Kotlin, Swift)"]
  },
  {
    title: "DSA (Data Structures & Algorithms)",
    icon: <Rocket size={32} className="text-purple-500" />,
    description: "Intermediate DSA knowledge is enough for startup interviews.",
    points: ["Solve LeetCode, CodeForces problems", "Maintain contest ratings", "Showcase number of problems solved"]
  },
  {
    title: "AI & ML or DS",
    icon: <BookOpen size={32} className="text-green-500" />,
    description: "For those interested in AI roles like Machine Learning Engineer, Data Scientist, etc.",
    points: ["Master one but have basic knowledge of all", "Roles: ML Engineer, Data Scientist, AI Engineer, Prompt Engineer"]
  },
  {
    title: "Networking & Tech Enthusiasm",
    icon: <Users size={32} className="text-yellow-500" />,
    description: "Engaging in tech communities helps in recruitment.",
    points: ["Maintain a strong LinkedIn profile", "Build a personal portfolio website", "Write technical blogs & publish research papers", "Join tech communities and take leadership roles"]
  },
  {
    title: "Resume (Key Sections to Include)",
    icon: <FileText size={32} className="text-red-500" />,
    description: "Your resume should highlight key skills and achievements.",
    points: ["Projects: Web/Mobile Development + AI projects", "Experience: Open-source contributions & internships", "Achievements: Hackathon wins, LeetCode/CodeForces ratings", "Tech Networking: Blogs, Portfolio, Research Papers, etc."]
  }
];

const StartupsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Startup Career Roadmap</h1>
        <p className="text-gray-600 text-xl">Structured pathway to excel in technical startup roles</p>
      </motion.div>

      <div className="w-full max-w-3xl space-y-12">
        {roadmap.map((item, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.15 }}>
            <Card className="relative rounded-xl shadow-md border border-gray-200 bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-4 rounded-lg bg-gray-100">{item.icon}</div>
                  <div>
                    <h2 className={`text-2xl font-semibold ${colors[index % colors.length]}`}>{item.title}</h2>
                    <p className="text-gray-700 text-lg mt-2">{item.description}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 border-t pt-4">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800 text-lg">
                      <CheckCircle className="flex-shrink-0 text-green-500 mt-1" size={22} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Number Badge */}
              <div className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-bold ${numberColors[index % numberColors.length]}`}>
                {index + 1}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StartupsPage;