import React from 'react';
import SectionTitle from './SectionTitle';
import { education } from '../data/portfolioData.jsx';
import { FaUniversity, FaSchool } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="about-title">About Me</SectionTitle>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-text-secondary leading-relaxed">
            Hello! I’m <span className="text-accent-1 font-semibold">Ayush Hurkat</span>,
            a backend-focused software engineer with a strong foundation in Java,
            object-oriented programming, and backend system design.
            <br /><br />
            I currently work as an Associate Software Engineer at Accenture, where I handle
            enterprise backend logic, data workflows, and platform automation on the
            Salesforce platform. My work involves Apex development, debugging backend
            business logic, managing data integrity, and building workflows using
            Agentforce — Salesforce’s AI agent layer.
            <br /><br />
            Alongside my enterprise work, my core technical focus is backend engineering
            using Java and Spring Boot. I build RESTful APIs, design service-layer logic,
            handle SQL-based data persistence, and focus on clean, maintainable backend
            architecture.
            <br /><br />
            Through internships and independent projects, I’ve designed backend-driven
            applications, optimized API performance, and worked with production-like
            data. I value clean architecture, system reliability, and understanding how
            backend systems behave at scale.
          </p>
        </motion.div>

        <h3 className="text-2xl font-semibold text-center text-accent-1 mb-8 font-mono">Education</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-primary-bg p-6 rounded-lg shadow-xl hover:shadow-accent-1/20 transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-3">
                {edu.institution.toLowerCase().includes("institute") || edu.institution.toLowerCase().includes("university") ?
                  <FaUniversity className="text-accent-1 mr-3 text-2xl" /> :
                  <FaSchool className="text-accent-1 mr-3 text-2xl" />
                }
                <h4 className="text-xl font-semibold text-text-primary">{edu.institution}</h4>
              </div>
              <p className="text-text-secondary font-medium">{edu.degree}</p>
              <p className="text-sm text-text-secondary font-mono">{edu.duration}</p>
              <p className="text-sm text-accent-1 font-mono mt-1">{edu.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
