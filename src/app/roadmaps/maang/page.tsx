import React from "react";

interface RoadmapItem {
  number: string;
  title: string;
  details: string[];
  color: string;
}

const roadmapData: RoadmapItem[] = [
  {
    number: "1️⃣",
    title: "Development + System Design",
    details: [
      "Master one development role while knowing the basics of others.",
      "Work on large-scale projects to showcase system design skills.",
      "Build production-grade side projects (SaaS, scalable apps).",
      "Contribute to impactful open-source projects."
    ],
    color: "bg-blue-500"
  },
  {
    number: "2️⃣",
    title: "Data Structures & Algorithms (DSA)",
    details: [
      "Master DSA fundamentals (Arrays, Trees, Graphs, DP, Recursion).",
      "Solve 300-500 problems on LeetCode, CodeForces, or CodeChef.",
      "Achieve a strong contest rating (LeetCode 1800+, CodeForces Specialist+).",
      "Participate in competitive programming and mock interviews."
    ],
    color: "bg-green-500"
  },
  {
    number: "3️⃣",
    title: "AI & Machine Learning (Optional, but Adds Value)",
    details: [
      "Master one AI/ML domain but know the fundamentals of others.",
      "Publish ML-based projects on GitHub.",
      "Contribute to AI open-source projects.",
      "Read and write research papers in AI/ML."
    ],
    color: "bg-yellow-500"
  },
  {
    number: "4️⃣",
    title: "Behavioral Interviews & Soft Skills",
    details: [
      "Use the STAR method: Situation, Task, Action, Result.",
      "Demonstrate problem-solving mindset and clear communication.",
      "Show leadership through hackathons and projects.",
      "Prepare for top 20 behavioral questions asked at MAANG."
    ],
    color: "bg-red-500"
  },
  {
    number: "5️⃣",
    title: "Networking & Referral Strategy",
    details: [
      "Maintain an active LinkedIn profile (posts, achievements, tech engagement).",
      "Connect with MAANG engineers and ask for referrals.",
      "Attend tech meetups, conferences, and hackathons.",
      "Engage in online tech communities (Google Developers, GitHub, Discord)."
    ],
    color: "bg-purple-500"
  },
  {
    number: "6️⃣",
    title: "Résumé (What to Include for MAANG)",
    details: [
      "Highlight system design-based scalable projects and open-source contributions.",
      "Include internships, hackathon achievements, and research papers.",
      "Showcase competitive programming achievements and tech leadership roles.",
      "Build a personal portfolio website with projects & achievements."
    ],
    color: "bg-indigo-500"
  }
];

const RoadmapCard: React.FC<RoadmapItem> = ({ number, title, details, color }) => {
  return (
    <div className={`relative p-6 bg-white shadow-md rounded-2xl flex flex-col gap-3 transition-all hover:scale-105 border-t-4 ${color}`}> 
      <div className="absolute -top-3 -right-3 text-white text-2xl font-bold px-3 py-1 rounded-full shadow-md" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
        {number}
      </div>
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
      <ul className="list-disc pl-6 text-gray-700">
        {details.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Roadmap: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">🚀 Roadmap for MAANG Companies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {roadmapData.map((item, index) => (
          <RoadmapCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
