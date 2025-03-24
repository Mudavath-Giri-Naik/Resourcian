'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const careerOptions = [
  {
    title: 'Corporate Job',
    description: 'Explore all the job roles in IT industry for freshers, Experienced and Senior ',
    logo: '💼',
    buttonText: 'View',
    path: '/explore/jobs',
    color: 'text-blue-600'
  },
  {
    title: 'Entrepreneurship',
    description: 'Know all the amazing opportunities that you have while studying',
    logo: '🚀',
    buttonText: 'view',
    path: '/explore/business',
    color: 'text-green-600'
  },
  {
    title: 'Higher Studies',
    description: 'Explore top universities for Masters In and Outside of India',
    logo: '🎓',
    buttonText: 'View',
    path: '/explore/higher-studies',
    color: 'text-purple-600'
  },
  {
    title: 'Content Creation',
    description: 'Educate, inspire, and build your brand as a tech influencer.',
    logo: '🎥',
    buttonText: 'View',
    path: '/careers/content-creation',
    color: 'text-red-600'
  },
  {
    title: 'Government Exams',
    description: 'Prepare for UPSC, GATE, and other competitive exams.',
    logo: '📚',
    buttonText: 'View',
    path: '/careers/govt-exams',
    color: 'text-yellow-600'
  },
  {
    title: 'Freelancing',
    description: 'Work independently with global clients in your domain.',
    logo: '🖥️',
    buttonText: 'View',
    path: '/careers/freelancing',
    color: 'text-indigo-600'
  }
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 sm:px-10 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
      <motion.h1
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-4xl font-bold text-gray-900 mb-4"
>
  "Life After <span className="text-blue-600">B.Tech</span>, Choose Your Path!"
</motion.h1>

        <p className="text-lg text-gray-600 mb-12">
          Here are a few career possibilities to kickstart your journey. These are just a starting point—there's much more to explore!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {careerOptions.map((option) => (
          <Link key={option.title} href={option.path}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-white rounded-xl shadow-md border border-gray-200 p-6 transition-all cursor-pointer hover:shadow-lg hover:bg-gray-100"
            >
              <div className="flex items-center mb-4">
              <span className="text-4xl sm:text-5xl mr-4">{option.logo}</span>
                <h3 className={`text-2xl font-semibold ${option.color}`}>{option.title}</h3>
              </div>
              <p className="text-gray-700 text-lg mb-6">{option.description}</p>
              <div className="mt-4">
                <button className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-all">
                  {option.buttonText} →
                </button>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center mt-16 bg-white shadow-sm p-6 rounded-lg max-w-3xl mx-auto"
      >
        <p className="text-gray-700 text-lg font-medium">
          🌟 These are just a few possibilities! Your career path is unique—keep exploring, keep learning, and shape your future the way you want!
        </p>
      </motion.div>
    </div>
  );
}
