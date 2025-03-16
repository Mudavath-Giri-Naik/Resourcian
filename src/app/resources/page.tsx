'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Code, Smartphone, BrainCircuit, Database, Lock, Layers } from "lucide-react";
import { useRouter } from "next/navigation";

const resources = [
  "📜 Handwritten Notes",
  "📘 Expert Handbooks",
  "📊 Diagrammatic Explanations",
  "📑 Cheat Sheets",
  "💡 Interview Questions",
  "🔗 Top Reference Links"
];

const domains = [
  { name: "Web Development", icon: Code, slogan: "Build stunning websites", link: "/resources/web-development" },
  { name: "App Development", icon: Smartphone, slogan: "Create sleek mobile apps", link: "/resources/app-development" },
  { name: "Artificial Intelligence", icon: BrainCircuit, slogan: "Master AI & ML", link: "/resources/ai" },
  { name: "Data Science", icon: Database, slogan: "Analyze & visualize data", link: "/resources/data-science" },
  { name: "Blockchain", icon: Layers, slogan: "Explore decentralized tech", link: "/resources/blockchain" },
  { name: "Cyber Security", icon: Lock, slogan: "Protect digital assets", link: "/resources/cyber-security" }
];

export default function ResourcesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 md:px-12 py-12">

      {/* HERO SECTION */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">Premium Tech Resources 🚀</h1>
        <p className="text-lg text-gray-300 mt-2">Get high-quality learning materials for Web, AI, Data Science & more!</p>
        <Button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-md">
          Get All for ₹999
        </Button>
      </section>

      {/* RESOURCE FEATURES SECTION */}
      <section className="bg-white text-gray-900 shadow-lg rounded-xl p-8 max-w-5xl mx-auto mb-12">
        <h2 className="text-2xl font-bold text-center mb-5">📚 What’s Inside?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resources.map((resource, idx) => (
            <div 
              key={idx} 
              className="flex items-center bg-gray-100 p-4 rounded-lg border border-gray-300 transition hover:border-gray-500"
            >
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <p className="text-sm font-medium">{resource}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPACT PREMIUM CARDS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {domains.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <Card 
              key={index} 
              className="relative p-4 bg-white text-gray-900 border border-gray-300 shadow-lg rounded-lg transition hover:border-gray-600 hover:shadow-xl"
            >
              <CardHeader className="flex flex-row items-center space-x-3">
                <div className="p-3 bg-gray-100 rounded-full shadow-md">
                  <Icon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-lg font-semibold">{domain.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-600 mt-2">
                {domain.slogan}
              </CardContent>
              <Button 
                className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md"
                onClick={() => router.push(domain.link)}
              >
                View Resources
              </Button>
            </Card>
          );
        })}
      </section>

      {/* PRICING SECTION */}
      <div className="mt-14 text-center">
        <h2 className="text-2xl font-bold text-yellow-400">Get Everything for ₹999</h2>
        <p className="text-lg text-gray-300 mt-2">One-time payment for lifetime access</p>
        <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md">
          Buy Now for ₹999
        </Button>
      </div>

    </div>
  );
}
