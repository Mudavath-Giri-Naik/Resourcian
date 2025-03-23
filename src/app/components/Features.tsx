import Link from "next/link";

const features = [
  {
    title: "📚 Resources Hub",
    description: "Get access to the best learning materials, curated books, and top-rated video courses across all tech domains.",
    link: "/resources",
  },
  {
    title: "💼 Career Opportunities",
    description: "Never miss an opportunity! Stay updated with the latest internships, hackathons, coding competitions, and job openings.",
    link: "/opportunities",
  },
  {
    title: "🛠️ Structured Roadmaps",
    description: "Follow expert-designed roadmaps to break into FAANG, build startups, ace hackathons, and secure internships effortlessly.",
    link: "/roadmaps",
  },
  {
    title: "📖 DSA Mastery",
    description: "Crack coding interviews with a structured DSA roadmap, must-solve problems, and the best reference guides.",
    link: "/dsa",
  },
  {
    title: "📊 Role-Wise Case Studies",
    description: "Explore real-world case studies and understand what software engineers actually do in different roles.",
    link: "/case-studies",
  },
  {
    title: "📄 Resume Analyzer",
    description: "Boost your interview chances with AI-powered resume feedback, industry-approved templates ",
    link: "/resume-analyzer",
  },
];


export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12 md:py-20">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-blue-600">Explore</span> Our Features
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
          Everything you need to succeed in Software Development – from "resources" to "real-world case studies".
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Link key={index} href={feature.link} passHref>
            <div className="border border-gray-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white cursor-pointer">
              <h2 className="text-xl font-semibold text-gray-800">{feature.title}</h2>
              <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: feature.description }} />
              <button className="mt-4 px-4 py-2 border border-black text-black bg-white rounded-lg transition-all hover:bg-black hover:text-white">
                Learn More
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
