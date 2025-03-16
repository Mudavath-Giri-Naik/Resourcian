// app/resources/hackathons/page.tsx
export default function HackathonsPage() {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Hackathons Roadmap</h1>
            <p className="text-xl text-gray-600">Winning strategies for hackathons</p>
          </div>
          
          {/* Add your specific roadmap content here */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Pre-competition Preparation</h2>
            <p className="text-gray-600">Content for hackathons roadmap...</p>
          </div>
        </div>
      </div>
    );
  }