"use client";

import { useRouter } from "next/navigation";
import { 
  FaReact, FaVuejs, FaNodeJs, FaDocker, FaGit, FaGithub, FaJava, FaPython 
} from "react-icons/fa";
import { 
  SiSpringboot, SiHibernate, SiExpress, SiMongodb, SiPostgresql, SiKubernetes, 
  SiJest, SiCypress, SiVercel, SiNetlify, SiMysql, SiOracle, SiJenkins, 
  SiSelenium, SiHeroku, SiDjango, SiFlask, SiFastapi, SiSqlite, SiAnsible, 
  SiTerraform, SiBitbucket 
} from "react-icons/si";

const categoryColors: { [key: string]: { bg: string; icon: string } } = {
  Frontend: { bg: "bg-blue-50", icon: "text-blue-600" },
  Backend: { bg: "bg-green-50", icon: "text-green-600" },
  Database: { bg: "bg-orange-50", icon: "text-orange-600" },
  DevOps: { bg: "bg-purple-50", icon: "text-purple-600" },
  Testing: { bg: "bg-red-50", icon: "text-red-600" },
  Deployment: { bg: "bg-teal-50", icon: "text-teal-600" },
  VersionControl: { bg: "bg-gray-100", icon: "text-gray-600" },
};

const techStack = {
  JavaScript: {
    Frontend: [{ name: "React", icon: FaReact }, { name: "Vue.js", icon: FaVuejs }],
    Backend: [{ name: "Node.js", icon: FaNodeJs }, { name: "Express.js", icon: SiExpress }],
    Database: [{ name: "MongoDB", icon: SiMongodb }, { name: "PostgreSQL", icon: SiPostgresql }],
    DevOps: [{ name: "Docker", icon: FaDocker }, { name: "Kubernetes", icon: SiKubernetes }],
    Testing: [{ name: "Jest", icon: SiJest }, { name: "Cypress", icon: SiCypress }],
    Deployment: [{ name: "Vercel", icon: SiVercel }, { name: "Netlify", icon: SiNetlify }],
    VersionControl: [{ name: "Git", icon: FaGit }, { name: "GitHub", icon: FaGithub }],
  },
  Java: {
    Frontend: [{ name: "Spring Boot", icon: SiSpringboot }],
    Backend: [{ name: "Hibernate", icon: SiHibernate }],
    Database: [{ name: "MySQL", icon: SiMysql }, { name: "Oracle", icon: SiOracle }],
    DevOps: [{ name: "Docker", icon: FaDocker }, { name: "Terraform", icon: SiTerraform }],
    Testing: [{ name: "JUnit", icon: SiJenkins }, { name: "Selenium", icon: SiSelenium }],
    Deployment: [{ name: "Heroku", icon: SiHeroku }],
    VersionControl: [{ name: "Git", icon: FaGit }, { name: "Bitbucket", icon: SiBitbucket }],
  },
  Python: {
    Frontend: [{ name: "Django", icon: SiDjango }, { name: "Flask", icon: SiFlask }],
    Backend: [{ name: "FastAPI", icon: SiFastapi }],
    Database: [{ name: "SQLite", icon: SiSqlite }, { name: "PostgreSQL", icon: SiPostgresql }],
    DevOps: [{ name: "Ansible", icon: SiAnsible }, { name: "Terraform", icon: SiTerraform }],
    Testing: [{ name: "PyTest", icon: SiJest }],
    Deployment: [{ name: "Google Cloud", icon: SiBitbucket }],
    VersionControl: [{ name: "Git", icon: FaGit }, { name: "Bitbucket", icon: SiBitbucket }],
  },
};

const TechCard = ({ language, stack }: { language: string; stack: any }) => {
  const router = useRouter();

  return (
    <div className="border border-gray-200 rounded-xl p-4 bg-white hover:shadow-lg transition-all duration-200 w-full max-w-[350px] h-auto">
      <h2 className="text-xl font-bold mb-3 text-gray-900 text-center uppercase">
        {language}
      </h2>
      
      <div className="space-y-1">
        {Object.entries(stack).map(([category, tools]) => (
          <div key={category} className={`${categoryColors[category].bg} rounded-lg p-2`}>
            <div className="flex items-center justify-center mb-1">
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                {category}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {(tools as any[]).map((tool) => (
                <div key={tool.name} className="flex items-center space-x-2 p-1 rounded-md bg-white hover:bg-gray-50 transition">
                  <tool.icon className={`w-4 h-4 ${categoryColors[category].icon}`} />
                  <span className="text-xs font-medium text-gray-900">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
  className="w-full bg-blue-950 hover:bg-black text-white font-medium py-2 flex items-center justify-center space-x-2 transition-all duration-200 rounded-lg"
  onClick={() => router.push(`/app/web-development/${language.toLowerCase()}`)}
>
  <span>View Resources</span>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>

    </div>
  );
};

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Choose Full Stack In ...
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {Object.entries(techStack).map(([language, stack]) => (
            <TechCard key={language} language={language} stack={stack} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
