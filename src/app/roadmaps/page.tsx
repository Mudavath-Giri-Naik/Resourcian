// app/resources/page.tsx
import Link from "next/link";

export default function ResourcesPage() {
  const categories = [
    { name: "Startups", path: "startups" },
    { name: "MAANG", path: "maang" },
    { name: "Internships", path: "internships" },
    { name: "Hackathons", path: "hackathons" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Want to Crack
          </h1>
          <p className="text-xl text-gray-600 md:text-2xl">
            Comprehensive roadmaps for tech career success
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category.path}
              href={`/roadmaps/${category.path}`}
              className="group transform transition-all duration-300 hover:scale-105"
            >
              <div className="h-full bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 border border-gray-200 hover:border-blue-500">
                <h2 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-center">
                  {category.name}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}