import React from "react";
import { motion } from "framer-motion";

const TechStackDisplay = () => {
  const techItems = [
    {
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg",
      name: "MongoDB",
    },
    {
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
      name: "React",
    },
    {
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
      name: "Node.js",
    },
    {
      icon: "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg",
      name: "Redux",
    },
    {
      icon: "https://www.prisma.io/images/favicon-32x32.png",
      name: "Prisma",
    },
    // {
    //   icon: "https://reactrouter.com/_brand/react-router-mark-color.svg",
    //   name: "React Router",
    // },
    // {
    //   icon: "https://raw.githubusercontent.com/TanStack/query/main/media/logo.svg",
    //   name: "React Query",
    // },
  ];

  return (
    <div className="relative overflow-hidden py-10  bg-gradient-to-r from-gray-900/60 via-black/40 to-gray-900/60">
      <motion.div
        className="flex"
        animate={{
          x: [0, -1035],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        <div className="flex gap-x-16 px-4">
          {[...techItems, ...techItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-x-6 w-64 group"
            >
              <div className="flex items-center m-2 justify-center w-16 h-20 rounded-lg  p-2 transition-colors duration-200">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-10 h-10 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              <span className="text-lg font-semibold text-gray-400 group-hover:text-white whitespace-nowrap">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Gradient overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-gray-800 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-gray-800 to-transparent" />
    </div>
  );
};

export default TechStackDisplay;