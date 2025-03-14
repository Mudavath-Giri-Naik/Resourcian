const projects = [
    { title: "React", link: "https://github.com/facebook/react", stars: "200K+" },
    { title: "Next.js", link: "https://github.com/vercel/next.js", stars: "120K+" },
    { title: "Tailwind CSS", link: "https://github.com/tailwindlabs/tailwindcss", stars: "70K+" },
  ];
  
  export default function OpenSourcePage() {
    return (
      <div className="py-12">
        <h1 className="text-3xl font-bold text-center">Contribute to Open Source</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">⭐ {project.stars} stars</p>
            </a>
          ))}
        </div>
      </div>
    );
  }
  