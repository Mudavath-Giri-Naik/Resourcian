"use client";

import { useState, useMemo } from "react";
import { FiSearch, FiFilter, FiExternalLink, FiCalendar, FiAward } from "react-icons/fi";

const opportunities = [
  // Hackathons
  {
    title: "MLH Hackathons",
    company: "Major League Hacking",
    type: "Hackathon",
    link: "https://mlh.io/",
    eligibility: "Open for All",
    status: "Ongoing"
  },
  {
    title: "Smart India Hackathon",
    company: "Government of India",
    type: "Hackathon",
    link: "https://sih.gov.in/",
    eligibility: "2nd year & above",
    status: "Not Started"
  },
  {
    title: "Great Indian Hackathon",
    company: "Government of India",
    type: "Hackathon",
    link: "https://innovateindia.mygov.in/",
    eligibility: "1st year & above",
    status: "Not Started"
  },
  {
    title: "HackFinance: IIITD Fintech Hackathon",
    company: "IIIT Delhi",
    type: "Hackathon",
    link: "https://iiitd.ac.in/hackfinance",
    eligibility: "3rd year & above (Undergraduate)",
    status: "Not Started"
  },
  {
    title: "IIT Bombay E-Yantra Robotics Competition",
    company: "IIT Bombay",
    type: "Hackathon",
    link: "https://www.e-yantra.org/",
    eligibility: "Engineering Students",
    status: "Not Started"
  },
  {
    title: "HackWithInfy",
    company: "Infosys",
    type: "Hackathon",
    link: "https://www.infosys.com/careers/hackwithinfy.html",
    eligibility: "Pre-final & final-year students",
    status: "Not Started"
  },
  {
    title: "Flipkart GRiD",
    company: "Flipkart",
    type: "Hackathon",
    link: "https://unstop.com/competition/flipkart-grid-software-development-track-flipkart-763881",
    eligibility: "2nd year & above (Engineering)",
    status: "Not Started"
  },
  {
    title: "Microsoft Imagine Cup",
    company: "Microsoft",
    type: "Hackathon",
    link: "https://imaginecup.microsoft.com/",
    eligibility: "University Students",
    status: "Not Started"
  },
  {
    title: "Google Cloud Ready Facilitator Program",
    company: "Google",
    type: "Hackathon",
    link: "https://events.withgoogle.com/google-cloud-ready-facilitator-program/",
    eligibility: "University Students",
    status: "Not Started"
  },
  {
    title: "KPIT Sparkle",
    company: "KPIT",
    type: "Hackathon",
    link: "https://sparkle.kpit.com/",
    eligibility: "Engineering & Science Students",
    status: "Not Started"
  },
  {
    title: "EY Techathon",
    company: "EY (Ernst & Young)",
    type: "Hackathon",
    link: "https://unstop.com/hackathons/ey-techathon-40-ernst-young-ey-719624",
    eligibility: "Open for All",
    status: "Not Started"
  },
  {
    title: "Devfolio Hackathons",
    company: "Devfolio",
    type: "Hackathon",
    link: "https://devfolio.co/hackathons",
    eligibility: "Open for All",
    status: "Ongoing"
  },
  {
    title: "Code Crusade",
    company: "IIT Madras",
    type: "Hackathon",
    link: "https://unstop.com/hackathons/code-crusade-shastra-iit-madras-756220",
    eligibility: "University Students",
    status: "Not Started"
  },
  {
    title: "InOut Hackathon",
    company: "InOut",
    type: "Hackathon",
    link: "https://hackinout.co/",
    eligibility: "Open for All",
    status: "Not Started"
  },
  {
    title: "WittyHacks",
    company: "WittyFeed & Devfolio",
    type: "Hackathon",
    link: "https://devfolio.co/wittyhacks",
    eligibility: "Open for All",
    status: "Not Started"
  },

  // Internships
  {
    title: "Google Summer of Code",
    company: "Google",
    type: "Internship",
    link: "https://summerofcode.withgoogle.com/",
    eligibility: "2nd year & above",
    status: "Not Started"
  },
  {
    title: "Microsoft Internship Program",
    company: "Microsoft",
    type: "Internship",
    link: "https://careers.microsoft.com/students/us/en/",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "Goldman Sachs Summer Analyst Program",
    company: "Goldman Sachs",
    type: "Internship",
    link: "https://www.goldmansachs.com/careers/students/programs/americas/summer-analyst-program.html",
    eligibility: "3rd year (Pre-final year)",
    status: "Not Started"
  },
  {
    title: "Infosys InStep Internship Program",
    company: "Infosys",
    type: "Internship",
    link: "https://www.infosys.com/instep/",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "Blackstone LaunchPad Internship Program",
    company: "Blackstone",
    type: "Internship",
    link: "https://launchpad.blackstone.com/",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "Coca-Cola Consolidated Applied Learning Internship",
    company: "Coca-Cola",
    type: "Internship",
    link: "https://www.coca-colacompany.com/careers",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "Jane Street Internship Program",
    company: "Jane Street",
    type: "Internship",
    link: "https://www.janestreet.com/join-jane-street/internships/",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "Deloitte Internship Program",
    company: "Deloitte",
    type: "Internship",
    link: "https://www2.deloitte.com/us/en/pages/careers/articles/join-deloitte-internships.html",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "PwC Internship Program",
    company: "PwC",
    type: "Internship",
    link: "https://www.pwc.com/gx/en/careers/internships.html",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "KPMG Internship Program",
    company: "KPMG",
    type: "Internship",
    link: "https://home.kpmg/xx/en/home/careers/internships.html",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "EY Internship Program",
    company: "EY",
    type: "Internship",
    link: "https://www.ey.com/en_gl/careers/students",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "IBM Internship Program",
    company: "IBM",
    type: "Internship",
    link: "https://www.ibm.com/employment/internships/",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "Amazon Internship Program",
    company: "Amazon",
    type: "Internship",
    link: "https://www.amazon.jobs/en/business_categories/student-programs",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "Facebook University Internship Program",
    company: "Meta (Facebook)",
    type: "Internship",
    link: "https://www.metacareers.com/careerprograms/fbu",
    eligibility: "2nd year & above",
    status: "Not Started"
  },
  {
    title: "Tesla Internship Program",
    company: "Tesla",
    type: "Internship",
    link: "https://www.tesla.com/careers/search/?query=intern",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "Apple Internship Program",
    company: "Apple",
    type: "Internship",
    link: "https://www.apple.com/careers/us/students.html",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "Intel Internship Program",
    company: "Intel",
    type: "Internship",
    link: "https://www.intel.com/content/www/us/en/jobs/student-programs/internships.html",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "Oracle Internship Program",
    company: "Oracle",
    type: "Internship",
    link: "https://www.oracle.com/corporate/careers/students-grads/internships/",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },
  {
    title: "SAP Internship Experience Program",
    company: "SAP",
    type: "Internship",
    link: "https://www.sap.com/about/careers/students-graduates/internships.html",
    eligibility: "3rd year & above, Graduates",
    status: "Not Started"
  },

  // Competitions
  {
    title: "TechGig Code Gladiators",
    company: "TechGig",
    type: "Competition",
    link: "https://www.techgig.com/codegladiators",
    eligibility: "Open for All",
    status: "Not Started"
  },
  {
    title: "TCS CodeVita",
    company: "TCS",
    type: "Competition",
    link: "https://www.tcscodevita.com/",
    eligibility: "Engineering & MCA students",
    status: "Not Started"
  },
  {
    title: "Meta Hacker Cup",
    company: "Meta (Facebook)",
    type: "Competition",
    link: "https://www.facebook.com/codingcompetitions/hacker-cup",
    eligibility: "Open for All",
    status: "Not Started"
  },
  {
    title: "ICPC India Regionals",
    company: "ICPC Foundation",
    type: "Competition",
    link: "https://icpc.global/",
    eligibility: "University Students",
    status: "Not Started"
  },
  {
    title: "AtCoder Beginner Contest",
    company: "AtCoder",
    type: "Competition",
    link: "https://atcoder.jp/",
    eligibility: "Open for All",
    status: "Ongoing"
  },
  {
    title: "LeetCode Weekly Contest",
    company: "LeetCode",
    type: "Competition",
    link: "https://leetcode.com/contest/",
    eligibility: "Open for All",
    status: "Ongoing"
  },
  {
    title: "Codeforces Rounds",
    company: "Codeforces",
    type: "Competition",
    link: "https://codeforces.com/contests",
    eligibility: "Open for All",
    status: "Ongoing"
  },
  {
    title: "CodeChef Starters, Long Challenge, and Cook-Off",
    company: "CodeChef",
    type: "Competition",
    link: "https://www.codechef.com/contests",
    eligibility: "Open for All",
    status: "Ongoing"
  },
  {
    title: "HackerEarth Circuits",
    company: "HackerEarth",
    type: "Competition",
    link: "https://www.hackerearth.com/challenges/",
    eligibility: "Open for All",
    status: "Ongoing"
  },
  {
    title: "HackerRank Week of Code",
    company: "HackerRank",
    type: "Competition",
    link: "https://www.hackerrank.com/domains/tutorials/10-days-of-code",
    eligibility: "Open for All",
    status: "Ongoing"
  }
];




export default function OpportunitiesPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("title");
  const [showStatus, setShowStatus] = useState("all");

  const filteredOpportunities = useMemo(() => {
    return opportunities
      .filter(opp => 
        (filter === "All" || opp.type === filter) &&
        (opp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         opp.company.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (showStatus === "all" || opp.status === showStatus)
      )
      .sort((a, b) => 
        String(a[sortBy as keyof typeof a]).localeCompare(String(b[sortBy as keyof typeof b]))
      );
  }, [filter, searchQuery, sortBy, showStatus]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          Opportunity Hub
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
          Discover annual recurring opportunities to boost your career. 
          <span className="block mt-2 text-blue-600 font-semibold">
            Never miss your perfect chance! 🌟
          </span>
        </p>
      </header>

      {/* Controls Section */}
      <div className="mb-8 space-y-4">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search opportunities..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {["All", "Internship", "Hackathon", "Competition"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === type
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-600 shadow-md hover:shadow-lg"
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Status Toggle */}
          <div className="flex items-center space-x-2 bg-white p-2 rounded-lg shadow-md">
            <span className="text-gray-600 text-sm">Status:</span>
            <button
              onClick={() => setShowStatus("all")}
              className={`px-3 py-1 rounded-md text-sm ${
                showStatus === "all" ? "bg-blue-100 text-blue-600" : "text-gray-600"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setShowStatus("Ongoing")}
              className={`px-3 py-1 rounded-md text-sm ${
                showStatus === "Ongoing" ? "bg-green-100 text-green-600" : "text-gray-600"
              }`}
            >
              Ongoing
            </button>
            <button
              onClick={() => setShowStatus("Not Started")}
              className={`px-3 py-1 rounded-md text-sm ${
                showStatus === "Not Started" ? "bg-orange-100 text-orange-600" : "text-gray-600"
              }`}
            >
              Upcoming
            </button>
          </div>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white px-4 py-2 rounded-lg shadow-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="title">Sort by Title</option>
            <option value="company">Sort by Company</option>
            <option value="status">Sort by Status</option>
          </select>
        </div>
      </div>

      {/* Opportunities Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredOpportunities.map((opp, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{opp.title}</h3>
                <p className="text-sm text-gray-500">{opp.company}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  opp.type === "Internship"
                    ? "bg-blue-100 text-blue-600"
                    : opp.type === "Hackathon"
                    ? "bg-orange-100 text-orange-600"
                    : "bg-purple-100 text-purple-600"
                }`}
              >
                {opp.type}
              </span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-600">
                <FiCalendar className="mr-2" />
                <span className={opp.status === "Ongoing" ? "text-green-600" : "text-orange-600"}>
                  {opp.status}
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <FiAward className="mr-2" />
                <span>{opp.eligibility}</span>
              </div>
            </div>

            <a
              href={opp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View Opportunity
              <FiExternalLink className="ml-2" />
            </a>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredOpportunities.length === 0 && (
        <div className="text-center py-12">
          <div className="mb-4 text-6xl">😕</div>
          <h3 className="text-xl text-gray-600">No opportunities found</h3>
          <p className="text-gray-500">Try adjusting your filters or search terms</p>
        </div>
      )}
    </div>
  );
}