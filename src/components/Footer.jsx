import React from 'react';
import AuroraUpsideDown from './AuroraUpsideDown'; // Use the upside-down Aurora
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-primary-bg relative overflow-hidden">
      {/* Aurora Upside Down Background */}
      <AuroraUpsideDown
        colorStops={['#3A29FF', '#FF94B4', '#FF3232']}
        amplitude={1.2}
        blend={0.6}
        speed={0.5}
      />
    </footer>
  );
};

export default Footer;
