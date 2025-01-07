import React from 'react';
import { motion } from 'framer-motion';
import Link from '@docusaurus/Link';
import { BookOpen, Server, Database, Code, Beaker, Rocket } from 'lucide-react';

const sections = [
  {
    title: "Introduction to React",
    description: "Master modern React development with hands-on projects. Learn components, hooks, state management, and best practices for building scalable applications.",
    image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
    bgGradient: "from-[#61DAFB]/10 to-[#2C4F7C]/10",
    borderGradient: "from-[#61DAFB]/20 to-[#2C4F7C]/20",
    icon: BookOpen,
    link: "/docs/category/section-1"
  },
  {
    title: "Node.js & Express Backend",
    description: "Build robust server-side applications with Node.js and Express. Cover RESTful APIs, middleware, authentication, and error handling.",
    image: "/img/NodeJS-Light.svg",
    bgGradient: "from-[#83CD29]/10 to-[#404137]/10",
    borderGradient: "from-[#83CD29]/20 to-[#404137]/20",
    icon: Server,
    link: "/section2"
  },
  {
    title: "MongoDB Database",
    description: "Design and implement MongoDB databases. Learn schema design, CRUD operations, aggregation pipelines, and database optimization techniques.",
    image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
    bgGradient: "from-[#4DB33D]/10 to-[#3F3E42]/10",
    borderGradient: "from-[#4DB33D]/20 to-[#3F3E42]/20",
    icon: Database,
    link: "/section3"
  },
  {
    title: "Testing with Vitest & Jest",
    description: "Master test-driven development using Vitest and Jest. Cover unit testing, integration testing, mocking, and testing best practices.",
    image: "/img/Jest.svg",
    bgGradient: "from-[#E34F26]/10 to-[#F7DF1E]/10",
    borderGradient: "from-[#E34F26]/20 to-[#F7DF1E]/20",
    icon: Beaker,
    link: "/section6"
  },
  {
    title: "Advanced React Concepts",
    description: "Deep dive into advanced React patterns. Explore custom hooks, context API, performance optimization, and modern state management.",
    image: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg",
    bgGradient: "from-[#764ABC]/10 to-[#1E1E1E]/10",
    borderGradient: "from-[#764ABC]/20 to-[#1E1E1E]/20",
    icon: Code,
    link: "/section4"
  },
  {
    title: "Full Stack Project",
    description: "Build and deploy production-ready MERN applications. Learn CI/CD, cloud deployment, security best practices, and application monitoring.",
    image: "https://skillicons.dev/icons?i=mongodb,express,react,nodejs",
    bgGradient: "from-purple-600/10 to-blue-600/10",
    borderGradient: "from-purple-600/20 to-blue-600/20",
    icon: Rocket,
    link: "/section5"
  }
];

const CourseCard = ({ section, index }) => {
  const Icon = section.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }}
      className="group relative"
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${section.borderGradient} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <motion.div
        whileHover={{ y: -8 }}
        className={`relative h-full rounded-2xl bg-gradient-to-br ${section.bgGradient} border border-white/5 backdrop-blur-xl overflow-hidden`}
      >
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                className="flex items-center space-x-3 mb-4"
              >
                <img
                  src={section.image}
                  alt=""
                  className="w-8 h-8 object-contain"
                />
                <Icon className="w-5 h-5 text-white/70" />
              </motion.div>
              <h3 className="text-xl font-bold text-white/90 mb-2">
                {section.title}
              </h3>
              <p className="text-sm leading-relaxed text-white">
                {section.description}
              </p>
            </div>
          </div>
          <Link to={section.link} className="block">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-500/50 hover:to-blue-500/40 text-white font-medium rounded-xl shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 transition-all duration-300 cursor-pointer"
            >
              <span className="flex items-center justify-center">
                Start Learning
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CourseSection = () => {
  return (
    <div className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-black/35" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto relative z-10"
      >
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Master Full-Stack Development with the MERN Stack
          </h2>
          <p className="text-lg text-white/70">
            Dive deep into the world of full-stack development. Learn to build robust, scalable applications using MongoDB, Express.js, React, and Node.js. This course covers everything from the basics to advanced concepts, ensuring you gain the skills needed to excel in the tech industry.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <CourseCard key={index} section={section} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default CourseSection;