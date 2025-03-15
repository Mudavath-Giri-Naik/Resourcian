"use client"; // Only needed if using Next.js App Router (13+)


import { 
  FaReact, FaVuejs, FaNodeJs, FaDocker, FaGit, FaGithub, FaJava, FaPython 
} from "react-icons/fa";
import { 
  SiExpress, SiMongodb, SiPostgresql, SiKubernetes, SiJest, SiCypress, 
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
// TechCard component with modern design
const TechCard: React.FC<{ language: string; stack: TechCategory }> = ({ language, stack }) => {
  return (
    <>
    <div className="border border-gray-300  p-5 shadow-sm w-full lg:w-1/3 xl:w-1/4 bg-white">
      <h2 className="text-xl font-bold mb-4 text-center">{language}</h2>
      <table className="w-full border-collapse text-left">
        <tbody>
          {Object.entries(stack).map(([category, tools]) => (
            <tr key={category} className="border-t border-gray-200">
              <td className="p-2 font-semibold align-top w-1/3">{category.replace("_", " ")}</td>
              <td className="p-2 grid grid-cols-2 gap-x-4 gap-y-2">
                {tools.map((tool: Tool) => (
                  <div key={tool.name} className="flex items-center gap-2">
                    <tool.icon className="w-5 h-5" />
                    <span>{tool.name}</span>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
};

// Main Page Component
const WebDevelopmentPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-20 space-y-20 bg-gray-200">
      <h1 className="text-4xl font-bold text-black-800">Full Stack Development Tools</h1>
      <div className="flex flex-wrap justify-center gap-5 w-full max-w-screen-xl">
        {Object.entries(techStack).map(([language, stack]) => (
          <TechCard key={language} language={language} stack={stack} />
        ))}
      </div>
        
    </div>
  );
};

export default WebDevelopmentPage;