"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Menu, X, ScrollText, BookOpen, BarChart, FileText, Lightbulb, Link } from "lucide-react";

const sections = [
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Bootstrap ",
    "Material UI",
    "React",
    "Git",
    "Backend Basics",
    "Advanced Frontend",
    "Final Projects"
  ];
  

const resources = [
  { title: "Handwritten Notes", icon: <ScrollText className="w-4 h-4" />, color: "text-blue-600" },
  { title: "Expert Handbooks", icon: <BookOpen className="w-4 h-4" />, color: "text-green-600" },
  { title: "Diagrammatic Explanations", icon: <BarChart className="w-4 h-4" />, color: "text-purple-600" },
  { title: "Cheat Sheets", icon: <FileText className="w-4 h-4" />, color: "text-orange-600" },
  { title: "Interview Questions", icon: <Lightbulb className="w-4 h-4" />, color: "text-red-600" },
  { title: "Top Reference Links", icon: <Link className="w-4 h-4" />, color: "text-pink-600" },
];

const resourceData: Record<string, string[]> = {
    "Handwritten Notes": ["HTML & CSS Basics", "JavaScript Essentials", "React Fundamentals"],
    "Expert Handbooks": ["Modern Frontend Architecture", "UI/UX Best Practices"],
    "Diagrammatic Explanations": ["CSS Box Model", "React Component Lifecycle"],
    "Cheat Sheets": ["CSS Flexbox & Grid", "JavaScript ES6+ Shortcuts", "React Hooks Guide"],
    "Interview Questions": ["Top 100 Frontend Questions", "React & JavaScript FAQs"],
    "Top Reference Links": ["MDN Web Docs", "CSS Tricks", "JavaScript.info", "Frontend Masters Blog"]
  };
  

export default function Page() {
  const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [selectedResource, setSelectedResource] = useState(resources[0].title);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSectionSelect = (section: string) => {
    setSelectedSection(section);
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Overlay Menu */}
      {isMobile && sidebarOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-40">
          <div className="bg-white p-4 w-80 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-blue-600">Category</h2>
              <Button variant="ghost" onClick={() => setSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
            <ScrollArea className="h-100 p-2">
              {sections.map((section) => (
                <Button
                  key={section}
                  variant="ghost"
                  className={`w-full justify-start mb-2 px-4 py-5 rounded-lg text-base transition-all 
                    ${selectedSection === section ? "bg-blue-50 text-blue-700 font-semibold" : "text-gray-600 hover:bg-gray-100"}`}
                  onClick={() => handleSectionSelect(section)}
                >
                  {section}
                </Button>
              ))}
            </ScrollArea>
          </div>
        </div>
      )}

      {/* Sidebar for Desktop */}
      {!isMobile && (
        <aside className="w-72  bg-white border-r shadow-sm">
          <div className="p-8 border-b">
            <h2 className="text-4xl font-bold text-black ">Frontend</h2>
          </div>
          <ScrollArea className="h-[calc(100vh-65px)] p-4">
            {sections.map((section) => (
              <Button
                key={section}
                variant="ghost"
                className={`w-full justify-start mb-2 px-4 py-2 rounded-lg text-base transition-all
                  ${selectedSection === section ? "bg-blue-100 text-blue-700 font-semibold" : "text-gray-600 hover:bg-gray-300"}`}
                onClick={() => handleSectionSelect(section)}
              >
                {section}
              </Button>
            ))}
          </ScrollArea>
        </aside>
      )}

      {/* Main Content */}
      <main className="flex-1 transition-margin duration-300 mt-10">
        <div className="p-4 md:p-6 max-w-7xl mx-auto">
          {/* Mobile Menu Button */}
          {isMobile && (
            <div className="mb-4">
              <Button variant="outline" onClick={() => setSidebarOpen(true)} className="p-2 hover:bg-gray-100">
                <Menu className="h-6 w-6 text-gray-600" />
              </Button>
            </div>
          )}

          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{selectedSection}</h1>
            <Separator className="bg-gray-200" />
          </div>

          {/* Resource Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {resources.map(({ title, icon, color }) => (
              <button
                key={title}
                onClick={() => setSelectedResource(title)}
                className={`flex items-center p-3 rounded-lg border transition-all
                  ${selectedResource === title ? "border-blue-200 bg-blue-50" : "border-gray-200 hover:bg-gray-50"}`}
              >
                <span className={`mr-2 ${color}`}>{icon}</span>
                <span className="text-sm md:text-base font-medium">{title}</span>
              </button>
            ))}
          </div>

          {/* Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceData[selectedResource].map((item) => (
              <Card key={item} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item}</h3>
                  <p className="text-gray-500 text-sm mb-4">Detailed resource description here</p>
                  <Button variant="outline" className="w-full">
                    View Resource
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
