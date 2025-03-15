"use client";

import { useState, useMemo } from "react";
import { FiSearch, FiFilter, FiExternalLink, FiCalendar,FiChevronDown, FiAward } from "react-icons/fi";

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



const OpportunityCard = ({ opp }: { opp: any }) => (
  <div className="group bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-200 p-6 shadow-sm hover:shadow-md">
    <div className="flex flex-col h-full">
      <div className="mb-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{opp.title}</h3>
            <p className="text-sm text-gray-500 font-medium">{opp.company}</p>
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            opp.type === "Internship" ? "bg-blue-50 text-blue-700" :
            opp.type === "Hackathon" ? "bg-orange-50 text-orange-700" :
            "bg-purple-50 text-purple-700"
          }`}>
            {opp.type}
          </span>
        </div>
      </div>

      <div className="mt-auto space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <FiCalendar className="mr-2 w-4 h-4 text-gray-400" />
          <span className={`font-medium ${
            opp.status === "Ongoing" ? "text-green-600" : "text-amber-600"
          }`}>
            {opp.status.replace("Not Started", "Upcoming")}
          </span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <FiAward className="mr-2 w-4 h-4 text-gray-400" />
          <span className="font-medium">{opp.eligibility}</span>
        </div>
      </div>

      <a
        href={opp.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 w-full inline-flex items-center justify-between px-4 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group-hover:bg-gray-100"
      >
        <span className="text-sm font-medium text-gray-700">View details</span>
        <FiExternalLink className="w-4 h-4 text-gray-500" />
      </a>
    </div>
  </div>
);

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
    <div className="min-h-screen bg-gray-50 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Opportunity Hub
          </h1>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto">
            Curated collection of professional opportunities in tech
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <FiSearch className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search opportunities..."
              className="w-full pl-12 pr-4 py-3.5 bg-white rounded-xl border border-gray-200 focus:border-gray-400 focus:ring-0 text-gray-700 placeholder-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-3 items-center">
            <div className="relative flex-1 md:flex-none">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-white rounded-xl border border-gray-200 text-gray-700 appearance-none"
              >
                <option value="All">All Categories</option>
                <option value="Hackathon">Hackathons</option>
                <option value="Internship">Internships</option>
                <option value="Competition">Competitions</option>
              </select>
              <FiChevronDown className="absolute right-4 top-4 text-gray-500 pointer-events-none" />
            </div>

            <div className="relative flex-1 md:flex-none">
              <select
                value={showStatus}
                onChange={(e) => setShowStatus(e.target.value)}
                className="w-full pl-4 pr-10 py-3 bg-white rounded-xl border border-gray-200 text-gray-700 appearance-none"
              >
                <option value="all">All Statuses</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Not Started">Upcoming</option>
              </select>
              <FiChevronDown className="absolute right-4 top-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredOpportunities.map((opp, index) => (
            <OpportunityCard key={index} opp={opp} />
          ))}
        </div>

        {/* Empty State */}
        {filteredOpportunities.length === 0 && (
          <div className="text-center py-16">
            <div className="mb-5 text-gray-400 mx-auto">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">
              No opportunities found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
}