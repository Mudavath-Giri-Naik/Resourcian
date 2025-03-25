"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


const jobCategories = [
    {
      category: "Software Development & Engineering Roles",
      roles: [
        {
          name: "Software Development Engineer (SDE 1)",
          level: "Fresher",
          salary: "₹12-16 LPA",
          workArea: "Developing software applications",
        },
        {
          name: "Software Development Engineer (SDE 2)",
          level: "Experienced",
          salary: "₹20-35 LPA",
          workArea: "Advanced software development",
        },
        {
          name: "Senior Software Engineer (SDE 3)",
          level: "Senior",
          salary: "₹50-75 LPA",
          workArea: "Leading development teams",
        },
        {
          name: "Principal Software Engineer",
          level: "Senior",
          salary: "₹50-90 LPA",
          workArea: "Architecting and designing systems",
        },
        {
          name: "Associate Software Engineer",
          level: "Fresher",
          salary: "₹10-15 LPA",
          workArea: "Entry-level coding tasks",
        },
        {
          name: "Backend Developer",
          level: "Fresher/Experienced",
          salary: "₹10-15 LPA",
          workArea: "Server-side development",
        },
        {
          name: "Frontend Developer",
          level: "Fresher/Experienced",
          salary: "₹10-15 LPA",
          workArea: "UI development",
        },
        {
          name: "Full-Stack Developer",
          level: "Fresher/Experienced",
          salary: "₹12-20 LPA",
          workArea: "Frontend & backend coding",
        },
        {
          name: "Mobile App Developer",
          level: "Fresher/Experienced",
          salary: "₹10-25 LPA",
          workArea: "Building mobile apps",
        },
        {
          name: "Embedded Systems Engineer",
          level: "Experienced",
          salary: "₹10-25 LPA",
          workArea: "Embedded software development",
        },
      ],
    },
    {
      category: "Artificial Intelligence & Machine Learning Roles",
      roles: [
        {
          name: "Machine Learning Engineer",
          level: "Experienced",
          salary: "₹12-50 LPA",
          workArea: "Building AI models",
        },
        {
          name: "Data Scientist",
          level: "Experienced",
          salary: "₹10-30 LPA",
          workArea: "Analyzing big data",
        },
        {
          name: "AI Research Engineer",
          level: "Senior",
          salary: "₹10-45 LPA",
          workArea: "AI innovations & research",
        },
      ],
    },
    {
      category: "Blockchain & Web3 Roles",
      roles: [
        {
          name: "Blockchain Developer",
          level: "Experienced",
          salary: "₹15-40 LPA",
          workArea: "Developing blockchain apps",
        },
        {
          name: "Web3 Developer",
          level: "Experienced",
          salary: "₹15-30 LPA",
          workArea: "Building decentralized apps",
        },
      ],
    },
    {
      category: "Cybersecurity & Ethical Hacking Roles",
      roles: [
        {
          name: "Cybersecurity Engineer",
          level: "Experienced",
          salary: "₹10-35 LPA",
          workArea: "Securing company networks",
        },
        {
          name: "Ethical Hacker",
          level: "Experienced",
          salary: "₹5-12 LPA",
          workArea: "Testing security vulnerabilities",
        },
        {
          name: "Security Architect",
          level: "Senior",
          salary: "₹12-20 LPA",
          workArea: "Designing security frameworks",
        },
      ],
    },
  ];
  

  const faqs = [
    {
      question: "Why Do Companies List 'Experience Required' for AI, ML, and DS Roles?",
      answer: (
        <>
          <ul className="list-disc pl-6">
            <li><span className="text-blue-600 font-semibold">Job-Ready Expectation:</span> Companies prefer candidates who need minimal training.</li>
            <li><span className="text-green-600 font-semibold">Practical Skills:</span> AI/ML requires deep mathematical and statistical knowledge.</li>
            <li><span className="text-red-600 font-semibold">Experience Isn't Always Industry Work:</span> Internships, Kaggle competitions, and research also count.</li>
            <li><span className="text-purple-600 font-semibold">Filtering Applicants:</span> Companies sometimes overstate requirements to reduce applications.</li>
          </ul>
        </>
      ),
    },
    {
      question: "What Roles Do Freshers Get in AI, ML, and DS?",
      answer: (
        <>
          <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-300 p-2">Role</th>
                <th className="border border-gray-300 p-2">What They Do</th>
                <th className="border border-gray-300 p-2">Commonly Found In</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold text-blue-600">Machine Learning Intern</td>
                <td className="border border-gray-300 p-2">Supports ML engineers, works on small models, cleans data.</td>
                <td className="border border-gray-300 p-2">Startups, Research Labs</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 font-semibold text-green-600">Data Analyst</td>
                <td className="border border-gray-300 p-2">Cleans & visualizes data, creates reports.</td>
                <td className="border border-gray-300 p-2">Banks, E-commerce</td>
              </tr>
            </tbody>
          </table>
        </>
      ),
    },
    {
      question: "How Freshers Can Get Hired Despite 'Experience Required'",
      answer: (
        <>
          <ul className="list-disc pl-6">
          <li className="text-blue-600 font-semibold"> Experience ≠ Work Experience:</li>
            <ul className="list-circle pl-8">
              <li>Internships, projects, open-source contributions, and coding competitions are often counted as experience..</li>
            </ul>
            <li className="text-blue-600 font-semibold">Build a Strong Portfolio:</li>
            <ul className="list-circle pl-8">
              <li>Include AI/ML projects on GitHub/Kaggle,Contribute to open source & participate in hackathons,Gain internships,showcase your work online.</li>
            </ul>
            <li className="text-green-600 font-semibold">Gain Practical Experience:</li>
            <ul className="list-circle pl-8">
              <li>Internships, freelance projects, open-source contributions.</li>
            </ul>
            <li className="text-red-600 font-semibold">Learn Industry-Used Tools:</li>
            <ul className="list-circle pl-8">
              <li>Python, SQL, TensorFlow, AWS, Tableau.</li>
            </ul>
          </ul>
        </>
      ),
    },
    {
      question: "How Can I Get an Internship as a Fresher with No Experience?",
      answer: (
        <>
          <ul className="list-disc pl-6">
            <li className="text-blue-600 font-semibold">Cold Email Companies & Startups:</li>
            <ul className="list-circle pl-8">
              <li>Showcase your projects & skills in your email.</li>
            </ul>
            <li className="text-green-600 font-semibold">Apply on Multiple Platforms:</li>
            <ul className="list-circle pl-8">
              <li>LinkedIn, Internshala, AngelList, Naukri.</li>
            </ul>
            <li className="text-red-600 font-semibold">Contribute to Open-Source Projects:</li>
            <ul className="list-circle pl-8">
              <li>Join Google Summer of Code, Hacktoberfest.</li>
            </ul>
            <li className="text-purple-600 font-semibold">Attend Hackathons & Coding Competitions:</li>
            <ul className="list-circle pl-8">
              <li>Networking & skill demonstration can get you noticed.</li>
            </ul>
          </ul>
        </>
      ),
    },
  ];


// ... (keep the same jobCategories and faqs data as in your original code)

const JobPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Explore Tech Job Roles
        </h1>
        <p className="text-gray-600 md:text-lg">
          Discover top job categories and career opportunities in the tech industry.
        </p>
      </div>

      {/* Desktop Tables (md and above) */}
      <div className="hidden md:block">
        {jobCategories.map((category, index) => (
          <div key={index} className="mb-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 bg-gray-50 border-b">
              <h2 className="text-xl font-semibold text-gray-800">
                {category.category}
              </h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Role</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Level</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Salary Range</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Work Area</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {category.roles.map((role, roleIndex) => (
                    <tr key={roleIndex} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-gray-900 font-medium whitespace-nowrap">{role.name}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          role.level === "Fresher" ? "bg-green-100 text-green-800" :
                          role.level === "Experienced" ? "bg-orange-100 text-orange-800" :
                          "bg-purple-100 text-purple-800"
                        }`}>
                          {role.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-900 font-semibold whitespace-nowrap">{role.salary}</td>
                      <td className="px-6 py-4 text-gray-600">{role.workArea}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Cards (below md breakpoint) */}
      <div className="md:hidden space-y-6">
        {jobCategories.map((category, catIndex) => (
          <div key={catIndex}>
            <h2 className="text-blue-600 font-bold text-lg mb-4">{category.category}</h2>
            <div className="grid gap-4">
              {category.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-gray-800 font-semibold text-lg">{role.name}</h3>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                      role.level === "Fresher" ? "bg-green-100 text-green-800" :
                      role.level === "Experienced" ? "bg-orange-100 text-orange-800" :
                      "bg-purple-100 text-purple-800"
                    }`}>
                      {role.level}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-600 font-semibold">{role.salary}</p>
                    <p className="text-gray-600 text-sm">{role.workArea}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 bg-gray-50 border-b">
          <h2 className="text-2xl font-semibold text-gray-800">Frequently Asked Questions</h2>
        </div>
        
        <div className="p-6 space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg">
              <button
                className="w-full flex justify-between items-center p-4 hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
              </button>
              {openIndex === index && (
                <div className="p-4 pt-2 text-gray-600 border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobPage;