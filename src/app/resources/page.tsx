'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Code, Server, Globe, Activity,CheckCircle, Cpu, BarChart } from "lucide-react";

const resources = [
  "📜 Handwritten Notes",
  "📘 Expert Handbooks",
  "📊 Diagrammatic Explanations",
  "📑 Cheat Sheets",
  "💡 Interview Questions",
  "🔗 Top Reference Links"
];

const domains = [
  { name: "Frontend", icon: Code, slogan: "Build stunning websites", link: "/resources/web-development" },
  { name: "Backend", icon: Server, slogan: "Create powerful server-side applications", link: "/resources/app-development" },
  { name: "Full Stack", icon: Globe, slogan: "Master end-to-end development", link: "/resources/full-stack" },
  { name: "DevOps", icon: Activity, slogan: "Automate and optimize infrastructure", link: "/resources/devops" },
  { name: "Artificial Intelligence", icon: Cpu, slogan: "Explore AI & ML innovations", link: "/resources/ai" },
  { name: "Data Science", icon: BarChart, slogan: "Analyze & visualize data", link: "/resources/data-science" }
];

export default function ResourcesPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen border-b-indigo-50 text-white px-6 md:px-12 py-12">

      {/* HERO SECTION */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-950">Premium Tech Resources 🚀</h1>
        <p className="text-lg text-gray-950 mt-2">Get high-quality learning materials for Web, AI, Data Science & more!</p>
        <Button className="mt-4 bg-blue-900 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md">
          Get All for ₹ 199
        </Button>
      </section>

      {/* RESOURCE FEATURES SECTION */}
      <section className="bg-white text-gray-900  rounded-sm p-8 max-w-5xl mx-auto mb-12">
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
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {domains.map((domain, index) => {
          const Icon = domain.icon;
          return (
            <Card 
              key={index} 
              className="relative p-5 bg-white text-gray-900 border  border-gray-100 shadow-sm rounded-lg transition hover:border-gray-900 hover:shadow-lg"
            >
              <CardHeader className="flex flex-row items-center space-x-1">
                <div className="p-3 rounded-full ">
                  <Icon className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-lg font-semibold">{domain.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-900 ">
                {domain.slogan}
              </CardContent>
              <Button 
                className=" w-full bg-blue-950 hover:bg-black text-white font-medium py-2 "
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
        <h2 className="text-2xl font-bold text-yellow-400">Get Everything for ₹ 199</h2>
        <p className="text-lg text-gray-950 mt-2">One-time payment for lifetime access</p>
        <Button className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg px-6 py-3 rounded-lg shadow-md">
          Buy Now for ₹ 199
        </Button>
      </div>

    </div>
  );
}
