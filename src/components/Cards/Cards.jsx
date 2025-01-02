import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './styles.module.css';

const sections = [
  {
    title: "Introduction to React",
    description: "Learn the fundamentals of React including components, JSX, props, and state management.",
    image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    bgColor: "from-[#61DAFB]/20 to-[#2C4F7C]/20",
    link: "/section1"
  },
  {
    title: "Node.js & Express Backend",
    description: "Master server-side development with Node.js and Express framework.",
    image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
    bgColor: "from-[#83CD29]/20 to-[#404137]/20",
    link: "/section2"
  },
  {
    title: "MongoDB Database",
    description: "Learn database design, CRUD operations, and integration with MongoDB.",
    image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    bgColor: "from-[#4DB33D]/20 to-[#3F3E42]/20",
    link: "/section3"
  },
  {
    title: "Testing with Vitest & Jest",
    description: "Learn how to write unit tests and backend tests using Vitest and Jest.",
    image: "/img/Jest.svg",
    bgColor: "from-[#E34F26]/20 to-[#F7DF1E]/20",
    link: "/section6"
  },
  {
    title: "Advanced React Concepts",
    description: "Deep dive into hooks, context, optimization, and state management.",
    image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg",
    bgColor: "from-[#764ABC]/20 to-[#1E1E1E]/20",
    link: "/section4"
  },
  {
    title: "Full Stack Project",
    description: "Build and deploy complete web applications with the MERN stack.",
    image: "https://skillicons.dev/icons?i=mongodb,express,react,nodejs",
    bgColor: "from-purple-600/20 to-blue-600/20",
    link: "/section5"
  }
];

const Cards = () => {
  return (
    <div className="relative py-16 px-4 z-0">
      <motion.div
        className="container mx-auto px-4 relative z-10 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeOut"
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.3,
                ease: "easeOut"
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
              className={`relative group rounded-xl overflow-hidden bg-gradient-to-br ${section.bgColor} backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transform transition-all duration-300`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="p-6 flex flex-col h-full relative z-10">
                <div className="flex items-center mb-4">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-12 h-12 object-contain"
                  />
                  <h2 className="font-heading text-xl font-bold text-white/90 ml-4">
                    {section.title}
                  </h2>
                </div>
                <p className="font-sans text-gray-300/80 text-sm leading-relaxed flex-grow">
                  {section.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full px-4 py-2.5 bg-gradient-to-r from-purple-600/90 to-blue-600/90 hover:from-purple-500 hover:to-blue-500 text-white/90 text-sm font-medium rounded-lg backdrop-blur-sm transition-all duration-300 cursor-pointer flex items-center justify-center group"
                >
                  Learn More
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;