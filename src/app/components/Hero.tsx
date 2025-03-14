import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#3B3BFD] flex justify-center items-center py-12 px-4 sm:px-8">
      <div className="max-w-6xl bg-white text-black border-10 border-black rounded-lg shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center w-full">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Logo */}
        <div className="mb-6 flex justify-start">
        <div className="relative flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-black shadow-2xl text-white text-3xl sm:text-4xl md:text-5xl font-extrabold min-w-[12rem] sm:min-w-[16rem] h-16 sm:h-20">
            {/* Layered Borders for Depth */}
            <div className="absolute -left-2 top-0 h-full w-full rounded-xl border-2 sm:border-4 border-pink-500 transform translate-x-1 translate-y-1"></div>
            <div className="absolute -left-4 top-0 h-full w-full rounded-xl border-2 sm:border-4 border-cyan-400 transform translate-x-1 translate-y-1"></div>
            <div className="absolute -left-6 top-0 h-full w-full rounded-xl border-2 sm:border-4 border-lime-300 transform translate-x-1 translate-y-1"></div>

            {/* Logo Text */}
            <span className="relative z-10 tracking-wide w-full text-center">RESOURCIAN</span>
        </div>
        </div>


          <h1 className="text-4xl font-bold mt-4">One Stop for Developers 🚀</h1>
          <p className="mt-4 text-lg text-gray-700">
            Discover top-notch learning resources, Opportunities, and open-source projects—all in one place! 📚💻
          </p>

          <p className="mt-4 text-gray-900 font-semibold">
            Join the community and **boost your career** with amazing opportunities! 🎯
          </p>

          {/* CTA Button */}
          <div className="mt-6">
            <Link href="/resources">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold text-lg transition-all duration-300">
                Explore Resources 🔍
              </button>
            </Link>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Want to contribute? Be part of the open-source revolution! <Link href="https://github.com/Mudavath-Giri-Naik?tab=repositories" className="text-blue-600 underline">Join Now 🌍</Link>
          </p>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <Image
            src="https://shorturl.at/f2lyd" // Replace with actual image URL
            alt="Illustration"
            width={500}
            height={350}
            className="rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
