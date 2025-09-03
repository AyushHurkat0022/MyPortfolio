import React from 'react';
import CurvedLoop from './CurvedLoop';
import './Footer.css';

const Footer = () => {
  const positiveQuotes = [
   "Code Today, Conquer Tomorrow ✦",
  "Keep Pushing, Keep Building ✦",
  "Dream, Code, Repeat ✦",
  "Success is a Series of Small Wins ✦",
  "Think, Plan, Execute ✦",
  "Errors are Lessons ✦",
  "Commit to Learn ✦",
  "Hustle in Silence, Code Loud ✦",
  "Innovate, Iterate, Improve ✦",
  "Infinite Loops, Infinite Possibilities ✦",
  "Debugging is Growth ✦",
  "Push Your Limits ✦",
  "Write Code That Matters ✦",
  "Challenge Yourself Every Day ✦",
  "Stay Hungry, Stay Curious ✦"
  ];

  // Join all quotes into a single string for the marquee
  const marqueeText = positiveQuotes.join(' ');

  return (
    <footer className="footer">
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="red" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
      <CurvedLoop
        marqueeText={marqueeText}
        speed={2}
        curveAmount={200}       // Smaller curve for footer
        direction="left"
        interactive={true}
        className="footer-curved-text"
      />
    </footer>
  );
};

export default Footer;
