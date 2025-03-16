export default function ResumeAnalyserPage() {
    const user = {
      name: "Girish",
      email: "girish@example.com",
      bio: "Frontend Developer | Open Source Contributor",
    };
  
    return (
      <div className="py-12 text-center">
        <h1 className="text-3xl font-bold">Profile</h1>
        <div className="mt-6 p-6 border rounded-lg w-96 mx-auto shadow-md">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="mt-2">{user.bio}</p>
        </div>
      </div>
    );
  }
  