import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p>&copy; {currentYear} Vinayak Jat. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 