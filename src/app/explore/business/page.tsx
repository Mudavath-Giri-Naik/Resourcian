"use client";
import React, { useState } from "react";

const government = [
    {
      "Program": "Startup India Initiative",
      "Funding_Range": "Up to 50 Lakh",
      "Expecting": "Idea, MVP, or Startup",
      "Providing": "Tax benefits, funding, mentorship, legal support, networking",
      "Official_Link": "https://www.startupindia.gov.in/"
    },
    {
      "Program": "AICTE IDEA Labs",
      "Funding_Range": "Up to 10 Lakh",
      "Expecting": "Tech project, MVP, or Prototype",
      "Providing": "Lab access, incubation, prototype funding",
      "Official_Link": "https://www.aicte-india.org/initiatives/idea-lab"
    },
    {
      "Program": "NASSCOM Startups",
      "Funding_Range": "50 Lakh - 1 Crore",
      "Expecting": "Tech startup, MVP, or Scalable Idea",
      "Providing": "Mentorship, networking, investor connections, cloud credits",
      "Official_Link": "https://10000startups.com/"
    },
    {
      "Program": "T-Hub (Telangana)",
      "Funding_Range": "50 Lakh - 2 Crore",
      "Expecting": "Tech-based Idea, MVP, or Startup",
      "Providing": "Office space, mentorship, investor connects",
      "Official_Link": "https://t-hub.co/"
    },
    {
      "Program": "iCreate (Gujarat)",
      "Funding_Range": "Up to 50 Lakh",
      "Expecting": "MVP or Early-stage Startup",
      "Providing": "Funding, incubation, mentorship, infra support",
      "Official_Link": "https://www.icreate.org.in/"
    },
    {
      "Program": "Forge (Tamil Nadu)",
      "Funding_Range": "50 Lakh - 1 Crore",
      "Expecting": "Product-based or Deep-tech Startup",
      "Providing": "Funding, product development, technical mentorship",
      "Official_Link": "https://forgeforward.in/"
    },
    {
      "Program": "SINE (IIT Bombay)",
      "Funding_Range": "Up to 1 Crore",
      "Expecting": "Deep-tech Startup, Prototype, or MVP",
      "Providing": "Seed funding, workspace, expert mentorship, business support",
      "Official_Link": "https://sineiitb.org/"
    },
    {
      "Program": "NSRCEL (IIM Bangalore)",
      "Funding_Range": "Up to 50 Lakh",
      "Expecting": "Scalable Startup, Post-MVP",
      "Providing": "Funding, mentorship, investor connects, business support",
      "Official_Link": "https://www.nsrcel.org/"
    }
];

const corporate = [
    {
      "Program": "Microsoft for Startups Founders Hub",
      "Funding_Range": "Azure Credits: $150,000",
      "Expecting": "MVP or Early-stage Startup",
      "Providing": "Azure credits, GitHub Copilot, mentorship, networking",
      "Official_Link": "https://startups.microsoft.com/"
    },
    {
      "Program": "Google for Startups",
      "Funding_Range": "Google Cloud Credits: $200,000",
      "Expecting": "AI, Web3, or Cloud-based MVP/Startup",
      "Providing": "Cloud credits, mentorship, investor connects, training",
      "Official_Link": "https://cloud.google.com/startup"
    },
    {
      "Program": "AWS Activate for Startups",
      "Funding_Range": "AWS Credits: $100,000",
      "Expecting": "Cloud-based MVP or Startup",
      "Providing": "AWS credits, tech support, business guidance",
      "Official_Link": "https://aws.amazon.com/activate/"
    },
    {
      "Program": "Cisco LaunchPad",
      "Funding_Range": "Funding: $250,000",
      "Expecting": "AI, Security, or Networking Startup",
      "Providing": "Funding, mentorship, corporate partnerships",
      "Official_Link": "https://launchpad.cisco.com/"
    }
];
const college = [
    {
      "Program": "E-Cell Grants (IITs, IIMs, NITs)",
      "Funding_Range": "Up to 10 Lakh",
      "Expecting": "Student-led startup or innovation",
      "Providing": "Funding, incubation, networking",
      "Official_Link": "Respective institution's E-Cell website"
    },
    {
      "Program": "Smart India Hackathon (SIH)",
      "Funding_Range": "Cash prizes up to 1 Lakh",
      "Expecting": "Tech solutions to real-world problems",
      "Providing": "Cash prizes, incubation, mentorship",
      "Official_Link": "https://www.aicte-india.org/Initiatives/smart-india-hackathon"
    },
    {
      "Program": "TIE India Programs",
      "Funding_Range": "Investor connections & funding",
      "Expecting": "Scalable startup idea",
      "Providing": "Investor connects, mentorship",
      "Official_Link": "https://tie.org/"
    }
];

const hackathons = [
    {
      "Program": "Imagine Cup (Microsoft)",
      "Funding_Range": "Cash prizes up to 80 Lakh",
      "Expecting": "Innovative tech project or app",
      "Providing": "Cash prizes, mentorship, Azure credits",
      "Official_Link": "https://imaginecup.microsoft.com/"
    },
    {
      "Program": "Startup India Seed Fund Scheme",
      "Funding_Range": "20 Lakh - 50 Lakh",
      "Expecting": "Early-stage startup with market potential",
      "Providing": "Funding for prototype, trials, market entry",
      "Official_Link": "https://seedfund.startupindia.gov.in/"
    },
    {
      "Program": "Elevate (Karnataka)",
      "Funding_Range": "Up to 50 Lakh",
      "Expecting": "Innovative Karnataka-based startup",
      "Providing": "Funding, incubation, mentorship",
      "Official_Link": "https://www.missionstartupkarnataka.org/elevate-karnataka"
    },
    {
      "Program": "Startup Odisha",
      "Funding_Range": "Up to 20 Lakh",
      "Expecting": "Odisha-based startup",
      "Providing": "Funding, incubation, government support",
      "Official_Link": "https://startupodisha.gov.in/"
    },
    {
      "Program": "Kerala Startup Mission",
      "Funding_Range": "Up to 50 Lakh",
      "Expecting": "Tech startup in Kerala",
      "Providing": "Grants, office space, networking",
      "Official_Link": "https://startupmission.kerala.gov.in/"
    },
    {
      "Program": "National Entrepreneurship Awards",
      "Funding_Range": "Cash prizes up to 5 Lakh",
      "Expecting": "High-impact startup",
      "Providing": "Cash prize, recognition, networking",
      "Official_Link": "https://msde.gov.in/en/schemes-initiatives/schemes-related-to-Entrepreneurship/national-Entrepreneurship-Awards-NEA-Scheme"
    },
    {
      "Program": "Amazon AI & ML Challenge",
      "Funding_Range": "AWS credits + funding",
      "Expecting": "AI-based project or startup",
      "Providing": "AWS credits, funding, mentorship",
      "Official_Link": "https://www.amazon.science/nova-ai-challenge"
    },
    {
      "Program": "Tata Social Enterprise Challenge",
      "Funding_Range": "Up to 25 Lakh",
      "Expecting": "Social impact startup",
      "Providing": "Funding, incubation, networking",
      "Official_Link": "https://www.tatasechallenge.org/"
    }
];

const networking = [
    {
        "Program": "Google Developer Student Clubs (GDSC)",
        "Funding_Range": "No direct funding",
        "Expecting": "Active tech participation",
        "Providing": "Resources, networking, career opportunities",
        "Official_Link": "https://developers.google.com/community/gdsc"
    },
    {
        "Program": "Y Combinator Startup School",
        "Funding_Range": "No direct funding",
        "Expecting": "Scalable startup",
        "Providing": "Courses, mentorship",
        "Official_Link": "https://www.startupschool.org/"
    },
    {
        "Program": "Sequoia Surge",
        "Funding_Range": "Up to ₹16 Crore",
        "Expecting": "High-growth startup",
        "Providing": "Seed funding, mentorship, VC exposure",
        "Official_Link": "https://www.sequoiacap.com/india/surge/"
    },
    {
        "Program": "Accel Startup Programs",
        "Funding_Range": "Varies",
        "Expecting": "Tech startup with traction",
        "Providing": "Funding, mentorship, networking",
        "Official_Link": "https://www.accel.com/"
    },
    {
        "Program": "Facebook (Meta) Startup Hub",
        "Funding_Range": "No direct funding",
        "Expecting": "Digital business",
        "Providing": "Ad credits, mentorship, tools",
        "Official_Link": "https://developers.facebook.com/startups/"
    }
];

const tax = [
    {
        "Program": "Startup India Recognition",
        "Funding_Range": "Tax benefits",
        "Expecting": "DPIIT-recognized startup",
        "Providing": "3-year tax exemption, compliance support",
        "Official_Link": "https://www.startupindia.gov.in/content/sih/en/recognition-page.html"
    },
    {
        "Program": "Patent & Trademark Benefits (Startup India)",
        "Funding_Range": "80% rebate on fees",
        "Expecting": "Innovative startup",
        "Providing": "Discount on patent filing",
        "Official_Link": "https://www.startupindia.gov.in/content/sih/en/intellectual-property-rights.html"
    },
    {
        "Program": "MUDRA Loan Scheme",
        "Funding_Range": "Up to ₹10 Lakh",
        "Expecting": "Startup needing capital",
        "Providing": "Low-interest business loans",
        "Official_Link": "https://www.mudra.org.in/"
    }
];



 

  type ProgramCategory = {
    Program: string;
    Funding_Range: string;
    Expecting: string;
    Providing: string;
    Official_Link: string;
    category: string;
  };
  
  const BusinessPage = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    
    // Combined data with category identifiers
    const allPrograms: ProgramCategory[] = [
      ...government.map(p => ({ ...p, category: 'government' })),
      ...corporate.map(p => ({ ...p, category: 'corporate' })),
      ...college.map(p => ({ ...p, category: 'college' })),
      ...hackathons.map(p => ({ ...p, category: 'hackathons' })),
      ...networking.map(p => ({ ...p, category: 'networking' })),
      ...tax.map(p => ({ ...p, category: 'tax' })),
    ];
  
    const categories = [
      { name: 'all', label: 'All Programs' },
      { name: 'government', label: 'Government' },
      { name: 'corporate', label: 'Corporate' },
      { name: 'college', label: 'College' },
      { name: 'hackathons', label: 'Hackathons' },
      { name: 'networking', label: 'Networking' },
      { name: 'tax', label: 'Tax Benefits' },
    ];
  
    const getCategoryStyles = (category: string) => {
      const styles = {
        government: { text: 'text-blue-600', label: 'Government' },
        corporate: { text: 'text-green-600', label: 'Corporate' },
        college: { text: 'text-purple-600', label: 'College' },
        hackathons: { text: 'text-orange-600', label: 'Hackathon' },
        networking: { text: 'text-pink-600', label: 'Networking' },
        tax: { text: 'text-teal-600', label: 'Tax' },
      };
      return styles[category as keyof typeof styles] || { text: 'text-gray-600', label: category };
    };
  
    const filteredPrograms = selectedCategory === 'all' 
      ? allPrograms 
      : allPrograms.filter(p => p.category === selectedCategory);
  
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Startup Support Programs
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover government, corporate, and institutional programs to boost your startup journey
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all
                    ${selectedCategory === cat.name 
                      ? 'bg-indigo-100 text-indigo-700 ring-2 ring-indigo-500' 
                      : 'bg-white text-gray-600 ring-1 ring-gray-200 hover:ring-2 hover:ring-indigo-300'}
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
  
          {/* Program Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((program) => {
              const { text, label } = getCategoryStyles(program.category);
              
              return (
                <div 
                  key={program.Program}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all
                    duration-300 ring-1 ring-gray-100 relative pt-8"
                >
                  {/* Category Label */}
                  <div className={`absolute -top-3 right-4 px-3 py-1 rounded-full ${text} 
                    bg-white ring-1 ring-gray-200 text-sm font-medium shadow-sm`}>
                    {label}
                  </div>
  
                  <div className="p-6">
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${text}`}>
                      {program.Program}
                    </h3>
                    
                    <div className="space-y-3 mb-5">
                      <div>
                        <span className="text-sm font-semibold text-gray-500">Funding Range:</span>
                        <p className="text-gray-700 font-medium">{program.Funding_Range}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500">Requirements:</span>
                        <p className="text-gray-700">{program.Expecting}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-500">Benefits:</span>
                        <p className="text-gray-700">{program.Providing}</p>
                      </div>
                    </div>
  
                    <a
  href={program.Official_Link}
  target="_blank"
  rel="noopener noreferrer"
  className={`w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg
    ${text} ring-1 ring-gray-200 hover:ring-2 font-medium
    transition-all hover:bg-opacity-10 ${
      program.category === 'government' ? 'hover:bg-blue-50' :
      program.category === 'corporate' ? 'hover:bg-green-50' :
      program.category === 'college' ? 'hover:bg-purple-50' :
      program.category === 'hackathons' ? 'hover:bg-orange-50' :
      program.category === 'networking' ? 'hover:bg-pink-50' :
      'hover:bg-teal-50'
    }`}
>
  Visit Official Website
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" 
    viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
</a>
                  </div>
                </div>
              )}
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default BusinessPage;