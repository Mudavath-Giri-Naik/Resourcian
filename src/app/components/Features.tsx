export default function Features() {
    const features = [
      {
        title: "🚀 Explore Resources",
        desc: "Struggling to find the best learning resources? We've done the research for you! Explore domain-wise resources from trusted platforms, including Telegram groups, Instagram pages, and expert-curated websites.",
        points: [
          "📚 Handpicked learning materials",
          "🌐 Best online communities",
          "✅ Constantly updated sources"
        ],
        btnText: "Explore Resources",
        btnLink: "/resources",
        imgSrc: "https://shorturl.at/Ux3dX",
        imgRight: true,
        borderColor: "border-blue-500",
        bgColor: "bg-blue-50",
        textColor: "text-blue-800",
        btnColor: "bg-blue-600 hover:bg-blue-700"
      },
      {
        title: "🎯 Latest Opportunities",
        desc: "Never miss out on amazing opportunities! Stay updated with the latest internships, hackathons, and competitions happening around you. All the details you need, in one place!",
        points: [
          "🌟 Internships & job openings",
          "🏆 Hackathons & challenges",
          "📅 Regularly updated listings"
        ],
        btnText: "View Opportunities",
        btnLink: "/opportunities",
        imgSrc: "https://shorturl.at/atRe9",
        imgRight: false,
        borderColor: "border-green-500",
        bgColor: "bg-green-50",
        textColor: "text-green-800",
        btnColor: "bg-green-600 hover:bg-green-700"
      },
      {
        title: "💻 Open Source Contributions",
        desc: "Want to contribute to open source but don’t know where to start? Find beginner-friendly projects, learn Git & GitHub, and start contributing today!",
        points: [
          "🔹 Beginner-friendly projects",
          "🔹 Step-by-step contribution guide",
          "🔹 Build your developer profile"
        ],
        btnText: "Start Contributing",
        btnLink: "/open-source",
        imgSrc: "https://shorturl.at/C2RiD",
        imgRight: true,
        borderColor: "border-purple-500",
        bgColor: "bg-purple-50",
        textColor: "text-purple-800",
        btnColor: "bg-purple-600 hover:bg-purple-700"
      }
    ];
  
    return (
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${feature.imgRight ? 'md:flex-row' : 'md:flex-row-reverse'} items-center ${feature.bgColor} border-t-4 ${feature.borderColor} shadow-md rounded-lg p-8`}
          >
            <div className="md:w-1/2 space-y-4">
              <h2 className={`text-2xl font-bold ${feature.textColor}`}>{feature.title}</h2>
              <p className="text-gray-700">{feature.desc}</p>
              <ul className="space-y-2 text-gray-600">
                {feature.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <a href={feature.btnLink} className={`inline-block mt-4 px-6 py-2 ${feature.btnColor} text-white rounded-lg shadow-md`}>
                {feature.btnText} →
              </a>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
              <img src={feature.imgSrc} alt={feature.title} className="w-80 h-auto rounded-lg" />
            </div>
          </div>
        ))}
      </div>
    );
  }