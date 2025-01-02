import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiReactrouter, SiVite, SiReactquery } from 'react-icons/si';
import styles from './styles.module.css';

const techItems = [
  { icon: <FaReact size={50} color="#61DBFB" />, name: 'React', link: 'https://reactjs.org/' },
  { icon: <SiMongodb size={50} color="#47A248" />, name: 'MongoDB', link: 'https://www.mongodb.com/' },
  { icon: <SiExpress size={50} color="#000000" />, name: 'Express', link: 'https://expressjs.com/' },
  { icon: <FaNodeJs size={50} color="#339933" />, name: 'Node.js', link: 'https://nodejs.org/' },
  { icon: <SiRedux size={50} color="#764ABC" />, name: 'Redux', link: 'https://redux.js.org/' },
  { icon: <SiReactrouter size={50} color="#CA4245" />, name: 'React Router', link: 'https://reactrouter.com/' },
  { icon: <SiVite size={50} color="#646CFF" />, name: 'Vite', link: 'https://vitejs.dev/' },
  { icon: <SiReactquery size={50} color="#FF4154" />, name: 'TanStack Query', link: 'https://tanstack.com/query/latest' },
];

const TechStackDisplay = () => {
  return (
    <div className={styles.techStackContainer}>
      <div className={styles.techStack}>
        {techItems.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={styles.techItem}>
            {item.icon}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TechStackDisplay;