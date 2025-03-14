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

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-8 border border-gray-300 px-6 py-2 rounded-md shadow-sm">
            {["Resources", "Opportunities", "Open Source", "Blogs", "Profile"].map(
              (item) => {
                const path = `/${item.toLowerCase().replace(/\s/g, "-")}`;
                return (
                  <Link
                    key={item}
                    href={path}
                    className={`relative text-lg font-medium transition-all duration-300 ${
                      pathname === path
                        ? "text-blue-500 font-semibold"
                        : "text-gray-700 hover:text-blue-500"
                    }`}
                  >
                    {item}
                    {pathname === path && (
                      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500"></span>
                    )}
                  </Link>
                );
              }
            )}
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
          {["Resources", "Opportunities", "Open Source", "Blogs", "Profile"].map(
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
