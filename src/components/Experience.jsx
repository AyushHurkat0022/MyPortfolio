import React from 'react';
import SectionTitle from './SectionTitle';
import { experience } from '../data/portfolioData.jsx';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CurvedLoop from './CurvedLoop';
import './Experience.css'; // For gradient curved text styling

const experienceItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Experience = () => {
  const curvedText = "Code Today, Conquer Tomorrow ✦ Keep Pushing, Keep Building ✦ Dream, Code, Repeat ✦";

  return (
    <section id="experience" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="experience-title">Experience</SectionTitle>

        <div className="relative max-w-5xl mx-auto mt-12 sm:mt-16">
          {/* Timeline line */}
          <div className="absolute left-[calc(1rem-0.5px)] sm:left-[calc(1.25rem-0.5px)] top-0 h-full w-0.5 bg-secondary-bg rounded-full"></div>

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className="mb-10 flex"
              custom={index}
              variants={experienceItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {/* Icon holder */}
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-secondary-bg rounded-full border-2 border-accent-1 flex items-center justify-center mr-4 sm:mr-6 relative z-10">
                <FaBriefcase className="text-accent-1 w-4 h-4 sm:w-5 sm:h-5" />
              </div>

              {/* Content card */}
              <div className="flex-grow p-4 sm:p-6 bg-secondary-bg rounded-lg shadow-xl hover:shadow-accent-1/20 transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 sm:mb-2">
                  <h3 className="text-md sm:text-lg lg:text-xl font-semibold text-accent-1 font-mono">
                    {exp.role}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-secondary/80 font-mono mt-1 sm:mt-0">
                    {exp.duration}
                  </p>
                </div>
                <p className="text-sm sm:text-md text-accent-2/90 font-semibold mb-2 sm:mb-3">
                  {exp.organization} | {exp.location}
                </p>

                {exp.points.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1.5 text-text-secondary pl-1">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-xs sm:text-sm leading-relaxed sm:leading-normal">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text-secondary/80 italic text-xs sm:text-sm">
                    Details forthcoming.
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Curved Gradient Text */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <linearGradient id="experience-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="red" />
              <stop offset="100%" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>

        <div className="mt-12 relative w-full flex justify-center">
          <CurvedLoop
            marqueeText={curvedText}
            speed={4}
            curveAmount={180}
            direction="left"
            interactive={false}
            className="experience-curved-text"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
