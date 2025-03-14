export default function ProfessionalPage() {
    const professionalData = [
      { title: "Software Engineer", company: "Google" }
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold">Professional Experiences</h1>
        {professionalData.map((item, index) => (
          <div key={index} className="p-4 border rounded-md">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p>{item.company}</p>
          </div>
        ))}
      </div>
    );
  }
  