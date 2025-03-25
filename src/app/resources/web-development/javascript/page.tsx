"use client";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Menu, X, ScrollText, BookOpen, BarChart, FileText, Lightbulb, Link } from "lucide-react";

const sections = [
  "Frontend Development",
  "Backend Development",
  "Database & Storage",
  "DevOps & Deployment",
  "WebSockets",
  "Testing & Debugging",
  "Version Control",
  "Web3 & Blockchain",
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
  "Handwritten Notes": ["JS Basics", "Advanced React", "Node.js Deep Dive"],
  "Expert Handbooks": ["Frontend Best Practices", "Backend Architecture"],
  "Diagrammatic Explanations": ["System Design", "API Flowcharts"],
  "Cheat Sheets": ["JS Snippets", "React Shortcuts"],
  "Interview Questions": ["Top 100 JS Questions", "React FAQs"],
  "Top Reference Links": ["MDN Docs", "JavaScript.info"],
};
export default function Page() {
   const [selectedSection, setSelectedSection] = useState(sections[0]);
  const [selectedResource, setSelectedResource] = useState(resources[0].title);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setSidebarOpen(!mobile);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const handleSectionSelect = (section: string) => {
    setSelectedSection(section);
    if (isMobile) setSidebarOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Overlay */}
      {isMobile && sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Fixed mobile behavior */}
      <aside
        className={`fixed md:relative z-50 h-full bg-white border-r transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          w-72 shadow-lg md:shadow-none md:translate-x-0`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-blue-600">JS Full Stack</h2>
          {isMobile && (
            <Button
              variant="ghost"
              onClick={() => setSidebarOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-lg md:hidden"
            >
              <X className="h-5 w-5 text-gray-600" />
            </Button>
          )}
        </div>
        <ScrollArea className="h-[calc(100vh-65px)] p-4">
          {sections.map((section) => (
            <Button
              key={section}
              variant="ghost"
              className={`w-full justify-start mb-2 px-4 py-3 rounded-lg text-base
                ${selectedSection === section ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
              onClick={() => handleSectionSelect(section)}
            >
              {section}
            </Button>
          ))}
        </ScrollArea>
      </aside>

      {/* Main Content - Reduced gap and centered */}
      <main className="flex-1 transition-margin duration-300 mt-10">
        <div className="p-4 md:p-6 max-w-7xl mx-auto">
          {/* Mobile Header */}
          <div className="md:hidden mb-4">
            <Button
              variant="outline"
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </Button>
          </div>

          {/* Title Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              {selectedSection}
            </h1>
            <Separator className="bg-gray-200" />
          </div>

          {/* Resource Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {resources.map(({ title, icon, color }) => (
              <button
                key={title}
                onClick={() => setSelectedResource(title)}
                className={`flex items-center p-3 rounded-lg border transition-all
                  ${selectedResource === title 
                    ? 'border-blue-200 bg-blue-50' 
                    : 'border-gray-200 hover:bg-gray-50'}`}
              >
                <span className={`mr-2 ${color}`}>{icon}</span>
                <span className="text-sm md:text-base font-medium">{title}</span>
              </button>
            ))}
          </div>

          {/* Resource Cards */}
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resourceData[selectedResource].map((item) => (
              <Card key={item} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item}</h3>
                  <p className="text-gray-500 text-sm mb-4">Detailed resource description here</p>
                  <Button variant="outline" className="w-full">View Resource</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}