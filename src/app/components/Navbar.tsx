"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu automatically when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white fixed w-full z-20 border-b border-gray-300 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo on the left */}
          <Link
            href="/"
            className="text-xl font-bold text-white bg-black px-5 py-2 rounded-md shadow-md"
          >
            Resourcian
          </Link>

          <div className="relative hidden md:inline-block rounded-md">
  {/* Animated Border */}
  <div className="absolute -inset-[2px] rounded-md overflow-hidden z-0">
    <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#ff6b6b_0%,#4ecdc4_25%,#45b7d1_50%,#96c93d_75%,#ff6b6b_100%)] animate-border-spin opacity-70 w-[200%] h-[200%]"></div>
  </div>

  {/* Menu Items */}
  <div className="hidden md:flex items-center space-x-8 px-6 py-2 rounded-md bg-white backdrop-blur-sm relative z-10 shadow-sm">
    {["Resources", "Opportunities", "Roadmaps", "Blogs", "Resume Analyser"].map(
      (item) => {
        const path = `/${item.toLowerCase().replace(/\s/g, "-")}`;
        return (
          <Link
            key={item}
            href={path}
            className={`relative text-lg font-medium transition-all duration-300 ${
              pathname === path
                ? "text-blue-600 font-semibold"
                : "text-gray-800 hover:text-blue-600"
            } group`}
          >
            {item}
            {pathname === path ? (
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-600 transition-all duration-300"></span>
            ) : (
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            )}
          </Link>
        );
      }
    )}
  </div>

  <style jsx>{`
    @keyframes border-spin {
      from { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
    .animate-border-spin {
      animation: border-spin 4s linear infinite;
    }
  `}</style>
</div>

          {/* Sign In Button on the Right */}
          <Link
            href="/auth"
            className="hidden md:block bg-black text-white px-5 py-2 rounded-md shadow-md hover:scale-105 transition-all"
          >
            Sign In
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-2xl" onClick={() => setIsOpen(true)}>
            <FaBars />
          </button>
        </div>
      </nav>

      {/* Overlay (Blur Background When Sidebar Opens) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg transform transition-transform duration-300 z-30 border-r border-gray-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-300 shadow-sm">
          <Link
            href="/"
            className="text-xl font-bold text-white bg-black px-5 py-2 rounded-md shadow-md"
          >
            Resourcian
          </Link>
          <button className="text-2xl" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col space-y-6 p-6 text-lg font-medium">
          {["Resources", "Opportunities", "Roadmaps", "Blogs", "Resume Analyser"].map(
            (item) => {
              const path = `/${item.toLowerCase().replace(/\s/g, "-")}`;
              return (
                <li key={item}>
                  <Link
                    href={path}
                    className={`block py-3 px-4 rounded-md transition-all duration-300 ${
                      pathname === path
                        ? "text-blue-500 font-semibold bg-gray-100"
                        : "text-gray-700 hover:bg-gray-200 hover:text-blue-500"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              );
            }
          )}
          <li>
            <Link
              href="/auth"
              className="block w-full text-center bg-black text-white px-5 py-3 rounded-md shadow-md hover:scale-105 transition-all"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
