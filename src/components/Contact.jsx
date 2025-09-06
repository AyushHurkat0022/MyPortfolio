import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import { personalInfo, socialLinks } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';
import AuroraUpsideDown from './AuroraUpsideDown'; 

const contactItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  }),
};

// Replace with your own values
const BIN_URL = "https://api.jsonbin.io/v3/b/YOUR_BIN_ID";
const API_KEY = "YOUR_API_KEY";

const Contact = () => {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  // Get visitor IP
  const getVisitorIP = async () => {
    try {
      const response = await fetch("https://api.ipify.org?format=json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error("Error fetching IP:", error);
      return null;
    }
  };

  // Fetch bin data
  const fetchBinData = async () => {
    const response = await fetch(BIN_URL, { headers: { "X-Master-Key": API_KEY } });
    const result = await response.json();
    return result.record;
  };

  // Update bin data
  const updateBinData = async (data) => {
    await fetch(BIN_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": API_KEY
      },
      body: JSON.stringify(data)
    });
  };

  useEffect(() => {
    const initCounter = async () => {
      const visitorIP = await getVisitorIP();
      if (!visitorIP) {
        setDisabled(true);
        return;
      }

      const binData = await fetchBinData();
      setCount(binData.totalClicks);

      if (binData.clickedIPs.includes(visitorIP)) {
        setDisabled(true);
      } else {
        // Handle click
        const btn = document.querySelector(".eye-button");
        btn.addEventListener("click", async () => {
          if (!disabled) {
            binData.totalClicks += 1;
            binData.clickedIPs.push(visitorIP);
            await updateBinData(binData);
            setCount(binData.totalClicks);
            setDisabled(true);
          }
        });
      }
    };

    initCounter();
  }, [disabled]);

  return (
    <section id="contact" className="relative py-20 bg-primary-bg overflow-hidden">
      {/* Aurora Background */}
      <AuroraUpsideDown
        colorStops={['#3A29FF', '#FF94B4', '#FF3232']}
        amplitude={1.0}  // Adjust for subtle effect
        blend={0.5}
        speed={0.5}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle id="contact-title">Get In Touch</SectionTitle>
        <motion.div 
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-text-secondary mb-8 leading-relaxed">
            I'm currently open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-block px-10 py-4 font-mono text-lg bg-accent-1 text-primary-bg rounded-md hover:bg-opacity-80 transition-all duration-300 shadow-lg hover:shadow-accent-1/30"
          >
            Say Hello
          </a>

          {/* Visitor Counter */}
          <div className="mt-10 flex justify-center">
            <button
              className={`eye-button flex items-center gap-2 px-4 py-2 rounded-full border ${
                disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-accent-1/20"
              }`}
              disabled={disabled}
              aria-label="View counter"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" className="eye-icon">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 
                  0-5-2.24-5-5s2.24-5 5-5 5 
                  2.24 5 5-2.24 5-5 
                  5zm0-8c-1.66 0-3 
                  1.34-3 3s1.34 3 3 
                  3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              <span className="view-count font-bold">{count}</span>
            </button>
          </div>

          <div className="mt-12 flex justify-center space-x-6">
            {Object.entries(socialLinks).map(([key, link], index) => (
              <motion.a
                key={key}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent-1 transition-colors"
                aria-label={key}
                variants={contactItemVariants}
                initial="hidden"
                whileInView="visible"
                custom={index + 2}
                viewport={{ once: true }}
              >
                {React.cloneElement(link.icon, { size: 32 })}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
