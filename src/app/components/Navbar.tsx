"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full z-20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Resourcian
          </Link>

          {/* Desktop Menu */}
          <div className="space-x-6 hidden md:flex">
            <Link href="/resources" className="hover:text-blue-500">
              Resources
            </Link>
            <Link href="/opportunities" className="hover:text-blue-500">
              Opportunities
            </Link>
            <Link href="/open-source" className="hover:text-blue-500">
              Open Source
            </Link>
            <Link href="/professional" className="hover:text-blue-500">
              Blogs
            </Link>
            <Link href="/profile" className="hover:text-blue-500">
              Profile
            </Link>
          </div>

          <Link href="/auth" className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded-md">
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
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar (Mobile Menu) */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 bg-white shadow-lg transform transition-transform duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Resourcian
          </Link>
          <button className="text-2xl" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col space-y-4 p-4 text-lg">
          <li>
            <Link href="/resources" className="flex items-center space-x-2 hover:text-blue-500">
              <span>📚</span>
              <span>Resources</span>
            </Link>
          </li>
          <li>
            <Link href="/opportunities" className="flex items-center space-x-2 hover:text-blue-500">
              <span>🚀</span>
              <span>Opportunities</span>
            </Link>
          </li>
          <li>
            <Link href="/open-source" className="flex items-center space-x-2 hover:text-blue-500">
              <span>💻</span>
              <span>Open Source</span>
            </Link>
          </li>
          <li>
            <Link href="/professional" className="flex items-center space-x-2 hover:text-blue-500">
              <span>🎯</span>
              <span>Blogs</span>
            </Link>
          </li>
          <li>
            <Link href="/profile" className="flex items-center space-x-2 hover:text-blue-500">
              <span>👤</span>
              <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link href="/auth" className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              <span>🔑</span>
              <span>Sign In</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
