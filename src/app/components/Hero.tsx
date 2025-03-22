import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#3B3BFD] bg-gradient-to-b from-[#3B3BFD] via-[#3B3BFD] via-70% to-white flex justify-center items-center lg:py-11 py-8 px-4 sm:px-8 ">
      <div className="max-w-8xl bg-white text-black border-5 border-black rounded-lg  p-6 md:p-10 flex flex-col md:flex-row items-center w-full md:space-x-6 h-auto md:h-[500px] lg:h-[600px] ">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 lg:ml-9 text-left">
          {/* Logo */}
          <div className="mb-6 flex justify-start">
            <div className="relative flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-black shadow-2xl text-white text-3xl sm:text-4xl md:text-5xl font-extrabold min-w-[12rem] sm:min-w-[16rem] h-16 sm:h-20">
              {/* Layered Borders for Depth */}
              <div className="absolute -left-2 top-0 h-full w-full rounded-xl border-2 sm:border-4 border-pink-500 transform translate-x-1 translate-y-1"></div>
              <div className="absolute -left-4 top-0 h-full w-full rounded-xl border-2 sm:border-4 border-cyan-400 transform translate-x-1 translate-y-1"></div>
              <div className="absolute -left-6 top-0 h-full w-full rounded-xl border-2 sm:border-4 border-lime-300 transform translate-x-1 translate-y-1"></div>
              <span className="relative z-10 tracking-wide  w-full text-center">RESOURCIAN</span>
            </div>
          </div>

          {/* Updated Text Content */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
            No more endless searching. No more scattered resources. Just everything you need, all in one place. 🚀
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 text-sm sm:text-base md:text-lg font-medium">
            <li>🚀 <span className="font-bold">Learn Smarter, Not Harder!</span></li>
            <li>📝 HandBooks, Cheat Sheets & Visuals</li>
            <li>⚡ Crystal-Clear, Easy-to-Grasp Content</li>
            <li>🔥 Top-Quality Resources for Developers</li>
            <li>🎯 Skip the Fluff, Get Straight to the Point</li>
            <li>🏆 Stay Ahead & Level Up Fast!</li>
          </ul>

          {/* CTA Button */}
          <div className="mt-6">
            <Link href="/resources">
              <button className="bg-blue-600  hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold text-lg transition-all duration-300">
                Explore Resources 🔍
              </button>
            </Link>
          </div>

        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 lg:mr-10  md:mt-0 flex justify-center md:justify-end">
          <Image
            src="/hero_image.jpg" 
            alt="Illustration"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}