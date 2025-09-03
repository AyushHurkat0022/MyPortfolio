import React from 'react';
import SectionTitle from './SectionTitle';
import { experience } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';
import { FaCircle } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ExperienceCard = ({ exp, index }) => (
  <motion.div
    className="bg-secondary-bg rounded-lg shadow-lg p-6 mb-8 flex flex-col hover:-translate-y-2 transition-all duration-300 w-full"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    custom={index}
    viewport={{ once: true, amount: 0.1 }}
  >
    <h3 className="text-2xl font-bold text-accent-1 font-mono">{exp.role}</h3>
    <p className="text-sm text-text-secondary font-mono mb-2">
      {exp.organization} | {exp.location}
    </p>
    <p className="text-xs text-text-secondary font-mono mb-4">{exp.duration}</p>
    <ul className="list-none space-y-2">
      {exp.points.map((point, i) => (
        <li key={i} className="flex items-start text-text-secondary text-sm font-mono">
          <FaCircle className="text-accent-1 mr-2 mt-1 text-[6px]" />
          {point}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-primary-bg flex justify-center">
      <div className="w-[70vw] flex flex-col items-center">
        <SectionTitle id="experience-title">Experience</SectionTitle>
        <div className="flex flex-col w-full mt-10">
          {experience.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
