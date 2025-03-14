"use client";

import { useState } from "react";

const opportunities = [
  { title: "Google Summer of Code", company: "Google", type: "Internship", link: "https://summerofcode.withgoogle.com/", eligibility: "Students", status: "Not Started" },
  { title: "MLH Hackathons", company: "MLH", type: "Hackathon", link: "https://mlh.io/seasons/2025/events", eligibility: "Open for All", status: "Ongoing" },
  { title: "Microsoft Internship", company: "Microsoft", type: "Job", link: "https://careers.microsoft.com/", eligibility: "Students & Graduates", status: "Not Started" },
  { title: "Flipkart Grid", company: "Flipkart", type: "Hackathon", link: "https://www.notion.so/Flipkart-Grid", eligibility: "Engineering Students", status: "Ongoing" },
  { title: "Goldman Sachs", company: "Goldman Sachs", type: "Internship", link: "https://www.notion.so/Goldman-Sachs", eligibility: "Final Year Students", status: "Ongoing" },
  { title: "EY Technathon", company: "EY", type: "Hackathon", link: "https://www.notion.so/EY-Technathon", eligibility: "Open for All", status: "Ongoing" },
  { title: "JP Morgan", company: "JP Morgan", type: "Internship", link: "https://www.notion.so/JP-Morgan", eligibility: "Students", status: "Not Started" },
  { title: "Smart India Hackathon 2025", company: "Govt. of India", type: "Hackathon", link: "https://www.notion.so/Smart-India-Hackathon-2025", eligibility: "Students", status: "Not Started" },
];

export default function OpportunitiesPage() {
  const [filter, setFilter] = useState("All");

  const filteredOpportunities =
    filter === "All"
      ? opportunities
      : opportunities.filter((opp) => opp.type === filter);

  return (
    <div className="p-6 md:p-12 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Latest Opportunities 🚀
      </h1>

      {/* Filter Dropdown */}
      <div className="mb-6 flex justify-end">
        <select
          className="p-2 border border-gray-400 rounded-md bg-white text-gray-700 shadow-sm focus:ring focus:ring-gray-300"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Internship">Internships</option>
          <option value="Hackathon">Hackathons</option>
          <option value="Job">Jobs</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl shadow-md">
        <table className="w-full bg-white border-collapse">
          <thead>
            <tr className="bg-gray-900 text-white text-lg">
              <th className="p-4 border border-gray-300 text-left">Company</th>
              <th className="p-4 border border-gray-300 text-left">Type</th>
              <th className="p-4 border border-gray-300 text-left">Link</th>
              <th className="p-4 border border-gray-300 text-left">Eligibility</th>
              <th className="p-4 border border-gray-300 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredOpportunities.map((opp, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="p-4 border border-gray-300">{opp.company}</td>
                <td className="p-4 border border-gray-300">
                  <span
                    className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      opp.type === "Internship"
                        ? "bg-gray-700 text-white"
                        : opp.type === "Hackathon"
                        ? "bg-yellow-500 text-black"
                        : "bg-gray-500 text-white"
                    }`}
                  >
                    {opp.type}
                  </span>
                </td>
                <td className="p-4 border border-gray-300">
                  <a
                    href={opp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:underline font-medium"
                  >
                    View 🌐
                  </a>
                </td>
                <td className="p-4 border border-gray-300">{opp.eligibility}</td>
                <td
                  className={`p-4 border border-gray-300 font-semibold ${
                    opp.status === "Ongoing"
                      ? "text-green-600"
                      : opp.status === "Not Started"
                      ? "text-orange-600"
                      : "text-red-600"
                  }`}
                >
                  {opp.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 md:p-12">
      {/* Hackathons Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Top Hackathons 🏆</h2>
        <p className="text-lg text-gray-700 mb-6">
          Participating in renowned hackathons can significantly boost your profile. These events provide hands-on
          experience, networking opportunities, and often come with prizes and job offers.
        </p>
        <ul className="space-y-6">
          <li>
            <h3 className="text-2xl font-semibold text-gray-900">Major League Hacking (MLH)</h3>
            <p className="text-gray-700">Eligibility: Open for all</p>
            <p className="text-gray-700">Start Date: Varies per event</p>
            <p className="text-gray-700">End Date: Varies per event</p>
            <p className="text-gray-700">
              Official Link: <a href="https://mlh.io/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mlh.io</a>
            </p>
            <p className="text-gray-700">
              Process: Register on MLH, find a team or participate solo, build a project within the given timeline, and
              present it to judges.
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold text-gray-900">Smart India Hackathon</h3>
            <p className="text-gray-700">Eligibility: Students from Indian colleges</p>
            <p className="text-gray-700">Start Date: Annually around January</p>
            <p className="text-gray-700">End Date: Annually around July</p>
            <p className="text-gray-700">
              Official Link: <a href="https://sih.gov.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">sih.gov.in</a>
            </p>
            <p className="text-gray-700">
              Process: Form a team, submit a solution to a government problem statement, and compete in multiple rounds
              leading to a grand finale.
            </p>
          </li>
        </ul>
      </section>

      {/* Internships Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Best Internships 🎯</h2>
        <p className="text-lg text-gray-700 mb-6">
          Securing internships at top companies can give you real-world experience, mentorship, and a chance to convert
          it into a full-time job.
        </p>
        <ul className="space-y-6">
          <li>
            <h3 className="text-2xl font-semibold text-gray-900">Google Summer of Code (GSoC)</h3>
            <p className="text-gray-700">Eligibility: Students worldwide</p>
            <p className="text-gray-700">Start Date: March (Applications open)</p>
            <p className="text-gray-700">End Date: August</p>
            <p className="text-gray-700">
              Official Link: <a href="https://summerofcode.withgoogle.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">summerofcode.withgoogle.com</a>
            </p>
            <p className="text-gray-700">
              Process: Select an open-source organization, propose a project, get selected, and complete coding tasks
              under mentorship.
            </p>
          </li>
          <li>
            <h3 className="text-2xl font-semibold text-gray-900">Microsoft Internship</h3>
            <p className="text-gray-700">Eligibility: Students & Graduates</p>
            <p className="text-gray-700">Start Date: Applications open year-round</p>
            <p className="text-gray-700">End Date: Varies per role</p>
            <p className="text-gray-700">
              Official Link: <a href="https://careers.microsoft.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">careers.microsoft.com</a>
            </p>
            <p className="text-gray-700">
              Process: Apply online, go through coding assessments and interviews, and work on real-world projects
              alongside Microsoft engineers.
            </p>
          </li>
        </ul>
      </section>
    </div>
    </div>
  );
}
