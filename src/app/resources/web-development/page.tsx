"use client";

import Link from "next/link";
import { 
  FaReact, FaVuejs, FaNodeJs, FaDocker, FaGit, FaGithub, FaJava, FaPython 
} from "react-icons/fa";
import { 
  SiExpress, SiMongodb, SiPostgresql, SiKubernetes, SiJest, SiCypress,SiNextdotjs,SiNestjs,
  SiVercel, SiNetlify, SiMysql, SiOracle, SiJenkins, SiSelenium, SiHeroku, 
  SiDjango, SiFlask, SiFastapi, SiSqlite, SiAnsible, SiTerraform, SiBitbucket 
} from "react-icons/si";

// Define TypeScript types
type Tool = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

type TechCategory = {
  [category: string]: Tool[];
};

type TechStack = {
  [language: string]: TechCategory;
};

// Define tech stack with proper typing
const techStack: TechStack = {
  JavaScript: {
    frontend: [{ name: "React", icon: FaReact }, { name: "Vue.js", icon: FaVuejs }],
    backend: [{ name: "Node.js", icon: FaNodeJs }, { name: "Express.js", icon: SiExpress }],
    database: [{ name: "MongoDB", icon: SiMongodb }, { name: "PostgreSQL", icon: SiPostgresql }],
    devops: [{ name: "Docker", icon: FaDocker }, { name: "Kubernetes", icon: SiKubernetes }],
    testing: [{ name: "Jest", icon: SiJest }, { name: "Cypress", icon: SiCypress }],
    deployment: [{ name: "Vercel", icon: SiVercel }, { name: "Netlify", icon: SiNetlify }],
    version_control: [{ name: "Git", icon: FaGit }, { name: "GitHub", icon: FaGithub }],
  },
  Java: {
    frontend: [{ name: "JavaFX", icon: FaJava }, { name: "Vaadin", icon: FaJava }],
    backend: [{ name: "Spring Boot", icon: FaJava }, { name: "Quarkus", icon: FaJava }],
    database: [{ name: "MySQL", icon: SiMysql }, { name: "OracleDB", icon: SiOracle }],
    devops: [{ name: "Jenkins", icon: SiJenkins }, { name: "Kubernetes", icon: SiKubernetes }],
    testing: [{ name: "JUnit", icon: SiJenkins }, { name: "Selenium", icon: SiSelenium }],
    deployment: [{ name: "Heroku", icon: SiHeroku }, { name: "AWS", icon: SiBitbucket }],
    version_control: [{ name: "Git", icon: FaGit }, { name: "GitHub", icon: FaGithub }],
  },
  Python: {
    frontend: [{ name: "Django", icon: SiDjango }, { name: "Flask", icon: SiFlask }],
    backend: [{ name: "FastAPI", icon: SiFastapi }],
    database: [{ name: "SQLite", icon: SiSqlite }, { name: "PostgreSQL", icon: SiPostgresql }],
    devops: [{ name: "Ansible", icon: SiAnsible }, { name: "Terraform", icon: SiTerraform }],
    testing: [{ name: "PyTest", icon: SiJest }, { name: "UnitTest", icon: SiJenkins }],
    deployment: [{ name: "Google Cloud", icon: SiBitbucket }, { name: "Azure", icon: SiBitbucket }],
    version_control: [{ name: "Git", icon: FaGit }, { name: "Bitbucket", icon: SiBitbucket }],
  },
};
const qaPairs = [
  {
    question: "What is the best way to start learning web development?",
    answer: "Start with HTML, CSS, and JavaScript. Once you're comfortable, move to a frontend framework like React or Next.js."
  },
  {
    question: "Should I learn JavaScript before React?",
    answer: "Yes! JavaScript fundamentals are essential before diving into React or Next.js."
  },
  {
    question: "What is the difference between React and Next.js?",
    answer: "React is a frontend library, while Next.js is a framework that adds features like server-side rendering, static site generation, and API routes."
  },
  {
    question: "Why should I use Tailwind CSS instead of normal CSS?",
    answer: "Tailwind CSS makes styling faster with utility classes, improves consistency, and reduces the need for writing custom CSS."
  },
  {
    question: "How do I optimize a React app for better performance?",
    answer: "Use React.memo, lazy loading, code splitting, and minimize re-renders with useCallback and useMemo."
  }
];



const TechCard = ({ language, stack }: { language: string; stack: any }) => {
  const path = `/web-development/${language.toLowerCase()}`;

  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm w-full md:max-w-[320px] bg-white mb-4 hover:shadow-md transition-shadow">
      <h2 className="text-lg font-bold mb-3 text-gray-800 text-center">
        {language}
      </h2>
      
      <div className="space-y-1">
        {Object.entries(stack).map(([category, tools]: [string, any]) => (
          <div key={category} className="flex flex-col">
            {/* Category Header */}
            <div className="relative flex items-center py-1">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className={`flex-shrink-0 px-2 text-xs font-medium uppercase tracking-wide ${getCategoryColor(category)} bg-gray-50 rounded-full`}>
                {category.replace("_", " ")}
              </span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 gap-2 pl-4">
              {tools.map((tool: any) => (
                <div key={tool.name} className="flex items-center gap-2 p-1.5 bg-gray-50 rounded">
                  <tool.icon className={`w-4 h-4 flex-shrink-0 ${getCategoryColor(category)}`} />
                  <span className="text-sm text-gray-700 truncate">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Link href={path} className="mt-4 block">
        <button className="w-full py-2 px-3 bg-gray-800 hover:bg-gray-900 text-white rounded-md text-sm font-medium transition-colors">
          Open Resources
        </button>
      </Link>
    </div>
  );
};
// Add this utility function above your component
const getCategoryColor = (category: string) => {
  const colors: { [key: string]: string } = {
    frontend: "text-blue-600",
    backend: "text-purple-600",
    database: "text-emerald-600",
    devops: "text-orange-600",
    testing: "text-red-600",
    deployment: "text-cyan-600",
    version_control: "text-pink-600"
  };
  return colors[category] || "text-gray-600";
};



export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10 mt-10">
          Full Stack Developement with
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {Object.entries(techStack).map(([language, stack]) => (
            <TechCard key={language} language={language} stack={stack} />
          ))}
        </div>
      </div>
    </div>
  );
}


