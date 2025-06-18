import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'; // Import social icons

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p>&copy; {currentYear} Vinayak Jat. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/vinayak._jat/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/vinayak-jat-b0b865291/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaLinkedin /></a>
          <a href="https://twitter.com/@vinayak_jat7413" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 